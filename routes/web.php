<?php

use App\Http\Controllers\Admin\CarsController;
use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/about',[PageController::class,'index'])->name('index');

Route::prefix('admin')->middleware(['auth', 'verified'])->group(function () {
    Route::get('/cars', [CarsController::class, 'index'])->name('admin.cars.index');
    Route::get('/cars/create',[CarsController::class, 'create'])->name('admin.cars.index');
    Route::post('/cars/store',[CarsController::class, 'store'])->name('admin.cars.store');
});


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
