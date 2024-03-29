import { LOGO_IMG_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
	const [loginText, setloginText] = useState('Login');
	return (
		<header className='header-container'>
			<div className='header-image'><img src={LOGO_IMG_URL} /></div>
			<ul className='header-nav'>
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/about'>About-us</Link></li>
				<li><Link to='/career'>Career</Link></li>
				<li><button onClick={() => {
					setloginText(loginText === 'Login' ? 'Logout' : 'Login');
				}}>{loginText}</button></li>
			</ul>
		</header>
	);
}

export default Header;