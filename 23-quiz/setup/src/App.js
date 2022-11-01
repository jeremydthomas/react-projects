import React from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
function App() {
	const {
		loading,
		waiting,
		index,
		correct,
		questions,
		nextQuestion,
		checkAnswer,
	} = useGlobalContext();

	if (waiting) {
		return <SetupForm />;
	}
	if (loading) {
		return <Loading />;
	}

	const { question, incorrect_answers, correct_answer } = questions[index];
	const answers = [...incorrect_answers, correct_answer];
	let randomAnswers = answers
		.map((value) => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value);

	return (
		<main>
			<Modal />
			<section className="quiz">
				<p className="correct-answers">
					correct answers: {correct}/{index}
				</p>
				<article className="container">
					<h2 dangerouslySetInnerHTML={{ __html: question }} />
					<div className="btn-container">
						{randomAnswers.map((answer, index) => {
							return (
								<button
									onClick={() =>
										checkAnswer(answer === correct_answer ? true : false)
									}
									key={index}
									className="answer-btn"
									dangerouslySetInnerHTML={{ __html: answer }}
								/>
							);
						})}
					</div>
				</article>
				<button className="next-question" onClick={nextQuestion}>
					next question
				</button>
			</section>
		</main>
	);
}

export default App;
