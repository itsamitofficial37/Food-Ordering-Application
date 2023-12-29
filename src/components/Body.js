import RestaurantCard, {
  withPromotedLabel,
} from "../components/RestaurantCard";

import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";
import NoResult from "./NoResult";
import useRestaurantList from "../utils/useRestaurantList";
import useSearchRestaurant from "../utils/useSearchRestaurant";
import { useContext } from "react";
import UserContext from "../utils/UserContext";


const Body = () => {
  const isOnline = useStatus();

  
  const { listOfRestaurant, filteredRestaurant, setFilteredRestaurant } =
    useRestaurantList();
  const { searchText, setSearchText, handleSearch } = useSearchRestaurant(
    listOfRestaurant,
    filteredRestaurant,
    setFilteredRestaurant
  );

  const {setUserName ,  loggedInUser} = useContext(UserContext)

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  if (isOnline === false) {
    return <NoResult />;
  }

  return (
    <div className="body">
      <div className="search m-4 p-4">
        <input
          type="text"
          className="border border-solid border-blac p-2"
          value={searchText}
          placeholder=" Search your restaurant"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-green-100 m-4 rounded-lg"
          onClick={handleSearch}
        >
          Search
        </button>
        <button
          className="px-4 py-2 bg-green-100 m-4 rounded-lg"
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
        <div className="flex flex-wrap">
          {filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurant/" + restaurant?.info?.id}
            >
              {restaurant.info?.aggregatedDiscountInfoV3?.header ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
