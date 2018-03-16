import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';

import { fetchProject } from '../actions';
import { getProject, isProjectFetching } from '../reducers';

import CommaSeparatedList from '../components/CommaSpearatedList';
import Slider from './Slider';

class Project extends Component { //eslint-disable-line
	static fetchData(store, id) {
		return store.dispatch(fetchProject(id));
	}
	componentDidMount() {
		const { content, isFetching } = this.props;
		if (!isFetching && typeof content.id === 'undefined') {
			this.fetchData();
		}
	}

	fetchData() {
		const { fetchProject, match } = this.props;
		const id = match.params.id;
		fetchProject(id);
	}
	render() {
		const { content, isFetching } = this.props;
		if (isFetching || typeof content.id === 'undefined') {
			return <div>Loading post...</div>;
		}
		const { projectName, aboutTheProject, drawings, mainImagevideo, location, year, budget, area, status, typology } = content;
		return (
			<article className="project">
				<header>
					<h1 className="main-title">{projectName}</h1>
				</header>
				<div className="project__top">
					<div className="project__media">
						<Slider classList="slider--main" imagesQuery={'?fl=progressive&w=826&h=512'} content={mainImagevideo} />
					</div> 
					<div className="project__meta">
						<div className="project__meta__item">
							<CommaSeparatedList classList="" content={typology} />
						</div>
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
					<div className="project__about">{aboutTheProject}</div>
					<div className="project__drawings">
						<Slider classList="slider--small" imagesQuery={'?fl=progressive&w=334&h=256'} content={drawings} />
					</div>
				</div>
			</article>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const { match } = ownProps;
	const id = match.params.id;
	return {
		content: getProject(state, id),
		isFetching: isProjectFetching(state),
	};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchProject }, dispatch);

Project.propTypes = {
	content: PropTypes.shape({
		id: PropTypes.string,
	}),
	isFetching: PropTypes.bool.isRequired,
	fetchProject: PropTypes.func.isRequired,
};

Project.defaultProps = {
	content: {},
};

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Project));