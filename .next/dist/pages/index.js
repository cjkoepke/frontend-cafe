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

var _SubscribeForm = require('../components/SubscribeForm');

var _SubscribeForm2 = _interopRequireDefault(_SubscribeForm);

var _Logo = require('../components/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _Card = require('../components/Card');

var _Card2 = _interopRequireDefault(_Card);

var _Wrap = require('../components/Wrap');

var _Wrap2 = _interopRequireDefault(_Wrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/cjkoepke/Repos/frontend-cafe/pages/index.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    display: flex;\n    justify-content: space-between;\n    padding-top: 48px\n'], ['\n    display: flex;\n    justify-content: space-between;\n    padding-top: 48px\n']);

var GridWrap = _Wrap2.default.extend(_templateObject);

var _class = function (_Component) {
    (0, _inherits3.default)(_class, _Component);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);

        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
    }

    (0, _createClass3.default)(_class, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(GridWrap, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, _react2.default.createElement('img', { src: '/static/logo.svg', alt: 'Frontend Cafe', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }), _react2.default.createElement(_Card2.default, { style: { width: '50%' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, 'Frontend Cafe'), _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, 'The place for frontend engineers.'), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, 'Join an active community for frontend engineers, and receive a once-weekly digest of the ', _react2.default.createElement('strong', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, 'latest in frontend technology'), '.'), _react2.default.createElement(_SubscribeForm2.default, { page: this.props.currentPage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            })));
        }
    }]);

    return _class;
}(_react.Component);

exports.default = _class;