import RestaurantCard from "../components/RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";
import NoResult from "./NoResult";
import useRestaurantList from "../utils/useRestaurantList";
import useSearchRestaurant from "../utils/useSearchRestaurant";

const Body = () => {
  const isOnline = useStatus();
  const { listOfRestaurant, filteredRestaurant, setFilteredRestaurant } =
    useRestaurantList();
  const { searchText, setSearchText, handleSearch } = useSearchRestaurant(
    listOfRestaurant,
    filteredRestaurant,
    setFilteredRestaurant
  );

  if (isOnline === false) {
    return <NoResult />;
  }

  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search"
          value={searchText}
          placeholder="search your restaurant"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <button onClick={handleSearch}> Search</button>

      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurant = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      {listOfRestaurant.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res-container">
          {filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurant/" + restaurant?.info?.id}
            >
              <RestaurantCard resData={restaurant} />{" "}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
