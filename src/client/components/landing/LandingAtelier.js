import React, { Component } from 'react';
import InfinitScroll from './InfinitScroll';
import CommonProjectPreview from '../projects/CommonProjectPreview';
import BodyText from'../BodyText';

const AtelierContent = (visibleContent, intro) => (
	<>
		<section id="#about" className="atelier-sub-section">
			<h2 className="atelier-sub-section__title">About</h2>
			<div className="atelier-landing__top">
				<div className="atelier-landing__top__desc">
					{ intro.desc && <BodyText content={intro.desc} />}
				</div>
			</div>
		</section>
		<section id="#portfolio" className="atelier-sub-section">
			<h2 className="atelier-sub-section__title">Portfolio</h2>
			<div className="atelier-section__inner">
				{
					visibleContent.map((post) =>
					<CommonProjectPreview
						id={post.id} 
						key={post.id} 
						{...post}
						type="atelier"
						category={post.category}
					/>)
				}
			</div>
		</section>
	</>
);

class LandingAtelier extends Component {
	render() {
		const { content, intro } = this.props;
		if (typeof content === 'undefined') {
			return null;
		}
		return ( 
			<InfinitScroll
				classList="landing-page landing-page--atelier main-section"
				content={content}
				render={(visibleContent) => AtelierContent(visibleContent, intro)}
			/>
		);
	}
}

export default LandingAtelier;