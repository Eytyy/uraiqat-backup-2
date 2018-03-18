import React from 'react';
import Post from '../home/Post';
import ProjectPreview from '../work/ProjectPreview';

const Content = ({ content, page }) => {
	switch(page) {
	case 'work':
		return content.map((post) => <ProjectPreview {...post} id={post.id} key={post.id} />);
	default:
		return content.map((post) => <Post {...post} id={post.id} key={post.id} />);
	}
};

const LandingChrono = ({ content, page }) => {
	if (typeof content === 'undefined') {
		return null;
	}
	const sorted = page === 'journal' ? 
		content.sort((a, b) => parseInt(b.date, 10) - parseInt(a.date, 10)):
		content.sort((a, b) => parseInt(b.year, 10) - parseInt(a.year, 10));
	return (
		<section className="landing-section landing-section--main">
			<Content content={sorted} page={page} />
		</section>
	);
};

export default LandingChrono;