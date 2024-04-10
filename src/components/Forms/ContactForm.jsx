import { useFormik } from "formik";
import { FormInput } from "./FormInput"
import { IoIosWarning } from "react-icons/io";
import { SupportFormSchema } from "../../assets/js/SupportSchema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactForm = () => {

  // Success-message after form is submitted.
  const successMsg = () => toast("");


  const form = useFormik({
    initialValues: {
      name: '',
      message: '',
      email: '',
    },
    validationSchema: SupportFormSchema,
    onSubmit: (values) => {
      console.log(values)
      fetch('https://ecommerce-api.ekerling.com/api/message', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'values.name',
          email: 'values.email',
          message: 'values.message',
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        toast('Thank you for you feeback! We will read it with care =)')
      })
      .catch(error => console.error('Error:', error));
    }
  })

  console.log(form)

  return (
    <form onSubmit={form.handleSubmit} className="reg-form" noValidate>
      <FormInput
        label="Name"
        id="name"
        name="name"
        type="text"
        value={form.values.name}
        onChange={form.handleChange}
        errorMsg={form.errors.name && form.touched.name && form.errors.name}
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
          onBlur={form.handleBlur}
          className="w-full"
        >
        </textarea>
        {form.errors.message && form.touched.message && (
          <div className="error">{form.errors.message}</div>
        )}
      </div>

      <button type="submit" className="text-center mt-10 bg-blue-800 text-white">
        Send Message
      </button>
      
      <ToastContainer
          position="top-center"
          autoClose={15000}
        />

    </form>
  )
}

export default ContactForm
