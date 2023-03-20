import { IMG_CDN_URL } from "../constants";

const RestaurentCard=({name, cloudinaryImageId,cuisines,lastMileTravel})=>{
   
    return (
        <div className="w-52 p-2 m-2 shadow-lg bg-slate-300">
           <img src={
           IMG_CDN_URL+ cloudinaryImageId }/> 
            <h3 className="font-bold">{name}</h3>
            <h4 className="font-normal">{cuisines.join(", ")}</h4>
            <h5>{lastMileTravel} minutes</h5> 
        </div>
    )
}

export default RestaurentCard;