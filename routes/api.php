<?php

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// http://localhost:8000/api/test

Route::get('/test', function () {
    $data = array(
        'name' => 'John',
        'age' => 30,
        'city' => 'New York'
    );
    return response()->json(auth('sanctum'));
    return \App\Models\Filiere::all('name', 'nf');
    return \App\Models\Filiere::distinct()->pluck('name', 'nf');
    return \App\Models\Filiere::distinct()->pluck('name')->where('nf', 'T');
    // return response()->json($data);
});

Route::post('/upload', function (Request $request) {
    $imageName = $request->file('imagy');
    $imageName = "image_de_test." . $request->file('imagy')->extension();
    Storage::disk('public')->put(
        $imageName,
        file_get_contents($request->file('imagy')->getRealPath())
    );
    // return $request;
});
Route::get('/upload', function () {
    return Inertia::render('_.test', ['image' => asset('storage/image_de_test.png')]);
});

Route::post('/download', function (Request $request) {
    $file = $request->payload;
    // $file = Storage::disk('public')->size($request->payload);
    $path = Storage::path($file);
    return Storage::download($file);
});
