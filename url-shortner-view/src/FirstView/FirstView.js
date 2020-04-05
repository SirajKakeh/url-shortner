import React ,{Component} from 'react';
import classes from './FirstView.module.css';
import Auxiliary from '../Auxiliary/Auxiliary';
class FirstView extends Component{
    render(){
        return(
            <div className={classes.FirstView}>
                <h1>Paste the URL to be shortened</h1>
                <div className={classes.InputDiv}>
                    <input className={classes.Input} placeholder="Enter the link here"/>
                    <button className={classes.Button}>Shorten URL</button>
                </div>
                <div className={classes.Div}>
                    <p>ShortURL.at is a free tool to shorten a URL or reduce a link.</p>
                    <p>Use our URL Shortener to create a shortened link making it easy to remember.</p>
                </div>
            </div>
        );
    }
}

export default FirstView;