<?php

namespace App\Http\Controllers\Frontend;


class GamesController extends FrontendController
{
    public function snake()
    {
        return view('games.snake');
    }

}