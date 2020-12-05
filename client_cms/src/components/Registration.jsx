
import React, { useState } from "react";
import AdminService from '../services/AdminService'

function Registration() {

    const [registerUsername, setRegisterUsername] = useState("");
    const [registerUseremail, setRegisterUseremail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerComfirmPassword, setRegisterConfirmPassword] = useState("");
 
    const register = () => {
      
       let data = {   
            name: registerUsername,
            email: registerUseremail,
            phone : registerUseremail,
            nid : registerUseremail,
            password: registerPassword,
            password_confirmation : registerComfirmPassword
          };
       AdminService.registration(data);
       console.log(data);
    };
    return (
        <div>
        <h1>Register</h1>
        <input
          placeholder="username"
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
        <input
          placeholder="Email"
          onChange={(e) => setRegisterUseremail(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />   
        <input
          placeholder="Confirm Password"
          onChange={(e) => setRegisterConfirmPassword(e.target.value)}
        />
        <button onClick={register}>Submit</button>
      </div>

    );
}
export default Registration