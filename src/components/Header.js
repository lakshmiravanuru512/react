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
    className="h-28 p-2 space-x-5 "
     alt="logo"
     src={Logo}/>
     </a>
);

const  Header=()=>{
    
    const[isLoggedIn,setIsLoggedIn]=useState(false);
    return(
        
        <div className="flex justify-between bg-pink-300 shadow-lg">
            <Title />
            
            <div className="nav-items">
                <ul className="flex py-10">
                    <Link to="/home">
                    <li className="px-2">Home</li>
                    </Link>
                    <Link to="/about">
                    <li className="px-2">About</li>
                    </Link>
                    <Link to="/contact">
                    <li className="px-2">Contact</li>
                    </Link>
                    <Link to="/cart">
                    <li className="px-2">Cart</li>
                    </Link>
                    <Link to="/instamart">
                    <li>Instamart</li>
                    </Link>
                    
                </ul>
                </div>
                {
            (isLoggedIn)?  <button className="bg-green-200 rounded-md" onClick={()=>setIsLoggedIn(false)}>Logout</button> :
             <button className="bg-green-200 rounded-md w-16 h-16 m-4" onClick={()=>setIsLoggedIn(true)}>Login</button>
        }
        </div>
       
       
       
       
    );
  };



export default Header;