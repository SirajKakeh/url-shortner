import React from 'react';
import classes from './View.module.css';
import FirstView from '../FirstView/FirstView';
import Features from '../Features/Features';
const View = () => (
	<main className={classes.View}>
		<FirstView />
		<Features />
	</main>
);
export default View;
