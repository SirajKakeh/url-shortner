import React from 'react';
import Feature from './Feature/Feature';
import classes from './Features.module.css';

const Features = () => (
	<div className={classes.Features}>
		<div className={classes.Row}>
			<Feature />
		</div>
	</div>
);

export default Features;
