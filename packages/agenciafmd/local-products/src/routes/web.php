<?php

/*
|--------------------------------------------------------------------------
| ADMIX Routes
|--------------------------------------------------------------------------
*/

Route::prefix(config('admix.url') . '/products')
    ->name('admix.products.')
    ->middleware(['auth:admix-web'])
    ->group(function () {
        Route::get('', 'ProductController@index')
            ->name('index')
            ->middleware('can:view,\Agenciafmd\Products\Product');
        Route::get('trash', 'ProductController@index')
            ->name('trash')
            ->middleware('can:restore,\Agenciafmd\Products\Product');
        Route::get('create', 'ProductController@create')
            ->name('create')
            ->middleware('can:create,\Agenciafmd\Products\Product');
        Route::post('', 'ProductController@store')
            ->name('store')
            ->middleware('can:create,\Agenciafmd\Products\Product');
        Route::get('{product}', 'ProductController@show')
            ->name('show')
            ->middleware('can:view,\Agenciafmd\Products\Product');
        Route::get('{product}/edit', 'ProductController@edit')
            ->name('edit')
            ->middleware('can:update,\Agenciafmd\Products\Product');
        Route::put('{product}', 'ProductController@update')
            ->name('update')
            ->middleware('can:update,\Agenciafmd\Products\Product');
        Route::delete('destroy/{product}', 'ProductController@destroy')
            ->name('destroy')
            ->middleware('can:delete,\Agenciafmd\Products\Product');
        Route::post('{id}/restore', 'ProductController@restore')
            ->name('restore')
            ->middleware('can:restore,\Agenciafmd\Products\Product');
        Route::post('batchDestroy', 'ProductController@batchDestroy')
            ->name('batchDestroy')
            ->middleware('can:delete,\Agenciafmd\Products\Product');
        Route::post('batchRestore', 'ProductController@batchRestore')
            ->name('batchRestore')
            ->middleware('can:restore,\Agenciafmd\Products\Product');
    });
