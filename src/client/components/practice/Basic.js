import React from 'react';
import BodyText from '../BodyText';

const Basic = ({ sectionTitle, content }) => {
	return (
		<section className={`practice-section practice-section--${sectionTitle}`}>
			<h2 className="practice-section__title" >{sectionTitle}</h2>
			<div className="practice-section__inner">
				<BodyText content={content} />
			</div>
		</section>
	);
};

export default Basic;