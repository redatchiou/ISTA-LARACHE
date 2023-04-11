<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\NoteController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ActiviteController;
use Illuminate\Cache\RateLimiting\Limit;

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
        'canRegister' => Route::has('register'),
        'activites'=>\App\Models\Activite::latest()->take(3)->get() 

    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

/*
    Test
*/
Route::get('/_', fn () => Inertia::render('_'));

/*
    Note
*/
Route::get('/note', [NoteController::class, 'index'])->name('profile.note');

Route::get('/activite', fn () => Inertia::render('Activites'))->name('activite');
Route::get('/faq', fn () => Inertia::render('Faq'))->name('faq');
// niveau de formation
Route::get('/niveau', fn () =>Inertia::render('niveauF/niveau'))->name('niveau');
// ts
Route::get('/niveau/technicienS', fn () =>Inertia::render('niveauF/TechnicienS'))->name('niveau.TS');
Route::get('/niveau/technicien', fn () =>Inertia::render('niveauF/Technicien'))->name('niveau.T');
Route::get('/niveau/Qualif', fn () =>Inertia::render('niveauF/Qualif'))->name('niveau.Q');
Route::get('/niveau/Specialistion', fn () =>Inertia::render('niveauF/Specialisation'))->name('niveau.S');


/*
    Admin Routes
*/

Route::get('admin', function () {
    return redirect()->route('admin.login');
});

Route::get(
    '/admin/register',
    function () {
        return Inertia::render('Admin/Register');
    }
)->name('admin.register');
Route::post('/admin/register', [AdminController::class, 'store']);

Route::get('/admin/login', function () {
    return Inertia::render('Admin/Login');
})->name('admin.login');

Route::post('/admin/login', [AdminController::class, 'login']);

Route::get('/admin/dashboard', [AdminController::class, 'index'])->name('admin.dashboard');
// Activites
Route::get('/admin/activites', function () {
    return Inertia::render('Admin/Activites');
})->name('admin.activites');
// insert activite;
Route::post('/admin/activite',[ActiviteController::class,'store'])->name('admin.activite');



// Stagiaires
Route::get('/admin/stagiaires', function () {
    return Inertia::render('Admin/Stagiaires');
})->name('admin.stagiaires');
// Demands
Route::get('/admin/demands', function () {
    return Inertia::render('Admin/Demands');
})->name('admin.demands');
// Emplois
Route::get('/admin/emplois', function () {
    return Inertia::render('Admin/Emplois');
})->name('admin.emplois');



