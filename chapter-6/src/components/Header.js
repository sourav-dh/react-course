import { LOGO_IMG_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
	const [loginText, setloginText] = useState('Login');
	return (
		<header className='header-container'>
			<div className='header-image'><img src={LOGO_IMG_URL} /></div>
			<ul className='header-nav'>
				<li>Home</li>
				<li>About-us</li>
				<li>Career</li>
				<li>Team</li>
				<li><button onClick={() => {
					setloginText(loginText === 'Login' ? 'Logout' : 'Login');
				}}>{loginText}</button></li>
			</ul>
		</header>
	);
}

export default Header;