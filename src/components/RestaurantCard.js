import { IMG_CDN_URL } from "../constants";
import {useContext} from "react";
import UserContext from "../utils/UserContext";

const RestaurentCard=({name, cloudinaryImageId,cuisines,lastMileTravel})=>{
    const {user}=useContext(UserContext)
    return (
        <div className="w-52 p-2 m-2 shadow-lg bg-slate-300">
           <img src={
           IMG_CDN_URL+ cloudinaryImageId }/> 
            <h3 className="font-bold">{name}</h3>
            <h4 className="font-normal">{cuisines.join(", ")}</h4>
            <h5>{lastMileTravel}</h5> 
            <h5>{user.name}</h5>
        </div>
    )
}

export default RestaurentCard;