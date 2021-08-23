<?php

use Agenciafmd\Frontend\Http\Controllers\FrontendController;
use Agenciafmd\Frontend\Http\Controllers\HtmlController;
use Illuminate\Support\Facades\Storage;

Route::get('html/{any?}', [HtmlController::class, 'index'])
    ->name('frontend.html');
Route::get('/', [FrontendController::class, 'index'])
    ->name('frontend.index');
Route::view('/offline', 'agenciafmd/frontend::pages.offline')
    ->name('frontend.offline');
