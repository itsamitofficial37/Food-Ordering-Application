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

export const withPromotedLabel = (RestaurantCard) => {
  return (props)=> {
    return (
        <div>
            <label>{props.resData.info.aggregatedDiscountInfoV3.header}</label>
            <RestaurantCard {...props}/>
        </div>
    )
  }
}

export default RestaurantCard;
