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
	}, [loading, page]);

	const prevPage = () => {
		if (page === 0) {
			setPage(data.length - 1);
		} else {
			setPage(page - 1);
		}
	};

	const nextPage = () => {
		if (data.length - 1 === page) {
			setPage(0);
		} else {
			setPage(page + 1);
		}
	};

	return (
		<main>
			<div className="section-title">
				<h1>{loading ? "loading..." : "pagination"}</h1>
				<div className="underline"></div>
			</div>
			<section className="followers">
				<Follower data={followers} />
				{!loading && (
					<div className="btn-container">
						<button className="prev-btn" onClick={prevPage}>
							prev
						</button>
						{data.map((pages, index) => {
							return (
								<button
									onClick={() => setPage(index)}
									key={index}
									className={`page-btn ${page === index ? "active-btn" : null}`}
								>
									{index + 1}
								</button>
							);
						})}
						<button className="next-btn" onClick={nextPage}>
							next
						</button>
					</div>
				)}
			</section>
		</main>
	);
}

export default App;
