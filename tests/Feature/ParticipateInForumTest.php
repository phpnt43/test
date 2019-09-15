<?php

namespace Tests\Feature;

use App\Reply;
use App\Thread;
use App\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ParticipateInForumTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * @test
     */
    public function testAnAuthenticatedUserMayParticipateInForumThreads()
    {
//        $this->be($user = factory(User::class)->create());

        /** @var Thread $thread */
        $thread = factory(Thread::class)->create();

        /** @var Reply $reply */
        $reply = factory(Reply::class)->create();
        $this->post($thread->path() . '/replies', $reply->toArray());

//        $this->get($thread->path())
//            ->assertSee($reply->body);
    }
}
