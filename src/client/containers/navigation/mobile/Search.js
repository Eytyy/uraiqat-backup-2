import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../../actions';
import { getFontValues } from '../../../helpers';

import PatternChunk from '../../../components/patterns/PatternChunk';

class Search extends Component {
	constructor() {
		super();
		this.state = {
			searchIsVisible: false,
		};
		this.onSearchClick = this.onSearchClick.bind(this);
		this.onSearchSubmit = this.onSearchSubmit.bind(this);
		this.clearSearch = this.clearSearch.bind(this);
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
		const {adjust} = this.props;
		const config = {
			name: 'Search',
			glyph: { className: 'ind', content: ':' },
			searchInputSize: 19,
			spacesAfter: 4,
		};
		const font = getFontValues();
		const formStyle = {
			width: `${config.searchInputSize * font.characterWidth}px`
		};
		const reservedInputSpace = config.name.length + config.searchInputSize + config.spacesAfter;
		const reservedInactiveSpace = config.name.length + config.spacesAfter;
		return (
			<div className={`search ${this.state.searchIsVisible ? 'is-visible' : 'is-hidden'} header-mobile__search`}>
				<span className="search-link link" onClick={this.onSearchClick}>{ config.name }</span>
				{this.state.searchIsVisible ? <span className="link">{config.glyph.content}</span> : ' '}
				<span className="ws">-</span>
				{
					this.state.searchIsVisible ?
						<form onSubmit={this.onSearchSubmit} className="search">
							<input
								style={formStyle}
								autoComplete="off"
								name="keyword"
								className="search__input" type="text"
								placeholder="Enter keyword"
							/>
							<PatternChunk adjust={adjust} reserved={reservedInputSpace - 1} />
							<span className="link" onClick={this.onSearchClick}>x</span>
						</form> :
						<span className="header-mobile__search__glyphs">
							<span className="ws">-</span>
							<span className="ws">-</span>
							<PatternChunk adjust={adjust}  reserved={reservedInactiveSpace} />
						</span>
				}
			</div>
		);
	}
}

export default withRouter(connect(
	null,
	actions
)(Search));