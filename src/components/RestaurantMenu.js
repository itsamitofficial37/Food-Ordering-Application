import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const { name, cuisines, costForTwoMessage, areaName, avgRating } =
    resInfo?.cards[0]?.card?.card?.info || {};

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
    </div>
  );
};

export default RestaurantMenu;
