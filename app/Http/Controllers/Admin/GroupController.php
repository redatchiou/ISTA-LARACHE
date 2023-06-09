<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Group;
use App\Models\Emploi;
use App\Models\Filiere;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class GroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $groups = Group::join('filieres', 'groups.filiere_id', '=', 'filieres.id')
            ->select('groups.code', 'filieres.name')
            ->get();
        $filieres = Filiere::all();
        // return $groups;
        return Inertia::render('Admin/Groups', ['filieres' => $filieres, 'groups' => $groups]);
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
        //dd($request);
        $valideted = $request->validate([
            'code' => 'required|unique:groups',
            'filiere_id' => 'required',
        ]);
        // dd($valideted);
        $group = Group::create($valideted);
        // dd($group->code);
        $daysOfWeek = [
            'Lundi',
            'Mardi',
            'Mercredi',
            'Jeudi',
            'Vendredi',
            'Samedi',
        ];

        for ($j = 0; $j < 6; $j++) {
            for ($k = 1; $k < 5; $k++) {
                Emploi::create(['group' => $group->code, 'day_of_week' => $daysOfWeek[$j], 'subject' => '', 'trainer' => '', 'salle' => '', 'quarter' => 's' . $k]);
            }
        }
        return redirect()->route('admin.groups');
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
    public function destroy($code)
    {
        Group::where('code', $code)->limit(1)->delete();
    }
}
