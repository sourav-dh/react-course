import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchRestaurantMenu from "../utils/useFetchRestaurantMenu";

const RestaurantMenu = () => {
	const { rest_id } = useParams();
	const cardInfo = useFetchRestaurantMenu(rest_id);

	if (!cardInfo) {
		return <h1>Restaurant Menu is loading...</h1>;
	}

	const { areaName, city, costFortwoMessage, cuisines, name } =
		cardInfo?.cards[2]?.card?.card?.info;
	const menuLists =
		cardInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card
			.itemCards;

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
			<h3>Menu : </h3>
			<ul>
				{menuLists.map((list) => (
					<li key={list.card.info.id}>
						{list.card.info.name} - {list.card.info.price / 100}
					</li>
				))}
			</ul>
		</>
	);
};

export default RestaurantMenu;
