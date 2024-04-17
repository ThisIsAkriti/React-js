import { LOGO_URL } from "../utils/constants";
import { useContext, useEffect, useState  } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {

  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);

  //Subscribing to the store using SELECTOR 
  
  const cartItems = useSelector((store) => store.cart.items);

    return (
      <div className="flex justify-between shadow-lg mb-2 p-4">
        <div className="logo-container">
          <img className="w-24"
            src = {LOGO_URL} 
          />
        </div>
        <div className="flex items-center ">
          <ul className="flex p-4 m-4">
            <li className="px-4 text-lg  mt-2 mb-6 font-serif ">Online Status : {onlineStatus? "✔️": "🔴"}</li> 
            <li  className="px-4 text-lg  mt-2 mb-6 font-serif ">
              <Link to = "/" >Home</Link> 
            </li>
            <li className="px-4 text-lg mt-2 mb-6 font-serif ">
              <Link to = "/About" >About Us</Link>  
            </li>
            <li className="px-4 text-lg  mt-2 mb-6 font-serif ">
              <Link to = "/Contact" >Contact Us</Link>
            </li>
            <li className="px-4 text-lg mt-2 mb-6 font-serif ">
              <Link to = "/Grocery" >Grocery</Link>
            </li>
            <li className="px-4  text-lg mt-2 mb-6 font-serif  ">
            <Link to = "/cart" >Cart - ({cartItems.length} items)</Link>
            </li>
            <li className="px-4  text-lg mt-2 mb-6 font-serif  ">
            <Link to = "/Guest" >Hi Guest</Link>
            </li>

            <li className="px-4 text-lg font-bold mt-2 mb-6 font-serif">{loggedInUser}</li>
          </ul>
        </div>

      </div>
        
    );
};

export default Header;