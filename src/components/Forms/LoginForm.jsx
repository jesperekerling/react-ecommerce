import { useFormik } from "formik";
import { FormInput } from "./FormInput"
import { IoIosWarning } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

export const LoginForm = () => {
  const successMsg = () => toast("");
  const navigate = useNavigate();
  const {login, token} = useAuth()
  if (token) {
    navigate('/logged-in');
  }

  const handleLogin = async (formData) => {
    try {
      const response = await fetch('https://ecommerce-api.ekerling.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      const data = await response.json();
  
      if (data.token) {
        console.log('Token:', data.token);
        localStorage.setItem('token', data.token); // Save the token in local storage
        navigate('/logged-in');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  const form = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: handleLogin
  })

//  console.log(form)

  

  return (
    
    <form onSubmit={form.handleSubmit} className="reg-form" noValidate>
      <FormInput
        label="Email"
        id="email"
        name="email"
        type="email"
        value={form.values.email}
        onChange={form.handleChange}
        errorMsg={form.errors.email && form.touched.email && form.errors.email}
        onBlur={form.handleBlur}
        className="w-full"
      />
      <FormInput
        label="Password"
        id="password"
        name="password"
        type="password"
        value={form.values.password}
        onChange={form.handleChange}
        errorMsg={form.errors.password && form.touched.password && form.errors.password}
        onBlur={form.handleBlur}
        className="w-full"
      />
      
      <button type="submit" className="mt-5 bg-blue-700 text-white hover:bg-blue-600 w-full" onSubmit={form.handleSubmit}>
        Log in
      </button>

      <ToastContainer
          position="top-center"
          autoClose={15000}
        />
      
    </form>
    
  )
}

export default LoginForm
