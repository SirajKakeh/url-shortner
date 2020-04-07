import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './FooterLinks.module.css';

const footerLinks =(props)=>(

    <li className={classes.FooterLinks}>
        <NavLink
        to={props.link}>
            {props.children}
        </NavLink>
    </li>
);

export default footerLinks;