import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
	const { sublinks, openSidebar } = useGlobalContext();
	return (
		<nav className="nav">
			<div className="nav-center">
				<div className="nav-header">
					<img src={logo} alt="logo" className="nav-logo" />
					<button onClick={openSidebar} className="btn toggle-btn">
						<FaBars />
					</button>
				</div>
				<ul className="nav-links">
					{sublinks.map((sublink, index) => {
						console.log(sublink);
						const { page, links } = sublink;
						console.log(page);
						return (
							<li key={index}>
								<button className="link-btn">{page}</button>
							</li>
						);
					})}
				</ul>
				<button className="btn signin-btn">Sign in</button>
			</div>
		</nav>
	);
};

export default Navbar;
