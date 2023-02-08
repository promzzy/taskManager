import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/userSlice'
import popupReducer from './features/popupSlice'
import appReducer from './features/appSlice'


const store = configureStore({
  reducer: {
    user: userReducer,
    popup: popupReducer,
    app: appReducer
  },
});

export default store;
