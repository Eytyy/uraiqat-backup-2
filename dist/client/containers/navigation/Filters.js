'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Filter = require('./Filter');

var _Filter2 = _interopRequireDefault(_Filter);

var _HeaderPatternChunk = require('./HeaderPatternChunk');

var _HeaderPatternChunk2 = _interopRequireDefault(_HeaderPatternChunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filters = function (_Component) {
	_inherits(Filters, _Component);

	function Filters() {
		_classCallCheck(this, Filters);

		return _possibleConstructorReturn(this, (Filters.__proto__ || Object.getPrototypeOf(Filters)).apply(this, arguments));
	}

	_createClass(Filters, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    content = _props.content,
			    fixedEnd = _props.fixedEnd,
			    fixedStart = _props.fixedStart;

			return _react2.default.createElement(
				'div',
				{ className: 'filters' },
				_react2.default.createElement(_HeaderPatternChunk2.default, { fixed: fixedStart }),
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
				content.map(function (_ref) {
					var title = _ref.title,
					    id = _ref.id;
					return _react2.default.createElement(_Filter2.default, { key: id, content: title });
				}),
				_react2.default.createElement(_HeaderPatternChunk2.default, { fixed: content.leftOvers + fixedEnd })
			);
		}
	}]);

	return Filters;
}(_react.Component);

exports.default = Filters;