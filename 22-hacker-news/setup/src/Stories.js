import React from "react";

import { useGlobalContext } from "./context";

const Stories = () => {
	const { isLoading, hits } = useGlobalContext();
	console.log(
		"🚀 ~ file: Stories.js ~ line 7 ~ Stories ~ useGlobalContext()",
		useGlobalContext()
	);

	if (isLoading) {
		return <div className="loading"></div>;
	}
	return (
		<section className="stories">
			{hits.map((items) => {
				console.log(items);
				return (
					<article key={items.objectID} className="story">
						<h4 className="title">{items.title}</h4>
						<p className="info">
							{items.points} points by <span>{items.author} | </span>
							{items.num_comments} comments
						</p>
						<div>
							<a
								href={items.url}
								target="_blank"
								rel="noopener noreferrer"
								className="read-link"
							>
								read more
							</a>{" "}
							<button className="remove-btn">remove</button>
						</div>
					</article>
				);
			})}
		</section>
	);
};

export default Stories;
