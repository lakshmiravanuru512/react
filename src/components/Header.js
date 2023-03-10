import { useState } from "react";
import Logo from "../assets/image/foodvilla.png"
import {Link} from "react-router-dom";

const loggedInUser=()=>{
    //API call to check authentication
    return false;
}

const Title=()=>(
    <a href="/">
        <img
    className="logo"
     alt="logo"
     src={Logo}/>
     </a>
);

const  Header=()=>{
    
    const[isLoggedIn,setIsLoggedIn]=useState(false);
    return(
        
        <div className="header">
            <Title />
            
            <div className="nav-items">
                <ul>
                    <Link to="/home">
                    <li>Home</li>
                    </Link>
                    <Link to="/about">
                    <li>About</li>
                    </Link>
                    <Link to="/contact">
                    <li>Contact</li>
                    </Link>
                    <Link to="/cart">
                    <li>Cart</li>
                    </Link>
                    
                </ul>
                </div>
                {
            (isLoggedIn)?  <button onClick={()=>setIsLoggedIn(false)}>Logout</button> :
             <button onClick={()=>setIsLoggedIn(true)}>Login</button>
        }
        </div>
       
       
       
       
    );
  };



export default Header;