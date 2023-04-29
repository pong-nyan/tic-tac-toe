import React from 'react';

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
	const [value, setValue] = React.useState("");
	function onClickHandler() {
		turnCount % 2 === 0 ? setValue("X") : setValue("O");

	}
	return (
		<button className="square" onClick={onClickHandler}> {value} </button>
	);
}

