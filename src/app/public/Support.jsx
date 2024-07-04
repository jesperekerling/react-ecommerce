import React from 'react'
import ContactForm from '../../components/Forms/ContactForm'



function Support() {
    return (
      <div className=''>



        <h2 className="text-center sm:rounded-lg text-2xl font-bold mb-10 bg-blue-950 p-10 text-white mt-10">
          Customer Support
        </h2>

        <p className='mb-4'>We love feedback from our customers!</p>
        <p className='mb-10'>
          Contact us if you have any issues. We will be happy to assist you. We have collected some of the most Frequently Asked Questions below.
        </p>

        <h3 className='font-bold text-xl py-5'>FAQ</h3>

        <details className='py-2'>
          <summary className='font-semibold'>How do I return an item?</summary>
          <p className='py-2'>
            You can return an item by contacting our customer support.
          </p>
        </details>
        <details className='py-2'>
          <summary className='font-semibold'>How do I track my order?</summary>
          <p className='py-2'>
            You can track your order by logging in to your account.
          </p>
        </details>
        <details className='py-2'>
          <summary className='font-semibold'>How do I cancel my order?</summary>
          <p className='py-2'>
            You can cancel your order by contacting our customer support.
          </p>
        </details>
        <details className='py-2'>
          <summary className='font-semibold'>How do I change my order?</summary>
          <p className='py-2'>
            You can change your order by contacting our customer support.
          </p>
        </details>
        <details className='py-2'>
          <summary className='font-semibold'>How do I get a refund?</summary>
          <p className='py-2'>
            You can get a refund by contacting our customer support.
          </p>
        </details>


        
        <h3 className='font-bold text-xl pt-14'>Email Us</h3>
        <div className='max-w-[500px] mx-auto'>
          <ContactForm />
        </div>
      </div>
    )
  }
  export default Support