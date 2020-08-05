/*
 * @Author: kser 
 * @Date: 2020-08-04 19:53:19 
 * @Last Modified by: kser
 * @Last Modified time: 2020-08-04 20:09:05
 */

import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingList from './ShoppingList';

function App() {
	return (
		<div className="App">
       <ShoppingList name="Mark" />
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>

     
		</div>
	);
}

export default App;
