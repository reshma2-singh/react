import {configureStore} from "@reduxjs/toolkit";
import productReducer from './reducer/productSlice'

const store = configureStore({
    reducer:{
        product:productReducer,
        
    }
})
export default store;