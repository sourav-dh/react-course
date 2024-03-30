import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchRestaurantMenu from "../utils/useFetchRestaurantMenu";
import RestaurantMenuCategory from "./RestaurantMenuCategory";

const RestaurantMenu = () => {
	const { rest_id } = useParams();
	const cardInfo = useFetchRestaurantMenu(rest_id);
	const [isShowIndex, setIsShowindex] = useState(0);

	if (!cardInfo) {
		return <h1>Restaurant Menu is loading...</h1>;
	}

	const { areaName, city, costFortwoMessage, cuisines, name } =
		cardInfo?.cards[2]?.card?.card?.info;
	const categoryLists =
		cardInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
			(category) =>
				category.card.card["@type"] ===
				"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
		);

	return (
		<>
			<h1>{name}</h1>
			<p>
				<b>Area : </b>
				{areaName}, {city}
			</p>
			<p>
				<b>Cuisines : </b>
				{cuisines.join(", ")}
			</p>
			<p>{costFortwoMessage}</p>
			{categoryLists.map((category, index) => (
				<RestaurantMenuCategory
					name={category.card.card.title}
					items={category.card.card.itemCards}
					isShow={index === isShowIndex ? true : false}
					key={category.card.card.title}
					setIsShowindex={() => setIsShowindex(index)}
				/>
			))}
		</>
	);
};

export default RestaurantMenu;
