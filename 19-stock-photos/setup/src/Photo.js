import React from "react";

const Photo = ({ urls, user, likes, alt_description }) => {
	return (
		<article className="photo">
			<img src={urls.regular} alt={alt_description} />
			<div className="photo-info">
				<div>
					<h4>{user.name}</h4>
					<p>{likes}</p>
				</div>
				<a href={user.portfolio_url}>
					<img
						className="user-img"
						src={user.profile_image.medium}
						alt={user.name}
					/>
				</a>
			</div>
		</article>
	);
};

export default Photo;
