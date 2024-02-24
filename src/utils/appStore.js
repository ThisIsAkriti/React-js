import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const appStore = configureStore({
    reducer : { // this one is responsible to modify appStore only. 
        cart : cartReducer,
    }
});

export default appStore;
