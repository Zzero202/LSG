<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class DoctorController extends Controller
{
    public function addDoctors()
    {
        $doctor = Doctor::create([
            'name' => request()->name,
            'email' => request()->email,
            'password' => Hash::make(request()->password),
        ]);
        return $doctor;
    }
    public function getDoctors()
    {
        $doctor = Doctor::get()->all();
        return $doctor;
    }
}
