<?php

namespace App\Http\Controllers\Admin;

use App\Helper\Helpers;
use App\Http\Controllers\Controller;
use App\Models\BodyType;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;


class CarExtentionController extends Controller
{
    public function index()
    {
        $typesList = BodyType::orderBy('id','desc')->get();
        return Inertia::render('admin/body-types/index', [
            'typesList' => $typesList, // Fetch body types from the database
        ]);
    }
    public function create()
    {
        return view('admin.cars.create-body-type');
    }
    public function store(Request $request)
    {

        // Validate and store the body type
        $request->validate([
            'title' => 'required|string|max:255',
        ]);

        $imageName = null;
        if($request->hasFile('image')){
            $image = $request->file('image');
            $path = 'uploads/bodyTypes/';
            $file = Helpers::uploadDocument($path, $image);
            $imageName = $file['filePath'];
        }
        $data=[
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'image' => $imageName,
            'description' => $request->description,
        ];

        BodyType::create($data);

        return redirect()->route('admin.cars.create-body-type')->with('success', 'Body type created successfully.');
    }
    public function edit($id)
    {
        // Find the body type by ID
        // $bodyType = BodyType::findOrFail($id);

        return view('admin.cars.create-body-type', compact('bodyType'));
    }
    public function update(Request $request, $id)
    {
        // Validate and update the body type
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        // Find the body type by ID and update it
        // $bodyType = BodyType::findOrFail($id);
        // $bodyType->update($request->all());

        return redirect()->route('admin.cars.create-body-type')->with('success', 'Body type updated successfully.');
    }
    public function destroy($id)
    {
        // Find the body type by ID and delete it
        $bodyType = BodyType::findOrFail($id);
        $bodyType->delete();

        return redirect()->route('admin.cars.create-body-type')->with('success', 'Body type deleted successfully.');
    }
    public function show($id)
    {
        // Find the body type by ID
        // $bodyType = BodyType::findOrFail($id);

        return view('admin.cars.create-body-type', compact('bodyType'));
    }
}
