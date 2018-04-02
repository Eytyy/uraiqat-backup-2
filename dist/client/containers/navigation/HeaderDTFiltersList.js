'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('../../helpers');

var _Filters = require('./Filters');

var _Filters2 = _interopRequireDefault(_Filters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createFilters = function createFilters(content, availableSpace) {
	var filters = {};
	var limit = availableSpace;
	var lineNumber = 0;
	var spacesForEachFilter = 7;

	function addFilterToLine(id, title) {
		filters['line' + lineNumber].push({ id: id, title: title });
		limit = limit - title.length - spacesForEachFilter;
		filters['line' + lineNumber].leftOvers = limit;
	}

	function createNewLine() {
		lineNumber = lineNumber + 1;
		limit = availableSpace;
		filters['line' + lineNumber] = [];
	}

	content.forEach(function (_ref) {
		var title = _ref.title,
		    id = _ref.id;

		if (limit && title.length + spacesForEachFilter <= limit) {
			if (typeof filters['line' + lineNumber] !== 'undefined') {
				addFilterToLine(id, title);
			} else {
				createNewLine();
				addFilterToLine(id, title);
			}
		} else {
			createNewLine();
			filters['line' + lineNumber] = [];
			addFilterToLine(id, title);
		}
	});
	return filters;
};

var HeaderDTFiltersList = function HeaderDTFiltersList(_ref2) {
	var content = _ref2.content;

	var maxWidth = (0, _helpers.getMaxWidth)();
	var config = {
		w: maxWidth,
		h: 1
	};

	var maxNoOfChars = (0, _helpers.getNoOfChars)('navigation', config);
	var fixedStart = 9;
	var fixedStatrExtraSpace = 3;
	var fixedEnd = 14;
	var availableSpace = maxNoOfChars.x - fixedStart - fixedEnd - fixedStatrExtraSpace;
	var filters = createFilters(content, availableSpace);
	return _react2.default.createElement(
		'div',
		{ className: 'filters-list' },
		Object.keys(filters).map(function (key) {
			return _react2.default.createElement(_Filters2.default, { fixedStart: fixedStart, fixedEnd: fixedEnd, key: key, content: filters[key] });
		})
	);
};

exports.default = HeaderDTFiltersList;