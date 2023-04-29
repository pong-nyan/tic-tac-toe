import Squares from "./Squares";

export default



function Button9() {
	const square9 = [];
	for (let i = 0; i < 3; i++) {
		square9.push(<Squares/>)
	}
	return (
		square9
	)
}


function App() {
	return (
		<Button9 />
	);
}
