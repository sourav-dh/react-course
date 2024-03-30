import { useEffect, useState } from "react";
import { REST_MENU_API } from "../utils/constants";

const useFetchRestaurantMenu = (restId) => {
	const [restaurantInfo, setRestaurantInfo] = useState(null);
	useEffect(() => {
		fetchRestData();
	}, []);

	const fetchRestData = async () => {
		const data = await fetch(REST_MENU_API + restId);
		const json = await data.json();
		setRestaurantInfo(json.data);
	};
	return restaurantInfo;
};

export default useFetchRestaurantMenu;
