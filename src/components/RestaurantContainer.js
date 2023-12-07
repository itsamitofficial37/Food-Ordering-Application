import {restaurantList} from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const RestaurantContainer = () => {
  return (
    <div className="res-container">
      {restaurantList.map((restaurant) => (
        <RestaurantCard key={restaurant.data.id} resData = {restaurant} />
      ))}
    </div>
  );
};
export default RestaurantContainer;
