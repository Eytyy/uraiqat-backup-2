import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Preview from '../../components/Preview';
import PostMediaImage from '../home/PostMediaImage';

import { formatDate } from '../../helpers';

class RelatedProject extends Component {
	render() {
		const { content, id, type } = this.props;
		const { previewMainThumbnail, year, title } = content;
		return (
			<Preview classList="post-preview post-preview--default post-preview--landscape related-item related-item--project">
				<Link className="post-preview__link" to={`/${type === 'atelierProject' ? 'atelier' : 'work'}/${id}`}>
					{ year && <div className="post-preview__meta">{formatDate(year)}{' -> '}Project</div> }
					<PostMediaImage orientation="landscape" patternId="related-project" content={previewMainThumbnail} />
					{ title && <h3 className="post-preview__title title">{title}{' -> '}</h3> }
				</Link>
			</Preview>
		);
	}
}

export default RelatedProject;