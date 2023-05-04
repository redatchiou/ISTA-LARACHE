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
        $user=auth()->user()->id;

        $request->validate([
            'name' => 'required|string|max:255',
            'groupe' => 'required|string|max:255',
            'message' => 'required|string|max:1000',
        ]);
        $demande = demande::create([
            'name' => $request->name,
            'groupe' => $request->groupe,
            'message' => $request->message,
            'user_id' =>  $user,

        ]);
        return redirect()->route('Profil.demande');
    }

    public function index()
    {
        $demande = demande::orderBy('created_at', 'desc')->get();
        // $demande = $demande->created_at->format('Y-m-d H:i:s');
        return Inertia::render('Admin/Demands', ['demande' => $demande,'admin' => auth('admin')->user()]);

    }
    //  ybano les demande dyal kol wahd
    public function show()
    {
        $user = auth()->user()->id;
        $demande = demande::orderBy('created_at', 'desc')->where('user_id',$user)->get();
        return Inertia::render('Profile/demande', ['demande' => $demande , 'user'=>auth()->user()]);

    }

     public function destroy( $id)
    {
        $demande = demande::find($id);
        $demande->delete();
        return redirect()->route('admin.demands');
    }
}
