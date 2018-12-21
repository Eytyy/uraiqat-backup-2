import React from 'react';
import { Link } from 'react-router-dom';

import PostMediaImage from '../home/PostMediaImage';

const Team = ({ content, type }) => {
	if (!content) {
		return null;
	}
	return (
		<section className="practice-section--team practice-section">
			<h2 className="practice-section__title" >{ type === 'current' ? 'Team' : 'Previous Team Members'}</h2>
			<div className="practice-section__inner">
				{ type === 'current' ? 
					<div className="practice-section__team-list">
						{
							content.map(({ sys, fields }) =>
								<article key={sys.id} className="team-member-preview">
									<Link className="link team-member-preview__link" to={`team/${sys.id}`}>
										<PostMediaImage orientation="portrait" patternId="team-member" query="w=350" content={fields.profileImagevideo} />
										<h3 className="team-member-preview__name">{fields.name}</h3>
									</Link>
								</article>
							)
						}
					</div> :
					<div className="practice-section__team-previous-list">
						{
							content.map(({ sys, fields }, index) =>
								<span style={{display: 'inline-block'}} key={sys.id} className="previous-member">{fields.name}{ index === content.length - 1 ? '.' : ', '}</span>
							)
						}
					</div>
				}
			</div>
		</section>
	);
};

export default Team;