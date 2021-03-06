import React from 'react';
import SecondView from '../SecondView/SecondView';
import ShareUrlSection from '../ShareUrlSection/ShareUrlSection';
const SecondPageView = (props) => {
  return (
    <main>
      <SecondView url={props.url} shortUrl={props.shortUrl} />
      <ShareUrlSection shortUrl={props.shortUrl} />
    </main>
  );
};
export default SecondPageView;
