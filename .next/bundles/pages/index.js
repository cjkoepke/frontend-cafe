
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// Colors.
var primary = exports.primary = {
    link: '#1666B7',
    muted: '#376CA0'
};

var base = exports.base = {
    light: '#F7FBFF',
    gray: '#9DB0C4',
    dark: '#081B2D'
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/cjkoepke/Repos/frontend-cafe/utils/colors.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/cjkoepke/Repos/frontend-cafe/utils/colors.js"); } } })();

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(556);


/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(12);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(37);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = __webpack_require__(527);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _SubscribeForm = __webpack_require__(557);

var _SubscribeForm2 = _interopRequireDefault(_SubscribeForm);

var _Logo = __webpack_require__(558);

var _Logo2 = _interopRequireDefault(_Logo);

var _Card = __webpack_require__(559);

var _Card2 = _interopRequireDefault(_Card);

var _Wrap = __webpack_require__(560);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/cjkoepke/Repos/frontend-cafe/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/cjkoepke/Repos/frontend-cafe/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(70)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(12);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(37);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _colors = __webpack_require__(543);

var colors = _interopRequireWildcard(_colors);

var _styledComponents = __webpack_require__(544);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/cjkoepke/Repos/frontend-cafe/components/SubscribeForm.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/cjkoepke/Repos/frontend-cafe/components/SubscribeForm.js"); } } })();

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(544);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _colors = __webpack_require__(543);

var colors = _interopRequireWildcard(_colors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/cjkoepke/Repos/frontend-cafe/components/Logo.js';


var LogoTitle = _styledComponents2.default.h1.withConfig({
    displayName: 'Logo__LogoTitle',
    componentId: 's1pdjocj-0'
})(['background-image:url(/static/logo.svg);background-repeat:no-repeat;background-position:center center;background-size:contain;text-indent:-9999px;height:150px;width:150px;']);

var Logo = function Logo() {
    return _react2.default.createElement(LogoTitle, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, 'Frontend Cafe');
};

exports.default = Logo;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/cjkoepke/Repos/frontend-cafe/components/Logo.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/cjkoepke/Repos/frontend-cafe/components/Logo.js"); } } })();

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(544);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _colors = __webpack_require__(543);

var colors = _interopRequireWildcard(_colors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = _styledComponents2.default.div.withConfig({
    displayName: 'Card__Card',
    componentId: 'cpyr3k-0'
})(['background:', ';border-radius:8px;box-shadow:0 3px 48px rgba(0,0,0,.2),0 0 20px rgba(0,0,0,.1);padding:32px;width:', ';'], colors.base.light, function (props) {
    return props.half ? '50%' : 'auto';
});

exports.default = Card;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/cjkoepke/Repos/frontend-cafe/components/Card.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/cjkoepke/Repos/frontend-cafe/components/Card.js"); } } })();

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _styledComponents = __webpack_require__(544);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrap = _styledComponents2.default.div.withConfig({
    displayName: 'Wrap__Wrap',
    componentId: 's1k9jq0h-0'
})(['margin:0 auto;max-width:1000px;width:100%;']);

exports.default = Wrap;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/cjkoepke/Repos/frontend-cafe/components/Wrap.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/cjkoepke/Repos/frontend-cafe/components/Wrap.js"); } } })();

/***/ })

},[555]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3V0aWxzL2NvbG9ycy5qcz9lYzYyNmYzIiwid2VicGFjazovLy8uL3BhZ2VzP2VjNjI2ZjMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TdWJzY3JpYmVGb3JtLmpzP2VjNjI2ZjMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dvLmpzP2VjNjI2ZjMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkLmpzP2VjNjI2ZjMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9XcmFwLmpzP2VjNjI2ZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29sb3JzLlxuZXhwb3J0IGNvbnN0IHByaW1hcnkgPSB7XG4gICAgbGluazogJyMxNjY2QjcnLFxuICAgIG11dGVkOiAnIzM3NkNBMCdcbn1cblxuZXhwb3J0IGNvbnN0IGJhc2UgPSB7XG4gICAgbGlnaHQ6ICcjRjdGQkZGJyxcbiAgICBncmF5OiAnIzlEQjBDNCcsXG4gICAgZGFyazogJyMwODFCMkQnXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy9jb2xvcnMuanMiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdWJzY3JpYmVGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvU3Vic2NyaWJlRm9ybSc7XG5pbXBvcnQgTG9nbyBmcm9tICcuLi9jb21wb25lbnRzL0xvZ28nO1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkJztcbmltcG9ydCBXcmFwIGZyb20gJy4uL2NvbXBvbmVudHMvV3JhcCc7XG5cbmNvbnN0IEdyaWRXcmFwID0gV3JhcC5leHRlbmRgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy10b3A6IDQ4cHhcbmBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxHcmlkV3JhcD5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvbG9nby5zdmdcIiBhbHQ9XCJGcm9udGVuZCBDYWZlXCIvPlxuICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXt7d2lkdGg6ICc1MCUnfX0+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5Gcm9udGVuZCBDYWZlPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlRoZSBwbGFjZSBmb3IgZnJvbnRlbmQgZW5naW5lZXJzLjwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwPkpvaW4gYW4gYWN0aXZlIGNvbW11bml0eSBmb3IgZnJvbnRlbmQgZW5naW5lZXJzLCBhbmQgcmVjZWl2ZSBhIG9uY2Utd2Vla2x5IGRpZ2VzdCBvZiB0aGUgPHN0cm9uZz5sYXRlc3QgaW4gZnJvbnRlbmQgdGVjaG5vbG9neTwvc3Ryb25nPi48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxTdWJzY3JpYmVGb3JtIHBhZ2U9e3RoaXMucHJvcHMuY3VycmVudFBhZ2V9IC8+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9HcmlkV3JhcD5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIGNvbG9ycyBmcm9tICcuLi91dGlscy9jb2xvcnMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gICAgYmFja2dyb3VuZDogJHtjb2xvcnMuYmFzZS5kYXJrfTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGNvbG9yOiAke2NvbG9ycy5iYXNlLmxpZ2h0fTtcbiAgICBwYWRkaW5nOiAxNnB4IDI0cHg7XG5gXG5cbmNvbnN0IExhYmVsV3JhcCA9IHN0eWxlZC5kaXZgXG4gICAgbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5gXG5cbmNsYXNzIFN1YnNjcmliZUZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIGZ1bGxOYW1lOiAnJ1xuICAgIH1cblxuICAgIHVwZGF0ZUVtYWlsID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBlbWFpbCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtlbWFpbH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZU5hbWUgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGZ1bGxOYW1lID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Z1bGxOYW1lfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBuYW1lcyA9IHRoaXMuc3RhdGUuZnVsbE5hbWUuc3BsaXQoJyAnKTtcbiAgICAgICAgY29uc3QgZmlyc3ROYW1lID0gbmFtZXNbMF07XG4gICAgICAgIGNvbnN0IGxhc3ROYW1lID0gbmFtZXNbMV07XG4gICAgICAgIGNvbnN0IGVtYWlsID0gdGhpcy5zdGF0ZS5lbWFpbDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxMYWJlbFdyYXA+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPllvdXIgRnVsbCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMudXBkYXRlTmFtZX0gdmFsdWU9e3RoaXMuc3RhdGUuZnVsbE5hbWV9IC8+XG4gICAgICAgICAgICAgICAgPC9MYWJlbFdyYXA+XG5cbiAgICAgICAgICAgICAgICA8TGFiZWxXcmFwPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+V2hlcmUgZG8geWEgd2FudCB5b3VyIGZyb250ZW5kIGNvZmZlZT88L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUVtYWlsfSB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH0gLz5cbiAgICAgICAgICAgICAgICA8L0xhYmVsV3JhcD5cblxuICAgICAgICAgICAgICAgIDxCdXR0b24+U3Vic2NyaWJlITwvQnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdWJzY3JpYmVGb3JtO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9TdWJzY3JpYmVGb3JtLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0ICogYXMgY29sb3JzIGZyb20gJy4uL3V0aWxzL2NvbG9ycyc7XG5cbmNvbnN0IExvZ29UaXRsZSA9IHN0eWxlZC5oMWBcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9sb2dvLnN2Zyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICB0ZXh0LWluZGVudDogLTk5OTlweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbmBcblxuY29uc3QgTG9nbyA9ICgpID0+IChcbiAgICA8TG9nb1RpdGxlPkZyb250ZW5kIENhZmU8L0xvZ29UaXRsZT5cbilcblxuZXhwb3J0IGRlZmF1bHQgTG9nbztcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Mb2dvLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0ICogYXMgY29sb3JzIGZyb20gJy4uL3V0aWxzL2NvbG9ycyc7XG5cbmNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxuICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzLmJhc2UubGlnaHR9O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3gtc2hhZG93OiAwIDNweCA0OHB4IHJnYmEoMCwwLDAsLjIpLCAwIDAgMjBweCByZ2JhKDAsMCwwLC4xKTtcbiAgICBwYWRkaW5nOiAzMnB4O1xuICAgIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLmhhbGYgPyAnNTAlJyA6ICdhdXRvJ307XG5gXG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0NhcmQuanMiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgV3JhcCA9IHN0eWxlZC5kaXZgXG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG5gXG5cbmV4cG9ydCBkZWZhdWx0IFdyYXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1dyYXAuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBRUE7QUFHQTtBQUpBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FBT0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBSkE7Ozs7OztBQVRBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBOzs7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFBQTtBQURBO0FBTUE7QUFBQTtBQUNBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7QUFHQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUhBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFIQTtBQUdBOztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7OztBQU1BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVNBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFEQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFHQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        