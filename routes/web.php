<?php

use App\Models\Recipes;
use App\Models\Category;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\CategoryController;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('categories', [CategoryController::class, 'index'])->name('categories');
