import { useFormik } from "formik";
import { FormInput } from "./FormInput"
import { IoIosWarning } from "react-icons/io";
import { RegisterFormSchema } from "../assets/js/Schemas";


export const RegisterForm = () => {

  const form = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: RegisterFormSchema,
    onSubmit: (values) => {
      console.log(values)
      fetch('https://js2-ecommerce-api.vercel.app/api/messages', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: 'values.name',
          secondParam: 'yourOtherValue',
        })
      })
    }
  })

  console.log(form)

  return (
    <form onSubmit={form.handleSubmit} className="reg-form" noValidate>
      <FormInput
        label="First Name"
        id="firstName"
        name="firstName"
        type="text"
        value={form.values.firstName}
        onChange={form.handleChange}
        errorMsg={form.errors.firstName && form.touched.firstName && form.errors.firstName}
        onBlur={form.handleBlur}
      />
      <FormInput
        label="Last Name"
        id="lastName"
        name="lastName"
        type="text"
        value={form.values.lastName}
        onChange={form.handleChange}
        errorMsg={form.errors.lastName && form.touched.lastName && form.errors.lastName}
        onBlur={form.handleBlur}
      />
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
      
      {/* { errors.main && 
      <div className="main-error">
        <p>{ errors.main }</p>
        <IoIosWarning />
      </div>} */}

      <button type="submit" className="btn btn-primary">Register</button>
      {/* <p>{JSON.stringify(formData)}</p> */}
    </form>
  )
}

export default RegisterForm
