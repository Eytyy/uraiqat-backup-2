import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../actions';
import { getFilters } from '../../reducers';

import HeaderPatternChunk from './HeaderPatternChunk';
import HeaderMFiltersList from './HeaderMFiltersList';

class HeaderMFilter extends Component {
	constructor() {
		super();
		this.state = {
			filtersAreVisible: false,
		};
		this.onfilterClick = this.onfilterClick.bind(this);
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
	render() {
		const { content } = this.props;
		const config = {
			name: 'Filter',
			glyph: { className: 'ind', content: '+' },
			spacesAfter: 4,
		};
		const reservedSpaces = config.name.length + config.spacesAfter;
		return (
			<div className="header-mobile__filters">
				<span className="link" onClick={this.onfilterClick}>
					{config.name}
				</span>
				{ this.state.filtersAreVisible ? ':' : <span className="ws">-</span>}
				<span className="ws">-</span>
				<span className="ws">-</span>
				<HeaderPatternChunk reserved={reservedSpaces} />
				{ this.state.filtersAreVisible ? <span onClick={this.onfilterClick} className="link">x</span> : '<'}
				{ this.state.filtersAreVisible ? <HeaderMFiltersList content={content} /> : null}
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
)(HeaderMFilter));