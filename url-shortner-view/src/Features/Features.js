import React from 'react';
import Feature from './Feature/Feature';
import classes from './Features.module.css';
import LikeImage from '../assets/FeatureImg/like.png';
import URLImage from '../assets/FeatureImg/url.png';
import SecureImage from '../assets/FeatureImg/secure.png';
import StatisticsImage from '../assets/FeatureImg/statistics.png';
import UniqueImage from '../assets/FeatureImg/unique.png';
import ResponsiveImage from '../assets/FeatureImg/responsive.png';
const Features =()=>(
    <div className={classes.Features}>
        <div className={classes.Row}>
            <Feature/>
            {/* <Feature image={LikeImage} title="Easy" description="ShortURL is easy and fast, enter the long link to get your shortened link."/>
            <Feature image={URLImage} title="Shortened" description="Use any link, no matter what size, ShortURL always shortens."/>
            <Feature image={SecureImage} title="Secure" description="It is fast and secure, our service have HTTPS protocol and data encryption."/>
            <Feature image={StatisticsImage} title="Statistics" description="Check the amount of clicks that your shortened url received."/>
            <Feature image={UniqueImage} title="Reliable" description="All links that try to disseminate spam, viruses and malware are deleted."/>
            <Feature image={ResponsiveImage} title="Devices" description="Compatible with smartphones, tablets and desktop."/> */}
            

        </div>
    </div>
);

export default Features;