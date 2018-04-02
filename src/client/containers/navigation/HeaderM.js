import React from 'react';
import { NavLink } from 'react-router-dom';

import HeaderMMain from './HeaderMMain';
import HeaderMSearch from './HeaderMSearch';
import HeaderMFilter from './HeaderMFilter';
import HeaderPatternChunk from './HeaderPatternChunk';

const HeaderM = () => {
	return (
		<div className="website-header__inner website-header__inner--mobile wrapper">
			<div>
				<NavLink className="link" to="/">U</NavLink>
				<HeaderPatternChunk reserved={2} />
				<span className="mobile-menu-toggle link" to="/">:</span>
			</div>
			<div><HeaderPatternChunk reserved={0} /></div>
			<div><HeaderPatternChunk reserved={0} /></div>
			<HeaderMMain />
			<HeaderMSearch />
			<HeaderMFilter />
		</div>
	);
};

export default HeaderM;