import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGalleryContent } from '../reducers';
import GallerySlide from '../components/media/GallerySlide';
import * as actions from '../actions';
import { getActiveSlide } from '../reducers';

class Gallery extends Component {
	constructor() {
		super();
		this.updateSlide = this.updateSlide.bind(this);
		this.closeGallery = this.closeGallery.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		const { content } = nextProps;
		const { isActive } = content;
		if (isActive) {
			document.body.classList.add('js-gallery-isActive');
		} else {
			document.body.classList.remove('js-gallery-isActive');
		}
	}
	updateSlide(direction) {
		const { updateActiveSlide } = this.props;
		updateActiveSlide(direction);
	}
	closeGallery() {
		const {toggleGallery } = this.props;
		const openGallery = false;
		toggleGallery(openGallery);
	}
	
	render() {
		const { content } = this.props;
		const { slides, isActive, activeSlide } = content;
		const visibleSlide = slides[activeSlide];
		if (!isActive) {
			return null;
		}
		return ( 
			<div className="gallery">
				<div className="gallery__inner">
					<GallerySlide active={activeSlide} key={visibleSlide.id} content={visibleSlide} />
				</div>
				{
					content.length === 1 ?
						null:
						<div className="slider__controls">
							<div className="slider__controls__inner">
								<div onClick={this.closeGallery} className="slider__controls__item slider-btn slider-btn--close">x</div>
								<div onClick={() => this.updateSlide('prev')} className="slider__controls__item slider-btn slider-btn--prev">{'<'}</div>
								<div className="slider__controls__item slider__counter">{activeSlide + 1}{'/'}{slides.length}</div>
								<div onClick={() => this.updateSlide('next')} className="slider__controls__item slider-btn slider-btn--next">{'>'}</div>
							</div>
						</div>
				}
			</div>);
	}
}

Gallery.defaultProps = {
	activeSlide: 0,
};


const mapStateToProps = state => ({
	content: getGalleryContent(state),
	activeSlide: getActiveSlide(state),
});

export default connect(
	mapStateToProps,
	actions
)(Gallery);