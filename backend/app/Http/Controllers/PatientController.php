<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class PatientController extends Controller
{
    public function register()
    {
        $user = Patient::create([
            'name' => request()->name,
            'email' => request()->email,
            'password' => Hash::make(request()->password),
        ]);
        return $user;
    }
    public function login()
    {
        $user = Patient::where('email', request()->email)->first();
        if (!$user || !Hash::check(request()->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }
        return $user;
    }
    public function Reserve()
    {
        $patient = Patient::find(request()->patient_id);
        $patient->doctors()->attach(request()->doctor_id);
        $patient->doctors()->save($patient, ['appointment' => request()->appointment]);
        return $patient;
    }
}
