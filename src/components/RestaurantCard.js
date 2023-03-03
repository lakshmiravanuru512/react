import { IMG_CDN_URL } from "../constants";

const RestaurentCard=({name, cloudinaryImageId,cuisines,lastMileTravel})=>{
   
    return (
        <div className="cart">
           <img src={
           IMG_CDN_URL+ cloudinaryImageId }/> 
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{lastMileTravel} minutes</h5> 
        </div>
    )
}

export default RestaurentCard;