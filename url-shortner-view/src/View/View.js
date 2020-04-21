import React from 'react';
import FirstView from '../FirstView/FirstView';
import Features from '../Features/Features';

const View = (props) => (
  <main>
    <FirstView
      url={props.url}
      setUrl={props.setUrl}
      setShortUrl={props.setShortUrl}
      setSpinner={props.setSpinner}
    />{' '}
    <Features />
  </main>
);
export default View;
