import React from 'react';
import Post from '../home/Post';

const Content = ({ content }) =>  content.map((post) => <Post {...post} id={post.id} key={post.id} />);

const LandingFeatured = ({ content, page }) => {
	if (typeof content === 'undefined' || content.length === 0) {
		return null;
	}
	return (
		<section className="landing-section landing-section--featured">
			<Content content={content} page={page} />
		</section>
	);
};

export default LandingFeatured;