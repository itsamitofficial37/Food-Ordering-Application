import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constant";

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
