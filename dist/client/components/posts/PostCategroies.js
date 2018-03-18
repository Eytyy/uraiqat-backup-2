'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CommaSpearatedList = require('../CommaSpearatedList');

var _CommaSpearatedList2 = _interopRequireDefault(_CommaSpearatedList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostCategroies = function PostCategroies(_ref) {
	var content = _ref.content;

	return _react2.default.createElement(
		'div',
		{ className: 'post__meta post__categories' },
		_react2.default.createElement(
			'span',
			{ className: 'label' },
			'In'
		),
		_react2.default.createElement(_CommaSpearatedList2.default, { content: content, listClass: 'post__categories__list', itemClass: 'post__categories__list__item' })
	);
};

exports.default = PostCategroies;