<?php

namespace App\Http\Controllers;

use App\Models\BodyType;
use App\Models\Car;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{

    public function welcome()
    {
        $bodyTypes=BodyType::orderBy('id','desc')->get();
        $cars=Car::orderBy('id','desc')->take(12)->get();
        return Inertia::render('welcome',[
            'bodyTypes'=>$bodyTypes,
            'cars'=>$cars,
        ]);
    }

    public function index()
    {
        return Inertia::render('frontend/about/index');
    }
}
