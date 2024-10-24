import Header from './Header';
import React, { useState ,useEffect} from "react"
import { useNavigate } from 'react-router-dom';
function Login() {
    const [email, setEmail] = useState("")
    const[password,setPassword]=useState("")
    useEffect(() => {
        if (localStorage.getItem('user-info'))
        {
            navigate("/add")
        }
    }, [])

    async function login() {
    let item = { email, password };
    let result = await fetch("http://127.0.0.1:8000/api/login", {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        }
    });
    result = await result.json(); // Add parentheses here to call the function
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/add");
}


      const navigate = useNavigate();
    return (
          <><Header /><div>
            <h1>Login Page</h1>
            <div className='col-sm-6 offset-sm-3'>
                <input type='text' placeholder='email' onChange={(e)=>setEmail(e.target.value)} className='form-control'></input>
                <br />
                 <input type='password' placeholder='password'  onChange={(e)=>setPassword(e.target.value)} className='form-control'></input>
                <br />
                <button onClick={login} className='btn btn-primary'>Login</button>
            </div>
        </div></>
    )
}

export default Login