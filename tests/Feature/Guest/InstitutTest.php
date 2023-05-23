<?php

namespace Tests\Feature\Guest;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class InstitutTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_institut_screen_can_be_rendered()
    {
        $response = $this->get('/institut');

        $response->assertStatus(200);
    }
}
