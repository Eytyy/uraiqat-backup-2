import React from 'react';
import Filter from './Filter';
import HeaderPatternChunk from './HeaderPatternChunk';


const Filters = ({ content, fixedEnd, fixedStart, onFilterClick }) => {
	return (
		<div className="filters">
			<HeaderPatternChunk fixed={fixedStart} />		
			<span className="ws">-</span>
			<span className="ws">-</span>
			<span className="ws">-</span>				
			{ content.map(({ title, id, active }) =>
				<Filter onFilterClick={onFilterClick} key={id} content={title} id={id} active={active} />)
			}
			<HeaderPatternChunk fixed={content.leftOvers + fixedEnd} />		
		</div>
	);
};

export default Filters;