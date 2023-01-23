import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/userSlice'
import popupReducer from './features/popupSlice'


const store = configureStore({
  reducer: {
    user: userReducer,
    popup: popupReducer
  },
});

export default store;
