import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItem: [],
  },
  reducers: {
    addTocart: (state,actions) => {
      if(state.cartItem.length > 0){
        let arr = []
        state.cartItem.map((item)=>{
          if(item.title == actions.payload.title){
            item.quantity = item.quantity + 1
            arr.push(item.title);
          }
          
        })
        
        if(arr.indexOf(actions.payload.title) == -1){
          state.cartItem.push(actions.payload);
        }
        
      }else{
        state.cartItem.push(actions.payload)
      }
    },
  },
})
export const { addTocart } = cartSlice.actions

export default cartSlice.reducer