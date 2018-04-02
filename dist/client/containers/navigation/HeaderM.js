'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _HeaderMMain = require('./HeaderMMain');

var _HeaderMMain2 = _interopRequireDefault(_HeaderMMain);

var _HeaderMSearch = require('./HeaderMSearch');

var _HeaderMSearch2 = _interopRequireDefault(_HeaderMSearch);

var _HeaderMFilter = require('./HeaderMFilter');

var _HeaderMFilter2 = _interopRequireDefault(_HeaderMFilter);

var _HeaderPatternChunk = require('./HeaderPatternChunk');

var _HeaderPatternChunk2 = _interopRequireDefault(_HeaderPatternChunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderM = function HeaderM() {
	return _react2.default.createElement(
		'div',
		{ className: 'website-header__inner website-header__inner--mobile wrapper' },
		_react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				_reactRouterDom.NavLink,
				{ className: 'link', to: '/' },
				'U'
			),
			_react2.default.createElement(_HeaderPatternChunk2.default, { reserved: 2 }),
			_react2.default.createElement(
				'span',
				{ className: 'mobile-menu-toggle link', to: '/' },
				':'
			)
		),
		_react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(_HeaderPatternChunk2.default, { reserved: 0 })
		),
		_react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(_HeaderPatternChunk2.default, { reserved: 0 })
		),
		_react2.default.createElement(_HeaderMMain2.default, null),
		_react2.default.createElement(_HeaderMSearch2.default, null),
		_react2.default.createElement(_HeaderMFilter2.default, null)
	);
};

exports.default = HeaderM;