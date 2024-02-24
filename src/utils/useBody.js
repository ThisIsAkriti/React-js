/*
import { useEffect, useState } from "react";

const useBody = () =>{
    //input
    const [ListOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant , setFilteredRestaurant] = useState([]);
    

    useEffect(() => {
        fetchData();
    } , []);

    const fetchData = async () => {
        const data = await fetch("https://api.allorigins.win/raw?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D15.8323892%26lng%3D78.0544946%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       
    }

    return [ListOfRestaurants, filteredRestaurant];
}
export default useBody;

*/
/*
import { useState, useEffect } from "react";

  const useBody = (MENU_URL) => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, [MENU_URL]);

  const fetchData = async () => {
    const data = await fetch(MENU_URL);
    const json = await data.json();
    console.log(json);
    //optional chaining
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return [listOfRestaurants, filteredRestaurant, fetchData];
}

export default useBody;

*/