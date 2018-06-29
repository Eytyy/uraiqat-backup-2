import React from 'react';

import PatternChunk from '../../../components/patterns/PatternChunk';

const FiltersListItem = ({ content, active, onFilterClick, id, adjust }) => {
	const onClick = () => {
		onFilterClick(id);
	};
	return (
		<div>
			<span onClick={onClick} className="filter link">
				{ active ? 
					<span className="filterBox">[<span className="filterBox__state">x</span>]</span> :
					<span className="filterBox">[<span className="filterBox__state"> </span>]</span>
				} 
				<span className="ws">-</span>								
				<span>{content}</span>
				<span className="ws">-</span>
			</span>
			<PatternChunk reserved={content.length + 5} adjust={adjust}/>
		</div>
	);
};

export default FiltersListItem;