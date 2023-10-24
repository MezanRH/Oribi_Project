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
    Encrement: (state,actions) =>{
      state.cartItem.map((item)=>{
        if(item.title == actions.payload.title){
          item.quantity = item.quantity + 1
        }
      })
    },
    Decrement: (state,actions)=>{
      state.cartItem.map((item,index)=>{
        if(item.title == actions.payload.title){
          if(item.quantity > 1){
            item.quantity = item.quantity -1
          }else{
            state.cartItem.splice(index,1)
          }
        }
      })
    },
    removeFromCart:(state,action)=>{
      console.log(action.payload.title)
      state.cartItem.map((item,index)=>{
        if(action.payload.title == item.title){
          state.cartItem.splice(index,1)
        }
        
      })
    },
  },
})
export const { addTocart,Encrement,Decrement,removeFromCart } = cartSlice.actions

export default cartSlice.reducer