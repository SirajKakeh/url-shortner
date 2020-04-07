import React , {Component}from 'react';
import classes from './View.module.css';
import FirstView from '../FirstView/FirstView';
import {Route} from 'react-router-dom';
import Features from '../Features/Features';
class View extends Component{
    render(){
        return(
            <React.Fragment className={classes.View}>
             <Route  component={FirstView}/>
             <Route component={Features}/>
            </React.Fragment>
        );
    }
}

export default View;