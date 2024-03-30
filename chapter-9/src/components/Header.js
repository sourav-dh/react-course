import { LOGO_IMG_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
	const [loginText, setloginText] = useState("Login");
	const onlineStatus = useOnlineStatus();
	return (
		<header className="header-container">
			<div className="header-image">
				<img src={LOGO_IMG_URL} />
			</div>
			<ul className="header-nav">
				<li>Online Status : {onlineStatus ? "✅" : "❌"}</li>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About-us</Link>
				</li>
				<li>
					<Link to="/career">Career</Link>
				</li>
				<li>
					<Link to="/grocery">Grocery</Link>
				</li>
				<li>
					<button
						onClick={() => {
							setloginText(loginText === "Login" ? "Logout" : "Login");
						}}
					>
						{loginText}
					</button>
				</li>
			</ul>
		</header>
	);
};

export default Header;
