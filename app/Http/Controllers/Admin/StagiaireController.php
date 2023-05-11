<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class StagiaireController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($group = "")
    {
        // dd($group);
        $stagiaires = User::orderBy('created_at', 'desc')->paginate(7);
        if ($group) {
            $stagiaires = User::where('group', $group)->paginate(5);
        };
        return Inertia::render('Admin/Stagiaire/Index', [
            'admin' => auth('admin')->user(),
            'stagiaires' => $stagiaires,
            'allowed_nf' => \App\Models\Filiere::distinct()->pluck('nf'),
            'allowed_filiere' => \App\Models\Filiere::all('name', 'nf'),
            'allowed_group' => ['101', '102', '201', '202'],
        ]);
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
            'fname' => 'required|string|max:255',
            'lname' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:' . User::class,
            'tel' => "required",
            'nf' => "required",
            'filiere' => "required",
            'group' => "required",
        ]);
        // dd($request);
        $user = User::create([
            'fname' => $request->fname,
            'lname' => $request->lname,
            'email' => $request->email,
            'tel' => $request->tel,
            'nf' => $request->nf,
            'filiere' => $request->filiere,
            'group' => $request->group,
            'password' => Hash::make('password'),
        ]);
        return redirect()->route('stagiaire.index');
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
        dd('5');
        return Inertia::render('Admin/Stagiaire/Edit', ['stagiaire' => User::find($id)]);
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
        // $allowe_nf = ['Spe', 'Qualif', 'T', 'TS'];
        // $allowed_nf = \App\Models\Filiere::distinct()->pluck('nf');
        // $allowed_filiere = ['DD', 'TDI', 'TGE', 'TDI'];
        // $allowed_group = ['101', '102', '201', '202'];
        // dd($request);
        $validatedData = $request->validate([
            'fname' => ['required', 'max:255'],
            'lname' => ['required', 'max:255'],
            'tel' => ['required'],
            'email' => ['email', 'max:255', Rule::unique(User::class)->ignore($id)],
            'nf' => ['required'],
            'filiere' => ['required'],
            'group' => ['required'],
        ]);

        // dd($validatedData);
        // dd($id);
        $user = User::find($id);
        $user->fill($validatedData);
        $user->save();
        return redirect()->route('stagiaire.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        // dd(auth('admin')->user()->password);
        $request->validate([
            'password' => ['required'],
        ]);
        if (!Hash::check($request->password, auth('admin')->user()->password)) {
            return redirect()->back()->withErrors(['password' => 'Incorrect mode de pass']);
        };
        $user = User::find($id);
        $user->delete();
        return redirect()->route('stagiaire.index');
    }
}
