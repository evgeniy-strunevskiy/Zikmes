import { createSlice,  } from "@reduxjs/toolkit";

const initialState = {
  status: 0,
  isloading: false,
  error: ''
}

export const numberSlice = createSlice({
  name: 'number',
  initialState, 
  reducers: {
    numberFetching(state) {
      state.isloading = true;
    },
    numberFetchingSucces(state, action) {
      state.status = action.payload;
      state.isloading = false;
    },
    numberFetchingError(state, action) {
      state.isloading = false;
      state.error = action.payload;
    }

  }
})

export const {numberFetching, numberFetchingSucces, numberFetchingError} = numberSlice.actions;
export default numberSlice.reducer;