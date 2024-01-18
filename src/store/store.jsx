import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './CartSlice'

const confStore = configureStore({
    reducer:{
        cart: cartReducer
    }
})

export default confStore