
import RestaurantCard from "./RestaurantCard";

import {  useEffect, useState  } from "react";

import Shimer from "./Shimer";

import { Link } from "react-router-dom";

const Body = () => {
           
  const [ListOfRestaurants , setListOfRestaurants] = useState ([]);
  const [filteredRestaurant , setFilteredRestaurant] = useState([]);

  const [searchText , setsearchText ] = useState ("");
  

  useEffect( () => { 
    fetchData();
    
  } , []);
  
  const fetchData = async () => {
    const data = await fetch("https://api.allorigins.win/raw?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D15.8323892%26lng%3D78.0544946%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
    );
  
    const json = await data.json();

    console.log(json);
    //optional chaining
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };


  return ListOfRestaurants.length === 0 ? (<Shimer />) :  (
    <div className="body">
      <div className="filter">
        <div className="search"><input type="text" className="search-bar" value={searchText} onChange={(e) => {
          setsearchText(e.target.value);
          }}/>
          <button onClick={() => {
          console.log(searchText);

          const filteredRestaurant = ListOfRestaurants.filter(
            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          

          setFilteredRestaurant(filteredRestaurant);
         
          }}>Search</button>  
        </div>
          
        <button className="filter-btn"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter((res) => res.info.avgRating > 4.4);
            setFilteredRestaurant(filteredList);
            
          }}
          > Top Rated Restaurant
        </button>
       
      </div>

      <div className="Restraunt-container">
        {filteredRestaurant.map((restaurant) => (
          <Link className="link-to-res"
          key={restaurant.info.id}
          to={"/resturants/" + restaurant.info.id}
          >
          < RestaurantCard resData = {restaurant} />
          </Link>
          ))
        }
      </div>
    </div>
  );
}; 

export default Body;