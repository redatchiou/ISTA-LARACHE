<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Admin;
use Illuminate\Validation\Rule;

class AdminController extends Controller
{
    /**
     * Display the admin's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Admin/Edit', [
            'mustVerifyEmail' => $request->user('admin') instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the admin's profile information.
     */
    public function update(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'fname' => ['string', 'max:255'],
            'lname' => ['string', 'max:255'],
            'email' => ['email', 'max:255', Rule::unique(Admin::class)->ignore($request->user('admin')->id)],
        ]);
        $request->user('admin')->fill($validated);
        // if ($request->user('admin')->isDirty('email')) {
        //     $request->user('admin')->email_verified_at = null;
        // }

        $request->user('admin')->save();

        return Redirect::route('admin.edit');
    }

    /**
     * Delete the admin's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current-password'],
        ]);

        $user = $request->user('admin');

        // Auth::logout();
        Auth::guard('admin')->logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
