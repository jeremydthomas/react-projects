import React from "react";

const Follower = ({ data }) => {
	return (
		<div className="container">
			{data.map((datas) => {
				return (
					<article key={datas.id} className="card">
						<img src={datas.avatar_url} alt={datas.login} />
						<h4>{datas.login}</h4>
						<a href={datas.html_url} className="btn">
							view profile
						</a>
					</article>
				);
			})}
		</div>
	);
};

export default Follower;
