import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  currentUser: {},
}



export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => { },
    decrement: (state) => {},
    incrementByAmount: (state, action) => {
      console.log(action)
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer


