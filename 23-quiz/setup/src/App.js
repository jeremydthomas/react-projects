import React from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
function App() {
	const { loading } = useGlobalContext();
	if (loading) {
		return <Loading />;
	}

	return (
		<main>
			<section className="quiz quiz-small">
				<SetupForm />
			</section>
		</main>
	);
}

export default App;
