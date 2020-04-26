import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './ShareUrlSection.module.css';

import ShareUrlLinks from './ShareUrlLinks/ShareurlLinks';

const ShareUrlSection = (props) => (
  <div className={classes.ShareUrlDiv}>
    <div className={classes.ShareUrlSectionDiv}>
      <h2> Share URL </h2>
      <ul>
        <ShareUrlLinks shortUrl={props.shortUrl} />
      </ul>
    </div>
  </div>
);
export default ShareUrlSection;
