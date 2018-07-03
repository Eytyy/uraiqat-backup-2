'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('../../../helpers');

var _PatternChunk = require('../../../components/patterns/PatternChunk');

var _PatternChunk2 = _interopRequireDefault(_PatternChunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Search = function Search(_ref) {
	var adjust = _ref.adjust,
	    onSearchClick = _ref.onSearchClick,
	    onSearchSubmit = _ref.onSearchSubmit,
	    searchIsVisible = _ref.searchIsVisible;

	var config = {
		name: 'Search',
		glyph: { className: 'ind', content: ':' },
		searchInputSize: 19,
		spacesAfter: 4
	};

	var font = (0, _helpers.getFontValues)();
	var formStyle = {
		width: config.searchInputSize * font.characterWidth + 'px'
	};
	var reservedInputSpace = config.name.length + config.searchInputSize + config.spacesAfter;
	var reservedInactiveSpace = config.name.length + config.spacesAfter;

	return _react2.default.createElement(
		'div',
		{ className: 'search ' + (searchIsVisible ? 'is-visible' : 'is-hidden') + ' header-mobile__search' },
		_react2.default.createElement(
			'span',
			{ className: 'search-link link', onClick: onSearchClick },
			config.name
		),
		searchIsVisible ? _react2.default.createElement(
			'span',
			{ className: 'link' },
			config.glyph.content
		) : ' ',
		_react2.default.createElement(
			'span',
			{ className: 'ws' },
			'-'
		),
		searchIsVisible ? _react2.default.createElement(
			'form',
			{ onSubmit: onSearchSubmit, className: 'search' },
			_react2.default.createElement('input', {
				style: formStyle,
				autoComplete: 'off',
				name: 'keyword',
				className: 'search__input', type: 'text',
				placeholder: 'Enter keyword'
			}),
			_react2.default.createElement(_PatternChunk2.default, { adjust: adjust, reserved: reservedInputSpace - 1 }),
			_react2.default.createElement(
				'span',
				{ className: 'link', onClick: onSearchClick },
				'x'
			)
		) : _react2.default.createElement(
			'span',
			{ className: 'header-mobile__search__glyphs' },
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
			_react2.default.createElement(_PatternChunk2.default, { adjust: adjust, reserved: reservedInactiveSpace })
		)
	);
};

exports.default = Search;