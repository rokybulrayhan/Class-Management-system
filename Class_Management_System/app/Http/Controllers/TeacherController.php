<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use Illuminate\Http\Request;
use DB;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;


class TeacherController extends Controller
{
    /*public function addStudent(Request $request){
        $student_add = $request;
        $request = $request->all();
        //echo $item_add;

        $validator = \Validator::make($request, [  
            'student_name' => 'required|string',
            'semester_name' => 'required|string',
            'section' => 'required|string',
            'id_number' => 'required|string',
            'birth_date' => 'required|string',
            'email' => 'required|string',
        ], [
            
            'email' => 'Your email name is already used',  
        ]);
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->getMessageBag()->first(),
                'errors' => $validator->getMessageBag(),
            
            ],501);
        }

        $student_add->validate([         
            'student_name' => 'required|string',
            'semester_name' => 'required|string',
            'section' => 'required|string',
            'id_number' => 'required|string',
            'birth_date' => 'required|string',
            'email' => 'required|string',
        ]);

        $addStudent = new Teacher([
            'student_name' => $student_add->student_name,
            'semester_name' => $student_add->semester_name,
            'section' => $student_add->section,
            'id_number' => $student_add->id_number,
            'birth_date' => $student_add->birth_date,
            'email' => $student_add->email,
            
        ]);

        $addStudent->save();

        return response()->json([
            'message' => 'Successfully created student!',
            'student_name' => $student_add->student_name,
            'semester_name' => $student_add->semester_name,
            'section' => $student_add->section,
            'id_number' => $student_add->id_number,
            'birth_date' => $student_add->birth_date,
            'email' => $student_add->email,
        ], 201);
        
        
    }
    public function deleteStudent($id){   
        DB::table('teachers')->where('id',$id)->delete();  
        return response()->json([
         'massage' => 'this student was deleted',
     ]);  
    }
    public function editStudent(Request $request, $id){
        $data = array();
        $data['student_name'] = $request->student_name;
        $data['semester_name'] = $request->semester_name;
        $data['section'] = $request->section;
        $data['id_number'] = $request->id_number;
        $data['birth_date'] = $request->birth_date;
        $data['email'] = $request->email;
        DB::table('teachers')->where('id',$id)->update($data);  
        return response()->json([
        'massage' => 'this student was updated',
    ]);         

    }   
    public function allStudent(){
     
        $all = DB::table('teachers')->get();  
        return response()->json(
            $all,
    ); 
    }
    
    public function studentDetails($id){
        $studentDetails = DB::table('teachers')->where('id',$id)->get(); 
        return response()->json(
            $studentDetails
    ); 
    }
    */
    /*public function addStudent(Request $request){
        $student_add = $request;
        $request = $request->all();
        //echo $item_add;

        $validator = \Validator::make($request, [  
            'student_name' => 'required|string',
            'semester_name' => 'required|string',
            'section' => 'required|string',
            'id_number' => 'required|string',
            'birth_date' => 'required|string',
            'email' => 'required|string',
        ], [
            
            'email' => 'Your email name is already used',  
        ]);
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->getMessageBag()->first(),
                'errors' => $validator->getMessageBag(),
            
            ],501);
        }

        $student_add->validate([         
            'student_name' => 'required|string',
            'semester_name' => 'required|string',
            'section' => 'required|string',
            'id_number' => 'required|string',
            'birth_date' => 'required|string',
            'email' => 'required|string',
        ]);

        $addStudent = new Teacher([
            'student_name' => $student_add->student_name,
            'semester_name' => $student_add->semester_name,
            'section' => $student_add->section,
            'id_number' => $student_add->id_number,
            'birth_date' => $student_add->birth_date,
            'email' => $student_add->email,
            
        ]);

        $addStudent->save();

        return response()->json([
            'message' => 'Successfully created student!',
            'student_name' => $student_add->student_name,
            'semester_name' => $student_add->semester_name,
            'section' => $student_add->section,
            'id_number' => $student_add->id_number,
            'birth_date' => $student_add->birth_date,
            'email' => $student_add->email,
        ], 201);
        
        
    }
    */
    public function deleteStudent($id){   
        $data = DB::table('users')->where('id',$id)->get();
        $authUser = JWTAuth::parseToken()->authenticate();
       // echo  $authUser->role_id;
        if($data[0]->role_id==2 && $authUser->role_id == 1){
            DB::table('users')->where('id',$id)->delete();  
            return response()->json([
            'massage' => 'this student was deleted',
         ]); 
        }
        else{
            return response()->json([
                'massage' => 'I am Teacher you are not deleted my profile',
             ]); 

        }
    }
    public function editStudent(Request $request, $id){
        echo $user = JWTAuth::parseToken()->authenticate();
        $data = array();
        $data['name'] = $request->name;
        $data['phone_number'] = $request->phone_number;
        $data['address'] = $request->address;
        DB::table('users')->where('id',$id)->update($data);  
        return response()->json([
        'massage' => 'this student was updated',
    ]);         

    }   
    public function allStudent(){
        $authUser = JWTAuth::parseToken()->authenticate();
        if($authUser->role_id == 1){
        $all = DB::table('users')->get();  
        return response()->json(
            $all,
        ); 
    }
    }
    
    public function studentDetails($id){
        $studentDetails = DB::table('teachers')->where('id',$id)->get(); 
        return response()->json(
            $studentDetails
    ); 
    }

}
