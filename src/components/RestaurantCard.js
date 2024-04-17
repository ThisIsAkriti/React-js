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
        sla:{deliveryTime}
    } = resData?.info;
    
  
    return (
        <div
         data-testid = "resCard"
         className="m-4 p-4 w-[200px] bg-gray-200 rounded-lg hover:shadow-xl mx-8">
            <img className="res-logo rounded-xl" alt="res-logo" 
            src = {
                CDN_URL + cloudinaryImageId
            } 
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4 className="cusines-name">{cuisines.join(" , ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo} </h4>
            <h4>{deliveryTime} minutes</h4>
            
        </div>
    ); 

}


export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        
        return (
            <div>
                <label className = "absolute bg-black text-white ml-4 p-2 rounded-lg" >
                    Promoted
                </label>
                <RestaurantCard {...props} />
            </div>
        );

    };
};


export default RestaurantCard;