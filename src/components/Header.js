import { LOGO_URL } from "../utils/constants";
import { useEffect, useState  } from "react";
import {Link} from "react-router-dom";

const Header = () => {
  
  const [btnNameReact , setbtnNameReact] = useState('LogIn');
  
  console.log("header rendered!");

  useEffect(() => {
    console.log("useEffect called");
  } , []);
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo"
            src = {LOGO_URL} 
          />
        </div>
        <div className="nav-items">
            <ul>
            <li><Link to = "/About" >Home</Link> </li>
            <li>
              <Link to = "/About" >About Us</Link>  
            </li>
            <li>
              <Link to = "/Contact" >Contact Us</Link>
            </li>
            <li>
            <Link to = "/Contact" >Cart</Link>
            </li>
            <div className="login-btn" onClick={() => {
              btnNameReact === "LogIn" ?
              setbtnNameReact("LogOut"):
              setbtnNameReact("LogIn") 
              
            }}>{btnNameReact}</div>
            </ul>
        </div>

      </div>
        
    );
};

export default Header;