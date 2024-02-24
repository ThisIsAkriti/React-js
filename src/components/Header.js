import { LOGO_URL } from "../utils/constants";
import { useContext, useEffect, useState  } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  
  const [btnNameReact , setbtnNameReact] = useState('LogIn');

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
            <li className="px-4">Online Status : {onlineStatus? "✔️": "🔴"}</li> 
            <li  className="px-4">
              <Link to = "/" >Home</Link> 
            </li>
            <li className="px-4">
              <Link to = "/About" >About Us</Link>  
            </li>
            <li className="px-4">
              <Link to = "/Contact" >Contact Us</Link>
            </li>
            <li className="px-4">
              <Link to = "/Grocery" >Grocery</Link>
            </li>
            <li className="px-4 font-bold">
            <Link to = "/cart" >Cart - ({cartItems.length} items)</Link>
            </li>
            <div className="login-btn cursor-pointer" onClick={() => {
              btnNameReact === "LogIn" ?
              setbtnNameReact("LogOut"):
              setbtnNameReact("LogIn") 
              
            }}>{btnNameReact}</div>
            <li className="px-4 font-bold">{loggedInUser}</li>
          </ul>
        </div>

      </div>
        
    );
};

export default Header;