import React from 'react';
import Post from '../home/Post';

const LandingChrono = ({ content }) => {
	if (typeof content === 'undefined') {
		return null;
	}
	return (
		<section className="landing-section landing-section--main">
			{
				content.map((post) => <Post content={post.fields} key={post.sys.id} />)
			}
		</section>
	);
};

export default LandingChrono;