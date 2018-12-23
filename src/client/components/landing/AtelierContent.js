import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getActiveAtelier } from '../../reducers';
import * as actions from '../../actions';

import throttle from 'lodash/throttle';
import CommonProjectPreview from '../projects/CommonProjectPreview';
import BodyText from'../BodyText';

class AtelierContent extends Component {
	portfolio = React.createRef()
	portfolioOffset = 0
	about = React.createRef()
	aboutOffset = 0

	getHeaderSize = () => {
		return window.innerWidth >= 1280 ? 32 * 5 : 24 * 4;
	}

	componentDidMount() {
		window.addEventListener('scroll', this.onScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
	}
	
	onScroll = throttle(
		(e) => {
			const { updateAtelierNav } = this.props;
			if (window.scrollY < this.portfolio.current.offsetTop - this.getHeaderSize()) {
				updateAtelierNav('about');
			} else {
				updateAtelierNav('portfolio');
			}
		}, 500, { leading: false, trailing: true }
	);

	updateActiveSection = (section) => {
		const { updateActiveSection } = this.props;
		updateActiveSection(section);
	}
	
	render() {
		const { visibleContent, intro } = this.props
		return (
			<>
				<section id="about" ref={this.about} className="atelier-sub-section">
					<h2 className="atelier-sub-section__title">About</h2>
					<div className="atelier-landing__top">
						<div className="atelier-landing__top__desc">
							{ intro.desc && <BodyText content={intro.desc} />}
						</div>
					</div>
				</section>
				<section id="portfolio" ref={this.portfolio}  className="atelier-sub-section">
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
	}
}

AtelierContent.propTypes = {
	activeSection: PropTypes.string,
};

const mapStateToProps = state => ({
	activeSection: getActiveAtelier(state),
});

export default withRouter(connect(
	mapStateToProps,
	actions
)(AtelierContent));