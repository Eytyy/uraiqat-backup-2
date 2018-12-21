import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getActiveSlide } from '../reducers';
import Hammer from 'react-hammerjs';

import Slide from '../components/media/Slide';

class Slider extends Component {
	state = {
		clientLoaded: false,
	};

	componentDidMount() {
		const { content, updateGallery, sliderId, contentTitle, type } = this.props;
		this.setState({
			clientLoaded: true,
		});
		updateGallery(sliderId, content, contentTitle, type);
	}

	componentWillReceiveProps({ sliderId, content, contentTitle, type, updateGallery }) {
		if (sliderId !== this.props.sliderId) {
			updateGallery(sliderId, content, contentTitle, type);
		}
	}

	updateSlide = direction => {
		const { updateActiveSlide, sliderId } = this.props;
		updateActiveSlide(sliderId, direction);
	}

	onSlideClick = () => {
		const {toggleGallery, sliderId, type} = this.props;
		const openGallery = true;
		toggleGallery(sliderId, openGallery, type);
	}
	
	handleSwipe = event => { //eslint-disable-line
		// show previous
		if (event.deltaX > 0) {
			this.updateSlide('prev');
		} else {
			this.updateSlide('next');
		}
	}
	
	render() {
		const { content, classList, imagesQuery, activeSlideIndex, sliderName, type } = this.props;
		const sliderRailStyle = { transform: `translateX(-${activeSlideIndex * 100}%)` };

		// return null if there are no slides
		if (content.length === 0) { return null; }	

		// otherwise render the slider
		return ( 
			<Hammer onSwipe={this.handleSwipe} direction="DIRECTION_HORIZONTAL">
				<div ref={(el) => { this.slider = el; }}
					className={`slider ${content.length > 1 ? 'multiple' : 'single'} ${classList} ${type === 'drawings' ? 'slider--drawings' : 'slider--default'}`}
				>
					<div className="slider__inner">
						<div style={sliderRailStyle} className="slider__slides">
							{ content.map(({ fields, sys }, index) =>
								<Slide sliderName={sliderName} index={index} active={activeSlideIndex} onClick={this.onSlideClick} key={sys.id} imagesQuery={imagesQuery} content={fields} />)}
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
				</div>
			</Hammer>);
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