import React from 'react';
import classes from './Feature.module.css';
import LikeImage from '../../assets/FeatureImg/like.png';
import URLImage from '../../assets/FeatureImg/url.png';
import SecureImage from '../../assets/FeatureImg/secure.png';
import StatisticsImage from '../../assets/FeatureImg/statistics.png';
import UniqueImage from '../../assets/FeatureImg/unique.png';
import ResponsiveImage from '../../assets/FeatureImg/responsive.png';


const Feature =(props)=>{

    const features=[
        {image:LikeImage ,
         title:'Easy',
         description:'ShortURL is easy and fast, enter the long link to get your shortened link.'},
        {image:URLImage ,
         title:'Shortened',
         description:'Use any link, no matter what size, ShortURL always shortens.'},
        {image:SecureImage ,
         title:'Secure',
         description:'It is fast and secure, our service have HTTPS protocol and data encryption.'},
        {image:StatisticsImage ,
         title:'Statistics',
         description:'Check the amount of clicks that your shortened url received.'},
        {image:UniqueImage ,
         title:'Reliable',
         description:'All links that try to disseminate spam, viruses and malware are deleted.'},
        {image:ResponsiveImage ,
         title:'Devices',
         description:'Compatible with smartphones, tablets and desktop.'}
    ];
    return(
        <div>
            {features.map(feature=>(
                <div className={classes.Column} key={feature.title}>
                    <img src={feature.image}/>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p> 
                </div>
            ))}
        </div>


        // <div  className={classes.Column}>
        //     <img src={props.image} />
        //     <h3 >{props.title}</h3>
        //     <p>{props.description}</p>
        // </div>
    );
}
export default Feature;