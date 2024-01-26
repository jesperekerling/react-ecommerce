import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./features/products/productsSlice";
import shoppingCartSlice from "./features/shoppingCart/shoppingCartSlice";


export const store = configureStore({
  reducer: {
    productList: productsSlice,
    shoppingCart: shoppingCartSlice
  }
})