import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

const getStorageTheme = () => {
	let theme = "light-theme";
	if (localStorage.getItem("theme")) {
		theme = localStorage.getItem("theme");
	}
	return theme;
};

function App() {
	const [theme, setTheme] = useState(getStorageTheme());

	const toggleTheme = () => {
		if (theme === "light-theme") {
			setTheme("dark-theme");
		} else {
			setTheme("light-theme");
		}
	};

	useEffect(() => {
		document.documentElement.className = theme;
		localStorage.setItem("theme", theme);
	}, [theme]);
	return (
		<main>
			<nav>
				<div className="nav-center">
					<h1>overreacted</h1>
					<button onClick={toggleTheme} className="btn">
						toggle
					</button>
				</div>
			</nav>
			<section className="articles">
				{data.map((item) => {
					return <Article {...item} key={item.id} />;
				})}
			</section>
		</main>
	);
}

export default App;
