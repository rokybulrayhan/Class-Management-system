<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\Teacher;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    public function addRole(Request $request){
        $role_add = $request;
        $request = $request->all();
        //echo $item_add;

        $validator = \Validator::make($request, [  
        
            'role' => 'required|string|unique:roles',
        ], [
            
            'email' => 'Your role name is already used',  
        ]);
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->getMessageBag()->first(),
                'errors' => $validator->getMessageBag(),
            
            ],501);
        }

        $role_add->validate([         
            'role' => 'required|string',
            
        ]);

        $add_Role = new Role([
            'role' => $role_add->role,
            
        ]);

        $add_Role->save();

        return response()->json([
            'message' => 'Successfully created Role!',
            'role' => $role_add->role,
        ], 201);
        
        
    }
   
}
