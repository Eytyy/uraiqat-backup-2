'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Filter = require('./Filter');

var _Filter2 = _interopRequireDefault(_Filter);

var _PatternChunk = require('../../../components/patterns/PatternChunk');

var _PatternChunk2 = _interopRequireDefault(_PatternChunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Filters = function Filters(_ref) {
	var content = _ref.content,
	    fixedEnd = _ref.fixedEnd,
	    fixedStart = _ref.fixedStart,
	    onFilterClick = _ref.onFilterClick;

	return _react2.default.createElement(
		'div',
		{ className: 'filters' },
		_react2.default.createElement(_PatternChunk2.default, { fixed: fixedStart }),
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
		_react2.default.createElement(
			'span',
			{ className: 'ws' },
			'-'
		),
		content.map(function (_ref2) {
			var title = _ref2.title,
			    id = _ref2.id,
			    active = _ref2.active;
			return _react2.default.createElement(_Filter2.default, { onFilterClick: onFilterClick, key: id, content: title, id: id, active: active });
		}),
		_react2.default.createElement(_PatternChunk2.default, { fixed: content.leftOvers + fixedEnd })
	);
};

exports.default = Filters;