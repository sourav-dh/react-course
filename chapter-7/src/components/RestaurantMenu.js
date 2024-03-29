import { useEffect, useState } from "react";
import { REST_MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
	const [cardInfo, setCardInfo] = useState(null);
	useEffect(() => {
		fetchRestMenu();
	}, []);
	const {rest_id} = useParams();

	const fetchRestMenu = async () => {
		const data = await fetch(REST_MENU_API + rest_id);
		const json = await data.json();
		setCardInfo(json.data);
	}

	if (!cardInfo) {
		return (<h1>Restaurant Menu is loading...</h1>);
	}

	const { areaName, city, costFortwoMessage, cuisines, name } = cardInfo?.cards[2]?.card?.card?.info;
	const menuLists = cardInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card.itemCards;

	return (
		<>
			<h1>{name}</h1>
			<p><b>Area : </b>{areaName}, {city}</p>
			<p><b>Cuisines : </b>{cuisines.join(', ')}</p>
			<p>{costFortwoMessage}</p>
			<h3>Menu : </h3>
			<ul>
				{menuLists.map(list => <li key={list.card.info.id}>{list.card.info.name} - {list.card.info.price / 100}</li>)}
			</ul>
		</>
	);
}

export default RestaurantMenu;