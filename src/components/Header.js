import { useState } from "react";

export const Title=()=>(
    <a href="/">
        <img
    className="logo"
     alt="logo"
     src="https://th.bing.com/th/id/R.af5a39ced19e54077c1a274b7fbb148a?rik=AzowjuDH8gZAsw&riu=http%3a%2f%2fvillafood.it%2fsites%2fall%2fthemes%2fvillafood%2fimages%2flogo-villa-food.png&ehk=kgJImOzze%2bJNfc21PbTzzP5cF5%2bwaXDHIvQJnSYd6so%3d&risl=&pid=ImgRaw&r=0"/>
     </a>
);

const  Header=()=>{
    
    
    return(
        
        <div className="header">
            <Title />
            
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
                </div>
        </div>
    );
  };



export default Header;