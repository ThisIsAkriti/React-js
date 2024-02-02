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


 /**
     import React, { useState } from 'react';

    function Example() {
    const [data, setData] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://example.com/api/data', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
        });
        const result = await response.json();
        console.log(result);
    }

    return (
        <form onSubmit={handleSubmit}>
        <input type="text" onChange={e => setData({...data, name: e.target.value})} />
        <button type="submit">Submit</button>
        </form>
    );
    }

    export default Example;

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