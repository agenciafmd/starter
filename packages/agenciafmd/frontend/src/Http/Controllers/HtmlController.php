<?php

namespace Agenciafmd\Frontend\Http\Controllers;

use App\Http\Controllers\Controller;

class HtmlController extends Controller
{
    public function index($file = 'index')
    {
        $path = base_path('packages/agenciafmd/frontend/src/resources/views/html/');
        if (!file_exists($path . $file . '.blade.php')) {
            $file = 'index';
        }

        return  view('agenciafmd/frontend::html.' . $file);
    }
}
