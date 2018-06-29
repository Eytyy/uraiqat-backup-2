import React from 'react';
import { getNoOfChars, getMaxWidth } from '../../../helpers';
import Filters from './Filters';

const createFilters = ( content , availableSpace ) => {
	const filters = {};
	let limit = availableSpace;
	let lineNumber = 0;
	let spacesForEachFilter = 7;

	function addFilterToLine(id, title, active) {
		filters[`line${lineNumber}`].push({id, title, active});
		limit = limit - title.length - spacesForEachFilter;
		filters[`line${lineNumber}`].leftOvers = limit;
	}
	
	function createNewLine() {
		lineNumber = lineNumber + 1;
		limit = availableSpace;
		filters[`line${lineNumber}`] = [];
	}

	content.forEach(({ title, id, active }) => {
		if (limit && title.length + spacesForEachFilter <= limit) {
			if (typeof filters[`line${lineNumber}`] !== 'undefined') {
				addFilterToLine(id, title, active);
			} else {
				createNewLine();
				addFilterToLine(id, title, active);
			}
		} else {
			createNewLine();
			filters[`line${lineNumber}`] = [];
			addFilterToLine(id, title, active);
		}
	});
	return filters;
};

const FiltersList = ({ content, onFilterClick, isVisible }) => {
	let maxWidth = getMaxWidth();
	const config = {
		w: maxWidth,
		h: 1,
	};

	let maxNoOfChars = getNoOfChars('navigation', config);
	const fixedStart = window.innerWidth > 1280 ? 10 : 8;
	const fixedStatrExtraSpace = 3;
	const fixedEnd = 4;
	const availableSpace = maxNoOfChars.x - fixedStart - fixedEnd - fixedStatrExtraSpace;
	const filters = createFilters(content, availableSpace);
	if (!isVisible) {
		return null;
	}
	return (
		<div className="filters-list">
			{
				Object.keys(filters).map(key => {
					return <Filters
						onFilterClick={onFilterClick}
						fixedStart={fixedStart}
						fixedEnd={fixedEnd} key={key}
						content={filters[key]}
					/>;
				})
			}
		</div>
	);
};

export default FiltersList;