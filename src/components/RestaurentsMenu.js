import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurentMenu=()=>{
    const {id}=useParams();
    const restaurant=useRestaurant(id);
    
    return (!restaurent)? <Shimmer/> : (
        <div className="menu">
            <div>
            <h1>Restaurent id:{id}</h1>
            <h2>{restaurent?.name}</h2>
            <img src={IMG_CDN_URL + restaurent?.cloudinaryImageId} />
            <h3>{restaurent?.area}</h3>
            <h3>{restaurent?.city}</h3>
            <h3>{restaurent?.avgRating}</h3>
            <h3>{restaurent.costForTwoMsg}</h3>
            </div>
            <div>
                <h1>Menu</h1>
                <ul>
                    {
                        Object.values(restaurent.menu.items).map((item)=><li key={item.id}>{item.name}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default RestaurentMenu;