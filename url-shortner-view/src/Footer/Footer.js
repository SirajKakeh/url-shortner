import React from 'react';
import FooterLinks from './FooterLinks/FooterLinks';
import classes from './Footer.module.css';

const Footer = () => (
	<footer className={classes.Footer}>
		<p> ©2020 ShortUrl.at - Tool to shorten a long link. </p>
		<ul>
			<FooterLinks />
		</ul>
	</footer>
);

export default Footer;
