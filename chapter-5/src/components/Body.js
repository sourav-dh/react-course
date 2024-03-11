import RestCardComponent from "./RestCardComponent";
import restData from "../utils/restData";
import { useState } from 'react';

const Body = () => {
	let [listOfRes, setlistOfRes] = useState(restData);
	return (
		<div className='res-body'>
			<div className='res-search'>Search Here!!!</div>
			<div className='res-filter' onClick={() => {
				const filteredList = listOfRes.filter(val => val.info.avgRating > 4.5)
				setlistOfRes(filteredList);
			}}>
				<button>Show Top Rated Restaurants</button>
			</div>
			<div className='res-card-container'>
				{listOfRes.map(val => <RestCardComponent key={val.info.id} info={val.info}/>)}
			</div>
		</div>
	)
}


export default Body;