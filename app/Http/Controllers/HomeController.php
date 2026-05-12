<?php

namespace App\Http\Controllers;

use App\Mail\ContactFrom;
use App\Models\FormResponse;
use App\Models\Recipes;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class HomeController extends Controller
{
    public function index()
    {
        $carouselRecipes = Recipes::orderBy('view_count', 'DESC')->take(3)->get();
        $latestRecipes = Recipes::latest()->take(4)->get();
        $categories = Category::withCount('recipes')
                                        ->orderBy('recipes_count', 'DESC')
                                        ->with('recipes')
                                        ->take(3)
                                        ->get();

        return inertia('home', compact('carouselRecipes', 'latestRecipes', 'categories'));

    }

    public function formResponsesStore(Request $request)
    {
        $rules = [
            'name' => 'required',
            'email' => 'required',
            'subject' => 'required',
            'message' => 'required',
        ];

        $validator = validator()->make($request->all(), $rules);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }


        $formResponse = FormResponse::create($request->all());

        Mail::to(config('mail.from.address'))->send(new ContactFrom($formResponse));

        return back()->with([
            'message' => [
                'title' => 'Successfully Sent!',
                'subtitle' => 'Thank you for contacting us. We will get back to you shortly.'
            ]
        ]);


    }
}
