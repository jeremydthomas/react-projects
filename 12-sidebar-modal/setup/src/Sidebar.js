import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
	const { isSidebarOpen, closeSidebar } = useGlobalContext();
	return (
		<aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
			<div className="sidebar-header">
				<img src={logo} className="logo" alt="logo" />
				<button onClick={closeSidebar} className="close-btn">
					<FaTimes />
				</button>
			</div>
			<ul className="links">
				{links.map(({ id, url, text, icon }) => (
					<li key={id}>
						<a href={url}>
							{icon}
							{text}
						</a>
					</li>
				))}
			</ul>
			<ul className="social-icons">
				{social.map(({ id, url, icon }) => (
					<li key={id}>
						<a href={url}>{icon}</a>
					</li>
				))}
			</ul>
		</aside>
	);
};

export default Sidebar;
