'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _HeaderPatternChunk = require('./HeaderPatternChunk');

var _HeaderPatternChunk2 = _interopRequireDefault(_HeaderPatternChunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderDTSecond = function HeaderDTSecond() {
	var numberOfStaticItems = 'Architects'.length;
	return _react2.default.createElement(
		'div',
		{ className: 'header--desktop__main__second' },
		_react2.default.createElement(_HeaderPatternChunk2.default, { reserved: numberOfStaticItems }),
		_react2.default.createElement(
			_reactRouterDom.NavLink,
			{ className: 'link', to: '/' },
			'Architects'
		)
	);
};

exports.default = HeaderDTSecond;