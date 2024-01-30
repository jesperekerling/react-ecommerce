import * as Yup from 'yup'

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const RegisterFormSchema = Yup.object({

  email: Yup.string()
    .required('You need to enter an email address')
    .matches(emailRegex, 'You need to enter a valid email address'),

  password: Yup.string()
    .required('You need to enter a password')
    .matches(passwordRegex, 'Your pasword needs to have one Uppercase, one lowercase, one number and a special character'),

  confirmPassword: Yup.string()
    .required('You need to confirm your password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),

})