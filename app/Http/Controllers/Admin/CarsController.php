<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Car;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CarsController extends Controller
{
    public function index(){
        return Inertia::render('admin/cars/cars');
    }

    public function create(){
        return Inertia::render('admin/cars/create');
    }

    public function store(Request $request){
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'features' => 'nullable|string',
            'images' => 'nullable|array',
            'make' => 'required|string|max:255',
            'model' => 'required|string|max:255',
            'year' => 'required|integer',
            'mileage' => 'required|integer',
            'price' => 'required|numeric',
            'fuel_type' => 'required|string|max:255',
            'transmission' => 'required|string|max:255',
            'body_type' => 'required|string|max:255',
            'color' => 'nullable|string|max:255',
            'condition' => 'required|string|max:255',
            'engine_size' => 'nullable|string|max:255',
            'location' => 'required|string|max:255'
        ]);

        $carData=[
            'title' => $request->title,
            'description' => $request->description,
            'features' => $request->features,
            'images' => $request->images,
            'make' => $request->make,
            'model' => $request->model,
            'year' => $request->year,
            'mileage' => $request->mileage,
            'price' => $request->price,
            'fuel_type' => $request->fuel_type,
            'transmission' => $request->transmission,
            'body_type' => $request->body_type,
            'color' => $request->color,
            'condition' => $request->condition,
            'engine_size' => $request->engine_size,
            'location' => $request->location,
            'user_id'=>Auth::user()->id
        ];
        $car = Car::create($carData);

        return redirect()->route('admin.cars.index')->with('success', 'Car created successfully');
    }
}
