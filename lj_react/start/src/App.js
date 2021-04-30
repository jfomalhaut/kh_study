import React from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';

function List({ history }) {

	const toDetail = () => {
		history.push('/detail/상품1');
	};

	return (
		<div>
			<h1>List Component</h1>
			<button onClick={() => toDetail()}>To Detail</button>
		</div>
	);
}

export function Detail({ history, match: { params: { name } } }) {
	const toList = () => {
		history.push('/list');
	};

	return (
		<div>
			<h1>Detail Component, value: {name}</h1>
			<button onClick={toList}>ToList</button>
		</div>
	);
}

function App() {
	return (
		<BrowserRouter>
			<header>
				<ul>
					<li>
						<Link to="/list">List</Link>
					</li>
					<li>
						<Link to="/detail/default">Detail</Link>
					</li>
				</ul>
			</header>
			<Switch>
				<Route path="/list" exact render={(props) => (
					<List history={props.history} />
				)} />
				<Route path="/detail/:name" component={Detail} />
				<Redirect to="/list" />
			</Switch>
		</BrowserRouter>
	);
}

export default App;