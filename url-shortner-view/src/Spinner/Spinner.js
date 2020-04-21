import React from 'react';
import spinner from '../assets/Spinner/Spinner.gif';
import classes from './Spinner.module.css';

const Spinner = () => (
  <div className={classes.Spinner}>
    <img src={spinner} />
  </div>
);
export default Spinner;
