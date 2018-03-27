import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getActiveSlide } from '../reducers';

import Slide from '../components/media/Slide';
import Pattern from '../components/patterns/Pattern';

class Slider extends Component {
	constructor() {
		super();
		this.state = {
			allImagesAreLoaded: false,
			clientLoaded: false,
		};
		this.onSlideClick = this.onSlideClick.bind(this);
		this.updateSlide = this.updateSlide.bind(this);
	}

	checkImage(path) {
		return new Promise(resolve => {
			const img = new Image();
			const imgSrc = path.fields.file.url;
			img.onload = () => {
				console.log('loaded', imgSrc);
				return resolve({imgSrc, status: 'ok'});
			};
			img.onerror = () => resolve({imgSrc, status: 'error'});
			img.src = imgSrc;
		});
	}
	loadImages() {
		const { content } = this.props;
		Promise.all(content.map(this.checkImage)).then(() => {
			this.setState({
				allImagesAreLoaded: true,
			});
		});
	}
		
	componentDidMount() {
		const { content, updateGallery, sliderId } = this.props;
		this.setState({
			clientLoaded: true,
		});
		this.loadImages();
		updateGallery(sliderId, content);
	}
	updateSlide(direction) {
		const { updateActiveSlide, sliderId } = this.props;
		updateActiveSlide(sliderId, direction);
	}
	onSlideClick() {
		const {toggleGallery, sliderId} = this.props;
		const openGallery = true;
		toggleGallery(sliderId, openGallery);
	}
	render() {
		const { content, classList, imagesQuery, activeSlideIndex } = this.props;
		const sliderRailStyle = {
			transform: `translateX(-${activeSlideIndex * 100}%)`
		};
		if (content.length === 0) {
			return null;
		}
		if (!this.state.allImagesAreLoaded) {
			return <Pattern />;
		}
		return ( 
			<div ref={(el) => { this.slider = el; }} className={`slider ${classList}`}>
				<div className="slider__inner">
					<div style={sliderRailStyle} className="slider__slides">
						{ content.map(({ fields, sys }, index) =>
							<Slide index={index} active={activeSlideIndex} onClick={this.onSlideClick} key={sys.id} imagesQuery={imagesQuery} content={fields} />)}
					</div>
				</div>
				{
					content.length === 1 ?
						null:
						<div className="slider__controls">
							<div onClick={() => this.updateSlide('next')} className="slider__controls__item slider-btn slider-btn--next">{'>'}</div>
							<div className="slider__controls__item slider__counter">{activeSlideIndex + 1}{'/'}{content.length}</div>
							<div onClick={() => this.updateSlide('prev')} className="slider__controls__item slider-btn slider-btn--prev">{'<'}</div>
						</div>
				}
			</div>);
	}
}

Slider.defaultProps = {
	isFlexible: false,
	activeSlideIndex: 0,
};

const mapStateToProps = (state, {sliderId}) => ({
	activeSlideIndex: getActiveSlide(state, sliderId),
});

export default connect(
	mapStateToProps,
	actions
)(Slider);