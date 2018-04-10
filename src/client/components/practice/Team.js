import React from 'react';
import { Link } from 'react-router-dom';

const Team = ({ content }) => {
	return (
		<section className="practice-section__careers practice__team">
			<h2 className="practice-section__title" >Team</h2>
			{
				content.map(({ sys, fields }) => {
					const bgStyle = {
						backgroundImage: `url('${fields.profileImagevideo.fields.file.url}')`,
					};
					return <article key={sys.id} className="team-member-preview">
						<Link className="link team-member-preview__link" to={`team/${sys.id}`}>
							<div className="team-member-preview__image" style={bgStyle} />
							<h3 className="team-member-preview__name">{fields.name}</h3>
						</Link>
					</article>;
				})
			}
		</section>
	);
};

export default Team;