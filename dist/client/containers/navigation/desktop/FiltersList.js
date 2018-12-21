"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _helpers = require("../../../helpers");

var _Filters = _interopRequireDefault(require("./Filters"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createFilters = function createFilters(content, availableSpace) {
  var filters = {};
  var limit = availableSpace;
  var lineNumber = 0;
  var spacesForEachFilter = 7;

  function addFilterToLine(id, title, active) {
    filters["line".concat(lineNumber)].push({
      id: id,
      title: title,
      active: active
    });
    limit = limit - title.length - spacesForEachFilter;
    filters["line".concat(lineNumber)].leftOvers = limit;
  }

  function createNewLine() {
    lineNumber = lineNumber + 1;
    limit = availableSpace;
    filters["line".concat(lineNumber)] = [];
  }

  content.forEach(function (_ref) {
    var title = _ref.title,
        id = _ref.id,
        active = _ref.active;

    if (limit && title.length + spacesForEachFilter <= limit) {
      if (typeof filters["line".concat(lineNumber)] !== 'undefined') {
        addFilterToLine(id, title, active);
      } else {
        createNewLine();
        addFilterToLine(id, title, active);
      }
    } else {
      createNewLine();
      filters["line".concat(lineNumber)] = [];
      addFilterToLine(id, title, active);
    }
  });
  return filters;
};

var FiltersList = function FiltersList(_ref2) {
  var content = _ref2.content,
      onFilterClick = _ref2.onFilterClick,
      isVisible = _ref2.isVisible;
  var maxWidth = (0, _helpers.getMaxWidth)();
  var config = {
    w: maxWidth,
    h: 1
  };
  var maxNoOfChars = (0, _helpers.getNoOfChars)('navigation', config);
  var fixedStart = window.innerWidth > 1280 ? 11 : 8;
  var fixedStatrExtraSpace = 3;
  var fixedEnd = 4;
  var availableSpace = maxNoOfChars.x - fixedStart - fixedEnd - fixedStatrExtraSpace;
  var filters = createFilters(content, availableSpace);
  return isVisible && _react.default.createElement("div", {
    className: "filters-list"
  }, Object.keys(filters).map(function (key) {
    return _react.default.createElement(_Filters.default, {
      onFilterClick: onFilterClick,
      fixedStart: fixedStart,
      fixedEnd: fixedEnd,
      key: key,
      content: filters[key]
    });
  }));
};

var _default = FiltersList;
exports.default = _default;