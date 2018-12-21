import React from 'react';
import Post from '../home/Post';
const Content = ({ content, page }) => content.map((post) => <Post {...post} id={post.id} key={post.id} />);

const LandingChrono = ({ content, page }) => {
	if (typeof content === 'undefined') {
		return null;
	}
	return (
		<section className="landing-section landing-section--main">
			<Content content={content} page={page} />
		</section>
	);
};

export default LandingChrono;