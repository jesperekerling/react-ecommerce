import axios from 'axios'

const BASE_URL = 'https://ecommerce-api.ekerling.com/api/products'

const getAll = async () => {
  const res = await axios.get(BASE_URL)
  return res.data
}




export default {
  getAll
}