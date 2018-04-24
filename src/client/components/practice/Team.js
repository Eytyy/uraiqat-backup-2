import React from 'react';
import { Link } from 'react-router-dom';

import PostMediaImage from '../home/PostMediaImage';

const Team = ({ content }) => {
	return (
		<section className="practice-section--team practice-section">
			<h2 className="practice-section__title" >Team</h2>
			<div className="practice-section__inner">
				<div className="practice-section__team-list">
					{
						content.map(({ sys, fields }) =>
							<article key={sys.id} className="team-member-preview">
								<Link className="link team-member-preview__link" to={`team/${sys.id}`}>
									<PostMediaImage orientation="portrait" patternId="team-member" content={fields.profileImagevideo} />
									<h3 className="team-member-preview__name">{fields.name}</h3>
								</Link>
							</article>
						)
					}
				</div>
			</div>
		</section>
	);
};

export default Team;