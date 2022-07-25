import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
	const navRef = useRef(null);

	const handleClick = () => {
		navRef.current.style.height
			? (navRef.current.style.height = "")
			: (navRef.current.style.height = "200px");
		console.log(navRef.current);
	};

	return (
		<div className="nav-center">
			<div className="nav-header">
				<img src={logo} alt="logo" className="logo" />
				<button onClick={handleClick} className="nav-toggle">
					<FaBars />
				</button>
			</div>
			<div className="links-container" ref={navRef}>
				<ul className="links">
					{links.map((link) => {
						return (
							<li key={link.id}>
								<a href={link.url}>{link.text}</a>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="social-icons">
				{social.map((icon) => {
					return (
						<a key={icon.id} href={icon.url}>
							{icon.icon}
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default Navbar;
