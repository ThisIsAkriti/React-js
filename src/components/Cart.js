import {useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return <div className=" text-center m-4 p-4 ">
       <h1 className="text-4xl font-bold font-sans">Cart</h1>
       
       <div className="w-6/12 m-auto"> 

       <button className="bg-black text-white p-4 m-4 rounded-lg font-bold " onClick={handleClearCart}>Clear Cart</button>

       {cartItems.length === 0 && <h1>Cart is Empty! Add Items to Cart</h1>}

        <ItemList items = {cartItems} />
       </div>
    </div>
}
export default Cart;