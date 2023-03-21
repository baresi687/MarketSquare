import {createSlice} from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: 'loader',
  initialState: {
    isLoading: false
  },

  reducers: { // Amend the state only
    SET_LOADER: (state, action) => {
      state.isLoading = action.payload
    }
  }
})

const {SET_LOADER} = loaderSlice.actions

export const setLoadingState = (loadingStatus) => async (dispatch) => {
  dispatch(SET_LOADER(loadingStatus))
}

export default loaderSlice.reducer
