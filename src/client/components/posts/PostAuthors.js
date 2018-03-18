import React from 'react';
import { Link } from 'react-router-dom';

const PostAuthorWithLink = ({ content, index, lastIndex}) => {
	return (
		<span className="post__authors__list__item">
			<Link className="post__authors__list__item__link" to={`/team/${content.relatedTeamMemberProfile.sys.id}`} >
				{content.authorName}{index === lastIndex ? '.' : ' ,'}
			</Link>
		</span>
	);
};

const PostAuthor = ({ content, index, lastIndex}) => {
	return (
		<span className="post__authors__list__item">
			{content.authorName}{index === lastIndex ? '.' : ' ,'}
		</span>
	);
};

const PostAuthors = ({ content }) => {
	return (
		<div className="post__meta post__authors">
			<span className="label">By </span>
			<div className="post__authors__list post__meta__item">
				{
					content.map(({ sys, fields }, index) => {
						return typeof fields.relatedTeamMemberProfile !== 'undefined' ?
							<PostAuthorWithLink key={sys.id} content={fields} index={index} lastIndex={content.length - 1} /> :
							<PostAuthor key={sys.id} index={index} content={fields} lastIndex={content.length - 1} />;
					})
				}
			</div>
		</div>
	);
};

export default PostAuthors;