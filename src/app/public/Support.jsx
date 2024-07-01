import React from 'react'
import ContactForm from '../../components/Forms/ContactForm'



function Support() {
    return (
      <div className=''>
        
        <h2 className="text-center text-2xl font-bold mb-10 bg-blue-950 p-10 text-white mt-10">
          Customer Support
        </h2>

        <p className='mb-4'>We love feedback!</p>
        <p className='mb-10'>
          Contact us if you have any issues. We will be happy to assist you.
        </p>
        
        <ContactForm />

      </div>
    )
  }
  export default Support