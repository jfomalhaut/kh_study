import React, { useEffect, useState } from 'react';
import { Comma } from '../customs';

const PRICE = 3500;
const FEE = 2500;
const LIMIT = 30000;

function Counter2() {
	const [number, setNumber] = useState(0);
	const [fee, setFee] = useState(FEE);

	const change = () => {
		setNumber(100);
	};

	const increament = () => {
		setNumber(number + 1);
	};

	useEffect(() => {
		if (number * PRICE >= LIMIT) {
			setFee(0);
		} else {
			setFee(FEE);
		}
	}, [number]); // 빈 배열일 때에는 init, 값을 쓰게 되면 구독.

	return (
		<div>
			<h1>가격: {Comma(PRICE)}원</h1>
			<h1>배송료: {Comma(fee)}원</h1>
			<h1>수량: {number}개</h1>
			<h1>TOTAL: {Comma(PRICE * number + fee)}원</h1>
			<button onClick={change}>Change!</button>
			<button onClick={increament}>increament</button>
		</div>
	);
}

export default Counter2;
