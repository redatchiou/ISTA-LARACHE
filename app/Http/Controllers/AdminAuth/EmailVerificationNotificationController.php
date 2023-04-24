<?php

namespace App\Http\Controllers\AdminAuth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class EmailVerificationNotificationController extends Controller
{
    /**
     * Send a new email verification notification.
     */
    public function store(Request $request): RedirectResponse
    {
        if ($request->user('admin')->hasVerifiedEmail()) {
            return redirect('admin')->intended(RouteServiceProvider::HOME);
        }

        $request->user('admin')->sendEmailVerificationNotification();

        return back()->with('status', 'verification-link-sent');
    }
}
