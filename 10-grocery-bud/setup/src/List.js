import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items, handleDelete, handleEdit }) => {
	console.log(items);

	return (
		<div className="grocery-list">
			{items.map((item) => {
				const { id, title } = item;
				return (
					<article key={id} className="grocery-item">
						<p className="title">{title}</p>
						<div className="btn-container">
							<button type="button" className="edit-btn">
								<FaEdit onClick={() => handleEdit(id)} />
							</button>
							<button type="button" className="delete-btn">
								<FaTrash onClick={() => handleDelete(id)} />
							</button>
						</div>
					</article>
				);
			})}
		</div>
	);
};

export default List;
