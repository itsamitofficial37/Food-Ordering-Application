import { IMAGE_CDN } from "../utils/constant.js";
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
  } = resData.data;
  return (
    <div className="res-card">
      <img src={IMAGE_CDN + cloudinaryImageId} className="res-image" />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{costForTwoString}</h4>
      <h4>{}</h4>
    </div>
  );
};

export default RestaurantCard;
