import React from 'react';
import { Link } from 'react-router-dom';
import BodyText from '../BodyText';

const Careers = ({ content, desc }) => {
	return (
		<section className="practice-section--careers practice-section">
			<h2 className="practice-section__title" >Careers</h2>
			<div className="practice-section__inner">
				<BodyText content={desc} />
				{
					content.map(({ sys, fields }) => {
						const date = new Date(sys.createdAt);
						const formatedDate = `${date.getDate()}/${(date.getMonth()+1)}/${date.getFullYear()}`;
						return <article key={sys.id} className="career-preview">
							<Link className="link career-preview__link" to={`careers/${sys.id}`}>
								<time className="career-preview__date" dateTime={sys.createdAt}>{formatedDate}</time>
								<span className="sep">-></span>
								<h3 className="career-preview__title">{fields.title}</h3>
							</Link>
						</article>;
					})
				}
			</div>			
	
		</section>
	);
};

export default Careers;