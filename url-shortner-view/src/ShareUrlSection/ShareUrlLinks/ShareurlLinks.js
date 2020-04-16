import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './ShareUrlLinks.module.css';

const ShareUrlLinks = () => {
	const shareUrlLinks = [
		{
			link: '/',
			title: 'Facebook',
			background: classes.Facebook,
		},
		{
			link: '/',
			title: 'Twitter',
			background: classes.Twitter,
		},
		{
			link: '/',
			title: 'Pinterest',
			background: classes.Pinterest,
		},
		{
			link: '/',
			title: 'Tumblr',
			background: classes.Tumblr,
		},
	];

	return (
		<div className={classes.ShareUrlSection}>
			{' '}
			{shareUrlLinks.map((shareUrlLink) => (
				<li className={shareUrlLink.background} key={shareUrlLink.link}>
					<NavLink to={shareUrlLink.link}> {shareUrlLink.title} </NavLink>{' '}
				</li>
			))}{' '}
		</div>
	);
};
export default ShareUrlLinks;
