import { RES_IMG_URL } from "../utils/constants";

const RestCardComponent = (props) => {
	const {
		cloudinaryImageId: image,
		name,
		avgRating: rating,
		sla,
		cuisines,
		locality: address,
	} = props.info;
	return (
		<div className="res-card">
			<div className="res-card-image">
				<img src={RES_IMG_URL + image} />
			</div>
			<div className="res-card-details">
				<div className="res-name">{name}</div>
				<div className="res-category">{cuisines.join(", ")}</div>
				<div className="res-rating">{rating}</div>
				<div className="res-time">{sla.slaString}</div>
				<div className="res-address">{address}</div>
			</div>
		</div>
	);
};

export const LabeledRestCardComponent = (InputComponentName) => {
	return ({ info }) => {
		return (
			<div>
				<label className="promoted">Top Rated ⭐</label>
				<InputComponentName info={info} />
			</div>
		);
	};
};

export default RestCardComponent;
