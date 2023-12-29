import { useDispatch } from "react-redux";
import { IMAGE_CDN } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
 

  const dispatch = useDispatch();

  const handleAddItem = (item)=> {
    dispatch(addItem(item));
  }
  console.log(items)
    
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2  text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span className=""> - ₹  {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}</span>
            </div>
            <p className="text-xs ">{item.card.info.description}</p>
          </div>
         
          <div className="w-3/12 p-4">
          <button
                className="p-2 absolute rounded-lg bg-black text-white"
               onClick={()=>handleAddItem(item)}>
                Add +
              </button>
            {item.card.info.imageId ?  <img
              src={IMAGE_CDN + item.card.info.imageId }
              
            /> : "" }
            
           
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
