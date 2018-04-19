import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';

import { fetchAtelierProjects } from '../actions';
import { getAtelierProject, isAtelierProjectsFetching, getNextPrev } from '../reducers';

import BodyText from '../components/BodyText';

import Slider from './Slider';
import RelatedPosts from '../components/related/RelatedPosts';
import InnerNav from '../components/InnerNav';

import LoadingPattern from '../components/patterns/LoadingPattern';

class AtelierProject extends Component { //eslint-disable-line
	static fetchData(store) {
		return store.dispatch(fetchAtelierProjects());
	}
	componentDidMount() {
		const { fetchAtelierProjects } = this.props;
		return fetchAtelierProjects();
	}
	render() {
		const { content, innerNavContent, isFetching, match } = this.props;
		if (isFetching || typeof content.id === 'undefined') {
			return <div className="loader"><LoadingPattern /></div>;
		}
		const { title, description, mainSlider } = content;
		return (
			<article className="atelier">
				<header>
					<h1 className="main-title">{title}</h1>
				</header>
				<div className="atelier__top">
					<div className="atelier__media">
						<Slider contentTitle={title} sliderName="atelier-main-slider" classList="slider--main" sliderId={`${content.id}m`} imagesQuery={'?fl=progressive&w=1022'} content={mainSlider} />
					</div> 
				</div>
				{description && <div className="atelier__bottom">
					<div className="atelier__about">
						<BodyText content={description} />
					</div>
				</div>}
				<InnerNav {...innerNavContent} type="atelier" />
				<aside className="related-content atelier__related">
					<RelatedPosts id={match.params.id} />
				</aside>
			</article>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const { match } = ownProps;
	const id = match.params.id;
	return {
		content: getAtelierProject(state, id),
		innerNavContent: getNextPrev(state, id, 'atelier'),
		isFetching: isAtelierProjectsFetching(state),
	};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchAtelierProjects }, dispatch);

AtelierProject.propTypes = {
	content: PropTypes.shape({
		id: PropTypes.string,
	}),
	isFetching: PropTypes.bool.isRequired,
	fetchAtelierProjects: PropTypes.func.isRequired,
};

AtelierProject.defaultProps = {
	content: {},
};

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(AtelierProject));