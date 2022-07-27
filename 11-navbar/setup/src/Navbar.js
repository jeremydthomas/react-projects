import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
	const linksContainerRef = useRef(null);
	const linksRef = useRef(null);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const linksHeight = linksRef.current.getBoundingClientRect();

		if (isOpen) {
			linksContainerRef.current.style.height = `${linksHeight.height}px`;
		} else {
			linksContainerRef.current.style.height = "0px";
		}
	}, [isOpen]);

	return (
		<div className="nav-center">
			<div className="nav-header">
				<img src={logo} alt="logo" className="logo" />
				<button onClick={() => setIsOpen(!isOpen)} className="nav-toggle">
					<FaBars />
				</button>
			</div>
			<div className="links-container" ref={linksContainerRef}>
				<ul className="links" ref={linksRef}>
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
