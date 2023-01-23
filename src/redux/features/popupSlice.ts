import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  popupComponent: null,
  ispopupOpen: false,
}



export const counterSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    setPopupComponent: (state, action) => {
      state.popupComponent = action.payload
     },
    showPopup: (state, action) => {
      state.ispopupOpen = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPopupComponent, showPopup } = counterSlice.actions

export default counterSlice.reducer


