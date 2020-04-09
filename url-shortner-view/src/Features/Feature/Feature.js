import React from 'react';
import classes from './Feature.module.css';
const Feature =(props)=>(

    <div  className={classes.Column}>
        <img src={props.image} />
        <h3 >{props.title}</h3>
        <p>{props.description}</p>
    </div>
);

export default Feature;