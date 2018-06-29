import React, { Component } from 'react';

class Preview extends Component {
	componentDidMount() {
		const previewHeight = this.previewBlock.offsetHeight;
		const heightRelativeToCharHeight = previewHeight % 32;
		const padding = heightRelativeToCharHeight === 0 ? 0 : (1 - heightRelativeToCharHeight/32) * 32;
		this.previewBlock.style.paddingBottom = `${padding}px`;
	}
	
	render() {
		const { classList, children } = this.props;
		return (
			<article ref={(el) => { this.previewBlock = el; }} className={classList}>
				{ children }
			</article>
		);
	}
}

export default Preview;