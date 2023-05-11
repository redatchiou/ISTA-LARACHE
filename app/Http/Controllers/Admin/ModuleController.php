<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Module;
use App\Models\Filiere;
use Illuminate\Http\Request;
use Inertia\Inertia;


class ModuleController extends Controller
{
    public function index()
    {
    
        $modules = Module::all();
            // dd($modules);
        $filieres = Filiere::all();
        return Inertia::render('Admin/Modules', ['filieres' => $filieres, 'modules' => $modules]);
    }
    public function store(Request $request)
    {
        $request->validate([
            'code' => 'required|unique:modules',
            'name' => 'required',
            'description' => 'required',
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
    public function destroy($id)
    {
        $request =Module::find($id);
        $request->delete();
        return redirect()->route('admin.modules');

    }


}
