<?php

use App\Http\Controllers\DoctorController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post("/signup", [PatientController::class, 'register']);
Route::post("/login", [PatientController::class, 'login']);
Route::get("/doctors", [DoctorController::class, 'getDoctors']);
Route::post("/addDoctors", [DoctorController::class, 'addDoctors']);
Route::get('/profiles/{profile}', [ProfileController::class, 'getProfile']);
Route::post('/reserves', [PatientController::class, 'Reserve']);
