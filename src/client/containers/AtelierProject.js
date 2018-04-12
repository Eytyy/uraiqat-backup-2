import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';

import { fetchAtelierProject } from '../actions';
import { getAtelierProject, isAtelierProjectFetching } from '../reducers';

import BodyText from '../components/BodyText';

import Slider from './Slider';
import RelatedPosts from '../components/related/RelatedPosts';

import LoadingPattern from '../components/patterns/LoadingPattern';

class AtelierProject extends Component { //eslint-disable-line
	static fetchData(store, id) {
		return store.dispatch(fetchAtelierProject(id));
	}
	fetchData() {
		const { fetchAtelierProject, match } = this.props;
		const id = match.params.id;
		fetchAtelierProject(id);
	}
	render() {
		const { content, isFetching, match } = this.props;
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
						<Slider sliderName="atelier-main-slider" classList="slider--main" sliderId={`${content.id}m`} imagesQuery={'?fl=progressive&w=1022'} content={mainSlider} />
					</div> 
				</div>
				{description && <div className="atelier__bottom">
					<div className="atelier__about">
						<BodyText content={description} />
					</div>
				</div>}
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
		isFetching: isAtelierProjectFetching(state),
	};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchAtelierProject }, dispatch);

AtelierProject.propTypes = {
	content: PropTypes.shape({
		id: PropTypes.string,
	}),
	isFetching: PropTypes.bool.isRequired,
	fetchAtelierProject: PropTypes.func.isRequired,
};

AtelierProject.defaultProps = {
	content: {},
};

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(AtelierProject));