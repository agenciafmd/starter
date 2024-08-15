<?php

namespace Agenciafmd\Frontend\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;

class HtmlController extends Controller
{
    public function index(string $file = 'index'): View|RedirectResponse
    {
        if (app()->environment(['production'])) {
            return redirect('/', 301);
        }

        $path = base_path('packages/agenciafmd/frontend/resources/views/html/');
        if (!file_exists($path . $file . '.blade.php')) {
            $file = 'index';
        }

        return view('frontend::html.' . $file);
    }
}
