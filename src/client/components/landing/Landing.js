import React from 'react';
import LandingFeatured from './LandingFeatured';
import LandingChrono from './LandingChrono';

const Landing = ({ page, content }) => {
	const classList = `landing-page landing-page--${page} main-section`;
	const { mainContent, featuredContent } = content;
	return (
		<section className={classList}>
			<LandingFeatured page={page} content={featuredContent}></LandingFeatured>
			<LandingChrono page={page} content={mainContent}></LandingChrono>
		</section>
	);
};

export default Landing;