import { useState } from "react";
import ItemList from "./ItemList";
    
const RestaurantCategory = ({data,showItems ,  setShowIndex , dummy}) => {
    const [collapseItem, setCollapseItem] = useState(false);
    const HandleClick = () => {
        setCollapseItem(!collapseItem);
        setShowIndex();
    }
 
    return( 
    <div>
        <div className="w-6/12 p-4 mx-auto  my-4 shadow-lg bg-gray-200">
            <div className="flex justify-between cursor-pointer" onClick={HandleClick}>
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                
                <span> <img className='w-5 flex mt-2 '  
                    /*src={require('../../arrow.png')} */
                    src= " https://th.bing.com/th/id/OIP.yQxVl3uYhegN6ykRtTG_MQAAAA?rs=1&pid=ImgDetMain "
                    alt="fireSpot"/>
                </span>
            </div>
            {collapseItem && showItems && <ItemList items = {data.itemCards} dummy = {dummy}/>}
        </div>
    
    </div>
    );
};
export default RestaurantCategory;