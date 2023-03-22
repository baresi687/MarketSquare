import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    productsInCart : [],
    numberOfProductsInCart: 0
  },

  reducers: {
    ADD_PRODUCT_TO_CART: (state, action) => {
      state.productsInCart = [...state.productsInCart, action.payload]
      state.numberOfProductsInCart = state.productsInCart.length
    }
  }
})

export default cartSlice.reducer

// Actions
const {ADD_PRODUCT_TO_CART} = cartSlice.actions

export const addSingleProductToCart = (productData) => (dispatch) => {
  dispatch(ADD_PRODUCT_TO_CART(productData))
}
