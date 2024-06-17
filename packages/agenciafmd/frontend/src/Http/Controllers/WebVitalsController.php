<?php

namespace Agenciafmd\Frontend\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\File;

class WebVitalsController extends Controller
{
    public function index(string $environment): Factory|View|Application
    {
        $result = [];
        $pages = [];
        $filePath = resource_path('web-vitals/web-vitals-' . $environment . '.json');
        if (File::exists($filePath)) {
            $jsonContent = File::get($filePath);
            $dataArray = json_decode($jsonContent, true);
            foreach ($dataArray as $data) {
                $pages[] = $data['pageName'];
                $pageName = $data['pageName'];
                $dataCategories = $data['categories'];
                $categories = [];

                foreach ($dataCategories as $key => $value) {
                    if ($key === 'pwa') {
                        $pwa = $value['status'];
                        continue;
                    }
                    $categories[] = [
                        'label' => $value['label'],
                        'score' => $value['score'],
                        'status' => $value['status'],
                    ];
                }

                $result[] = [
                    'pageName' => $pageName,
                    'pwa' => $pwa ?? null,
                    'categories' => $categories,
                ];
            }
        }

        if (request()->page) {
            $result = collect($result)->filter(function ($item) {
                return $item['pageName'] === request()->page;
            });
        }

        $view['environment'] = $environment;
        $view['webvitals'] = $result;
        $view['pages'] = $pages;

        return view('agenciafmd/frontend::pages.web-vitals', $view);
    }
}
