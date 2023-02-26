<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProfileController extends Controller
{
    public function getProfile($profileId)
    {
        $profile = DB::table('patients')->select('name', 'email')->where('id', $profileId)->get();
        return $profile;
    }
}
