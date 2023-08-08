<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        $groups = \App\Models\Group::join('filieres', 'groups.filiere_id', '=', 'filieres.id')
            ->select('groups.code', 'filieres.name')
            ->get();
        $filieres = \App\Models\Filiere::all();
        return Inertia::render('Auth/Register', ['filieres' => $filieres, 'groups' => $groups]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'fname' => 'required|string|max:255',
            'lname' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|ends_with:ofppt-edu.ma|unique:' . User::class,
            'tel' => "required",
            'nf' => "required",
            'filiere' => "required",
            'group' => "required",
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'fname' => $request->fname,
            'lname' => $request->lname,
            'email' => $request->email,
            'tel' => $request->tel,
            'nf' => $request->nf,
            'filiere' => $request->filiere,
            'group' => $request->group,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}
