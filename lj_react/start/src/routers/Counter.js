import React, { useEffect, useState } from 'react';

function Counter() {
	const [number, setNumber] = useState(0);

	const change = () => {
		setNumber(100);
	};

	const increament = () => {
		setNumber(number + 1);
		// 시간차
		// const result = number % 5 === 0;
		// if (result) {
		// 	console.log(`${number}는 5의 배수입니다`);
		// }
	};

	useEffect(() => {
		const result = number % 5 === 0;
		if (result) {
			console.log(`${number}는 5의 배수입니다`);
		}
	}, [number]); // 빈 배열일 때에는 init, 값을 쓰게 되면 구독.

	return (
		<div>
			<h1>Count: {number}</h1>
			<button onClick={change}>Change!</button>
			<button onClick={increament}>increament</button>
		</div>
	);
}

export default Counter;
