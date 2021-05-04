import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Counter from './routers/Counter';
import Counter2 from './routers/Counter2';

function Test() {
	return (
		<div>
			<h1>Test Component</h1>
			<button>test</button>
		</div>
	);
}

ReactDOM.render(<Counter2 />, document.querySelector('#root'));