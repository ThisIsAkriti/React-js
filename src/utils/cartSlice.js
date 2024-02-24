import { createSlice } from "@reduxjs/toolkit"
const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items: []
    },
    reducers: {
        addItem: (state , action) => { // we modify the state using action.
            state.items.push(action.payload); // mutating the state itself
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
            // OR return {  items : [] };  both are just same 
        },
    },
});
export const {addItem , removeItem , clearCart} = cartSlice.actions;
export default cartSlice.reducer;