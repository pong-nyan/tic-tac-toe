import { useState } from "react";

export default function Squares({turnCount, setTurnCount}) {
	return (
		<div>
			<Square turnCount={turnCount} setTurnCount={setTurnCount} />
			<Square turnCount={turnCount} setTurnCount={setTurnCount} />
			<Square turnCount={turnCount} setTurnCount={setTurnCount} />
		</div>
	);
}

function Square({turnCount, setTurnCount}) {
	const [value, setValue] = useState(null);
	function onClickHandler() {
		turnCount % 2 === 0 ? setValue("X") : setValue("O");
		setTurnCount(turnCount + 1);
	}
	return (
		<button className="square" onClick={onClickHandler}> {value} </button>
	);
}

