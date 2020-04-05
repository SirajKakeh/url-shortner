import React , {Component}from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import Header from '../Header/Header';
import classes from './View.module.css';
import FirstView from '../FirstView/FirstView';

class View extends Component{
    render(){
        return(
            <Auxiliary className={classes.View}>
                <Header/>
                <FirstView/>
            </Auxiliary>
        );
    }
}

export default View;