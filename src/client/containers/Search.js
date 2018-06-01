import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../actions';
import { isSearchFetching, getSearchResults } from '../reducers';

import LoadingPattern from '../components/patterns/LoadingPattern';
import SearchPreview from '../components/SearchPreview';

class Search extends Component {
	render() {
		const { content, isFetching, keyword } = this.props;
		if (isFetching && content.length === 0) {
			return <div className="loader"><LoadingPattern /></div>;
		}
		return <section className="landing-section landing-section--featured">
			<h1 className="search-results-title" >
				{ content.length === 0 ? `Couldn't find content with the keyword [${keyword}]` : `Search results for [${keyword}]`}
			</h1>
			<div className="search-results">
				{	content.map(({ sys, fields }) =>
					<SearchPreview content={fields} type={sys.contentType.sys.id} id={sys.id} key={sys.id} />)}
			</div>
		</section>;
	}
}

Search.propTypes = {
	isFetching:  PropTypes.bool.isRequired,
};

const mapStateToProps = (state, {location}) => {
	const query = typeof URLSearchParams !== 'undefined' ?  new URLSearchParams(location.search) : '';
	const keyword = typeof URLSearchParams !== 'undefined' ? query.get('keyword') : '';
	return {
		isFetching: isSearchFetching(state),
		content: getSearchResults(state, keyword),
		keyword,
	};
};


export default withRouter(connect(
	mapStateToProps,
	actions
)(Search));