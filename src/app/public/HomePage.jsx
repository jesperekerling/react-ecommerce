import React from 'react'
import ProductList from '../../components/ProductList'
import Categories from '../../app/public/Categories.jsx'


function HomePage() {
  return (
    <div>
        <h1 className='m-10 text-3xl'>Hey Customer!</h1>
        <p className='mb-16'>All new customers get 10% off first order with <strong>FC10 Code</strong>.</p>


        <Categories />

        <h2 className='text-2xl font-bold mt-20'>Products</h2>
        <ProductList />

        <h2 className='text-2xl text-blue-500 mt-10'>
          To do:
        </h2>
        <ul>
            <li className='line-through'>Lista produkter</li>
            <li className='line-through'>Visa enksild produkt</li>
            <li className='line-through'>Navigering med react-router-dom</li>
            <li className='line-through'>Kategorier</li>
            <li>Kontaktformulär</li>
            <li>EXTRA: Fixa Dropdown på categories i menyn</li>
            <li>Check-out-sida</li>
            <li>Varukorg i Zustand</li>
            <li>Logga in</li>
            <li>Registrera</li>
            <li>ADMIN: lista ordrar</li>
            <li>Egeninlärning: Redux Toolkit</li>
        </ul>


    </div>
  )
}

export default HomePage