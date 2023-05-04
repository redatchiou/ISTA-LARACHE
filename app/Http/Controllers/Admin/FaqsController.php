<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Faq;

class FaqsController extends Controller
{

    public function create(Request $request)
    {
        $request->validate([
            'question' => 'required|string|max:1000',
            'response' => 'required|string|max:1000',
        ]);

        $faq = Faq::create([
            'question' => $request->question,
            'response' => $request->response,


        ]);
        // dd($faq);
        return redirect()->route('admin.faqs');
    }





}
