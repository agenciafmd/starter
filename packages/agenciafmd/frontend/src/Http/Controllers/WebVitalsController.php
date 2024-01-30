<?php

namespace Agenciafmd\Frontend\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\File;

class WebVitalsController extends Controller
{
    public function index(string $page = ''): Factory|View|Application
    {
        $result = [];
        $pages = [];
        $filePath = resource_path('web-vitals/web-vitals.json');
        if (File::exists($filePath)) {
            $jsonContent = File::get($filePath);
            $dataArray = json_decode($jsonContent, true);
            foreach ($dataArray as $data) {
                $pages[] = $data['pageName'];
                $pageName = $data['pageName'];
                $dataCategories = $data['categories'];
                $categories = [];
                foreach ($dataCategories as $key => $value) {
                    if ($key !== 'pwa') {
                        $categories[] = [
                            'label' => $value['label'],
                            'score' => $value['score'],
                            'status' => $value['status'],
                        ];
                    }
                }

                $result[] = [
                    'pageName' => $pageName,
                    'categories' => $categories,
                ];
            }
        }

        if($page) {
            $result = collect($result)->filter(function ($item) use ($page) {
                return $item['pageName'] === $page;
            })->first();
        }

        $view['webvitals'] = $result;
        $view['pages'] = $pages;

        return view('agenciafmd/frontend::pages.web-vitals', $view);
    }
}
