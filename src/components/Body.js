import {restaurentList} from "../constants"
import RestaurentCard from "./RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline  from "../utils/useOnline";

 
const Body=()=>{
    const[allRestaurents, setAllRestaurents]=useState([]);
    const[filteredRestaurents,setFilteredRestaurents]=useState([]);
    const[searchText,setSearchText]=useState("")

    useEffect(()=>{
        //API Call
       getRestaurents();
    },[]);
    async function getRestaurents(){
        
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9540164&lng=77.65862349999999&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json);

        //Optional Chaining
        setAllRestaurents(json?.data?.cards[2]?.data.data.cards);
        setFilteredRestaurents(json?.data?.cards[2]?.data.data.cards);
    }
    console.log("render");

    const isOnline=useOnline();
    if(!isOnline){
      return <h1>Offline, Please check your internet connection!!</h1>
    }

    //not render component(early return)
    if(!allRestaurents) return null;
    return (allRestaurents?.length===0) ? <Shimmer/> :(
        <>
        <div className="p-3 bg-cyan-300 my-2">
            <input 
            type="text" 
            className="focus:bg-green-200" 
            placeholder="Search" 
            value={searchText}
            onChange={(e)=>{
                setSearchText(e.target.value); 
            }}
            /> 
            
             
             <button  data-testid="search-btn" className="search-btn px-2 m-3 bg-red-400 hover:bg-red-500  rounded-lg "
             onClick={()=>{
               const data=filterData(searchText,allRestaurents);
               setFilteredRestaurents(data);
            
             }}>Seach</button>
            </div>
    <div className="flex flex-wrap">{
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