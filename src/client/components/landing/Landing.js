import React, { Component } from 'react';
import LandingFeatured from './LandingFeatured';
import LandingChrono from './LandingChrono';
import BodyText from'../BodyText';
import throttle from 'lodash/throttle';

class Landing extends Component {
	constructor() {
		super();
		this.state = {
			initialIndex: 1,
			skip: 0,
		};
		this.visible = [];
		this.adjustContainerHeight = this.adjustContainerHeight.bind(this);
		this.updateUi = this.updateUi.bind(this);
		this.onScroll = throttle(this.onScroll.bind(this), 500, { leading: false, trailing: true });
	}

	updateUi() {
		this.setState({
			skip: this.state.skip + 1,
			initialIndex: this.state.initialIndex + 1,
		});
	}

	onScroll() {
		if (this.visible === this.contentLength) {
			return;
		}
		if (window.innerHeight * this.state.initialIndex >= this.section.offsetHeight - window.scrollY) {
			requestAnimationFrame(this.updateUi);
		}
	}

	adjustContainerHeight() {
		const featured = document.querySelector('.landing-section--featured');
		const main = document.querySelector('.landing-section--main');
		const featuredHeight = featured ? featured.getBoundingClientRect().height : 0;
		const mainHeight = main ? main.getBoundingClientRect().height : 0;

		const newHeight = `${featuredHeight + mainHeight}px` ;
		this.section.style.height = newHeight;
	}

	componentDidMount() {
		const { content } = this.props;
		const { mainContent, featuredContent } = content;

		this.contentLength = mainContent.length + featuredContent.length;

		if (typeof window !== 'undefined') {
			this.adjustContainerHeight();
		}
		window.addEventListener('scroll', this.onScroll);
	}

	componentDidUpdate() {
		this.adjustContainerHeight();
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
	}
	
	render() {
		const { page, content, intro } = this.props;
		const { mainContent, featuredContent } = content;
		const classList = `landing-page landing-page--${page} main-section`;
		const numberOfVisibleItemsPerScroll = page === 'journal' ? 8 : 3;

		this.visibleFeatured = typeof this.state.skip !== 'undefined' ?
			featuredContent.slice(0, (this.state.skip * numberOfVisibleItemsPerScroll + numberOfVisibleItemsPerScroll)) : featuredContent;
		this.visibleMain = typeof this.state.skip !== 'undefined' ?
			mainContent.slice(0, (this.state.skip * numberOfVisibleItemsPerScroll + numberOfVisibleItemsPerScroll) - this.visibleFeatured.length) : mainContent;
		this.visible = this.visibleFeatured.length + this.visibleMain.length;

		return ( 
			<section ref={(el) => {this.section = el;}} className={classList}>
				{ page === 'atelier' && intro &&
					(<div className="atelier-landing__top">
						<div className="atelier-landing__top__desc">
							{ intro.desc && <BodyText content={intro.desc} />}
						</div>
					</div>)}
				{ featuredContent && <LandingFeatured page={page} content={this.visibleFeatured}></LandingFeatured>}
				{ mainContent && <LandingChrono page={page} content={this.visibleMain}></LandingChrono>}
			</section>
		);
	}
}

export default Landing;