import React from 'react';

import { getFontValues } from '../../../helpers';
import PatternChunk from '../../../components/patterns/PatternChunk';


const Search = ({ adjust, onSearchClick, onSearchSubmit, searchIsVisible }) => {
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
		<div className={`search ${ searchIsVisible ? 'is-visible' : 'is-hidden' } header-mobile__search`}>
			<span className="search-link link" onClick={ onSearchClick }>{ config.name }</span>
			{ searchIsVisible ? <span className="link">{ config.glyph.content }</span> : ' ' }
			<span className="ws">-</span>
			{
				this.state.searchIsVisible ?
					<form onSubmit={ onSearchSubmit } className="search">
						<input
							style={ formStyle }
							autoComplete="off"
							name="keyword"
							className="search__input" type="text"
							placeholder="Enter keyword"
						/>
						<PatternChunk adjust={ adjust } reserved={ reservedInputSpace - 1 } />
						<span className="link" onClick={ onSearchClick }>x</span>
					</form> :
					<span className="header-mobile__search__glyphs">
						<span className="ws">-</span>
						<span className="ws">-</span>
						<PatternChunk adjust={ adjust } reserved={ reservedInactiveSpace } />
					</span>
			}
		</div>
	);
};


export default Search;