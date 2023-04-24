<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\demande;


class DemandeController extends Controller
{
    public function create(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'groupe' => 'required|string|max:255',
            'message' => 'required|string|max:1000',
        ]);
        $demande = demande::create([
            'name' => $request->name,
            'groupe' => $request->groupe,
            'message' => $request->message,

        ]);
        return redirect()->route('Profil.demande');
    }

    public function index()
    {
        $demande = demande::orderBy('created_at', 'desc')->get();
        // $demande = $demande->created_at->format('Y-m-d H:i:s');
        return Inertia::render('Admin/Demands', ['demande' => $demande]);

    }
}
