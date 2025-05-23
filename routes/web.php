<?php

use App\Http\Controllers\Admin\CarExtentionController;
use App\Http\Controllers\Admin\CarsController;
use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [PageController::class,'welcome'])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/about',[PageController::class,'index'])->name('index');
Route::get('/car/{id}/{slug?}',[PageController::class,'carDetails'])->name('details');

Route::prefix('admin')->middleware(['auth', 'verified'])->group(function () {
    Route::get('/cars', [CarsController::class, 'index'])->name('admin.cars.index');
    Route::get('/cars/create',[CarsController::class, 'create'])->name('admin.cars.create');
    Route::post('/cars/store',[CarsController::class, 'store'])->name('admin.cars.store');
    Route::post('/cars/delete/{id}',[CarsController::class, 'destroy'])->name('admin.cars.destroy');
    Route::get('/cars/edit/{id}',[CarsController::class, 'edit'])->name('admin.cars.edit');
    Route::post('/cars/update/{id}',[CarsController::class, 'update'])->name('admin.cars.update');


    //create car body type
    Route::get('/body-types',[CarExtentionController::class, 'index'])->name('admin.cars.create-body-type');
    Route::post('/body-types/store',[CarExtentionController::class, 'store'])->name('admin.cars.create-body-type.store');
    Route::post('/body-types/delete/{id}',[CarExtentionController::class, 'destroy'])->name('admin.cars.create-body-type.destroy');

});


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
