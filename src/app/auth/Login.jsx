import React from 'react'
import { LoginForm } from "../../components/LoginForm"
import { Link } from "react-router-dom";


function Login() {
  return (
    <div>
        <h1 className='mb-10'>Login</h1>
        <p>Log in with email and password.</p>
        <p>New user? No problem, <Link to="/register" className='font-semibold'>please register here</Link>.</p>
        
        <LoginForm />
    </div>
  )
}

export default Login