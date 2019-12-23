<?php

Route::get('html/{any?}', 'HtmlController@index')
    ->name('frontend.html');
//Route::get('{any?}', 'FrontendController@index')->name('frontend.index');
Route::get('/manifest.json', 'PwaController@manifest')
    ->name('frontend.pwa.manifest');
Route::get('/sw.js', 'PwaController@sw')
    ->name('frontend.pwa.sw');
Route::get('/offline', 'FrontendController@offline')
    ->name('frontend.offline');
Route::get('/', 'FrontendController@index')
    ->name('frontend.index');
