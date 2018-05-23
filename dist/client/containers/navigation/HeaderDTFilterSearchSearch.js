'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('../../helpers');

var _PatternChunk = require('../../components/patterns/PatternChunk');

var _PatternChunk2 = _interopRequireDefault(_PatternChunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderDTFilterSearchSearch = function (_Component) {
	_inherits(HeaderDTFilterSearchSearch, _Component);

	function HeaderDTFilterSearchSearch() {
		_classCallCheck(this, HeaderDTFilterSearchSearch);

		return _possibleConstructorReturn(this, (HeaderDTFilterSearchSearch.__proto__ || Object.getPrototypeOf(HeaderDTFilterSearchSearch)).apply(this, arguments));
	}

	_createClass(HeaderDTFilterSearchSearch, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    config = _props.config,
			    searchIsVisible = _props.searchIsVisible,
			    onSearchClick = _props.onSearchClick,
			    onSearchSubmit = _props.onSearchSubmit;

			var font = (0, _helpers.getFontValues)();
			var formStyle = {
				width: config.searchInputSize * font.characterWidth + 'px'
			};
			return _react2.default.createElement(
				'span',
				{ className: 'search ' + (searchIsVisible ? 'is-visible' : 'is-hidden') },
				_react2.default.createElement(
					'span',
					{ className: 'ws' },
					'-'
				),
				_react2.default.createElement(
					'span',
					{ className: searchIsVisible ? 'link' : 'link is-hidden' },
					'x'
				),
				_react2.default.createElement(
					'span',
					{ className: 'search-link link', onClick: onSearchClick },
					config.name
				),
				_react2.default.createElement(
					'span',
					{ className: searchIsVisible ? 'ind ind--list' : 'ind ind--list is-hidden' },
					config.glyph.content
				),
				_react2.default.createElement(
					'span',
					{ className: 'ws' },
					'-'
				),
				searchIsVisible ? _react2.default.createElement(
					'form',
					{ onSubmit: onSearchSubmit, className: 'search' },
					_react2.default.createElement('input', { style: formStyle, autoComplete: 'off',
						name: 'keyword',
						className: 'search__input', type: 'text',
						placeholder: 'Enter your search keyword here'
					})
				) : _react2.default.createElement(_PatternChunk2.default, { fixed: config.searchInputSize })
			);
		}
	}]);

	return HeaderDTFilterSearchSearch;
}(_react.Component);

exports.default = HeaderDTFilterSearchSearch;