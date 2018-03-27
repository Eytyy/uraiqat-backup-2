import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Preview from '../../components/Preview';
import PostMediaImage from '../home/PostMediaImage';

import { formatDate } from '../../helpers';

class RelatedProject extends Component {
	render() {
		const { content, id } = this.props;
		const { previewMainThumbnail, year, projectName} = content;
		return (
			<Preview classList="post-preview post-preview--default post-preview--landscape related-item related-item--project">
				<Link className="post-preview__link" to={`/work/${id}`}>
					{ year && <div className="post-preview__meta">{formatDate(year)}{' -> '}Project</div> }
					<PostMediaImage orientation="landscape" patternId="related-project" content={previewMainThumbnail} />
					{ projectName && <h3 className="post-preview__title title">{projectName}{' -> '}</h3> }
				</Link>
			</Preview>
		);
	}
}

export default RelatedProject;