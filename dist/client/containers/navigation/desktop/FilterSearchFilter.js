"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterSearchFilter = function (_Component) {
	_inherits(FilterSearchFilter, _Component);

	function FilterSearchFilter() {
		_classCallCheck(this, FilterSearchFilter);

		return _possibleConstructorReturn(this, (FilterSearchFilter.__proto__ || Object.getPrototypeOf(FilterSearchFilter)).apply(this, arguments));
	}

	_createClass(FilterSearchFilter, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    config = _props.config,
			    filtersAreVisible = _props.filtersAreVisible,
			    onfiltersClick = _props.onfiltersClick;

			return _react2.default.createElement(
				"span",
				{ className: "filters" },
				_react2.default.createElement(
					"span",
					{ className: "ws" },
					"-"
				),
				_react2.default.createElement(
					"span",
					{ className: "ws" },
					"-"
				),
				_react2.default.createElement(
					"span",
					{ className: "link", onClick: onfiltersClick },
					filtersAreVisible ? '-' : config.glyph.content,
					config.name
				),
				_react2.default.createElement(
					"span",
					{ className: filtersAreVisible ? 'ind ind--list' : 'ind ind--list is-hidden' },
					":"
				),
				_react2.default.createElement(
					"span",
					{ className: "ws" },
					"-"
				),
				_react2.default.createElement(
					"span",
					{ className: "separator" },
					'/'
				)
			);
		}
	}]);

	return FilterSearchFilter;
}(_react.Component);

exports.default = FilterSearchFilter;