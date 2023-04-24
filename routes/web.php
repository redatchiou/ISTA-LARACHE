<?php

use App\Models\User;
use Inertia\Inertia;
use App\Models\Module;
use App\Models\Filiere;
use Illuminate\Http\Request;
use App\Http\Middleware\Stagiaire;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\AdminController;
use App\Http\Middleware\AuthenticateAdmin;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Admin\ActiviteController;
use App\Http\Controllers\Admin\StagiaireController;
use App\Http\Controllers\AdminAuth\PasswordController;
use App\Http\Controllers\DemandeController;
use App\Models\demande;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register')
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/Note', function () {
        return Inertia::render('Profile/Notes');
    })->name('Profil.note');
    Route::get('/Demande', function () {
        return Inertia::render('Profile/demande');
    })->name('Profil.demande');
    Route::post('/Demande', [DemandeController::class, 'create'])->name('profile.demande.create');
    // Route::post('/Demande', [DemandeController::class, 'index']);


});

/*
 *
    Admin
*
*/


Route::get('admin/dashboard', function () {
    return Inertia::render('Admin/Dashboard', ['test' => auth('admin')->user()]);
})->middleware('auth:admin')->name('admin.dashboard');



Route::middleware('auth:admin')->group(function () {
    Route::get('/admin', [AdminController::class, 'edit'])->name('admin.edit');
    Route::patch('/admin', [AdminController::class, 'update'])->name('admin.update');
    Route::delete('/admin', [AdminController::class, 'destroy'])->name('admin.destroy');
});

require __DIR__ . '/auth.php';
require __DIR__ . '/auth_admin.php';

/*
 *
    Admin Pages
*
*/


Route::middleware('auth:admin')->group(function () {
    Route::get('admin/stagiaires/{group?}', [StagiaireController::class, 'index'])->name('stagiaire.index');
    Route::get('admin/stagiaires/{id}', [StagiaireController::class, 'edit'])->name('stagiaire.edit');
    Route::patch('admin/stagiaires/{id}', [StagiaireController::class, 'update'])->name('stagiaire.update');
    Route::delete('admin/stagiaires/{id}', [StagiaireController::class, 'destroy'])->name('stagiaire.destroy');
    Route::post('admin/stagiaires/', [StagiaireController::class, 'store'])->name('stagiaire.store');
});





Route::middleware('auth:admin')->group(function () {
    Route::get('admin/activites/', [ActiviteController::class, 'index'])->name('admin.activites');
    Route::get('admin/activites/create', [ActiviteController::class, 'create'])->name('admin.activites.create');
    Route::post('admin/activites/create', [ActiviteController::class, 'store'])->name('admin.activites.store');
    Route::get('/admin/Demands', [DemandeController::class, 'index'])->name('admin.demands');
});

Route::get('/filieres/{name?}', function (string $name = "") {
    $home = "Selectioner";
    $modules = "";
    $info = "";
    if (!empty($name)) {
        $id = Filiere::where('name', $name)->first('id')->id;
        $modules = Filiere::find($id)->modules;
        $info = Filiere::find($id)->description;
    }
    return Inertia::render(
        'Guest/Filieres',
        ['filieres' => Filiere::all(), 'modules' => $modules, 'info' => $info, 'home' => $home]
    );
})->name('filieres');




Route::get('/faq', function () {
    $key = (isset($_GET['query']) && $_GET['query']) ?  $_GET['query'] : '';
    // dd($key);
    $filtered = '';
    if ($key) {
        $filtered = \App\Models\Faq::where('question', 'LIKE', '% ' . $_GET['query'] . ' %')->get();
    }
    $faqs = \App\Models\Faq::all();
    return Inertia::render('Guest/Faq', ['faqs' => $faqs, 'filtered' => $filtered, 'keyword' => $key]);
})->name('faq');



Route::get('/contact', function () {
    return Inertia::render('Guest/Contact');
})->name('contact');

Route::get('/institut', function () {
    return Inertia::render('Guest/Institut');
})->name('institut');

Route::get('/emplois/{group?}', function (string $group = "") {
    if (empty($group)) {

        return Inertia::render('Guest/Emplois');
    }
    return  ['data' => $group];
})->name('emplois');


Route::get('/activites', function () {
    $activites = \App\Models\Activite::all();
    $activites = $activites->map(function ($record) {
        return [
            'id' => $record->id,
            'title' => $record->title,
            'body' => $record->body,
            'created_at' => $record->created_at->setTimezone(config('app.timezone'))->format('Y-m-d H:i:s'),
            'updated_at' => $record->updated_at->setTimezone(config('app.timezone'))->format('Y-m-d H:i:s'),
        ];
    });
    return Inertia::render('Guest/Activites', ['activites' => $activites]);
})->name('activites');



Route::get('admin/emplois', function () {
    return Inertia::render('Admin/Emplois');
})->name('admin.emplois');

// Route::get('/admin/demands', function () {
//     return Inertia::render('Admin/Demands');
// })->name('admin.demands');

// /*
//     Admin Routes
// */



// test
Route::get('/users', function () {
    return Inertia::render('Pagination', ['users' => User::paginate(1)]);
});

Route::get('/sessions', fn () =>  ['admin' => auth('admin')->user(), 'user' => auth()->user()]);
Route::post('/upload-image', function (Request $request) {
    dd($request);
    $image = $request->file('image');
    $path = $image->store('images', 'public');
    return response()->json(['path' => $path]);
});
