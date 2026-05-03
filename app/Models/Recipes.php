<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Recipes extends Model
{
    /** @use HasFactory<\Database\Factories\RecipesFactory> */
    use HasFactory;

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
    
    protected $appends = ['is_featured'];
    
    public function isFeatured(): Attribute
    {
         return Attribute::make(get: function(mixed $value, array $attributes) {
            return (bool) $attributes['featured_at'];
         });
    }  
}
