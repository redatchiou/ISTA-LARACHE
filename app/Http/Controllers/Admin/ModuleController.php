<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Module;
use App\Models\Filiere;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ModuleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $modules = Module::all();
        // dd($modules);
        $filieres = Filiere::all();
        return Inertia::render('Admin/Modules', ['filieres' => $filieres, 'modules' => $modules]);
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
        $request->validate([
            'code' => 'required|unique:modules|max:10',
            'name' => 'required|max:100',
            'description' => 'required|max:200',
            'filiere_id' => 'required',

        ]);
        Module::create([
            'name' => $request->name,
            'description' => $request->description,
            'code' => $request->code,
            'filiere_id' =>  $request->filiere_id,
        ]);
        return redirect()->route('admin.modules');
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $request = Module::find($id);
        $request->delete();
        return redirect()->route('admin.modules');
    }
}
