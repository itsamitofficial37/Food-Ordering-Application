import { IMAGE_CDN } from "../utils/constant";
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwo,
    avgRating,
  } = resData.info;
  return (
    <div className="res-card">
      <img src={IMAGE_CDN + cloudinaryImageId} className="res-image" />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;