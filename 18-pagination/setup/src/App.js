import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
function App() {
	const { loading, data } = useFetch();
	const [page, setPage] = useState(0);
	const [followers, setFollowers] = useState([]);

	useEffect(() => {
		if (loading) return;
		setFollowers(data[page]);
	}, [loading]);

	return (
		<main>
			<div className="section-title">
				<h1>{loading ? "loading..." : "pagination"}</h1>
				<div className="underline"></div>
			</div>
			<section className="followers">
				<Follower data={followers} />
				<div className="btn-container">
					<button className="prev-btn">prev</button>
				</div>
			</section>
		</main>
	);
}

export default App;
