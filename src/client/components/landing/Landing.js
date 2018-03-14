import React from 'react';
import LandingFeatured from './LandingFeatured';
import LandingChrono from './LandingChrono';

const Landing = ({ page, content }) => {
	const classList = `landing-page landing-page--${page}`;
	const { mainContent, featuredContent } = content[0];
	return (
		<section className={classList}>
			<LandingFeatured content={featuredContent}></LandingFeatured>
			<LandingChrono content={mainContent}></LandingChrono>
		</section>
	);
};

export default Landing;