import React from 'react'
import { LoginForm } from "../../components/Forms/LoginForm"
import { Link } from "react-router-dom";


function Login() {
  return (
    <div className='max-w-[400px] text-center mx-auto'>
        <h1 className='mb-10'>Login</h1>
        <p>Log in with email and password.</p>
        
        <LoginForm />
        
        <p className='my-10'>New user? No problem, <Link to="/register" className='font-semibold'>please register here</Link>.</p>
    </div>
  )
}

export default Login