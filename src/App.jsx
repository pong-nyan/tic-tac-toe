import Squares from "./Squares";

export default



function Button9({turnCount, setTurnCount}) {
	const square9 = [];
	for (let i = 0; i < 3; i++) {
		square9.push(<Squares turnCount={turnCount} setTurnCount={setTurnCount} />)
	}
	return (
		square9
	)
}


function App() {
	const [turnCount, setTurnCount] = useState(0);
	return (
		<Button9 turnCount={turnCount} setTurnCount={setTurnCount}/>
	);
}
