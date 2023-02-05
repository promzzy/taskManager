import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  currentUser: null,
  team: [],
  task: [],
}



export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.currentUser = action.payload
    },
    setTeamMember: (state, action) => {
      state.team = action.payload
    },
    setTask: (state, action) => {
      state.task = action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { setUserData, setTeamMember, setTask } = counterSlice.actions

export default counterSlice.reducer


