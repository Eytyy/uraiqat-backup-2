import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getFilters } from '../../reducers';
import * as actions from '../../actions';

import HeaderPatternChunk from './HeaderPatternChunk';
import HeaderDTFilterSearchFilter from './HeaderDTFilterSearchFilter';
import HeaderDTFilterSearchSearch from './HeaderDTFilterSearchSearch';
import HeaderDTFiltersList from './HeaderDTFiltersList';


class HeaderDTFilterSearch extends Component {
	constructor() {
		super();
		this.state = {
			filtersAreVisible: false,
			searchIsVisible: false,
		};
		this.onfilterClick = this.onfilterClick.bind(this);
		this.onSearchClick = this.onSearchClick.bind(this);
		this.onSearchSubmit = this.onSearchSubmit.bind(this);
		this.clearSearch = this.clearSearch.bind(this);
	}
	toggleFilter() {
		this.setState({
			filtersAreVisible: !this.state.filtersAreVisible
		});
	}
	onfilterClick() {
		const { fetchFilters, content } = this.props;
		if (!this.state.filtersAreVisible) {
			if (content.length === 0) {
				fetchFilters().then(() => {
					this.toggleFilter();
				});
			} else {
				this.toggleFilter();
			}
		} else {
			this.toggleFilter();
		}
	}
	clearSearch() {
		if (this.search) {
			this.search.value = '';
		}
	}
	onSearchClick() {
		this.setState({
			searchIsVisible: !this.state.searchIsVisible
		});
	}
	onSearchSubmit(event) {
		const { fetchSearchResults } = this.props;
		const keyword = new FormData(event.target).get('keyword');
		fetchSearchResults(keyword);
		event.preventDefault();
		this.props.history.push(`/search?keyword=${keyword}`);
		this.clearSearch();
		return false;
	}
	render() {
		const { content } = this.props;
		const fixedStart = 11;
		const config = {
			separator: '/',
			filter: {
				name: 'Filter',
				glyph: { className: 'ind', content: '+' },
				spacesBefore: 3,
				spacesAfter: 2,
			},
			search: {
				name: 'Search',
				glyph: { className: 'ind', content: ':' },
				searchInputSize: 32,
				spacesBefore: 3,
				spacesAfter: 2,
			}
		};
		const reservedSearchSize = config.search.name.length + config.search.glyph.content.length + config.search.searchInputSize;
		const reservedFilterSize = config.filter.name.length + config.filter.glyph.content.length;
		const reservedEmptySpaces = config.search.spacesAfter + config.search.spacesBefore + config.filter.spacesAfter + config.filter.spacesBefore;
		const numberofNavSeparators = 1;
		const totalReservedSpaces = reservedSearchSize + reservedFilterSize + reservedEmptySpaces + numberofNavSeparators + fixedStart;
		return (
			<div className="header--desktop__main">
				<HeaderPatternChunk fixed={fixedStart} />
				<HeaderDTFilterSearchFilter filtersAreVisible={this.state.filtersAreVisible} onfilterClick={this.onfilterClick} config={config.filter} />
				<HeaderDTFilterSearchSearch searchIsVisible={this.state.searchIsVisible} onSearchClick={this.onSearchClick} onSearchSubmit={this.onSearchSubmit} config={config.search} />
				<HeaderPatternChunk reserved={totalReservedSpaces} />
				{ this.state.filtersAreVisible ? <HeaderDTFiltersList content={content} /> : null}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	content: getFilters(state),
});

export default withRouter(connect(
	mapStateToProps,
	actions
)(HeaderDTFilterSearch));