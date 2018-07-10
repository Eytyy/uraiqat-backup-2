import React, { Component } from 'react';

class FlexibleImageComponent extends Component {
	render() {
		const { content } = this.props;
		const { description, file } = content.fields;
		return (
			<div ref={(el) => this.wrapper = el}className="post__media post__media--image">
				<div className="post__media__image">
					<img src={`${file.url}?w=924`} />
				</div>
				{ description && <div className="post__media__caption">{description}</div>}
			</div>
		);
	}
}

export default FlexibleImageComponent; 