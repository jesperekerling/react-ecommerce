import React from 'react'
import { LoginForm } from "../../components/Forms/LoginForm"
import { Link } from "react-router-dom";
import { FaCopy } from 'react-icons/fa'; // Importing the copy icon from react-icons


function Login() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText('Demo123!');
    alert('Password copied to clipboard!');
  };

  return (
    <div>
      <div className='max-w-[400px] text-center mx-auto'>
        <h1 className='m-10'>Login</h1>
        <p>Log in with email and password.</p>
        
        <LoginForm />
        
        <p className='my-10'>New user? No problem, <Link to="/register" className='font-semibold'>please register here</Link>.</p>
      </div>
      <div className='bg-gray-50 p-10'>
        <h3 className='font-bold text-2xl'>Demo account</h3>
        <p className='py-5'>Use this demo account if you do not want to sign up.</p>
        <p><strong>Email:</strong> demo@ekerling.com</p>
        <p>
          <strong>Password:</strong> Demo123! 
          <button onClick={copyToClipboard} className='ml-2'>
            <FaCopy />
          </button>
        </p>
      </div>

    </div>
  )
}

export default Login