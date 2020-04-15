import React from 'react';
import classes from './SecondView.module.css';
import { NavLink } from 'react-router-dom';

const SecondView = () => {
	return (
		<React.Fragment>
			<div className={classes.MainDiv}>
				<h1> Your shortened URL </h1>
				<p>
					Copy the shortened link and share it in messages, texts, posts,
					websites and other locations.
				</p>
			</div>
			<div className={classes.MainDiv}>
				<div className={classes.SecondView}>
					<div className={classes.InputDiv}>
						<input className={classes.Input} />
						<button className={classes.Button}> Copy URL </button>
					</div>
					<div className={classes.Div}>
						<p className={classes.p1}> Long URL: {} </p>
						<p>
							Track the total of clicks in real - time from your shortened URL.
						</p>
						<p>
							Create other <NavLink to='/'> shortened URL. </NavLink>
						</p>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default SecondView;
