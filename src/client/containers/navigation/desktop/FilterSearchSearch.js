import React, { Component } from 'react';

import { getFontValues } from '../../../helpers';

import PatternChunk from '../../../components/patterns/PatternChunk';

class FilterSearchSearch extends Component {
	render() {
		const { config, searchIsVisible, onSearchClick, onSearchSubmit, isFront } = this.props;
		const font = getFontValues();
		const formStyle = {
			width: `${config.searchInputSize * font.characterWidth}px`
		};
		return (
			<span className={`search ${searchIsVisible ? 'is-visible' : 'is-hidden'}`}>
				{ isFront ? null: <span className="ws">-</span> }
				<span className="ws">-</span>
				<span className={searchIsVisible ? 'link' : 'link is-hidden'}>x</span>
				<span className="search-link link" onClick={onSearchClick}>
					{ config.name }
				</span>
				<span className={searchIsVisible ? 'ind ind--list' : 'ind ind--list is-hidden'}>{config.glyph.content}</span>
				<span className="ws">-</span>
				{ searchIsVisible ?
					<form onSubmit={onSearchSubmit} className="search">
						<input style={formStyle} autoComplete="off"
							name="keyword"
							className="search__input" type="text"
							placeholder="Enter your search keyword here"
						/>
					</form> :
					<PatternChunk fixed={config.searchInputSize} />
				}
			</span>
		);
	}
}

export default FilterSearchSearch;