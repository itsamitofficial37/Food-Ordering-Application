import { restaurantList } from "../utils/mockData";
import RestaurantCard from "../components/RestaurantCard";
import { useState } from "react";

const Body = () => {
  
  const [listOfRestaurant, setListOfRestaurant] = useState(restaurantList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurant = restaurantList.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurant(filteredRestaurant);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
