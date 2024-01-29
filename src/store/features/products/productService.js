import axios from 'axios'

const BASE_URL = 'https://js2-ecommerce-api.vercel.app/api/products'

const getAll = async () => {
  const res = await axios.get(BASE_URL)
  return res.data
}




export default {
  getAll
}