
          window.__NEXT_REGISTER_PAGE('/_document', function() {
            var comp = module.exports =
webpackJsonp([1],{

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(526);


/***/ }),

/***/ 526:
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

var _document = __webpack_require__(534);

var _document2 = _interopRequireDefault(_document);

var _colors = __webpack_require__(543);

var colors = _interopRequireWildcard(_colors);

var _styledComponents = __webpack_require__(544);

var _polished = __webpack_require__(550);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/cjkoepke/Repos/frontend-cafe/pages/_document.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/cjkoepke/Repos/frontend-cafe/pages/_document.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_document")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

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

/***/ })

},[525]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9fZG9jdW1lbnQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fZG9jdW1lbnQuanM/MWYzYTk1ZSIsIndlYnBhY2s6Ly8vLi91dGlscy9jb2xvcnMuanM/MWYzYTk1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRG9jdW1lbnQsIHsgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gJ25leHQvZG9jdW1lbnQnO1xuaW1wb3J0ICogYXMgY29sb3JzIGZyb20gJy4uL3V0aWxzL2NvbG9ycyc7XG5pbXBvcnQgeyBTZXJ2ZXJTdHlsZVNoZWV0LCBpbmplY3RHbG9iYWwgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBub3JtYWxpemUgfSBmcm9tICdwb2xpc2hlZCc7XG5cbmluamVjdEdsb2JhbGBcbiAgICAke25vcm1hbGl6ZSgpfVxuICAgIGJvZHkge1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9zdGF0aWMvY3VydmUuc3ZnJyk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5iYXNlLmxpZ2h0fTtcbiAgICAgICAgY29sb3I6ICR7Y29sb3JzLmJhc2UuZGFya307XG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLVNhbnMsIFVidW50dSwgQ2FudGFyZWxsLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeURvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgc2hlZXQgPSBuZXcgU2VydmVyU3R5bGVTaGVldCgpO1xuICAgICAgICBjb25zdCBtYWluID0gc2hlZXQuY29sbGVjdFN0eWxlcyg8TWFpbi8+KTtcbiAgICAgICAgY29uc3Qgc3R5bGVUYWdzID0gc2hlZXQuZ2V0U3R5bGVFbGVtZW50KCk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aHRtbD5cbiAgICAgICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkZyb250ZW5kLkNhZmU8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIHtzdHlsZVRhZ3N9XG4gICAgICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICAgIDxib2R5PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttYWlufVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPE5leHRTY3JpcHQgLz5cbiAgICAgICAgICAgICAgICA8L2JvZHk+XG4gICAgICAgICAgICA8L2h0bWw+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9fZG9jdW1lbnQuanM/ZW50cnkiLCIvLyBDb2xvcnMuXG5leHBvcnQgY29uc3QgcHJpbWFyeSA9IHtcbiAgICBsaW5rOiAnIzE2NjZCNycsXG4gICAgbXV0ZWQ6ICcjMzc2Q0EwJ1xufVxuXG5leHBvcnQgY29uc3QgYmFzZSA9IHtcbiAgICBsaWdodDogJyNGN0ZCRkYnLFxuICAgIGdyYXk6ICcjOURCMEM0JyxcbiAgICBkYXJrOiAnIzA4MUIyRCdcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3V0aWxzL2NvbG9ycy5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTtBQUNBO0FBYUE7Ozs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBQUE7QUFJQTtBQUpBO0FBQUE7Ozs7O0FBaEJBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBRUE7QUFHQTtBQUpBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        