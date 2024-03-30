const RestaurantMenuItems = ({ item }) => {
	const { name, price, category, description } = item;
	return (
		<>
			<ul>
				<li>Product Name: {name}</li>
				<li>Category: {category}</li>
				<li>description: {description}</li>
				<li>Price: {price / 100}</li>
			</ul>
		</>
	);
};
export default RestaurantMenuItems;
