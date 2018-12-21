import React, { Component } from 'react';
import CommonProjectPreview from '../projects/CommonProjectPreview';
import InfinitScroll from './InfinitScroll';

class LandingWork extends Component {
	render() {
		return ( 
			<InfinitScroll
				classList="landing-page landing-page--work main-section"
				content={this.props.content}
				render={(visibleContent) => {
					return visibleContent.map((post) =>
						<CommonProjectPreview
							id={post.id} 
							key={post.id} 
							{...post}
							type="project"
							category={post.typology}
						/>
					)}}
			/>
		);
	}
}

export default LandingWork;