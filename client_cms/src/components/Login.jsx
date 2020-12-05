
import React, { useState } from "react";
import AdminService from '../services/AdminService'
function Login() {

    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [data, setData] = useState(null);
    
    const login = () => { 
       let data = {   
        email: loginUsername,
        password: loginPassword,
          };
       AdminService.login(data);
       console.log(data);

    };
    return (
        <div>
        <h1>Login</h1>
        <input
          placeholder="username"
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <div className = "row">
             <button onClick={login}>Submit</button> 
            
        </div>
        </div>

  );

}
export default Login