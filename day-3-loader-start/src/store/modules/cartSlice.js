import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState : {
    cart: []
  },

  reducers: {
    ADD_TO_CART: (state, action) => {
      state.cart.push(action.payload)
    }
  }
})

const {ADD_TO_CART} = cartSlice.actions
export const addSingleProductToCart = (product) => async (dispatch) => {
  dispatch(ADD_TO_CART(product))
}

export default cartSlice.reducer
