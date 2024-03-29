import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';

import { fetchProjects } from '../actions';
import { getProject, isProjectsFetching, getNextPrev } from '../reducers';

import CommaSeparatedList from '../components/CommaSeparatedList';
import BodyText from '../components/BodyText';

import Slider from './Slider';
import RelatedPosts from '../components/related/RelatedPosts';
import InnerNav from '../components/InnerNav';

import LoadingPattern from '../components/patterns/LoadingPattern';

class Project extends Component { //eslint-disable-line
	state = {
		isAboutVisible: false,
		shouldAboutRetract: true,
	}

	static fetchData(store) {
		return store.dispatch(fetchProjects());
	}

	componentDidMount() {
		const { fetchProjects } = this.props;
		fetchProjects().then(() => {
			const shouldAboutRetract = document.querySelectorAll('.project__about .field-body p').length > 1 ? true : false;
			this.setState({
				shouldAboutRetract
			});
		});
	}

	toggleAbout = () => {
		this.setState({
			isAboutVisible: !this.state.isAboutVisible
		});
	}

	render() {
		const { content, innerNavContent, isFetching, match } = this.props;
		if (isFetching || typeof content.id === 'undefined') {
			return <div className="loader"><LoadingPattern /></div>;
		}
		const { title, aboutTheProject, drawings, mainSlider, location, year, budget, area, status, typology } = content;
		return (
			<article className="project">
				<header>
					<h1 className="main-title">{title}</h1>
				</header>
				<div className="project__top">
					{ mainSlider && <div className="project__media">
						<Slider
							classList="slider--main" 
							sliderName="project-main-slider"
							sliderId={`${content.id}m`}
							imagesQuery={'?fl=progressive&w=826'}
							contentTitle={title}
							content={mainSlider}
						/>
					</div> }
					<div className="project__meta">
						{ typology && <CommaSeparatedList classList="" content={typology} />}
						{ location && <div className="project__meta__item">
							<span className="label">Location: </span>{location}
						</div>}
						{ year && <div className="project__meta__item">
							<span className="label">Year: </span>{year}
						</div>}
						{ area && <div className="project__meta__item">
							<span className="label">Area: </span>{area}
						</div>}
						{ budget && <div className="project__meta__item">
							<span className="label">Budget: </span>{budget}
						</div>}
						{ status && <div className="project__meta__item">
							<span className="label">Status: </span>{status}
						</div>}
					</div>
				</div>
				<div className="project__bottom">
					<div className={`project__about ${this.state.isAboutVisible ? 'js-isExpanded' : ''}`}>
						<BodyText content={aboutTheProject} />
						{this.state.shouldAboutRetract && <span className="toggle-project-about" onClick={this.toggleAbout}>
							{ this.state.isAboutVisible ? '- read less' : '+ read more' }
						</span>}
					</div>
					<div className="project__drawings">
						{drawings && <Slider
							type="drawings"
							contentTitle={title}
							sliderName="project-drawings-slider"
							sliderId={`${content.id}d`}
							classList="slider--small"
							imagesQuery={'?fl=progressive&w=668'}
							content={drawings}
						/>}
					</div>
				</div>
				<aside className="related-content project__related">
					<RelatedPosts id={match.params.id} />
				</aside>
				<InnerNav {...innerNavContent} type="work" />
			</article>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const { match } = ownProps;
	const id = match.params.id;
	return {
		content: getProject(state, id),
		innerNavContent: getNextPrev(state, id, 'work'),
		isFetching: isProjectsFetching(state),
	};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchProjects }, dispatch);

Project.propTypes = {
	content: PropTypes.shape({
		id: PropTypes.string,
	}),
	isFetching: PropTypes.bool.isRequired,
	fetchProjects: PropTypes.func.isRequired,
};

Project.defaultProps = {
	content: {},
};

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Project));