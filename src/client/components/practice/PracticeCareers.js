import React from 'react';
import { Link } from 'react-router-dom';

const PracticeCareers = ({ content }) => {
	return (
		<section className="practice-section__careers practice__careers">
			<h2 className="practice-section__title" >Careers</h2>
			{
				content.map(({ sys, fields }) => {
					return <article key={sys.id} className="career-preview">
						<Link className="link career-preview__link" to={`careers/${sys.id}`}>
							<h3 className="career-preview__title">{fields.title}</h3>
						</Link>
					</article>;
				})
			}
		</section>
	);
};

export default PracticeCareers;