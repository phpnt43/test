<?php


/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\User;
use App\Reply;
use App\Thread;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

$factory->define(Thread::class, function (Faker $faker) {
    return [
        'user_id' => function () {
            return factory(User::class)->create()->id;
        },
        'title'   => $faker->sentence,
        'body'    => $faker->paragraph,
    ];
});

$factory->define(Reply::class, function (Faker $faker) {
    return [
        'user_id'   => function () {
            return factory(User::class)->create()->id;
        },
        'thread_id' => function () {
            return factory(Thread::class)->create()->id;
        },
        'body'      => $faker->paragraph,
    ];
});

