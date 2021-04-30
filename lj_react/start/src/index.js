import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function Test() {
	return (
		<div>
			<h1>Test Component</h1>
			<button>test</button>
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('#root'));