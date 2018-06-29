'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FiltersListItem = require('./FiltersListItem');

var _FiltersListItem2 = _interopRequireDefault(_FiltersListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FiltersList = function FiltersList(_ref) {
	var content = _ref.content,
	    onFilterClick = _ref.onFilterClick,
	    adjust = _ref.adjust;

	return _react2.default.createElement(
		'div',
		{ className: 'header-mobile__filters__list' },
		content.map(function (_ref2) {
			var title = _ref2.title,
			    id = _ref2.id,
			    active = _ref2.active;
			return _react2.default.createElement(_FiltersListItem2.default, {
				adjust: adjust,
				key: id,
				onFilterClick: onFilterClick,
				content: title,
				id: id, active: active });
		})
	);
};

exports.default = FiltersList;