import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Axios from 'axios';

function Category() {
	const [list, setList] = useState([]);
	const [products, setProducts] = useState([]);
	const [pages, setPages] = useState('0');


	const getProduct = async () => {
		try {
			const payload = {
				searchItemName: '',
				pageNumber: '2'
			};
			const { data: { list, pageSize } } = await Axios.post('http://13.209.176.104:8080/api/v1/market/get-items', payload, {
				headers: {
					token: '12c29b1485ef03d42609b218bf5d113b'
				}
			});
			setProducts(list);
			setPages(pageSize);
		} catch (error) {
			console.log(error);
		}
	};

	const init = async () => {
		try {
			const { data: { data } } = await Axios.get('http://13.209.176.104:8080/api/v1/categories');
			setList(data);
		} catch (error) {
			console.log(error);
		}
		console.log('done');
	};

	const goPage = (_page) => {
		
	}

	useEffect(() => {

	}, []);

	useEffect(() => {
		init();
		getProduct();
	}, []);

	return (
		<ContainerStyle>
			<h1>Category</h1>
			<ul>
				{list.map(item => (
					<li>{item.categoryName}</li>
				))}
			</ul>
			<article>
				{products.map(item => (
					<div>{item.itemName}</div>
				))}
			</article>
			<aside>
				{[ ...Array(10) ].map((item, idx) => (
					<b onClick={() => goPage(idx + 1)}>{idx + 1}</b>
				))}
			</aside>
		</ContainerStyle>
	);
}

export default Category;

const ContainerStyle = styled.div`
	width: 1000px;
	margin: 50px auto;
	* {
		margin: 0; padding: 0;
	}

	aside {
		display: flex;
		justify-content: center;
		b {
			margin: 0 10px;
			font-size: 20px;
		}
	}

	ul {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		border: 1px solid #ddd;
		li {
			text-align: center;
			list-style: none;
			padding: 5px 0;
			font-size: 20px;
			cursor: pointer;
			user-select: none;
			&:nth-child(odd) {
				background: #f0f0f0;
			}
		}
	}
`;