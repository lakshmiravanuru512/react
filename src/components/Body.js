import {restaurentList} from "../constants"
import RestaurentCard from "./RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


function filterData(searchText,restaurant){
return restaurant.filter((restaurant)=>restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()))
}

const Body=()=>{
    const[allRestaurents, setAllRestaurents]=useState([]);
    const[filteredRestaurents,setFilteredRestaurents]=useState([]);
    const[searchText,setSearchText]=useState("")

    useEffect(()=>{
        //API Call
       getRestaurents();
    },[]);
    async function getRestaurents(){
        console
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9540164&lng=77.65862349999999&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json);

        //Optional Chaining
        setAllRestaurents(json?.data?.cards[2]?.data.data.cards);
        setFilteredRestaurents(json?.data?.cards[2]?.data.data.cards);
    }
    console.log("render");

    //not render component(early return)
    if(!allRestaurents) return null;
    
   
   

    return (allRestaurents?.length===0) ? <Shimmer/> :(
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
               const data=filterData(searchText,allRestaurents);
               setFilteredRestaurents(data);
            
             }}>Seach</button>
            </div>
    <div className="resto-list">{
         filteredRestaurents.map((restaurant)=>{
              return (
                <Link to={"/restaurent/"+restaurant.data.id}  key={restaurant.data.id}>
              <RestaurentCard  {...restaurant.data }/>  
              </Link>
              )})
       }
       
      </div>
      </>
    ); 
    
   
    };

export default Body;