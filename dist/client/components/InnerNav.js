'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InnerNav = function InnerNav(_ref) {
	var prev = _ref.prev,
	    next = _ref.next,
	    type = _ref.type;

	return _react2.default.createElement(
		'aside',
		{ className: 'inner__nav' },
		prev && _react2.default.createElement(
			_reactRouterDom.Link,
			{ to: '/' + type + '/' + prev.id, className: 'inner__nav__item inner__nav__item--next link' },
			'<-',
			'Prev Project'
		),
		next && _react2.default.createElement(
			_reactRouterDom.Link,
			{ to: '/' + type + '/' + next.id, className: 'inner__nav__item inner__nav__item--next link' },
			'Next Project',
			'->'
		)
	);
};

exports.default = InnerNav;