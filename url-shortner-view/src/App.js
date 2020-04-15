import React from 'react';
import './App.css';
import Header from './Header/Header';
import View from './View/View';
import Footer from './Footer/Footer';
import SecondPageView from './SecondPageView/SecondPageView';
import { Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Route path='/' component={Header} />
			<Route path='/' exact component={View} />
			<Route path='/shortener' component={SecondPageView} />
			<Route path='/' component={Footer} />
		</div>
	);
}

export default App;
