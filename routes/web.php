<?php

use App\Http\Controllers\RecipeController;
use App\Mail\ContactFrom;
use App\Models\FormResponse;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\CategoryController;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::post('/form-responses', [HomeController::class, 'formResponsesStore'])->name('form-responses');


Route::get('categories', [CategoryController::class, 'index'])->name('categories.index');
Route::get('categories/{category}', [CategoryController::class, 'show'])->name('categories.show');

Route::get('recipes', [RecipeController::class, 'index'])->name('recipes.index');
Route::get('recipes/{recipe}', [RecipeController::class, 'show'])->name('recipes.show');

Route::inertia('/terms-and-conditions', 'terms-and-conditions',[
'title' => 'Terms And Conditions'
])->name('terms');

Route::inertia('/privacy-policy', 'privacy-policy',[
    'title' => 'Privacy Policy'
])->name('privacy-policy');

Route::inertia('/photo-usage-policy', 'photo-usage-policy',[
    'title' => 'Photo Usage Policy'
])->name('photo-usage-policy');

Route::inertia('/about', 'about',[
    'title' => 'About'
])->name('about');

Route::inertia('/faq', 'faq',[
    'title' => 'FAQs'
])->name('faq');

Route::inertia('/contact-us', 'contact-us',[
    'title' => 'Contact Us'
])->name('contact-us');

Route::get('test-mail', function () {
   $formResponse = FormResponse::first();

   return new ContactFrom($formResponse);
});
