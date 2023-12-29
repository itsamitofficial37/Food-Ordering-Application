import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  
  const [showIndex , setShowIndex] = useState(null);

  const { name, cuisines, costForTwoMessage, areaName, avgRating } =
    resInfo?.cards[0]?.card?.card?.info || {};

  const categories =
    resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter((c) => c.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" );
  console.log(categories);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1  className="font-bold my-6 text-2xl">{name}</h1>
      <ul>
        <li className="font-bold text-lg">
          {cuisines.join(",")} - {costForTwoMessage}
        </li>
        <li className="font-bold text-lg">{areaName}</li>
        <li className="font-bold text-lg">{avgRating}</li>
      </ul>
      <div>
        {categories.map((c , index) => (
          <RestaurantCategory  
          showItem = {index === showIndex ? true : false}
          setShowIndex={() => setShowIndex((prevIndex) => (prevIndex === null ? index : null))}
          key={c.card?.card.title} data={c?.card?.card} 
          name = "dummy Name "/>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;