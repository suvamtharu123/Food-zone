import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./slices/CartSlice";
import CategoryReducer from './slices/CategorySlice'
import SearchReducer from './slices/SearchSlice'
const store = configureStore(
  {
    reducer: {
      cart: CartReducer,
      category: CategoryReducer,
      search: SearchReducer,
    },
  }
);

export default store;