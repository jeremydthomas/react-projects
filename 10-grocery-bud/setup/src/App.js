import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
	const items = localStorage.getItem("items");
	return items ? JSON.parse(localStorage.getItem("items")) : [];
};

function App() {
	const [list, setList] = useState("");
	const [items, setItems] = useState(getLocalStorage());
	const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
	const [isEditing, setIsEditing] = useState(false);
	const [editIndex, setEditIndex] = useState(null);

	const clearItems = () => {
		showAlert(true, "empty list", "danger");
		setItems([]);
	};

	const handleSubmit = (e) => {
		try {
			e.preventDefault();
			if (!list) {
				// display alert if list is empty

				showAlert(true, "please enter a value", "danger");
			} else if (list && isEditing) {
				// deal with editing list
				setItems(
					items.map((item) => {
						if (item.id === editIndex) {
							return { ...item, title: list };
						}
						return item;
					})
				);

				setList("");
				setEditIndex(null);
				setIsEditing(false);
				showAlert(true, "list updated", "success");
			} else {
				// show alert if list is not empty
				showAlert(true, "Item Added To The List", "success");

				const newItem = { id: new Date().getTime().toString(), title: list };
				setItems([...items, newItem]);
				setList("");
			}
		} catch (error) {
			console.log(error);
		}
	};

	const showAlert = (show, msg, type) => {
		setAlert({ show, msg, type });
	};

	const handleDelete = (id) => {
		showAlert(true, "Item Deleted", "danger");
		const newItems = items.filter((item) => item.id !== id);
		setItems(newItems);
	};

	const handleEdit = (id) => {
		const item = items.find((item) => item.id === id);
		setIsEditing(true);
		setEditIndex(id);
		setList(item.title);
	};

	useEffect(() => {
		localStorage.setItem("items", JSON.stringify(items));
		// const data = localStorage.getItem("items");
		// if (data) {
		// 	setList(data);
		// }
	}, [items]);

	return (
		<section className="section-center">
			<form onSubmit={handleSubmit} className="grocery-form">
				{alert.show && (
					<Alert {...alert} items={items} removeAlert={showAlert} />
				)}
				<h3>grocery bud</h3>
				<div className="form-control">
					<input
						type="text"
						className="grocery"
						placeholder="e.g. eggs"
						value={list}
						onChange={(e) => setList(e.target.value)}
					/>
					<button type="submit" className="submit-btn">
						{isEditing ? "update" : "submit"}
					</button>
				</div>
			</form>
			{items.length > 0 && (
				<div className="grocery-container">
					<List
						items={items}
						handleEdit={handleEdit}
						handleDelete={handleDelete}
						setItems={setItems}
					/>
					<button className="clear-btn" onClick={clearItems}>
						clear items
					</button>
				</div>
			)}
		</section>
	);
}

export default App;
