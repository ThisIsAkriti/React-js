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
       <h1 className="text-4xl font-bold border-2  border-t-white border-l-white  border-r-white   border-b-gray-200 pb-8 mb-6">Cart</h1>
       
       <div className="w-6/12 m-auto"> 

            <button className="bg-black text-white p-4 m-4 rounded-lg font-bold hover:bg-gray-300 hover:text-black hover:transition-all hover:font-bold" onClick={handleClearCart}>Clear Cart</button>

            {cartItems.length === 0 && 
                <div className="text-xl font-bold py-4 text-red-800">Cart is Empty! Add Items to Cart</div>
                
            }

            <ItemList items = {cartItems} />
       </div>
    </div>
}
export default Cart;