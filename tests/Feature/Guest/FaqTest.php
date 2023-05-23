<?php

namespace Tests\Feature\Guest;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class FaqTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_faq_screen_can_be_rendered()
    {
        $response = $this->get('/faq');

        $response->assertStatus(200);
    }
}
