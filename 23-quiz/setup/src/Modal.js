import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
	const { isModalOpen, questions, correct } = useGlobalContext();
	return (
		<div
			className={`modal-container ${isModalOpen === true ? "isOpen" : null}`}
		>
			<div className="modal-content">
				<h2>congrats!</h2>
				<p>{`You answered ${
					(correct / questions.length) * 100
				}% of the questions correctly`}</p>
				<div className="close-btn">play again</div>
			</div>
		</div>
	);
};

export default Modal;
