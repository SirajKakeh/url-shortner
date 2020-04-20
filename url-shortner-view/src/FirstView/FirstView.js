import React, { useState } from 'react';
import classes from './FirstView.module.css';
import PostUrl from '../Service';
import Spinner from '../Spinner/Spinner';
import { useHistory } from 'react-router-dom';
const FirstView = (props) => {
  const history = useHistory();

  const sendUrlHandler = (url) => {
    props.setSpinner(true);
    if (url !== '') {
      PostUrl(url).then((response) => {
        props.setSpinner(false);
        props.setShortUrl(response.data.short_url);
        history.push('/shortener');
      });
    }
  };

  return (
    <div className={classes.MainDiv}>
      {/* {spinnerDiv} */}
      <div className={classes.FirstView}>
        <h1> Paste the URL to be shortened </h1>
        <div className={classes.InputDiv}>
          <input
            className={classes.Input}
            placeholder='Enter the link here'
            value={props.url}
            onChange={(event) => {
              event.preventDefault();
              props.setUrl(event.target.value);
            }}
          />
          <button
            className={classes.Button}
            onClick={() => {
              sendUrlHandler(props.url);
            }}
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
