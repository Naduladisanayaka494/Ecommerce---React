
import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';
function Register() {
    const [name, SetName] = useState("")
    const [password, SetPassword] = useState("")
    const [email, SetEmail] = useState("")
     const navigate = useNavigate();
    
    async function signup() {
        let item={name,password,email}
        console.warn(item)
       let result= await fetch(" http://127.0.0.1:8000/api/register", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept":'application/json'
            }
       })
        result = await result.json()
        localStorage.setItem("user-info", JSON.stringify(result))
        navigate("/add");
    }
    return (
        <div className="col-sm-6 offset-sm-3">
            <h1>Register Page</h1>
            <input type="text" value={name} onChange={(e)=>SetName(e.target.value)} className="form-control" placeholder="name"></input>
            <br/>
            <input type="password"  value={password} onChange={(e)=>SetPassword(e.target.value)} className="form-control" placeholder="password"></input>
            <br/>
            <input type="text"  value={email} onChange={(e)=>SetEmail(e.target.value)} className="form-control" placeholder="email"></input>
            <br />
            <button onClick={signup}  className="btn btn-primary">Sign Up</button>
        </div>
    )
}

export default Register;