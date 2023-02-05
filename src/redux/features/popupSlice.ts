import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  popupComponent: null,
  ispopupOpen: false,
  onClose: (() => {})
}



export const counterSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    setPopupComponent: (state, action) => {
      state.popupComponent = action.payload
     },
    showPopup: (state, action) => {
      return {
        ...state,
      ispopupOpen: action.payload.ispopupOpen,
      onClose: action.payload.onClose || (() => {}),
    }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPopupComponent, showPopup } = counterSlice.actions

export default counterSlice.reducer


