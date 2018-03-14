import React from 'react';

const LandingFeatured = ({ content }) => {
	if (!content) {
		return null;
	}
	return (
		<section className="landing-section landing-section--main">
			Landing featured content
		</section>
	);
};

export default LandingFeatured;