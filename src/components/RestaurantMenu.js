import { useEffect, useState } from "react";
import Shimer from "./Shimer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import { CDN_URL } from "../utils/constants";


const RestaurantMenu = () => {
    const[resInfo , setResInfo] = useState(null);
    
    const { resId } = useParams();
    useEffect(() => {
        fetchMenu();
    }, []);
    
    const fetchMenu = async () => {
       const data = await fetch( MENU_API + resId);
       const json = await data.json();
       console.log(json);
       setResInfo(json);
    };
    
    if (resInfo === null) return <Shimer/>;
   const {name, cuisines, costForTwoMessage} = resInfo?.data?.cards[0]?.card?.card?.info;
   
   const {itemCards} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
   
   return(
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(" , ")} - {costForTwoMessage}</p>
           
             
            <ul className="items-container">
                {itemCards.map((item)=> 
                <li  className="items-pack" key={item.card.info.id}>
                    <ul className="mini-items-pack">
                        <li>{item.card.info.name}</li>
                        <li className="mini-items-pack-one">Rs.{item.card.info.price/100}</li>
                        <li className="mini-items-pack-two">{item.card.info.itemAttribute.vegClassifier}</li>
                        
                    </ul>
                    {<img className="items-image" src= {CDN_URL + item.card.info.imageId}  /> }
                </li> )}
                
                
            </ul>
        </div>
    );
}
export default RestaurantMenu;