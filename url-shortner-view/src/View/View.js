import React from 'react';
import FirstView from '../FirstView/FirstView';
import Features from '../Features/Features';

const View = (props) => (
  <main>
    <FirstView
      url={props.url}
      setUrl={props.setUrl}
      shortUrl={props.shortUrl}
      setShortUrl={props.setShortUrl}
    />
    <Features />
  </main>
);
export default View;
