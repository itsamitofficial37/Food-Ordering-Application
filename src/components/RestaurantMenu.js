import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  console.log(resInfo);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040187&lng=76.9398195&restaurantId=295204&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json.data);
    console.log(json);
  };

  const { name, cuisines, costForTwoMessage, areaName, avgRating } =
    resInfo?.cards[0]?.card?.card?.info  || {};

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
