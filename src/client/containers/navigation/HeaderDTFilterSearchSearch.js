import React, { Component } from 'react';

import { getFontValues } from '../../helpers';

import HeaderPatternChunk from './HeaderPatternChunk';

class HeaderDTFilterSearchSearch extends Component {
	render() {
		const { config, searchIsVisible, onSearchClick, onSearchSubmit } = this.props;
		const font = getFontValues();
		const formStyle = {
			width: `${config.searchInputSize * font.characterWidth}px`
		};
		return (
			<span className={`search ${searchIsVisible ? 'is-visible' : 'is-hidden'}`}>
				<span className="ws">-</span>
				<span className="search-link link" onClick={onSearchClick}>{searchIsVisible ? 'x' : ' '}{ config.name }</span>
				{searchIsVisible ? <span className="link">{config.glyph.content}</span> : ' '}
				<span className="ws">-</span>
				{
					searchIsVisible ?
						<form onSubmit={onSearchSubmit} className="search">
							<input style={formStyle} autoComplete="off"
								name="keyword"
								className="search__input" type="text"
								placeholder="Enter your search keyword here"
							/>
							<span className="ws">-</span>
							<HeaderPatternChunk fixed={2} />
						</form> :
						<HeaderPatternChunk fixed={config.searchInputSize + 3} />
				}
		
			</span>
		);
	}
}

export default HeaderDTFilterSearchSearch;