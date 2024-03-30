import { useState } from "react";
import RestaurantMenuItems from "./RestaurantMenuItems";

const RestaurantMenuCategory = ({ name, items, isShow, setIsShowindex }) => {
	return (
		<div className="rest-menu-category">
			<div
				className="rest-menu-category__title"
				onClick={() => setIsShowindex()}
			>
				<div>
					{name} ({items.length})
				</div>
				<div>↓</div>
			</div>
			{isShow && (
				<div className="rest-menu-category__items">
					{items.map((item) => (
						<RestaurantMenuItems item={item.card.info} />
					))}
				</div>
			)}
		</div>
	);
};

export default RestaurantMenuCategory;
