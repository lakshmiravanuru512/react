import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import {addItem} from "../utils/cartSlice";
import {useDispatch} from "react-redux";

const RestaurentMenu=()=>{
    const {id}=useParams();
    const restaurant=useRestaurant(id);

    const dispatch=useDispatch();

    const handleAddItem=()=>{
        dispatch(addItem("Grapes"))
    }
    
    return (!restaurant)? <Shimmer/> : (
        <div className="menu ">
            <div>
            <h1>Restaurent id:{id}</h1>
            <h2>{restaurant?.name}</h2>
            <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
            <h3>{restaurant?.area}</h3>
            <h3>{restaurant?.city}</h3>
            <h3>{restaurant?.avgRating}</h3>
            <h3>{restaurant.costForTwoMsg}</h3>
            </div>
            <div>
                <button className="p-2 m-2 bg-green-400" onclick={()=>handleAddItem()}>AddItem</button>
            </div>
            <div>
                <h1>Menu</h1>
                <ul>
                    {
                        Object.values(restaurant.menu.items).map((item)=><li key={item.id}>{item.name}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default RestaurentMenu;