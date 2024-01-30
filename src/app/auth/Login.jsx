import React from 'react'
import { LoginForm } from "../../components/LoginForm"

function Login() {
  return (
    <div>
        <h1>Login</h1>
        <p>Log in with email and password. If you need an account, <a href="/register">please register here</a>.</p>
        
        <LoginForm />
    </div>
  )
}

export default Login