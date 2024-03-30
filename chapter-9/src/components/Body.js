import RestCardComponent from "./RestCardComponent";
import { useState, useEffect } from 'react';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
	let [listOfRes, setlistOfRes] = useState([]);
	let [filteredList, setfilteredList] = useState([]);

	useEffect(() => {fetchRestData();}, []);

	let [searchText, setSearchText] = useState('');

	const fetchRestData = async () => {
		const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
		const jsonData = await data.json();
		const restCardsFromAPI = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
		setlistOfRes(restCardsFromAPI);
		setfilteredList(restCardsFromAPI);
	};

	return (listOfRes.length === 0) ? (
		<Shimmer />
	) : (
		<div className='res-body'>
			<div className='res-search'>
				<input type="text" value={searchText} onChange={(event) => {setSearchText(event.target.value)}} />
				<button onClick={() => {
					const searchedRests = listOfRes.filter(val => val.info.name.toLowerCase().includes(searchText.toLowerCase()));
					setfilteredList(searchedRests);
				}}>Search</button>
			</div>
			<div className='res-filter' onClick={() => {
				const filteredList = listOfRes.filter(val => val.info.avgRating > 4.5)
				setfilteredList(filteredList);
			}}>
				<button>Show Top Rated Restaurants</button>
			</div>
			<div className='res-card-container'>
				{filteredList.map(val => <Link to={'/restaurant/' + val.info.id} key={val.info.id}><RestCardComponent info={val.info}/></Link>)}
			</div>
		</div>
	)
}


export default Body;