import React from 'react';
import SecondView from '../SecondView/SecondView';
import classes from './SecondPageView.module.css';
import Header from '../Header/Header';
import ShareUrlSection from '../ShareUrlSection/ShareUrlSection';

const SecondPageView = () => (
	<main>
		<SecondView />
		<ShareUrlSection />
	</main>
);
export default SecondPageView;
