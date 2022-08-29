import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const Home = () => {
	return (
		<main>
			<section className="section search">
				<SearchForm />
				<CocktailList />
			</section>
		</main>
	);
};

export default Home;
