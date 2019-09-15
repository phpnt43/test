<?php

Route::middleware('auth')->prefix('backend')->namespace('Backend')->group(function () {
    Route::resource('categories', 'CategoryController')->only([ 'update', 'store', 'index', 'destroy' ]);
    Route::resource('products', 'ProductController')->only([ 'update', 'store', 'index', 'destroy' ]);

    Route::post('products/categories/{query}', 'ProductController@categories')->name('products.categories');
});