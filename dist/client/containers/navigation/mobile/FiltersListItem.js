'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PatternChunk = require('../../../components/patterns/PatternChunk');

var _PatternChunk2 = _interopRequireDefault(_PatternChunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderMFiltersListItem = function HeaderMFiltersListItem(_ref) {
	var content = _ref.content,
	    active = _ref.active,
	    onFilterClick = _ref.onFilterClick,
	    id = _ref.id,
	    adjust = _ref.adjust;

	var onClick = function onClick() {
		onFilterClick(id);
	};
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'span',
			{ onClick: onClick, className: 'filter link' },
			active ? _react2.default.createElement(
				'span',
				{ className: 'filterBox' },
				'[',
				_react2.default.createElement(
					'span',
					{ className: 'filterBox__state' },
					'x'
				),
				']'
			) : _react2.default.createElement(
				'span',
				{ className: 'filterBox' },
				'[',
				_react2.default.createElement(
					'span',
					{ className: 'filterBox__state' },
					' '
				),
				']'
			),
			_react2.default.createElement(
				'span',
				{ className: 'ws' },
				'-'
			),
			_react2.default.createElement(
				'span',
				null,
				content
			),
			_react2.default.createElement(
				'span',
				{ className: 'ws' },
				'-'
			)
		),
		_react2.default.createElement(_PatternChunk2.default, { reserved: content.length + 5, adjust: adjust })
	);
};

exports.default = HeaderMFiltersListItem;