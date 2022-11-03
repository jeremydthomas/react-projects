import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
	const { isModalOpen, questions, correct, closeModal } = useGlobalContext();

	return (
		<div
			className={`${
				isModalOpen ? "modal-container isOpen" : "modal-container"
			}`}
		>
			<div className="modal-content">
				<h2>congrats!</h2>
				<p>{`You answered ${
					(correct / questions.length) * 100
				}% of the questions correctly`}</p>
				<div className="close-btn" onClick={closeModal}>
					play again
				</div>
			</div>
		</div>
	);
};

export default Modal;
