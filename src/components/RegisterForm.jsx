import { useFormik } from "formik";
import { FormInput } from "./FormInput"
import { IoIosWarning } from "react-icons/io";
import { useAuth } from '../contexts/authContext'
import { RegisterFormSchema } from "../assets/js/Schemas";


export const RegisterForm = () => {

  const form = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: RegisterFormSchema,onSubmit: (values) => {
      console.log(values)
      fetch('https://js2-ecommerce-api.vercel.app/api/auth/register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
          confirmPassword: values.confirmPassword,
        })
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));

    }
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
        //errorMsg={form.errors.email && form.touched.email && form.errors.email}
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
      
      {/* { errors.main && 
      <div className="main-error">
        <p>{ errors.main }</p>
        <IoIosWarning />
      </div>} */}

      <button type="submit" className="btn btn-primary" onSubmit={form.handleSubmit}>Register</button>
      {/* <p>{JSON.stringify(formData)}</p> */}
    </form>
  )
}

export default RegisterForm
