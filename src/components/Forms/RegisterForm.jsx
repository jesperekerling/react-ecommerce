import { useFormik } from "formik";
import { FormInput } from "./FormInput"
import { IoIosWarning } from "react-icons/io";
import { useAuth } from '../../contexts/authContext'
import { useNavigate } from 'react-router-dom';
import { RegisterFormSchema } from "../../assets/js/RegisterSchema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const RegisterForm = () => {
  const successMsg = () => toast("");
  const navigate = useNavigate();
  const { register } = useAuth()

  const handleRegister = async (formData) => {
    const result = await register(formData);
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
    validationSchema: RegisterFormSchema,
    onSubmit: handleRegister // pass handleRegister here instead of register
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
      <FormInput
        label="Confirm Password"  
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        value={form.values.confirmPassword}
        onChange={form.handleChange}
        errorMsg={form.errors.confirmPassword && form.touched.confirmPassword && form.errors.confirmPassword}
        onBlur={form.handleBlur}
      />
    

      <button type="submit" className="bg-blue-700 text-white hover:bg-blue-600 w-full mt-5" onSubmit={form.handleSubmit}>Register</button>

      <ToastContainer
          position="top-center"
          autoClose={15000}
        />

    </form>
  )
}

export default RegisterForm
