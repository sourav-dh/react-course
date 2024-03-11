import RestCardComponent from "./RestCardComponent";
import restData from "../utils/restData";

const Body = () => (
	<div className='res-body'>
		<div className='res-search'>Search Here!!!</div>
		<div className='res-card-container'>
			{restData.map(val => <RestCardComponent key={val.info.id} info={val.info}/>)}
		</div>
	</div>
)

export default Body;