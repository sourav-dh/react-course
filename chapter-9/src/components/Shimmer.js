const Shimmer = () => {
	const items = [];
	for(let i = 0; i < 9; i++) {
		items.push(<div key={'shimmer-'+i} className='res-card res-card__shimmer'></div>);
	}

	return (
		<div className='res-card-container'>
			{ items }
		</div>
	)
};

export default Shimmer;