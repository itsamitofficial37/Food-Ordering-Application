import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const { name, cuisines, costForTwoMessage, areaName, avgRating } =
    resInfo?.cards[0]?.card?.card?.info || {};

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];

  console.log(categories);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div>
      <h1>{name}</h1>
      <ul>
        <li>
          {cuisines.join(",")} - {costForTwoMessage}
        </li>
        <li>{areaName}</li>
        <li>{avgRating}</li>
      </ul>
      <div>
        {categories.map((c) => (
          <RestaurantCategory key={c?.card?.info.id} data={c?.card?.info} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;