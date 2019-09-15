<?php

namespace Tests\Feature;

use App\Reply;
use App\Thread;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class ReadThreadsTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * setUp
     */
    public function setUp(): void
    {
        parent::setUp();

        $this->thread = factory(Thread::class)->create();
        $this->reply = factory(Reply::class)->create([
            'thread_id' => $this->thread->id
        ]);
    }

    /**
     * @test
     */
    public function testThreadsListTest(): void
    {
        $this->get('/threads')
            ->assertSee($this->thread->title);
    }

    /**
     * @test
     */
    public function testThreadsShowTest(): void
    {
        $this->get($this->thread->path())
            ->assertSee($this->thread->title);
    }

    /**
     * @test
     */
    public function testThreadsShowReplyTest(): void
    {
        $this->get($this->thread->path())
            ->assertSee($this->reply->body);

    }
}