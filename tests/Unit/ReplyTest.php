<?php

namespace Tests\Unit;

use App\Reply;
use App\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ReplyTest extends TestCase
{

    use DatabaseMigrations;

    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function testItHasAnOwner(): void
    {
        $reply = factory(Reply::class)->create();

        $this->instance(User::class, $reply->owner);
    }
}
