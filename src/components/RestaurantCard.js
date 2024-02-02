import Shimer from "./Shimer";
import { CDN_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime
    } = resData?.info;
 /**    
    const[updateinfo , setUpdateinfo] = useState();

    useEffect(() => {
       fetchUpdate();

    }, [])
    const fetchUpdate = async () => {
       const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/update")
       const json = data.json;
      
       setUpdateinfo(json.data);
    };
   if (updateinfo === null) return <Shimer/>;
  console.log("hello world");
  */
 
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" 
            src = {
                CDN_URL + cloudinaryImageId
            } 
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo} </h4>
            <h4>{deliveryTime} minutes</h4>
            
        </div>
    );
};

export default RestaurantCard;