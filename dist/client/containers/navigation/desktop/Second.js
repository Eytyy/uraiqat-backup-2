'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _PatternChunk = require('../../../components/patterns/PatternChunk');

var _PatternChunk2 = _interopRequireDefault(_PatternChunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Second = function Second() {
	var numberOfStaticItems = 'Architects'.length;
	return _react2.default.createElement(
		'div',
		{ className: 'header--desktop__main__second' },
		_react2.default.createElement(_PatternChunk2.default, { reserved: numberOfStaticItems }),
		_react2.default.createElement(
			_reactRouterDom.NavLink,
			{ className: 'link', to: '/' },
			'Architects'
		)
	);
};

exports.default = Second;