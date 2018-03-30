import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

class FilterSearch extends Component {
	constructor() {
		super();
		this.state = {
			searchIsVisible: false,
			filtersAreVisible: false,
		};
		this.onSearchClick = this.onSearchClick.bind(this);
		this.onfilterClick = this.onfilterClick.bind(this);
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
	onfilterClick() {
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
		return (
			<div>
				{'---/-/|<//'}<span className="ws">-</span><span className="ws">-</span>
				<span className="link link--filter" onClick={this.onfilterClick}>
					{ this.state.filtersAreVisible ? '-Filter' : '+Filter'}
				</span>
				{
					this.state.searchIsVisible ?
						<span>
							<span className="ws">-</span><span className="ws">-</span>{'/'}<span className="ws">-</span>
							<span className="link link--search" onClick={this.onSearchClick}>xSearch</span>:<span className="ws">-</span>
							<form onSubmit={this.onSearchSubmit} className="search">
								<input autoComplete="off" name="keyword" ref={(el) => this.search = el}className="search__input" type="text" placeholder="Enter your search keyword here" />
								<span className="ws">-</span><span className="ws">-</span>
								{'<//-////-\\-----/-/|<//-////-\\---'}
							</form> 
						</span> :
						<span>
							<span className="ws">-</span><span className="ws">-</span>{'/'}<span className="ws">-</span><span className="ws">-</span>
							<span className="link link--search" onClick={this.onSearchClick}>Search</span>
							<span className="ws">-</span><span className="ws">-</span>
							{'//-\\-----/-/|<//-////-\\-----/-/|<//-////-\\-----/-/|<//-////-\\---'}
						</span>
				}
			</div>
		);
	}
}

export default withRouter(connect(
	null,
	actions
)(FilterSearch));