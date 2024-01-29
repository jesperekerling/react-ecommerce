import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import productService from './productService'

const initialState = {
  products: [],
  error: null,
  loading: false
}

export const getProducts = createAsyncThunk('product-list/getAll', async (_, thunkAPI) => {
  try {
    return await productService.getAll()
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message)
  }
})

export const productsSlice = createSlice({
  name: 'Product-List',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.products = action.payload
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
}) 


export default productsSlice.reducer