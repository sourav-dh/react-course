import { LOGO_IMG_URL } from "../utils/constants";

const Header = () => (
	<header className='header-container'>
		<div className='header-image'><img src={LOGO_IMG_URL} /></div>
		<ul className='header-nav'>
			<li>Home</li>
			<li>About-us</li>
			<li>Career</li>
			<li>Team</li>
		</ul>
	</header>
);

export default Header;