'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PatternChunk = require('../../../components/patterns/PatternChunk');

var _PatternChunk2 = _interopRequireDefault(_PatternChunk);

var _FiltersList = require('./FiltersList');

var _FiltersList2 = _interopRequireDefault(_FiltersList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Filter = function Filter(_ref) {
	var content = _ref.content,
	    location = _ref.location,
	    adjustForMobile = _ref.adjustForMobile,
	    onFiltersToggle = _ref.onFiltersToggle,
	    onFilterClick = _ref.onFilterClick,
	    filtersAreVisible = _ref.filtersAreVisible;

	var config = {
		name: 'Filter',
		glyph: { className: 'ind', content: '+' },
		spacesAfter: 4
	};
	var reservedFilterSize = location.pathname !== '/' ? 0 : config.name.length + config.spacesAfter;

	return reservedFilterSize !== 0 && _react2.default.createElement(
		'div',
		{ className: 'header-mobile__filters' },
		_react2.default.createElement(
			'span',
			{ className: 'link', onClick: onFiltersToggle },
			config.name
		),
		undefined.state.filtersAreVisible ? ':' : _react2.default.createElement(
			'span',
			{ className: 'ws' },
			'-'
		),
		_react2.default.createElement(
			'span',
			{ className: 'ws' },
			'-'
		),
		_react2.default.createElement(
			'span',
			{ className: 'ws' },
			'-'
		),
		_react2.default.createElement(_PatternChunk2.default, { reserved: reservedFilterSize, adjust: adjustForMobile }),
		filtersAreVisible ? _react2.default.createElement(
			'span',
			{ onClick: onFiltersToggle, className: 'link' },
			'x'
		) : '<',
		filtersAreVisible && _react2.default.createElement(_FiltersList2.default, { onFilterClick: onFilterClick, content: content, adjust: adjustForMobile })
	);
};

exports.default = Filter;