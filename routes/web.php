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
use App\Http\Controllers\Admin\FaqController;
use App\Http\Controllers\Admin\GroupController;
use App\Http\Controllers\Admin\EmploiController;
use App\Http\Controllers\Admin\ModuleController;

use App\Http\Controllers\Admin\FiliereController;
use App\Http\Controllers\Admin\ActiviteController;
use App\Http\Controllers\Admin\RequestController;
use App\Http\Controllers\Admin\StagiaireController;
use App\Http\Controllers\AdminAuth\PasswordController;
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
});


Route::middleware('auth')->group(function () {
    Route::get('/requests', function () {
        return Inertia::render('Profile/Request',['user' => auth()->user()]);
    })->name('requests');
    Route::post('/requests', [RequestController::class, 'store'])->name('request.store');
    Route::get('/requests', [RequestController::class, 'show'])->name('requests');
    Route::delete('requests/{id}', [RequestController::class, 'deleteuser'])->name('profile.requests.destory');

});



Route::middleware('auth')->group(function () {
    Route::get('/emploi', function (Request $request) {
        $group = $request->user()->group;
        $emploi = \App\Models\Emploi::where('group', $group)->get();
        return Inertia::render('Profile/Emploi', ['emploi' => $emploi]);
    })->name('emploi');
});
/*
|--------------------------------------------------------------------------
| Admin
|--------------------------------------------------------------------------
*/

Route::get('admin/dashboard', function () {
    return Inertia::render('Admin/Dashboard', ['admin' => auth('admin')->user()]);
})->middleware('auth:admin')->name('admin.dashboard');
// Route::middleware('auth:admin')->group(function () {
//     Route::get('admin/dashboard', [User::class, 'getOnlineUsers'])->name('admin.dashboard');
// });



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
    Route::get('admin/activites/ad', [ActiviteController::class, 'create_ad'])->name('admin.activites.ad');
});

Route::middleware('auth:admin')->group(function () {
    Route::get('admin/emplois/{group?}', [EmploiController::class, 'index'])->name('admin.emplois');
    Route::patch('admin/emplois/{id}', [EmploiController::class, 'update'])->name('admin.emplois.update');
    Route::delete('admin/emplois/{id}', [EmploiController::class, 'destroy'])->name('admin.emplois.destroy');
});

Route::middleware('auth:admin')->group(function () {
    Route::get('admin/filieres/', [FiliereController::class, 'index'])->name('admin.filieres');
    Route::post('admin/filieres/', [FiliereController::class, 'store'])->name('admin.filieres.store');
    Route::get('admin/filieres/{id}', [FiliereController::class, 'updtae'])->name('admin.filieres.update');
    Route::delete('admin/filieres/{id}', [FiliereController::class, 'destroy'])->name('admin.filieres.destroy');
});
Route::middleware('auth:admin')->group(function () {
    Route::get('admin/groups/', [GroupController::class, 'index'])->name('admin.groups');
    Route::post('admin/groups/', [GroupController::class, 'store'])->name('admin.groups.store');
    Route::get('admin/groups/{id}', [GroupController::class, 'updtae'])->name('admin.groups.update');
    Route::delete('admin/groups/{id}', [GroupController::class, 'destroy'])->name('admin.groups.destroy');
});

Route::middleware('auth:admin')->group(function () {
    Route::get('admin/faq/', [FaqController::class, 'index'])->name('admin.faq');
    Route::post('admin/faq/', [FaqController::class, 'store'])->name('admin.faq.store');
    Route::patch('admin/faq/{id}', [FaqController::class, 'update'])->name('admin.faq.update');
    Route::delete('admin/faq/{id}', [FaqController::class, 'destroy'])->name('admin.faq.destroy');
});

Route::middleware('auth:admin')->group(function () {
    Route::get('admin/requests/', [RequestController::class, 'index'])->name('admin.requests');
    Route::delete('admin/requests/{id}', [RequestController::class, 'deleteadmin'])->name('admin.requests.destory');
});
Route::middleware('auth:admin')->group(function () {
    Route::get('admin/modules/', [ModuleController::class, 'index'])->name('admin.modules');
    Route::post('admin/modules/', [ModuleController::class, 'store'])->name('admin.modules.store');
    Route::delete('admin/modules/{id}', [ModuleController::class, 'destroy'])->name('admin.modules.destroy');
});





/*
|--------------------------------------------------------------------------
| Guest Pages
|--------------------------------------------------------------------------
*/

Route::get('/activites', function () {
    $activites = \App\Models\Activite::where('is_annonce', false)->orderBy('created_at', 'desc')->get();
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

Route::get('/filieres/{code?}', function (string $code = "") {
    $home = "Selectioner une filière";
    $modules = "";
    $info = "";
    if (!empty($code)) {
        $id = Filiere::where('code', $code)->first('id')->id;
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





Route::post('/upload-image', function (Request $request) {
    dd($request);
    $image = $request->file('image');
    $path = $image->store('images', 'public');
    return response()->json(['path' => $path]);
});
