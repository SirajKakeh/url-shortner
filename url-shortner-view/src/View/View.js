import React , {Component}from 'react';
import classes from './View.module.css';
import FirstView from '../FirstView/FirstView';
import {Route} from 'react-router-dom';
import Features from '../Features/Features';
class View extends Component{
    render(){
        return(
           
            <main className={classes.View}>
                <FirstView/>
                <Features/>
            </main>
       
        );
    }
}

export default View;