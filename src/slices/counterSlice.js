import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    dadt : 3232,
  },
  reducers: {
    increment: (state,actions) => {
      // state.value++
      state.value = state.value+actions.payload
    },
    dincrement: (state) => {
      if(state.value > 0){
        state.value--
      }
      
    },
  },
})
export const { increment,dincrement } = counterSlice.actions

export default counterSlice.reducer