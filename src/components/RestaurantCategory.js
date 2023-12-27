import dropdown from "../assets/dropdown.png";
import ItemList from "./ItemLists";


const RestaurantCategory = ({ data ,  showItem ,  setShowIndex}) => {
  // const [showItem, setShowItem] = useState(false);
  const handleClick = () => {
    setShowIndex(!showItem);
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4  bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold">
            {data.title} ( {data.itemCards.length})
          </span>
          <span>
            <img src={dropdown} />
          </span>
        </div>

       { showItem && <ItemList items={data.itemCards} />} 
      </div>
    </div>
  );
};

export default RestaurantCategory;
