'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var formatDate = exports.formatDate = function formatDate(date) {
  return date.replace(/-/g, '/').split('/').reverse().join('/');
};