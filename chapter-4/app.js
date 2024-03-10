import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Header
 * -logo
 * -nav
 * 
 * Main Body
 * -search
 * -cards
 * 
 * footer
 * -links
 */

const Header = () => (
	<header className='header-container'>
		<div className='header-image'><img src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg" /></div>
		<ul className='header-nav'>
			<li>Home</li>
			<li>About-us</li>
			<li>Career</li>
			<li>Team</li>
		</ul>
	</header>
);

const RestCardComponentProps = (props) => {
	const {image, name, rating, time, category, address} = props;
	return (
		<div className='res-card'>
			<div className='res-card-image'>
				<img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+image} />
			</div>
			<div className='res-card-details'>
				<div className='res-name'>{name}</div>
				<div className='res-category'>{category}</div>
				<div className='res-rating'>{rating}</div>
				<div className='res-time'>{time}</div>
				<div className='res-address'>{address}</div>
			</div>
		</div>
	);
}

const FoodOrderApp = () => (
	<>
		<Header />
		<div className='res-body'>
			<div className='res-search'>Search Here!!!</div>
			<div className='res-card-container'>
				<RestCardComponentProps image='80f040545552605e33eba09f8fa30be9' name='Chicago pizza' rating='3.8' time='30-40 mins' category='Fast Food, Pizzas' address='Lake Road' />
			</div>
		</div>
	</>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FoodOrderApp />);