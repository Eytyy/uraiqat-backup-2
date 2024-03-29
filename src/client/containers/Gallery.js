import React, { Component } from 'react';
import Hammer from 'react-hammerjs';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getGalleryContent, getActiveSlide } from '../reducers';
import * as actions from '../actions';

import GallerySlide from '../components/media/GallerySlide';

class Gallery extends Component {
	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyStrokes);
	}

	componentWillReceiveProps(nextProps) {
		const { content } = nextProps;
		const { isActive } = content;

		if (isActive) {
			document.body.classList.add('js-gallery-isActive');
		} else {
			document.body.classList.remove('js-gallery-isActive');
		}
		if (nextProps.location.pathname !== this.props.location.pathname && isActive) {
			this.closeGallery();
		}
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyStrokes);
	}
	

	updateSlide = direction => {
		const { updateActiveSlide, content } = this.props;
		const { galleryId } = content;
		updateActiveSlide(galleryId, direction);
	}

	closeGallery = () => {
		const { toggleGallery } = this.props;
		const openGallery = false;
		toggleGallery(openGallery);
	}

	handleSwipe = event => {
		// show previous
		if (event.deltaX > 0) {
			this.updateSlide('prev');
		} else {
			this.updateSlide('next');
		}
	}

	handleKeyStrokes = event => {
		switch(event.keyCode) {
		case 39:	
			this.updateSlide('next');
			break;
		case 37:
			this.updateSlide('prev');
			break;
		case 27:
			this.closeGallery();
			break;
		}
	}

	render() {
		const { content } = this.props;
		const { slides, isActive, activeSlide, title, type } = content;
		if (!isActive) { return null; }

		const sliderRailStyle = {
			transform: `translateX(-${activeSlide * 100}%)`
		};
		
		return ( 
			<Hammer onSwipe={this.handleSwipe} direction="DIRECTION_HORIZONTAL">
				<div className={`gallery ${type === 'drawings' ? 'gallery--drawings' : 'gallery--default' }`}>
					<div className={`${slides.length === 1 ? 'gallery__inner gallery__inner--single' : 'gallery__inner'}`}>
						<div style={sliderRailStyle} className="gallery__slides">
							{
								slides.map((slide, index) => 
									<GallerySlide
										title={title}
										activeSlide={activeSlide}
										index={index}
										key={slide.id}
										content={slide} 
									/>)
							}
						</div>
					</div>
					<div onClick={this.closeGallery} className="gallery-btn gallery-btn--close">x</div>
					{
						slides.length !== 1 && <div className="gallery-btn gallery-btn--nav gallery-btn--nav--next" onClick={() => this.updateSlide('next')}
						>{'->'}</div>
					}
					{
						slides.length !== 1 && <div onClick={() => this.updateSlide('prev')} className="gallery-btn gallery-btn--nav gallery-btn--nav--prev">{'<-'}</div>
					}
				</div>
			</Hammer>);
	}
}

Gallery.defaultProps = {
	activeSlide: 0,
};


const mapStateToProps = state => ({
	content: getGalleryContent(state),
	activeSlide: getActiveSlide(state),
});

export default withRouter(connect(
	mapStateToProps,
	actions
)(Gallery));