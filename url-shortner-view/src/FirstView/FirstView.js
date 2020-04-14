import React, { useState } from 'react';
import classes from './FirstView.module.css';
import PostUrl from '../Service';

const FirstView = () => {
	const [url, setUrl] = useState('');
	// useEffect(() => {});

	const sendUrlHandler = (url) => {
		if (url !== '') {
			// console.log({ setUrl });
			console.log(PostUrl(url));
		}
	};

	// const update = (event) => {
	// 	event.preventDefault();
	// 	setUrl(event.target.value);
	// 	// console.log(setUrl);
	// };
	return (
		<div className={classes.MainDiv}>
			<div className={classes.FirstView}>
				<h1> Paste the URL to be shortened </h1>
				<div className={classes.InputDiv}>
					<input
						className={classes.Input}
						placeholder='Enter the link here'
						onChange={(event) => {
							event.preventDefault();
							setUrl(event.target.value);
						}}
					/>
					<button
						className={classes.Button}
						onClick={() => sendUrlHandler(url)}
					>
						Shorten URL
					</button>
				</div>
				<div className={classes.Div}>
					<p> ShortURL.at is a free tool to shorten a URL or reduce a link. </p>
					<p>
						Use our URL Shortener to create a shortened link making it easy to
						remember
					</p>
				</div>
			</div>
		</div>
	);
};
export default FirstView;
