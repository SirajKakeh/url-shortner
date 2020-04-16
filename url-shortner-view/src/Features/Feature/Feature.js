import React from 'react';
import classes from './Feature.module.css';
import LikeImage from '../../assets/FeatureImg/like.png';
import URLImage from '../../assets/FeatureImg/url.png';
import SecureImage from '../../assets/FeatureImg/secure.png';
import StatisticsImage from '../../assets/FeatureImg/statistics.png';
import UniqueImage from '../../assets/FeatureImg/unique.png';
import ResponsiveImage from '../../assets/FeatureImg/responsive.png';

const Feature = () => {
	const features = [
		{
			image: LikeImage,
			title: 'Easy',
			description:
				'ShortURL is easy and fast, enter the long link to get your shortened link.',
			alt: 'Like image',
		},
		{
			image: URLImage,
			title: 'Shortened',
			description:
				'Use any link, no matter what size, ShortURL always shortens.',
			alt: 'URLImage',
		},
		{
			image: SecureImage,
			title: 'Secure',
			description:
				'It is fast and secure, our service have HTTPS protocol and data encryption.',
			alt: 'SecureImage',
		},
		{
			image: StatisticsImage,
			title: 'Statistics',
			description:
				'Check the amount of clicks that your shortened url received.',
			alt: 'StatisticsImage',
		},
		{
			image: UniqueImage,
			title: 'Reliable',
			description:
				'All links that try to disseminate spam, viruses and malware are deleted.',
			alt: 'UniqueImage',
		},
		{
			image: ResponsiveImage,
			title: 'Devices',
			description: 'Compatible with smartphones, tablets and desktop.',
			alt: 'ResponsiveImage',
		},
	];
	return (
		<div>
			{features.map((feature) => (
				<div className={classes.Column} key={feature.title}>
					<img src={feature.image} alt={feature.alt} />
					<h3> {feature.title} </h3>
					<p> {feature.description} </p>
				</div>
			))}
		</div>
	);
};
export default Feature;
