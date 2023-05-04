<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EmploiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(string $group = "Groupe3")
    {
        if (empty($group)) {
            $emploi = '';
        }
        $groups = \App\Models\Emploi::distinct()->pluck('group');
        $emploi = \App\Models\Emploi::where('group', $group)->get();
        return Inertia::render('Admin/Emplois', ['emploi' => $emploi, 'groups' => $groups, 'admin' => auth('admin')->user()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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
        //
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
        $validated = $request->validate([
            'subject' => 'required',
            'trainer' => 'required',
            'salle' => 'required',
        ]);

        $emploi = \App\Models\Emploi::find($id);
        $emploi->subject = $validated['subject'];
        $emploi->trainer = $validated['trainer'];
        $emploi->salle = $validated['salle'];
        $emploi->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $emploi = \App\Models\Emploi::find($id);
        $emploi->subject = "";
        $emploi->trainer = "";
        $emploi->salle = "";
        $emploi->save();
    }
}
