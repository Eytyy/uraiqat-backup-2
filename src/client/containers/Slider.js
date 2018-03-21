import React, { Component } from 'react';
import ImageComponent from '../components/media/ImageComponent';
import FlexibleImageComponent from '../components/media/FlexibleImageComponent';
import VideoComponent from '../components/media/VideoComponent';

const Slide = ({ imagesQuery, content, isFlexible, setSliderHeight }) => {
	const isMediaOfTypeImage = RegExp('image').test(content.file.contentType);
	if (isFlexible) {
		return isMediaOfTypeImage ?
			<FlexibleImageComponent classList="slide slide--image" setSliderHeight={setSliderHeight} imagesQuery={imagesQuery}  content={content} /> :
			<VideoComponent classList="slide slide--video" content={content} /> ;
	}
	return isMediaOfTypeImage ?
		<ImageComponent classList="slide slide--image" imagesQuery={imagesQuery}  src={typeof content.fields !== 'undefined' ? content.fields.file.url : content.file.url} /> :
		<VideoComponent classList="slide slide--video" content={content} /> ;
};

class Slider extends Component {
	constructor() {
		super();
		this.state = {
			activeSlide: 0,
			sliderHeight: 'auto',
		};
		this.setSliderHeight = this.setSliderHeight.bind(this);
	}
	
	setSliderHeight(height) {
		const { content } = this.props;
		if (content.length > 1) {
			return;
		}
		this.setState({
			sliderHeight: `${height}px`
		});
	}

	render() {
		const { content, classList, imagesQuery, isFlexible } = this.props;
		const style = {
			height: this.state.sliderHeight
		};
		if (content.length === 0) {
			return null;
		}
		return ( 
			<div style={style} className={`slider ${classList} ${content.length === 1 ? '' : 'slider--interactive'}`}>
				<div className="slider__slides">
					{ content.map(({ fields, sys }) => <Slide setSliderHeight={this.setSliderHeight} isFlexible={isFlexible} key={sys.id} imagesQuery={imagesQuery} content={fields} />)}
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