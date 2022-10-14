import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
	const [markdown, setMarkdown] = useState("## markdown preview");

	function handleChange(e) {
		setMarkdown(e.target.value);
	}
	return (
		<section className="markdown">
			<textarea
				type="text"
				value={markdown}
				className="input"
				onChange={(e) => handleChange(e)}
			></textarea>
			<article className="result">
				<h1>
					<ReactMarkdown children={markdown} />
				</h1>
			</article>
		</section>
	);
}

export default App;
