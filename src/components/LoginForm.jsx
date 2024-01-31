import { useFormik } from "formik";
import { FormInput } from "./FormInput"
import { IoIosWarning } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext'
import { LoginFormSchema } from "../assets/js/LoginSchema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LoginForm = () => {
  const successMsg = () => toast("");
  const navigate = useNavigate();
  const {login, token} = useAuth()
  if (token) {
    navigate('/logged-in');
  }

  const handleLogin = async (formData) => {
    const result = await login(formData);

    if (result.success) {
      navigate('/logged-in');
    }

  }

  const form = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: LoginFormSchema,
    onSubmit: handleLogin // pass handleLogin here instead of login
  })

  console.log(form)

  

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
      />
      
      <button type="submit" className="bg-blue-700 text-white hover:bg-blue-600" onSubmit={form.handleSubmit}>
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
