import React from 'react';
import { NavLink } from 'react-router-dom';

import HeaderPatternChunk from './HeaderPatternChunk';

const HeaderDTSecond = () => {
	const numberOfStaticItems = 'Architects'.length;
	return (
		<div className="header--desktop__main__second">
			<HeaderPatternChunk reserved={numberOfStaticItems} />
			<NavLink className="link" to="/">Architects</NavLink>
		</div>
	);
};

export default HeaderDTSecond;
