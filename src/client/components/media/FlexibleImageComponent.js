import React, { Component } from 'react';

class FlexibleImageComponent extends Component {
	componentDidMount() {
		const { content, setSliderHeight } = this.props;
		const {width, height} = content.file.details.image;
		const imageHeight = Math.ceil(882 * ((height/width) / 32)) * 32;
		setSliderHeight(imageHeight);
	}
	
	render() {
		const { content, classList } = this.props;
		const { url } = content.file;
		const style = {
			backgroundImage: `url('${url}')`,
		};
		const classes = typeof classList !== 'undefined' ? classList : '';
		return (
			<div className={`preview-image ${classes}`} style={style}></div>

		);
	}
}

export default FlexibleImageComponent;