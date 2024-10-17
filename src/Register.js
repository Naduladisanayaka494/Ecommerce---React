
import React,{useState} from "react"
function Register() {
    const [name, SetName] = useState("")
    const [password, SetPassword] = useState("")
    const [email, SetEmail] = useState("")
    
    function signup() {
        console.log(name,password,email)
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