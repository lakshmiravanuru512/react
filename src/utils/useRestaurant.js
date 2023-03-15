import { useState,useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant=(id)=>{
    const[restaurent,setRestaurent]=useState(null);
    useEffect(()=>{
        getRestaurentsInfo();
    },[]);

    async function getRestaurentsInfo(){
        const data=await fetch(FETCH_MENU_URL +id);
        const json= await data.json();
        console.log(json);
        setRestaurent(json.data)
    }
      return restaurent;
}
export default useRestaurant;