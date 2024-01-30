import { useFormik } from "formik";
import { FormInput } from "../components/FormInput"
import { IoIosWarning } from "react-icons/io";
import { RegisterFormSchema } from "../assets/js/Schemas";


export const ContactForm = () => {

  const form = useFormik({
    initialValues: {
      firstName: '',
      message: '',
      email: '',
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
          email: 'values.email',
          message: 'values.message',
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
        className={"input-group"}
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
      <div className="form-group text-left p-3">
        <label htmlFor="message" className="block py-3 font-semibold">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write message here.."
          value={form.values.message}
          onChange={form.handleChange}
          errorMsg={form.errors.message && form.touched.message && form.errors.message}
          onBlur={form.handleBlur}
          className="w-full"
        >
        </textarea>
      </div>

      {/* { errors.main && 
      <div className="main-error">
        <p>{ errors.main }</p>
        <IoIosWarning />
      </div>} */}

      <button type="submit" className="text-center mt-10 bg-blue-800 text-white">
        Send Message
      </button>
      {/* <p>{JSON.stringify(formData)}</p> */}
    </form>
  )
}

export default ContactForm
