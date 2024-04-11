import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Categories from '../app/public/Categories'
import { useDispatch } from 'react-redux'
import { addToCart } from "../store/features/shoppingCart/shoppingCartSlice";
import { useCart } from "../contexts/cartContext";


function ProductDetails() {

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

     useEffect(() => {
        setLoading(true)


         const getProduct = async () => {
           const res = await axios.get(`https://ecommerce-api.ekerling.com/api/products/${id}`)
           setProduct(res.data)
           setLoading(false)
         }
         getProduct()
       }, [])
  return (
    <div className='mt-10'>
    { loading && <p>Loading..</p>}
    {
        product && (
            <div className="details mt-14 container mx-auto text-left">
              <h1 className='font-bold text-center pb-7'>
                { product?.name}</h1>
              <div className='flex flex-row gap-10'>
                <div className='basis-2/3'>
                  <div className="w-full">
                      <img src={product.images[0]} alt={product.images} key={product._id} />
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-5">
                    { // Shows available images from API
                      product.images.map((image, index) => {
                        if(index === 0) return null
                        return (
                        <div className=''>
                          <img src={image} alt={product.images} className='hover:opacity-50' />
                        </div>
                      )})
                    }
                  </div>
                </div>

                <div className='basis-1/3'>
                  <h3 className='font-bold text-xl py-4'>
                    Om produkten
                  </h3>
                  <table className='table-fixed'>
                    <tr>
                      <td>Produktnamn</td>
                      <td>{ product?.name}</td>
                    </tr>
                    <tr>
                      <td>Pris</td>
                      <td>{ product?.price} kr</td>
                    </tr>
                    <tr>
                      <td>Kategori</td>
                      <td><Link to={`/categories/${product.category}`}>{ product?.category}</Link></td>
                    </tr>
                  </table>
                  <button className='bg-blue-800 text-white my-6 py-4 px-10 hover:bg-black w-full'>
                    Lägg i kundkorg
                  </button>
                  <h4 className='font-bold mt-7 mb-3'>Produktbeskrivning</h4>
                  <p>{ product?.description}</p>
                </div>

              </div>
            </div>
        )
    }
    </div>
 
  )
}

export default ProductDetails