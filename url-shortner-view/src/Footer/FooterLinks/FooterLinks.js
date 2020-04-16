import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './FooterLinks.module.css';

const FooterLinks = () => {
	const footerlinks = [
		{
			link: '/',
			title: 'ShortUrl.at',
		},
		{
			link: '/URLClickCounter',
			title: 'URL Click Counter',
		},
		{
			link: '/ReportMaliciousURL',
			title: 'Report Malicious URL',
		},
		{
			link: '/PrivacyPolicy',
			title: 'Privacy Policy',
		},
		{
			link: '/Contact',
			title: 'Contact',
		},
	];

	return (
		<div>
			{' '}
			{footerlinks.map((footerlink) => (
				<li className={classes.FooterLinks} key={footerlink.link}>
					<NavLink to={footerlink.link}> {footerlink.title} </NavLink>{' '}
					{footerlink !== footerlinks[footerlinks.length - 1] ? (
						<li className={classes.Li}> | </li>
					) : (
						''
					)}{' '}
				</li>
			))}{' '}
		</div>
	);
};
export default FooterLinks;
