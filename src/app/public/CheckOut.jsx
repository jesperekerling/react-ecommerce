import React from 'react'

function CheckOut() {
  return (
    <div>
        <h1>Shopping Basket</h1>

        <section>
            <h2 className='font-semibold py-10 text-blue-600'>My Shopping Basket</h2>
            <article className='flex'>
                <div>
                  <img src='https://media.ahlens.se/image/upload/f_auto,c_limit,w_100,q_auto/t_ShadowSharpen/products/bg_removed/65/98/89/65988998_1.jpg' />
                </div>
                <div className='flex-1 text-left pl-3 py-5'>
                  <span className='font-bold'>Product Name</span><br />
                  <span>mobiltelefon</span><br />
                  <span className='py-6'>123 kr</span>
                </div>
                <div className='py-6'>
                  <button>+</button>
                  <button className='ml-2'>-</button>
                </div>
            </article>
            <article className='flex'>
                <div>
                  <img src='https://media.ahlens.se/image/upload/f_auto,c_limit,w_100,q_auto/t_ShadowSharpen/products/bg_removed/65/98/89/65988998_1.jpg' />
                </div>
                <div className='flex-1 text-left pl-3 py-5'>
                  <span className='font-bold'>Product Name</span><br />
                  <span>mobiltelefon</span><br />
                  <span className='py-6'>123 kr</span>
                </div>
                <div className='py-6'>
                  <button>+</button>
                  <button className='ml-2'>-</button>
                </div>
            </article>
            <button className='flex mx-auto'>
              <svg class="w-6 h-6 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
              </svg>
              <span className='pl-2'>
                Clear basket
              </span>
            </button>
        </section>
        
        <section className='flex bg-blue-50 px-10 py-6 rounded-lg mt-5'>
          <div className='flex-1 text-left'>Total amount</div>
          <div className='font-semibold text-xl'>2369 kr</div>
        </section>
        <section className='pb-10'>
          <button className='w-full bg-blue-700 my-5 py-4 text-white hover:bg-blue-800'>
            Continue to Check Out
          </button>
        </section>
    </div>
  )
}

export default CheckOut