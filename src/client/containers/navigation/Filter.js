import React from 'react';

const Filter = ({ content, active, onFilterClick, id }) => {
	const onClick = () => {
		onFilterClick(id);
	};
	return (
		<span onClick={onClick} className="filter link">
			{ active ? 
				<span className="filterBox">[<span className="filterBox__state">x</span>]</span> :
				<span className="filterBox">[<span className="filterBox__state"> </span>]</span>
			} 
			<span className="ws">-</span>								
			<span>{content}</span>
			<span className="ws">-</span>
			<span className="ws">-</span>
			<span className="ws">-</span>
		</span>
	);
};


export default Filter;