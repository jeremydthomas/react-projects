import React from "react";

const Categories = ({ filterItems, allCategories }) => {
	return (
		<div className="btn-container">
			{allCategories.map((category, index) => {
				return (
					<button
						type="button"
						className="filter-btn"
						key={index}
						onClick={() => filterItems(category)}
					>
						{category}
					</button>
				);
			})}
		</div>
	);
};
// <div className="btn-container">
// 	<button
// 		type="button"
// 		className="filter-btn"
// 		onClick={() => {
// 			filterItems("all");
// 		}}
// 	>
// 		all
// 	</button>
// 	<button
// 		type="button"
// 		className="filter-btn"
// 		onClick={() => {
// 			filterItems("breakfast");
// 		}}
// 	>
// 		breakfast
// 	</button>
// 	<button
// 		type="button"
// 		className="filter-btn"
// 		onClick={() => {
// 			filterItems("lunch");
// 		}}
// 	>
// 		lunch
// 	</button>
// 	<button
// 		type="button"
// 		className="filter-btn"
// 		onClick={() => {
// 			filterItems("shakes");
// 		}}
// 	>
// 		shakes
// 	</button>
// </div>
// );
// return (
// 	<div className="btn-container">
// 		<button
// 			type="button"
// 			className="filter-btn"
// 			onClick={() => {
// 				filterItems("all");
// 			}}
// 		>
// 			all
// 		</button>
// 		<button
// 			type="button"
// 			className="filter-btn"
// 			onClick={() => {
// 				filterItems("breakfast");
// 			}}
// 		>
// 			breakfast
// 		</button>
// 		<button
// 			type="button"
// 			className="filter-btn"
// 			onClick={() => {
// 				filterItems("lunch");
// 			}}
// 		>
// 			lunch
// 		</button>
// 		<button
// 			type="button"
// 			className="filter-btn"
// 			onClick={() => {
// 				filterItems("shakes");
// 			}}
// 		>
// 			shakes
// 		</button>
// 	</div>
// );
// };

export default Categories;
