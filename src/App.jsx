import Squares from "./Squares";
import Counter from "./Counter";
import {useState} from "react";

export function Button9({turnCount, setTurnCount}) {
	const square9 = [];
	for (let i = 0; i < 3; i++) {
		square9.push(<Squares turnCount={turnCount} setTurnCount={setTurnCount} />)
	}
	return (
		square9
	)
}

export default function App() {
	const [turnCount, setTurnCount] = useState(0);
	return (
		<>
			<Counter count={turnCount}/>
			<Button9 turnCount={turnCount} setTurnCount={setTurnCount} />
		</>
	);
}
