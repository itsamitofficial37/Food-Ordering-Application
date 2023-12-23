import { useState } from "react";
const useSearchRestaurant = (
  listOfRestaurant,
  filteredRestaurant,
  setFilteredRestaurant
) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    const filteredRestaurant = listOfRestaurant.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredRestaurant);
  };
  return { filteredRestaurant, searchText, setSearchText, handleSearch };
};

export default useSearchRestaurant;
