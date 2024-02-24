import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import {  useContext, useEffect, useState  } from "react";
import Shimer from "./Shimer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {
  
  const [ListOfRestaurants , setListOfRestaurants] = useState ([]);
  const [filteredRestaurant , setFilteredRestaurant] = useState([]);

  const [searchText , setSearchText ] = useState ("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect( () => { 
    fetchData();
    
  } , []);
  
  const fetchData = async () => {
    const data = await fetch("https://api.allorigins.win/raw?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D15.8323892%26lng%3D78.0544946%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
    );
  
    const json = await data.json();

    //optional chaining
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };  
  
  
  const onlineStatus =  useOnlineStatus();
  if(onlineStatus === false)
    return( 
      <h1 className="offline-msg">Looks Like You Are Offline. Check Your Internet Connection!</h1>
    );
  
  const { loggedInUser , setUserName } = useContext(UserContext);
  

  return ListOfRestaurants.length === 0 ? <Shimer />
   : 
    (
    <div className="body">
      <div className="filter flex">
        <div className="search m-2 p-2">
          <input
           data-testid="searchInput"
           type="text" className="search-bar border border-solid border-grey py-1"
           value={searchText}
           onChange={(e) => {
           setSearchText(e.target.value);
          }}/>
          <button className="px-4 py-1 border border-grey m-4 bg-gray-200 rounded-lg" onClick={() => {
        

          const filteredRestaurant = ListOfRestaurants.filter(
            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          

          setFilteredRestaurant(filteredRestaurant);
         
          }}>Search</button>  
        </div>
          
        <div 
        className="search m-2 p-2 flex items-center"> 
          <button 
            className="filter-btn rounded-lg  bg-gray-200 px-2 py-2"
            onClick={() => {
              const filteredList = ListOfRestaurants.filter((res) => res.info.avgRating > 4.5);
              setFilteredRestaurant(filteredList);
              
            }}
            > Top Rated Restaurant
          </button>
        </div>

        <div className=" m-2 p-2 flex items-center">
          <label className="rounded-lg bg-gray-200 px-2 py-2 mr-4">UserName:</label>
          <input
           className=" border border-solid border-grey py-1 px-2"
           value={loggedInUser}
           onChange={(e) => setUserName(e.target.value)} />
        </div> 
       
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link className="link-to-res"
          key={restaurant.info.id}
          to={"/resturants/" + restaurant.info.id}
          >
          {restaurant.info.type?
          (< RestaurantCard resData = {restaurant} />)
          :
          (<RestaurantCardPromoted resData = {restaurant}/>)
          }
          </Link>
          ))
        }
      </div>
    </div>
  );
}; 

export default Body;