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

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Filter = function Filter(_ref) {
	var content = _ref.content,
	    location = _ref.location,
	    adjustForMobile = _ref.adjustForMobile,
	    onToggle = _ref.onToggle,
	    onClearFilters = _ref.onClearFilters,
	    onFilterClick = _ref.onFilterClick,
	    filtersAreVisible = _ref.filtersAreVisible;

	var config = {
		name: 'Filter',
		glyph: { className: 'ind', content: 'clear' },
		spacesAfter: 4
	};
	var reservedFilterSize = location.pathname !== '/' ? 0 : config.name.length + config.spacesAfter;
	var activeFiltersLength = content.filter(function (_ref2) {
		var active = _ref2.active;
		return active;
	}).length;
	var glyphSize = filtersAreVisible && activeFiltersLength ? config.glyph.content.length : 0;

	return reservedFilterSize !== 0 && _react2.default.createElement(
		'div',
		{ className: 'header-mobile__filters' },
		_react2.default.createElement(
			'span',
			{ className: 'link', onClick: onToggle },
			config.name
		),
		filtersAreVisible ? ':' : _react2.default.createElement(
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
		_react2.default.createElement(_PatternChunk2.default, { reserved: reservedFilterSize + glyphSize, adjust: adjustForMobile }),
		filtersAreVisible && activeFiltersLength ? _react2.default.createElement(
			'span',
			{ onClick: onClearFilters, className: 'link' },
			' ',
			config.glyph.content
		) : '<',
		filtersAreVisible && _react2.default.createElement(_FiltersList2.default, { onFilterClick: onFilterClick, content: content, adjust: adjustForMobile })
	);
};

exports.default = (0, _reactRouterDom.withRouter)(Filter);