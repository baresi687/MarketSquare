import { createSlice } from '@reduxjs/toolkit';

// Slice
    // Name
    // initial state
    // reducers, amend and change state

const listingsSLice = createSlice({
  name: 'listings',
  initialState: {
    products: [],
    total: 0
  },
  reducers: {
    // Declare functions which amend our state
    // state = current state. action = the new state from API call
    SET_PRODUCTS: (state, action) => {
      state.products = action.payload
    }
  }


})

export default listingsSLice.reducer

// Actions
    // API calls etc. NO STATE CHANGES

const {SET_PRODUCTS} = listingsSLice.actions

export const fetchProducts = () => async (dispatch) => {

  try {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    console.log(data)

    dispatch(SET_PRODUCTS(data.products))
  } catch (error) {
    return console.error(error)
  }
}
