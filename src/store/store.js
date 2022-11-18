import { combineReducers, configureStore } from "@reduxjs/toolkit";
import numberSlice from "./slices/numberSlice";


const rootReducer = combineReducers({
  number: numberSlice,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}