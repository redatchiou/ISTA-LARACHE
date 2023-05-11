<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Request as ModelsRequest;
use App\Models\User;


class RequestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $requests =User::select('users.fname', 'users.lname', 'users.email', 'users.group', 'requests.message','requests.created_at','requests.updated_at','requests.id')
        ->join('requests', 'users.id', '=', 'requests.user_id')
        ->get();
        return Inertia::render('Admin/Request', ['requests' => $requests]);

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

        $id = auth()->user()->id;
        $request->validate([
            'message' => 'required|string|max:1000',
        ]);
        ModelsRequest::create([

            'message' => $request->message,
            'user_id' =>  $id,

        ]);
        return redirect()->route('requests');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $user = auth()->user()->id;
        $requests = ModelsRequest::orderBy('created_at', 'desc')->where('user_id', $user)->get();
        return Inertia::render('Profile/Request', ['requests' => $requests, 'user' => auth()->user()]);
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
        // $request = ModelsRequest::find($id);
        // $request->delete();
        // return redirect()->route('requests');
    }
    public function deleteuser($id)
    {
        $request = ModelsRequest::find($id);
        $request->delete();
        return redirect()->route('requests');
    }
    public function deleteadmin($id)
    {
        $request = ModelsRequest::find($id);
        $request->delete();
    }
}
