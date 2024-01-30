import * as Yup from 'yup'

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const SupportFormSchema = Yup.object({

  name: Yup.string()
    .required('You need to enter a longer message.')
    .min(2, 'Your need to write at least 25 chars'),

  email: Yup.string()
    .required('You need to enter an email address')
    .matches(emailRegex, 'You need to enter a valid email address'),

  message: Yup.string()
    .required('You need to enter a longer message.')
    .min(15, 'Your need to write at least 25 chars'),
})