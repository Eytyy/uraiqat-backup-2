import React from 'react';
import Post from '../home/Post';
import ProjectPreview from '../work/ProjectPreview';

const Content = ({ content, page }) => {
	switch(page) {
	case 'work':
		return content.map((post) => <ProjectPreview {...post.fields} id={post.sys.id} key={post.sys.id} />);
	default:
		return content.map((post) => <Post {...post.fields} id={post.sys.id} key={post.sys.id} />);
	}
};

const LandingChrono = ({ content, page }) => {
	if (typeof content === 'undefined') {
		return null;
	}
	const sorted = content.sort((a, b) => parseInt(b.fields.date, 10) - parseInt(a.fields.date, 10));
	return (
		<section className="landing-section landing-section--main">
			<Content content={sorted} page={page} />
		</section>
	);
};

export default LandingChrono;