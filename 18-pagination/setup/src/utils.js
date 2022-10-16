const paginate = (props) => {
	const peoplePerPage = 10;
	const page = Math.ceil(props.length / peoplePerPage);
	const newPeople = Array.from({ length: page }, (_, index) => {
		const start = index * peoplePerPage;
		return props.slice(start, start + peoplePerPage);
	});
	return newPeople;
};

export default paginate;
