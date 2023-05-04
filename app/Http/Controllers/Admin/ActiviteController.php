<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Activite;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class ActiviteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $activites = \App\Models\Activite::orderBy('created_at', 'desc')->get();

        $activites = $activites->map(function ($record) {
            return [
                'id' => $record->id,
                'title' => $record->title,
                'body' => $record->body,
                'created_at' => $record->created_at->setTimezone(config('app.timezone'))->format('Y-m-d H:i:s'),
                'updated_at' => $record->updated_at->setTimezone(config('app.timezone'))->format('Y-m-d H:i:s'),
            ];
        });
        return Inertia::render('Admin/Activites/Index', ['admin' => auth('admin')->user(), 'activites' => $activites]);
    }
   


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/Activites/Create', ['admin' => auth('admin')->user()]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request->file('image'));
        // $file = $request->file('file');
        // dd($file);

        // $filename = $file->getClientOriginalName();
        // $file->storeAs('uploads', $filename);

        // return response()->json([
        //     'success' => true,
        //     'url' => asset('uploads/' . $filename),
        // ]);
        // $path = Storage::putFileAs('uploads', $file, $filename);

        // return response()->json(['path' => $path]);
        // --------------------
        $validated = $request->validate([
            'title' => 'required',
            'body' => 'required',
        ]);
        // dd($validated['body']);

        Activite::create([
            'title' => $validated['title'],
            'body' => $validated['body'],
        ]);
        return redirect()->route('admin.activites');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $activite = Activite::find($id);
        return Inertia::render('Admin/Activites/Edit', ['admin' => auth('admin')->user(), 'icontent' => $activite]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // dd($request);
        $validated = $request->validate([
            'title' => 'required',
            'body' => 'required',
        ]);
        // dd($validated);
        $activite = Activite::find($id);

        $activite->title = $request->title;
        $activite->body = $request->body;

        $activite->save();
        return redirect()->route('admin.activites');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $activite = Activite::find($id);
        $activite->delete();
        return redirect()->route('admin.activites');
    }
}
