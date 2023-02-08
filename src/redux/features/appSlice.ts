import { createSlice } from "@reduxjs/toolkit"


const initialState = {
 isLoading: false,
}



export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { setIsLoading, } = counterSlice.actions

export default counterSlice.reducer