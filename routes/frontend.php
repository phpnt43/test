<?php

Route::namespace('Frontend')->group(function () {
    Route::get('games/snake', 'GamesController@snake')->name('games.snake');
});