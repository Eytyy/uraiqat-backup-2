import React, { Component } from 'react';
import ImageComponent from '../components/media/ImageComponent';

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
		if (content.length === 1) {
			return ( 
				<div className={`slider ${classList}`}>
					<div className="slider__slides">
						<ImageComponent classList="slide" imagesQuery={imagesQuery} src={content[0].fields.file.url} />
					</div>
				</div>);
		}
		return (
			<div className={`slider slider--singleSlide ${classList}`}>
				<div className="slider__slides">
					{ content.map(({ fields, sys }) =><ImageComponent classList="slide" imagesQuery={imagesQuery} key={sys.id} src={fields.file.url} />)}
				</div>
				<div className="slider__controls">
					<div className="slider__controls__item slider-btn slider-btn--prev">{'<'}</div>
					<div className="slider__controls__item slider__counter">{this.state.activeSlide}{'/'}{content.length}</div>
					<div className="slider__controls__item slider-btn slider-btn--next">{'>'}</div>
				</div>
			</div>
		);
	}
}

export default Slider;