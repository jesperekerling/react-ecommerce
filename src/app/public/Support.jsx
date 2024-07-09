import React from 'react'
import ContactForm from '../../components/Forms/ContactForm'



function Support() {
    return (
      <div className=''>



        <h2 className="text-center sm:rounded-lg text-2xl font-bold mb-10 bg-blue-950 p-10 text-white mt-10">
          Customer Support
        </h2>

        <p className='mb-10 md:max-w-[600px] mx-auto text-lg'>
        Feel free to contact us with any concerns. Our dedicated team is here to assist you. Below, we've compiled frequently asked questions for your convenience.
        </p>

        <div className='bg-gray-50 md:rounded-lg px-10 pb-10'>
          <h3 className='font-bold text-3xl py-10'>FAQ</h3>

          <div className='md:max-w-[500px] mx-auto'>

            <details className='py-4 bg-white rounded my-2'>
              <summary className='font-semibold'>How do I return an item?</summary>
              <p className='py-2 text-sm'>
                You can return an item by contacting our customer support.
              </p>
            </details>
            <details className='py-4 bg-white rounded my-2'>
              <summary className='font-semibold'>How do I track my order?</summary>
              <p className='py-2 text-sm'>
                You can track your order by logging in to your account.
              </p>
            </details>
            <details className='py-4 bg-white rounded my-2'>
              <summary className='font-semibold'>How do I cancel my order?</summary>
              <p className='py-2 text-sm'>
                You can cancel your order by contacting our customer support.
              </p>
            </details>
            <details className='py-4 bg-white rounded my-2'>
              <summary className='font-semibold'>How do I change my order?</summary>
              <p className='py-2 text-sm'>
                You can change your order by contacting our customer support.
              </p>
            </details>
            <details className='py-4 bg-white rounded my-2'>
              <summary className='font-semibold'>How do I get a refund?</summary>
              <p className='py-2 text-sm'>
                You can get a refund by contacting our customer support.
              </p>
            </details>
          </div>
        </div>


        <div className='bg-blue-50 my-20 md:rounded-lg py-14'>
          <h3 className='font-bold text-3xl pb-8'>Email Us</h3>
          <p className='mb-4'>We love feedback from our customers!</p>
          <div className='md:max-w-[500px] mx-auto'>
            <ContactForm />
          </div>
        </div>
      </div>
    )
  }
  export default Support