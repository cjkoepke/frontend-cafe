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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _colors = require('../utils/colors');

var colors = _interopRequireWildcard(_colors);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/cjkoepke/Repos/frontend-cafe/components/SubscribeForm.js';


var Button = _styledComponents2.default.button.withConfig({
    displayName: 'SubscribeForm__Button',
    componentId: 's1t1ylmu-0'
})(['background:', ';border:none;border-radius:8px;color:', ';padding:16px 24px;'], colors.base.dark, colors.base.light);

var LabelWrap = _styledComponents2.default.div.withConfig({
    displayName: 'SubscribeForm__LabelWrap',
    componentId: 's1t1ylmu-1'
})(['label{display:block;}']);

var SubscribeForm = function (_Component) {
    (0, _inherits3.default)(SubscribeForm, _Component);

    function SubscribeForm() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, SubscribeForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SubscribeForm.__proto__ || (0, _getPrototypeOf2.default)(SubscribeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            email: '',
            fullName: ''
        }, _this.updateEmail = function (e) {
            e.preventDefault();
            var email = e.target.value;
            _this.setState({ email: email });
        }, _this.updateName = function (e) {
            e.preventDefault();
            var fullName = e.target.value;
            _this.setState({ fullName: fullName });
        }, _this.handleSubmit = function (e) {
            e.preventDefault();
            var names = _this.state.fullName.split(' ');
            var firstName = names[0];
            var lastName = names[1];
            var email = _this.state.email;
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(SubscribeForm, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('form', { onSubmit: this.handleSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement(LabelWrap, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement('label', { htmlFor: 'name', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, 'Your Full Name'), _react2.default.createElement('input', { id: 'name', type: 'text', onChange: this.updateName, value: this.state.fullName, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            })), _react2.default.createElement(LabelWrap, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement('label', { htmlFor: 'email', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, 'Where do ya want your frontend coffee?'), _react2.default.createElement('input', { id: 'email', type: 'email', onChange: this.updateEmail, value: this.state.email, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            })), _react2.default.createElement(Button, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, 'Subscribe!'));
        }
    }]);

    return SubscribeForm;
}(_react.Component);

exports.default = SubscribeForm;