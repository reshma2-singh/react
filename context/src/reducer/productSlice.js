import {createSlice} from "@reduxjs/toolkit";

export const productSlice=createSlice({
name:'product',
initialState:{
    cartItems:[],
    
    },
reducers:{
    productUpdate:(state,action)=>{
        const itemInCart=state.cartItems.find((item)=>item.id===action.payload.id);
        if(itemInCart){
            itemInCart.quantity++;
        }else{
        state.cartItems.push({...action.payload,quantity:1})
        }
    
    },
    productRemove:(state,action)=>{
        const updatedCart = state. cartItems.filter((p) => p.id !== action.payload.id);
        state.cartItems = updatedCart;
    },
    productIncrease:(state,action)=>{
      const num=state.cartItems.findIndex((item)=>item.id===action.payload.id)
      if(state.cartItems[num].quantity>=1)
      state.cartItems[num].quantity +=1
    },
    productDecrease:(state,action)=>{
        const num=state.cartItems.findIndex((item)=>item.id===action.payload.id)
        if(state.cartItems[num].quantity>1){
        state.cartItems[num].quantity -=1}
        else if(state.cartItems[num].quantity==1){
            const update=state.cartItems[num].filter((item)=>(
                item.id!==action.payload.id
            ))
            state.cartItems=update
        }
    }
    
   
}
})
export const {cartItems,productUpdate,productRemove,productIncrease,productDecrease }= productSlice.actions;
export const selectProduct = (state) => state.product.cartItems;
export default productSlice.reducer