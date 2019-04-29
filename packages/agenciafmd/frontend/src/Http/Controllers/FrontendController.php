<?php

namespace Agenciafmd\Frontend\Http\Controllers;

use App\Http\Controllers\Controller;

class FrontendController extends Controller
{
    public function index()
    {
        $view = [];

        return view('agenciafmd/frontend::pages.index', $view);
    }

    public function offline()
    {
        return view('agenciafmd/frontend::pages.offline');
    }
}
