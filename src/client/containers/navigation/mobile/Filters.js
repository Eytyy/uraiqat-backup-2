import React from 'react';

import PatternChunk from '../../../components/patterns/PatternChunk';
import FiltersList from './FiltersList';
import { withRouter } from 'react-router-dom';

const Filter = ({ content, location, adjustForMobile, onToggle, onFilterClick, filtersAreVisible }) => {
	const config = {
		name: 'Filter',
		glyph: { className: 'ind', content: '+' },
		spacesAfter: 4,
	};
	const reservedFilterSize = location.pathname !== '/' ? 0 : config.name.length + config.spacesAfter;

	return (
		reservedFilterSize !== 0 && <div className="header-mobile__filters">
			<span className="link" onClick={ onToggle }>{ config.name }</span>
			{ filtersAreVisible ? ':' : <span className="ws">-</span> }
			<span className="ws">-</span>
			<span className="ws">-</span>
			<PatternChunk reserved={ reservedFilterSize } adjust={ adjustForMobile } />
			{ filtersAreVisible ? <span onClick={ onToggle } className="link">x</span> : '<' }
			{ filtersAreVisible &&
				<FiltersList onFilterClick={ onFilterClick } content={ content } adjust={ adjustForMobile } />
			}
		</div>
	);
};

export default withRouter(Filter);