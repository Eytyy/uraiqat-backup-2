'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PostDefault = require('../../components/home/default/PostDefault');

var _PostDefault2 = _interopRequireDefault(_PostDefault);

var _actions = require('../../actions');

var _reducers = require('../../reducers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RelatedPosts = function (_Component) {
	_inherits(RelatedPosts, _Component);

	function RelatedPosts() {
		_classCallCheck(this, RelatedPosts);

		return _possibleConstructorReturn(this, (RelatedPosts.__proto__ || Object.getPrototypeOf(RelatedPosts)).apply(this, arguments));
	}

	_createClass(RelatedPosts, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _props = this.props,
			    content = _props.content,
			    isFetching = _props.isFetching;

			if (!isFetching && typeof content.id === 'undefined') {
				this.fetchData();
			}
		}
	}, {
		key: 'fetchData',
		value: function fetchData() {
			var _props2 = this.props,
			    fetchRelated = _props2.fetchRelated,
			    id = _props2.id;

			fetchRelated(id);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props3 = this.props,
			    content = _props3.content,
			    isFetching = _props3.isFetching;

			if (isFetching || content.length === 0) {
				return null;
			}
			return content.map(function (_ref) {
				var fields = _ref.fields,
				    sys = _ref.sys;

				var withid = Object.assign({}, { id: sys.id }, fields);
				return _react2.default.createElement(_PostDefault2.default, { content: withid, key: sys.id });
			});
		}
	}], [{
		key: 'fetchData',
		//eslint-disable-line
		value: function fetchData(store, id) {
			return store.dispatch((0, _actions.fetchRelated)(id));
		}
	}]);

	return RelatedPosts;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
	var id = ownProps.id,
	    postID = ownProps.postID;

	return {
		content: (0, _reducers.getRelatedPosts)(state, id, postID),
		isFetching: (0, _reducers.isRelatedFetching)(state)
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)({ fetchRelated: _actions.fetchRelated }, dispatch);
};

RelatedPosts.propTypes = {
	isFetching: _propTypes2.default.bool.isRequired,
	fetchRelated: _propTypes2.default.func.isRequired
};

RelatedPosts.defaultProps = {
	content: []
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(RelatedPosts));