import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <h1 className='mt-10 font-bold mb-10'>Page not found</h1>
      <p className='mt-20 mb-5'>Something is wroooong. Please try go navigate to <Link to='/' className='font-semibold'>Homepage instead</Link>.</p>
      <p className='mb-20'>Error: 404</p>
    </div>
  )
}

export default NotFound