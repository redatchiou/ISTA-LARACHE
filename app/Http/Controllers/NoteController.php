<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    public function index()
    {
        return Inertia::render('Profile/Notes');
    }
}
