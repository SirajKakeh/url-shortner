import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './ShareUrlLinks.module.css';
import { FacebookShareButton, FacebookIcon } from 'react-share';

const ShareUrlLinks = (props) => {
  const shareUrlLinks = [
    {
      link: 'http://www.facebook.com/sharer/sharer.php?u=' + props.shortUrl,
      title: 'Facebook',
      background: classes.Facebook,
    },
    {
      link: 'https://twitter.com/intent/tweet?&url=' + props.shortUrl,
      title: 'Twitter',
      background: classes.Twitter,
    },
    {
      link: 'http://pinterest.com/pin/create/button/?url=' + props.shortUrl,
      title: 'Pinterest',
      background: classes.Pinterest,
    },
    {
      link:
        'http://tumblr.com/widgets/share/tool?canonicalUrl=' + props.shortUrl,
      title: 'Tumblr',
      background: classes.Tumblr,
    },
  ];

  return (
    <div className={classes.ShareUrlSection}>
      {shareUrlLinks.map((shareUrlLink) => (
        <li className={shareUrlLink.background} key={shareUrlLink.link}>
          <a href={shareUrlLink.link} target='_blank'>
            {shareUrlLink.title}
          </a>
        </li>
      ))}
    </div>
  );
};
export default ShareUrlLinks;
