import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({items , dummy}) => {

    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        // Dispatch an action
        dispatch(addItem(item))
    };
  
    return(
        <div>
            {items.map((item) => (

                <div
                 data-testid="foodItems"
                 key={item.card.info.id} className="p-10 m-2 border-b-2 border-gray-400 text-left ">
                
                    <div className="flex justify-between">
                        <div className="py-2">
                            <span className="font-bold text-xl">{item.card.info.name}</span>
                            <span className="font-bold text-xl"> - ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                            <p className="text-xs w-60">{item.card.info.description}</p>

                        </div>
                        
                        <div>
                            <div className="absolute">
                                <button className="p-1 font-bold border-2 bg-white text-green-700 border-green-600 rounded-lg mx-6 my-20"
                                onClick={() => handleAddItem(item)}>Add +</button>
                            </div>
                            <img src= {item.card.info.imageId ? CDN_URL + item.card.info.imageId : "https://wallpaperaccess.com/full/767152.jpg"  } className="w-28 h-24 rounded-lg shadow-lg border-black border-2"/>
                        </div>
                       
                    </div>


                </div>      
            ))}
        </div>
    );  
};
export default ItemList;