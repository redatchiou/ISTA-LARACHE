<?php

namespace Tests\Feature\Guest;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class EmploiTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_emplois_screen_can_be_rendered()
    {
        $response = $this->get('/emplois');

        $response->assertStatus(200);
    }
}
