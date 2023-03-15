// Help to create redux store
import {configureStore} from "@reduxjs/toolkit";

// Help to combine all your modules e.g Products, ProductDetails
import {combineReducers} from "@reduxjs/toolkit";

import listings from "./modules/listings";

// Combining my modules
const reducer = combineReducers({
  // List my modules
  listings
})

// Creating my store
const index = configureStore({
  reducer,
})

export default index
