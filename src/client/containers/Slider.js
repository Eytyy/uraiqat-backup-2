import React, { Component } from 'react';
import ImageComponent from '../components/media/ImageComponent';
import VideoComponent from '../components/media/VideoComponent';

const Slide = ({ imagesQuery, content }) => {
	const isMediaOfTypeImage = RegExp('image').test(content.file.contentType);
	return isMediaOfTypeImage ?
		<ImageComponent classList="slide slide--image" imagesQuery={imagesQuery}  src={typeof content.fields !== 'undefined' ? content.fields.file.url : content.file.url} /> :
		<VideoComponent classList="slide slide--video" content={content} /> ;
};

class Slider extends Component {
	constructor() {
		super();
		this.state = {
			activeSlide: 0,
		};
	}

	render() {
		const { content, classList, imagesQuery } = this.props;
		if (content.length === 0) {
			return null;
		}
		return ( 
			<div  className={`slider ${classList} ${content.length === 1 ? '' : 'slider--interactive'}`}>
				<div className="slider__slides">
					{ content.map(({ fields, sys }) => <Slide key={sys.id} imagesQuery={imagesQuery} content={fields} />)}
				</div>
				{
					content.length === 1 ?
						null:
						<div className="slider__controls">
							<div className="slider__controls__item slider-btn slider-btn--prev">{'<'}</div>
							<div className="slider__controls__item slider__counter">{this.state.activeSlide}{'/'}{content.length}</div>
							<div className="slider__controls__item slider-btn slider-btn--next">{'>'}</div>
						</div>
				}
			</div>);
	}
}

Slider.defaultProps = {
	isFlexible: false,
};

export default Slider;