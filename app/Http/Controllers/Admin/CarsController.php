<?php

namespace App\Http\Controllers\Admin;

use App\Helper\Helpers;
use App\Http\Controllers\Controller;
use App\Models\BodyType;
use App\Models\Car;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CarsController extends Controller
{
    public function index(){
       $cars= Car::where('user_id',Auth::user()->id)->get();
        return Inertia::render('admin/cars/cars',[
            'cars' => $cars,
        ]);
    }

    public function create(){
        $bodyTypes = BodyType::get();
        return Inertia::render('admin/cars/create', [
            'bodyTypes' => $bodyTypes,
        ]);
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
            'mileage' => 'required',
            'price' => 'required|numeric',
            'fuel_type' => 'required|string|max:255',
            'transmission' => 'required|string|max:255',
            'body_type' => 'required|string|max:255',
            'color' => 'nullable|string|max:255',
            'condition' => 'required|string|max:255',
            'engine_size' => 'nullable|string|max:255',
            'location' => 'required|string|max:255'
        ]);

        $imagesList=[];
        if($request->file('images')){
            $images =$request->file('images');
            foreach ($images as $image){
                $uploadedImage = Helpers::uploadDocument('images/cars/',$image);
                if($uploadedImage){
                    $imagePath= $uploadedImage['filePath'];
                    array_push($imagesList,$imagePath);
                }
            }
        }

        $carData=[
            'title' => $request->title,
            'description' => $request->description,
            'features' => $request->features,
            'images' => json_encode($imagesList),
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
