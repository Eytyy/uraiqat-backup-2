import React from 'react';
import { Link } from 'react-router-dom';

import PostMediaImage from '../home/PostMediaImage';

const Team = ({ content }) => {
	if (!content) {
		return null;
	}
	const current = content.filter(({ fields }) => !fields.previousMember);
	const previous = content.filter(({ fields }) => fields.previousMember);
	console.log(previous);
	return (
		<section className="practice-section--team practice-section">
			<h2 className="practice-section__title" >Team</h2>
			<div className="practice-section__inner">
				<div className="practice-section__team-list">
					{
						current.map(({ sys, fields }) =>
							<article key={sys.id} className="team-member-preview">
								<Link className="link team-member-preview__link" to={`team/${sys.id}`}>
									<PostMediaImage orientation="portrait" patternId="team-member" query="w=350" content={fields.profileImagevideo} />
									<h3 className="team-member-preview__name">{fields.name}</h3>
								</Link>
							</article>
						)
					}
				</div>
				<div className="practice-section__team-list practice-section__team-list--previous">
					{
						previous && previous.map(({ sys, fields }) =>
							<article key={sys.id} className="team-member-preview">
								<h3 className="team-member-preview__name">{fields.name}</h3>
							</article>
						)
					}
				</div>
			</div>
		</section>
	);
};

export default Team;