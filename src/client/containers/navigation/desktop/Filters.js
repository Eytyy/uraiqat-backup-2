import React from 'react';
import Filter from './Filter';
import PatternChunk from '../../../components/patterns/PatternChunk';

const Filters = ({ content, fixedEnd, fixedStart, onFilterClick }) => {
	return (
		<div className="filters">
			<PatternChunk fixed={fixedStart} />		
			<span className="ws">-</span>
			<span className="ws">-</span>
			<span className="ws">-</span>				
			{ content.map(({ title, id, active }) =>
				<Filter onFilterClick={onFilterClick} key={id} content={title} id={id} active={active} />)
			}
			<PatternChunk fixed={content.leftOvers + fixedEnd} />		
		</div>
	);
};

export default Filters;