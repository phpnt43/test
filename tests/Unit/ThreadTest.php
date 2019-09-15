<?php

namespace Tests\Unit;

use App\Thread;
use App\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ThreadTest extends TestCase
{
    use DatabaseMigrations;

    protected $thread;

    public function setUp(): void
    {
        parent::setUp();

        $this->thread = factory(Thread::class)->create();

    }

    /**
     * @test
     */
    public function testThreadHasReplies(): void
    {
        $this->instance(Collection::class, $this->thread->replies);
    }

    /**
     * @test
     */
    public function testThreadHasCreator(): void
    {
        $this->instance(User::class, $this->thread->creator);
    }

    public function testAThreadCanAddAReply()
    {
        $this->thread->addReply([
            'body'    => 'test',
            'user_id' => 1
        ]);
    }
}
