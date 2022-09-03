import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
	const { id } = useParams();
	const [loading, setLoading] = React.useState(true);
	const [cocktail, setCocktail] = React.useState({});

	React.useEffect(() => {
		setLoading(true);
		async function getCocktail() {
			try {
				const response = await fetch(`${url}${id}`);
				const data = await response.json();
				if (data.drinks) {
					const {
						strDrink: name,
						strDrinkThumb: img,
						strInstructions: instructions,
						strGlass: glass,
						strAlcoholic: alcohol,
						strCategory: category,
						strIngredient1: ingredient1,
						strIngredient2: ingredient2,
						strIngredient3: ingredient3,
						strIngredient4: ingredient4,
						strIngredient5: ingredient5,
					} = data.drinks[0];
					const ingredients = [
						ingredient1,
						ingredient2,
						ingredient3,
						ingredient4,
						ingredient5,
					];
					const newCocktail = {
						name,
						img,
						instructions,
						glass,
						alcohol,
						category,
						ingredients,
					};
					setCocktail(newCocktail);
				} else {
					setCocktail(null);
				}
				setLoading(false);
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		}
		getCocktail();
	}, [id]);

	if (loading) {
		return <Loading />;
	}

	if (!cocktail) {
		return <h2 className="section-title">no cocktail to display</h2>;
	}

	return (
		<section className="section cocktail-section">
			<Link className="btn btn-primary" to="/">
				back home
			</Link>

			<h2 className="section-title">{cocktail.name}</h2>
			<div className="drink">
				<img src={cocktail.img} alt={cocktail.name} />

				<div className="drink-info">
					<p>
						<span className="drink-data">name : </span>
						{cocktail.name}
					</p>
					<p>
						<span className="drink-data">category : </span>
						{cocktail.category}
					</p>
					<p>
						<span className="drink-data">info : </span>
						{cocktail.info}
					</p>
					<p>
						<span className="drink-data">glass : </span>
						{cocktail.glass}
					</p>
					<p>
						<span className="drink-data">instructions: </span>
						{cocktail.instructions}
					</p>
					<p>
						<span className="drink-data">ingredients: </span>
						{cocktail.ingredients.map((ingredient, index) => {
							return ingredient ? <span key={index}>{ingredient}</span> : null;
						})}
					</p>
				</div>
			</div>
		</section>
	);
};

export default SingleCocktail;
