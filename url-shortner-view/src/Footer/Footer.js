import React from 'react';
import FooterLinks from './FooterLinks/FooterLinks';
import classes from './Footer.module.css';
const Footer=()=>(

    <div className={classes.Footer}>
        <p>© 2020 ShortUrl.at - Tool to shorten a long link.</p>
        <ul>
            <FooterLinks link="/ShortUrl.at" >ShortUrl.at</FooterLinks>
            <li className={classes.Li}>|</li>
            <FooterLinks link="/URLClickCounter">URL Click Counter</FooterLinks>
            <li className={classes.Li}>|</li>
            <FooterLinks link="/ReportMaliciousURL">Report Malicious URL</FooterLinks>
            <li className={classes.Li}>|</li>
            <FooterLinks link="/PrivacyPolicy">Privacy Policy</FooterLinks>
            <li className={classes.Li}>|</li>
            <FooterLinks link="/Contact">Contact</FooterLinks>
        </ul>
    </div>

);

export default Footer;