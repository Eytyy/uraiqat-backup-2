import React, { Component } from 'react';
import throttle from 'lodash/throttle';
import CommonProjectPreview from '../projects/CommonProjectPreview';
import BodyText from'../BodyText';

class LandingAtelier extends Component {
	constructor() {
		super();
		this.state = {
			initialIndex: 1,
			skip: 0,
		};
		this.updateUi = this.updateUi.bind(this);
		this.onScroll = throttle(this.onScroll.bind(this), 500, { leading: false, trailing: true });
		this.visibleContent = [];
	}

	updateUi() {
		this.setState({
			skip: this.state.skip + 1,
			initialIndex: this.state.initialIndex + 1,
		});
	}

	onScroll() {
		const { content } = this.props;
		if (this.visibleContent.length === content.length) {
			return;
		}
		if (window.innerHeight * this.state.initialIndex >= this.section.offsetHeight - window.scrollY) {
			requestAnimationFrame(this.updateUi);
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.onScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
	}
	
	render() {
		const { content, intro } = this.props;
		const classList = 'landing-page landing-page--atelier main-section';
		const numberOfVisibleItemsPerScroll = 8;
		if (typeof content === 'undefined') {
			return null;
		}
		this.visibleContent = typeof this.state.skip !== 'undefined' ?
			content.slice(0, (this.state.skip * numberOfVisibleItemsPerScroll + numberOfVisibleItemsPerScroll)) : content;

		return ( 
			<section ref={(el) => {this.section = el;}} className={classList}>
				<section className="atelier-sub-section">
					<h2 className="atelier-sub-section__title">About</h2>
					<div  ref={(el) => {this.intro = el;}} className="atelier-landing__top">
						<div className="atelier-landing__top__desc">
							{ intro.desc && <BodyText content={intro.desc} />}
						</div>
					</div>
				</section>
				<section className="atelier-sub-section">
					<h2 className="atelier-sub-section__title">Projects</h2>
					<div className="atelier-section__inner">
						{
							this.visibleContent.map((post) =>
								<CommonProjectPreview {...post} id={post.id} key={post.id} type="atelier"/>
							)
						}
					</div>
				</section>
		
			</section>
		);
	}
}

export default LandingAtelier;