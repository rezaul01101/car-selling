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
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // who posted
            $table->string('title'); // e.g., “2018 Toyota Corolla - Excellent Condition”
            $table->text('images')->nullable();
            $table->string('make'); // Toyota, Honda, etc.
            $table->string('model'); // Corolla, Civic, etc.
            $table->year('year'); // 2018, 2020
            $table->integer('mileage'); // in kilometers or miles
            $table->decimal('price', 10, 2);
            $table->string('fuel_type'); // Petrol, Diesel, Electric, Hybrid
            $table->string('transmission'); // Automatic, Manual
            $table->string('body_type'); // Sedan, SUV, Hatchback, etc.
            $table->string('color')->nullable();
            $table->string('condition'); // New, Used, Reconditioned
            $table->string('engine_size')->nullable(); // e.g., “2.0L”
            $table->text('description')->nullable();
            $table->text('features')->nullable(); // JSON: ["Airbags", "Sunroof"]
            $table->string('location'); // e.g., Sydney, Dhaka
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
