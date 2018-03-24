'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PostContentText = require('./PostContentText');

var _PostContentText2 = _interopRequireDefault(_PostContentText);

var _PostContentMedia = require('./PostContentMedia');

var _PostContentMedia2 = _interopRequireDefault(_PostContentMedia);

var _PostContentSubtitle = require('./PostContentSubtitle');

var _PostContentSubtitle2 = _interopRequireDefault(_PostContentSubtitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostContent = function PostContent(_ref) {
	var content = _ref.content;

	return _react2.default.createElement(
		'div',
		{ className: 'post__content' },
		content.map(function (_ref2) {
			var sys = _ref2.sys,
			    fields = _ref2.fields;

			switch (sys.contentType.sys.id) {
				case 'blockPostText':
					return _react2.default.createElement(_PostContentText2.default, { key: sys.id, content: fields });
				case 'blockPostMedia':
					return _react2.default.createElement(_PostContentMedia2.default, { key: sys.id, id: sys.id, content: fields });
				default:
					return _react2.default.createElement(_PostContentSubtitle2.default, { key: sys.id, content: fields });
			}
		})
	);
};

exports.default = PostContent;