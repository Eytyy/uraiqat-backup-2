import React from 'react';
import { NavLink } from 'react-router-dom';

import PatternChunk from '../../../components/patterns/PatternChunk';

const Second = () => {
	const numberOfStaticItems = 'Architects'.length;
	return (
		<div className="header--desktop__main__second">
			<PatternChunk reserved={numberOfStaticItems} />
			<NavLink className="link" to="/">Architects</NavLink>
		</div>
	);
};

export default Second;
