import React from 'react';
import { getNoOfChars, getMaxWidth } from '../../helpers';
import Filters from './Filters';

const createFilters = ( content , availableSpace ) => {
	const filters = {};
	let limit = availableSpace;
	let lineNumber = 0;
	let spacesForEachFilter = 7;

	function addFilterToLine(id, title) {
		filters[`line${lineNumber}`].push({id, title});
		limit = limit - title.length - spacesForEachFilter;
		filters[`line${lineNumber}`].leftOvers = limit;
	}
	
	function createNewLine() {
		lineNumber = lineNumber + 1;
		limit = availableSpace;
		filters[`line${lineNumber}`] = [];
	}

	content.forEach(({ title, id }) => {
		if (limit && title.length + spacesForEachFilter <= limit) {
			if (typeof filters[`line${lineNumber}`] !== 'undefined') {
				addFilterToLine(id, title);
			} else {
				createNewLine();
				addFilterToLine(id, title);
			}
		} else {
			createNewLine();
			filters[`line${lineNumber}`] = [];
			addFilterToLine(id, title);
		}
	});
	return filters;
};

const HeaderDTFiltersList = ({ content }) => {
	let maxWidth = getMaxWidth();
	const config = {
		w: maxWidth,
		h: 1,
	};

	let maxNoOfChars = getNoOfChars('navigation', config);
	const fixedStart = 9;
	const fixedStatrExtraSpace = 3;
	const fixedEnd = 14;
	const availableSpace = maxNoOfChars.x - fixedStart - fixedEnd - fixedStatrExtraSpace;
	const filters = createFilters(content, availableSpace);
	console.log(filters);
	return (
		<div className="filters-list">
			{
				Object.keys(filters).map(key => {
					return <Filters fixedStart={fixedStart} fixedEnd={fixedEnd} key={key} content={filters[key]} />;
				})
			}
		</div>
	);
};

export default HeaderDTFiltersList;