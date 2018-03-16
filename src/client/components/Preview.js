import React, { Component } from 'react';

class Preview extends Component {
	componentDidMount() {
		const previewHeight = this.previewBlock.offsetHeight;
		const heightRelativeToCharacterHeight = previewHeight % 32;
		const padding = heightRelativeToCharacterHeight === 0 ?
			0 :
			(1 - heightRelativeToCharacterHeight/32) * 32;
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