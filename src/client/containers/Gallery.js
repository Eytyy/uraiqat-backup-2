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
		this.toggleDetails = this.toggleDetails.bind(this);
		this.state = {
			areDetailsVisible: false,
		};
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
		const { updateActiveSlide, content } = this.props;
		const { galleryId } = content;
		updateActiveSlide(galleryId, direction);
	}
	closeGallery() {
		const {toggleGallery } = this.props;
		const openGallery = false;
		toggleGallery(openGallery);
	}
	toggleDetails() {
		this.setState({
			areDetailsVisible: !this.state.areDetailsVisible,
		});
	}
	render() {
		const { content } = this.props;
		const { slides, isActive, activeSlide, title, type } = content;
		if (!isActive) {
			return null;
		}
		const sliderRailStyle = {
			transform: `translateX(-${activeSlide * 100}%)`
		};
		
		return ( 
			<div className={`gallery ${this.state.areDetailsVisible ? 'js-details-are-visible' : ''} ${type === 'drawings' ? 'gallery--drawings' : 'gallery--default' }`}>
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
				<div onClick={this.toggleDetails} className="gallery-btn gallery-btn--info">
					{this.state.areDetailsVisible ? 'x' : '?'}
				</div>

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