<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use \App\Models\Filiere;
use Illuminate\Validation\Rule;


class FiliereController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Admin/Filieres', ['filieres' => Filiere::all()]);
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
        if ($request->parent) {
            $filiere = Filiere::find($request->parent);
            $request->validate([
                'name' => 'required|max:225',
                'code' => 'required|max:10|unique:filieres',
                'description' => 'required|max:6000'
            ]);
            Filiere::create([
                'nf' => $filiere->nf,
                'parent' => $filiere->name,
                'name' => $request->name,
                'code' => $request->code,
                'description' => $request->description
            ]);
            // dd($filiere);
        } else {
            $valideted = $request->validate([
                'name' => 'required|max:225',
                'code' => 'required|max:10|unique:filieres',
                'nf' => 'required|max:225',
                'parent' => "nullable",
                'description' => 'required|max:6000'
            ]);
            Filiere::create($valideted);
        }

        return redirect()->route('admin.filieres');
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
        if ($request->parent) {
            dd($request);
            $filiere = Filiere::find($id);
            $request->validate([
                'name' => 'required|max:225',
                'code' => 'required|max:10|' . Rule::unique(Filiere::class)->ignore($id),
                'description' => 'required|max:6000'
            ]);
            $filiere->nf = $request->nf;
            $filiere->parent = $request->parent;
            $filiere->name = $request->name;
            $filiere->code = $request->code;
            $filiere->description = $request->description;
            $filiere->save();
        } else {
            $filiere = Filiere::find($id);
            $request->validate([
                'name' => 'required|max:225',
                'code' => 'required|max:10|' . Rule::unique(Filiere::class)->ignore($id),
                'nf' => 'required|max:225',
                'parent' => "nullable",
                'description' => 'required|max:6000'
            ]);
            $filiere->nf = $request->nf;
            $filiere->parent = $request->parent;
            $filiere->name = $request->name;
            $filiere->code = $request->code;
            $filiere->description = $request->description;
            $filiere->save();
        }

        return redirect()->route('admin.filieres');
        // dd($request);
        // $filiere = Filiere::find($id);
        // dd($filiere);
        // dd($request);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $filiere = Filiere::find($id);

        $filiere->delete();

        $subFilieres = Filiere::where('parent', $filiere->name)->where('nf', $filiere->nf)->get();
        // dd($subFilieres);
        foreach ($subFilieres as $oneFiliere) {
            $oneFiliere->delete();
        }
        return redirect()->route('admin.filieres');
    }
}
