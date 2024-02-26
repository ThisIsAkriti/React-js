import Shimer from "./Shimer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
//import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";

const RestaurantMenu = () => {
    /*
    const[resInfo , setResInfo] = useState(null);
    const { resId } = useParams();
    */
    
    const { resId } = useParams();

    const dummy = "dummy data";

    const resInfo = useRestaurantMenu(resId);
    
    /*
    useEffect(() => {
        fetchMenu();
    }, []);
    
    const fetchMenu = async () => {
       const data = await fetch( MENU_API + resId);
       const json = await data.json();
       console.log(json);
       setResInfo(json);
    };
    */
    const[showIndex , setShowIndex] = useState(null);

    if (resInfo === null) return <Shimer/>;
    
   const {name, cuisines, costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info;
  
   
   const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
   
  
            

   const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  

  
    return(
        <div className="text-center ">
       
            <h1 className=" font-serif text-3xl mb-4 font-bold">{name}</h1>
            <p className=" font-serif text-2xl mb-6">{cuisines.join(" , ")} - {costForTwoMessage}</p>
            
            {/**CONTROLLED COMPONENT */}

            {categories.map((category , index) => (
                <RestaurantCategory key={category?.card?.card?.title}  data = {category?.card?.card} 
                  showItems = {index === showIndex? true : false}
                  setShowIndex = {() => setShowIndex(index)}
                  dummy = {dummy}
                  />
            ))}
        </div>
    );
};
export default RestaurantMenu;