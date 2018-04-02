'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HeaderMFiltersListItem = require('./HeaderMFiltersListItem');

var _HeaderMFiltersListItem2 = _interopRequireDefault(_HeaderMFiltersListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderMFiltersList = function HeaderMFiltersList(_ref) {
	var content = _ref.content;

	return _react2.default.createElement(
		'div',
		{ className: 'header-mobile__filters__list' },
		content.map(function (_ref2) {
			var title = _ref2.title,
			    id = _ref2.id;
			return _react2.default.createElement(_HeaderMFiltersListItem2.default, { key: id, name: title });
		})
	);
};

exports.default = HeaderMFiltersList;