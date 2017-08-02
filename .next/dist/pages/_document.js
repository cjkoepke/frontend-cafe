'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _colors = require('../utils/colors');

var colors = _interopRequireWildcard(_colors);

var _styledComponents = require('styled-components');

var _polished = require('polished');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/cjkoepke/Repos/frontend-cafe/pages/_document.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    ', '\n    body {\n        background: url(\'/static/curve.svg\');\n        background-size: cover;\n        background-position: top left;\n        background-color: ', ';\n        color: ', ';\n        font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen-Sans, Ubuntu, Cantarell, \'Helvetica Neue\', sans-serif;\n        font-size: 20px;\n        font-weight: 300;\n    }\n'], ['\n    ', '\n    body {\n        background: url(\'/static/curve.svg\');\n        background-size: cover;\n        background-position: top left;\n        background-color: ', ';\n        color: ', ';\n        font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen-Sans, Ubuntu, Cantarell, \'Helvetica Neue\', sans-serif;\n        font-size: 20px;\n        font-weight: 300;\n    }\n']);

(0, _styledComponents.injectGlobal)(_templateObject, (0, _polished.normalize)(), colors.base.light, colors.base.dark);

var MyDocument = function (_Document) {
    (0, _inherits3.default)(MyDocument, _Document);

    function MyDocument() {
        (0, _classCallCheck3.default)(this, MyDocument);

        return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
    }

    (0, _createClass3.default)(MyDocument, [{
        key: 'render',
        value: function render() {
            var sheet = new _styledComponents.ServerStyleSheet();
            var main = sheet.collectStyles(_react2.default.createElement(_document.Main, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }));
            var styleTags = sheet.getStyleElement();
            return _react2.default.createElement('html', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement(_document.Head, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, _react2.default.createElement('title', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, 'Frontend.Cafe'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }), styleTags), _react2.default.createElement('body', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement('div', { className: 'root', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, main), _react2.default.createElement(_document.NextScript, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            })));
        }
    }]);

    return MyDocument;
}(_document2.default);

exports.default = MyDocument;