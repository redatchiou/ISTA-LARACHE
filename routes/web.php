<?php

use App\Models\User;
use App\Models\demande;
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

use App\Http\Controllers\Admin\EmploiController;
use App\Http\Controllers\Admin\FaqsController;
use App\Http\Controllers\DemandeController;
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
        'user' => auth()->user(),
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register')
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', ['user' => auth()->user()]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::middleware('auth')->group(function () {
    Route::get('/notes', function () {
        return Inertia::render('Profile/Notes', ['user' => auth()->user()]);
    })->name('profile.notes');
    Route::get('/Demande', function () {
        return Inertia::render('Profile/demande', ['user' => auth()->user()]);
    })->name('Profil.demande');
    Route::post('/Demande', [DemandeController::class, 'create'])->name('profile.demande.create');
    Route::get('/Demande', [DemandeController::class, 'show'])->name('Profil.demande');
});


/*
|--------------------------------------------------------------------------
| Admin
|--------------------------------------------------------------------------
*/

Route::get('admin/dashboard', function () {
    return Inertia::render('Admin/Dashboard', ['admin' => auth('admin')->user()]);
})->middleware('auth:admin')->name('admin.dashboard');



Route::middleware('auth:admin')->group(function () {
    Route::get('/admin', [AdminController::class, 'edit'])->name('admin.edit');
    Route::patch('/admin', [AdminController::class, 'update'])->name('admin.update');
    Route::delete('/admin', [AdminController::class, 'destroy'])->name('admin.destroy');
});

require __DIR__ . '/auth.php';
require __DIR__ . '/auth_admin.php';

/*
|--------------------------------------------------------------------------
| Admin Pages
|--------------------------------------------------------------------------
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
    Route::get('admin/activites/create/{id?}', [ActiviteController::class, 'create'])->name('admin.activites.create');
    Route::post('admin/activites/create', [ActiviteController::class, 'store'])->name('admin.activites.store');
    Route::get('admin/activites/edit/{id}', [ActiviteController::class, 'edit'])->name('admin.activites.edit');
    Route::patch('admin/activites/edit/{id}', [ActiviteController::class, 'update'])->name('admin.activites.update');
    Route::delete('admin/activites/{id}', [ActiviteController::class, 'destroy'])->name('admin.activites.destroy');
});

Route::middleware('auth:admin')->group(function () {
    Route::get('admin/emplois/{group?}', [EmploiController::class, 'index'])->name('admin.emplois');
    Route::patch('admin/emplois/{id}', [EmploiController::class, 'update'])->name('admin.emplois.update');
    Route::delete('admin/emplois/{id}', [EmploiController::class, 'destroy'])->name('admin.emplois.destroy');
});


Route::middleware('auth:admin')->group(function () {
    Route::get('/admin/Demands', [DemandeController::class, 'index'])->name('admin.demands');
    Route::delete('admin/demande/{id}', [DemandeController::class, 'destroy'])->name('demande.destroy');
});
Route::middleware('auth:admin')->group(function () {
    Route::get('/admin/Faqs', function () {
        return Inertia::render('Admin/Faqs', ['admin' => auth('admin')->user()]);
    })->name('admin.faqs');
    Route::post('/admin/Faqs', [FaqsController::class, 'create'])->name('admin.faqs.create');

});



/*
|--------------------------------------------------------------------------
| Guest Pages
|--------------------------------------------------------------------------
*/

Route::get('/activites', function () {
    $activites = \App\Models\Activite::orderBy('created_at', 'asc')->get();

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

Route::get('/filieres/{name?}', function (string $name = "") {
    $home = "Selectioner un filiere ";
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
    $faqs = \App\Models\Faq::orderBy('created_at', 'desc')->get();
    return Inertia::render('Guest/Faq', ['faqs' => $faqs, 'filtered' => $filtered, 'keyword' => $key]);
})->name('faq');

Route::get('/institut', function () {
    return Inertia::render('Guest/Institut');
})->name('institut');

Route::get('/emplois/{group?}', function (string $group = "") {
    if (empty($group)) {
        $emploi = '';
    }
    $groups = \App\Models\Emploi::distinct()->pluck('group');
    $emploi = \App\Models\Emploi::where('group', $group)->get();
    // return $emploi;
    return Inertia::render('Guest/Emplois', ['emploi' => $emploi, 'groups' => $groups]);
    // return  ['data' => $group];
})->name('emplois');

Route::get('/contact', function () {
    return Inertia::render('Guest/Contact');
})->name('contact');

//  root dyal hadok 3 dyal activites current
Route::get('/', function () {
    // $activites = \App\Models\Activite::orderBy('created_at', 'desc')->get()->first();
    $activites = \App\Models\Activite::where('annonces', true)
            ->orderBy('created_at', 'desc')
            ->limit(1)
            ->get();
    return Inertia::render('Home', ['activites' => $activites]);
});








// /*
//     Admin Routes
// */



// test
Route::get('/users', function () {
    return Inertia::render('Pagination', ['users' => User::paginate(1)]);
});

Route::post('/upload-image', function (Request $request) {
    dd($request);
    $image = $request->file('image');
    $path = $image->store('images', 'public');
    return response()->json(['path' => $path]);
});
