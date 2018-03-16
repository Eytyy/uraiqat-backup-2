import React, { Component } from 'react';
import ImageComponent from '../components/ImageComponent';

class Slider extends Component {
	render() {
		const { content, classList, imagesQuery } = this.props;
		if (content.length === 0) {
			return null;
		}
		if (content.length === 1) {
			return ( 
				<div className={`slider ${classList}`}>
					<ImageComponent classList="slide" imagesQuery={imagesQuery} src={content[0].fields.file.url} />
				</div>);
		}
		return (
			<div className={`slider slider--singleSlide ${classList}`}>
				{ content.map(({ fields, sys }) =><ImageComponent classList="slide" imagesQuery={imagesQuery} key={sys.id} src={fields.file.url} />)}
			</div>
		);
	}
}

export default Slider;