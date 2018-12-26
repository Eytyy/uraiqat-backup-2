import React, { Component } from 'react';
import InfinitScroll from './InfinitScroll';
import AtelierContent from './AtelierContent';

class LandingAtelier extends Component {
	render() {
		const { content, intro } = this.props;
		return ( 
			<InfinitScroll
				classList="landing-page landing-page--atelier main-section"
				content={content}
				render={(visibleContent) => <AtelierContent visibleContent={visibleContent} intro={intro} />}
			/>
		);
	}
}

export default LandingAtelier;