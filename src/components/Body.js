import {restaurentList} from "../constants"
import RestaurentCard from "./RestaurantCard";
import {useState} from "react";

const Body=()=>{
    const[searchInput,setSearchInput]=useState("KFC")
    const[searchClicked, setSearchClicked]=useState("false")
    return (
        <>
        <div className="search-container">
            <input 
            type="text" 
            className="search-input" 
            placeholder="Search" 
            value={searchInput}
            onChange={(e)=>{
                setSearchInput(e.target.value); 
            }}
            />
            
             <h1>{searchClicked}</h1>
             <button className="search-btn"
             onClick={()=>{
               setSearchClicked("true")
            
             }}>Seach-{searchInput}</button>
            </div>
    <div className="resto-list">
       {
        
        restaurentList.map((restaurant)=>{
              return <RestaurentCard  {...restaurant.data } key={restaurant.data.id}/>  
           })
       }
       
      </div>
      </>
    ); 
    
   
    };

export default Body;