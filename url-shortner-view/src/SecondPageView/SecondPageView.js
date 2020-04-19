import React from 'react';
import SecondView from '../SecondView/SecondView';

const SecondPageView = (props) => {
  return (
    <main>
      <SecondView
        url={props.url}
        shortUrl={props.shortUrl}
        setShortUrl={props.setShortUrl}
        setUrl={props.setUrl}
      />
      <ShareUrlSection />
    </main>
  );
};
export default SecondPageView;
