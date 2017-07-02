import React from 'react';
import ReactDom from 'react-dom';
import TodoApp from './App';

const render=(Component)=>{
	ReactDom.render(
	<Component />,
	document.getElementById('root'))
}

render(TodoApp);
