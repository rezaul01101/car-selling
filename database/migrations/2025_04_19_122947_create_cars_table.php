<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); 
            $table->string('title'); 
            $table->text('images')->nullable();
            $table->string('make'); 
            $table->string('model');
            $table->year('year'); 
            $table->string('mileage'); 
            $table->decimal('price', 10, 2);
            $table->string('fuel_type');
            $table->string('transmission');
            $table->string('body_type');
            $table->string('color')->nullable();
            $table->string('condition'); 
            $table->string('engine_size')->nullable(); 
            $table->text('description')->nullable();
            $table->text('features')->nullable();
            $table->string('location');
            $table->boolean('is_sold')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cars');
    }
};
