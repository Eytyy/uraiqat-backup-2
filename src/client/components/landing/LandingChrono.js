import React from 'react';
import Post from '../home/Post';

const LandingChrono = ({ content }) => {
	if (typeof content === 'undefined') {
		return null;
	}
	const sorted = content.sort((a, b) => parseInt(b.fields.date, 10) - parseInt(a.fields.date, 10));
	return (
		<section className="landing-section landing-section--main">
			{ sorted.map((post) => <Post {...post.fields} id={post.sys.id} key={post.sys.id} />) }
		</section>
	);
};

export default LandingChrono;