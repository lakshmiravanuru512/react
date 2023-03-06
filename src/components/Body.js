import {restaurentList} from "../constants"
import RestaurentCard from "./RestaurantCard";
import {useState, useEffect} from "react";


function filterData(searchText,restaurant){
return restaurant.filter((restaurant)=>restaurant.data.name.includes(searchText))
}

const Body=()=>{
    const[restaurent,setRestaurents]=useState(restaurentList)
    const[searchText,setSearchText]=useState("")

    useEffect(()=>{
        console.log("useEffect will be called")
    },[searchText])
    console.log("render");
    return (
        <>
        <div className="search-container">
            <input 
            type="text" 
            className="search-input" 
            placeholder="Search" 
            value={searchText}
            onChange={(e)=>{
                setSearchText(e.target.value); 
            }}
            />
            
             
             <button className="search-btn"
             onClick={()=>{
               const data=filterData(searchText,restaurent);
               setRestaurents(data);
            
             }}>Seach</button>
            </div>
    <div className="resto-list">
       {
        
        restaurent.map((restaurant)=>{
              return <RestaurentCard  {...restaurant.data } key={restaurant.data.id}/>  
           })
       }
       
      </div>
      </>
    ); 
    
   
    };

export default Body;