import React from 'react';
import ReactDOM from 'react-dom';
// import ToDoExample from './ToDoExample'
import App from './App.js';
import {BrowserRouter as Router} from "react-router-dom"

// ReactDOM.render(
// 	<React.StrictMode >
// 	<ToDoExample />
// 	</React.StrictMode>,
// 	document.getElementById('root')
// );

ReactDOM.render(
	<React.StrictMode >
	<Router><App /></Router>
	</React.StrictMode>,
	document.getElementById('root')
);