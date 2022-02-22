import { useState } from "react";

const Random = () => {
	let names = [
		"Giuliano",
		"Lucia",
		"Francisco",
		"Matias",
		"Augusto",
		"Daniela",
		"Cintia",
		"Deivys",
		"Jorge",
		"David",
		"Gastón",
	];

	const [random, setRandom] = useState("?");

	function handleClick(e) {
		e.preventDefault();
		let rand = [Math.floor(Math.random() * names.length)];

		return setRandom(names[rand]);
	}

	return (
		<div>
			<h1>{random}</h1>
			<button
				onClick={(e) => {
					handleClick(e);
				}}>
				Elegir
			</button>
		</div>
	);
};

export default Random;
