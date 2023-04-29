export default function Squares({a}) {
	function Square({a}) {
		return (
			<button className="square" onClick={onClickHandler}> {a} </button>
		);
	}
	return (
		<div>
			<Square a={a + 1} />
			<Square a={a + 2} />
			<Square a={a + 3} />
		</div>
	);
}

function onClickHandler() {
}