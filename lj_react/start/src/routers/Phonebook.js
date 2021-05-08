import React, { useEffect, useState } from 'react';
const REGEX_ONLY_NUMBER = /[0-9]$/;

const field = {
	name: '',
	place: '',
	price: '',
	price2: '',
};

function Phonebook() {
	// input태그에 들어가는 값은 무조건 string
	// const [price, setPrice] = useState('');
	const [info, setInfo] = useState(field);
	const { name, place, price, price2 } = info;

	// const onChangeHandler = (ev) => {
	// 	const { target: { value } } = ev;
	// 	if (value === '') {
	// 		setPrice('');
	// 	} else if (REGEX_ONLY_NUMBER.test(value)) {
	// 		setPrice(value);
	// 	}
	// };

	// 이름 / 가격 / 원산지

	const onChangeHander2 = (ev) => {
		const { target: { value, name } } = ev;

		switch(name) {
			case 'price2':
			case 'price': {
					if (value === '') {
						setInfo({
							...info,
							[name]: value
						});
					} else if (REGEX_ONLY_NUMBER.test(value)) {
						setInfo({
							...info,
							[name]: value
						});
					}
				return;
			}
		}

		setInfo({
			...info,
			[name]: value
		});
	};

	const renderingInfo = () => {
		console.log(info);
	};

	useEffect(function() {

	}, []);

	useEffect(renderingInfo, [info]);

	return (
		<div>
			<input name="name" value={name} onChange={onChangeHander2} type="text" placeholder="이름을 입력하세요" />
			<input name="place" value={place} onChange={onChangeHander2} type="text" placeholder="원산지를 입력하세요" />
			<input name="price" value={price} onChange={onChangeHander2} type="text" placeholder="가격을 입력하세요" />
			<input name="price2" value={price2} onChange={onChangeHander2} type="text" placeholder="가격을 입력하세요" />
		</div>
	);
}

export default Phonebook;