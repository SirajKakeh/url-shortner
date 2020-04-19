import React, { useRef } from 'react';
import classes from './SecondView.module.css';
import { NavLink } from 'react-router-dom';

const SecondView = (props) => {
  const inputRef = React.createRef();
  const copyHandler = () => {
    inputRef.current.select();
    document.execCommand('copy');
  };
  return (
    <>
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
            <input
              ref={inputRef}
              className={classes.Input}
              readOnly
              defaultValue={props.shortUrl}
            />
            <button className={classes.Button} onClick={copyHandler}>
              Copy URL
            </button>
          </div>
          <div className={classes.Div}>
            <p className={classes.p1}>
              Long URL:
              <a href={props.url}> {props.url} </a>
            </p>
            <p>
              Track the total of clicks in real - time from your shortened URL.
            </p>
            <p>
              Create other <NavLink to='/'> shortened URL. </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondView;
