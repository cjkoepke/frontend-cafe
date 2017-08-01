
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 542:
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
    light: '#DEE2E5',
    gray: '#9DB0C4',
    dark: '#081B2D'
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/cjkoepke/Repos/frontend-cafe/components/Colors.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/cjkoepke/Repos/frontend-cafe/components/Colors.js"); } } })();

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(548);


/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(75);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(76);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(46);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _GlobalStyles = __webpack_require__(549);

var _GlobalStyles2 = _interopRequireDefault(_GlobalStyles);

var _HeadMeta = __webpack_require__(550);

var _HeadMeta2 = _interopRequireDefault(_HeadMeta);

var _Header = __webpack_require__(551);

var _Header2 = _interopRequireDefault(_Header);

var _SubscribeForm = __webpack_require__(567);

var _SubscribeForm2 = _interopRequireDefault(_SubscribeForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/cjkoepke/Repos/frontend-cafe/pages/index.js?entry';


var _class = function (_Component) {
    (0, _inherits3.default)(_class, _Component);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);

        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
    }

    (0, _createClass3.default)(_class, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, _react2.default.createElement(_GlobalStyles2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }), _react2.default.createElement(_HeadMeta2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }), _react2.default.createElement('div', { className: 'wrap', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, _react2.default.createElement(_Header2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }), _react2.default.createElement('div', { className: 'section-head', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, 'Frontend.Cafe'), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, 'Join an active community for frontend engineers, developers, and hobbiests.'), _react2.default.createElement(_SubscribeForm2.default, { page: this.props.currentPage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
                var asPath = _ref.asPath;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                return _context.abrupt('return', asPath ? { currentPage: asPath } : { currentPage: 'not sure' });

                            case 1:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref2.apply(this, arguments);
            }

            return getInitialProps;
        }()
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

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = __webpack_require__(540);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _Colors = __webpack_require__(542);

var colors = _interopRequireWildcard(_Colors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/cjkoepke/Repos/frontend-cafe/components/GlobalStyles.js';


// Stylesheet.
var reset = '/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */button,hr,input{overflow:visible}audio,canvas,progress,video{display:inline-block}progress,sub,sup{vertical-align:baseline}[type=checkbox],[type=radio],legend{box-sizing:border-box;padding:0}html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}fieldset{padding:.35em .75em .625em}legend{color:inherit;display:table;max-width:100%;white-space:normal}textarea{overflow:auto}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}[hidden],template{display:none}';

exports.default = function () {
    return _react2.default.createElement(_style2.default, {
        styleId: 2018948347,
        css: reset + ' body{color:' + colors.base.dark + ';font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,Oxygen-Sans,Ubuntu,Cantarell,\'Helvetica Neue\',sans-serif;font-size:20px;font-weight:300}.wrap{margin:0 auto;max-width:1000px;padding:5%;width:100%}h1,h2,h3{font-weight:700}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvR2xvYmFsU3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU11QixBQU1hLEFBTWMsQUFTRSxjQVJDLEVBU3JCLGVBUmUsSUFScUgsT0FTckgsV0FDZixzR0FUbUIsZUFDQyxnQkFDcEIiLCJmaWxlIjoiY29tcG9uZW50cy9HbG9iYWxTdHlsZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Nqa29lcGtlL1JlcG9zL2Zyb250ZW5kLWNhZmUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjb2xvcnMgZnJvbSAnLi9Db2xvcnMnO1xuXG4vLyBTdHlsZXNoZWV0LlxuY29uc3QgcmVzZXQgPSAnLyohIG5vcm1hbGl6ZS5jc3MgdjcuMC4wIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL2J1dHRvbixocixpbnB1dHtvdmVyZmxvdzp2aXNpYmxlfWF1ZGlvLGNhbnZhcyxwcm9ncmVzcyx2aWRlb3tkaXNwbGF5OmlubGluZS1ibG9ja31wcm9ncmVzcyxzdWIsc3Vwe3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lfVt0eXBlPWNoZWNrYm94XSxbdHlwZT1yYWRpb10sbGVnZW5ke2JveC1zaXppbmc6Ym9yZGVyLWJveDtwYWRkaW5nOjB9aHRtbHtsaW5lLWhlaWdodDoxLjE1Oy1tcy10ZXh0LXNpemUtYWRqdXN0OjEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OjEwMCV9Ym9keXttYXJnaW46MH1hcnRpY2xlLGFzaWRlLGRldGFpbHMsZmlnY2FwdGlvbixmaWd1cmUsZm9vdGVyLGhlYWRlcixtYWluLG1lbnUsbmF2LHNlY3Rpb257ZGlzcGxheTpibG9ja31oMXtmb250LXNpemU6MmVtO21hcmdpbjouNjdlbSAwfWZpZ3VyZXttYXJnaW46MWVtIDQwcHh9aHJ7Ym94LXNpemluZzpjb250ZW50LWJveDtoZWlnaHQ6MH1jb2RlLGtiZCxwcmUsc2FtcHtmb250LWZhbWlseTptb25vc3BhY2UsbW9ub3NwYWNlO2ZvbnQtc2l6ZToxZW19YXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50Oy13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXA6b2JqZWN0c31hYmJyW3RpdGxlXXtib3JkZXItYm90dG9tOm5vbmU7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lIGRvdHRlZH1iLHN0cm9uZ3tmb250LXdlaWdodDpib2xkZXJ9ZGZue2ZvbnQtc3R5bGU6aXRhbGljfW1hcmt7YmFja2dyb3VuZC1jb2xvcjojZmYwO2NvbG9yOiMwMDB9c21hbGx7Zm9udC1zaXplOjgwJX1zdWIsc3Vwe2ZvbnQtc2l6ZTo3NSU7bGluZS1oZWlnaHQ6MDtwb3NpdGlvbjpyZWxhdGl2ZX1zdWJ7Ym90dG9tOi0uMjVlbX1zdXB7dG9wOi0uNWVtfWF1ZGlvOm5vdChbY29udHJvbHNdKXtkaXNwbGF5Om5vbmU7aGVpZ2h0OjB9aW1ne2JvcmRlci1zdHlsZTpub25lfXN2Zzpub3QoOnJvb3Qpe292ZXJmbG93OmhpZGRlbn1idXR0b24saW5wdXQsb3B0Z3JvdXAsc2VsZWN0LHRleHRhcmVhe2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7Zm9udC1zaXplOjEwMCU7bGluZS1oZWlnaHQ6MS4xNTttYXJnaW46MH1idXR0b24sc2VsZWN0e3RleHQtdHJhbnNmb3JtOm5vbmV9W3R5cGU9cmVzZXRdLFt0eXBlPXN1Ym1pdF0sYnV0dG9uLGh0bWwgW3R5cGU9YnV0dG9uXXstd2Via2l0LWFwcGVhcmFuY2U6YnV0dG9ufVt0eXBlPWJ1dHRvbl06Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9cmVzZXRdOjotbW96LWZvY3VzLWlubmVyLFt0eXBlPXN1Ym1pdF06Oi1tb3otZm9jdXMtaW5uZXIsYnV0dG9uOjotbW96LWZvY3VzLWlubmVye2JvcmRlci1zdHlsZTpub25lO3BhZGRpbmc6MH1bdHlwZT1idXR0b25dOi1tb3otZm9jdXNyaW5nLFt0eXBlPXJlc2V0XTotbW96LWZvY3VzcmluZyxbdHlwZT1zdWJtaXRdOi1tb3otZm9jdXNyaW5nLGJ1dHRvbjotbW96LWZvY3VzcmluZ3tvdXRsaW5lOkJ1dHRvblRleHQgZG90dGVkIDFweH1maWVsZHNldHtwYWRkaW5nOi4zNWVtIC43NWVtIC42MjVlbX1sZWdlbmR7Y29sb3I6aW5oZXJpdDtkaXNwbGF5OnRhYmxlO21heC13aWR0aDoxMDAlO3doaXRlLXNwYWNlOm5vcm1hbH10ZXh0YXJlYXtvdmVyZmxvdzphdXRvfVt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sW3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbntoZWlnaHQ6YXV0b31bdHlwZT1zZWFyY2hdey13ZWJraXQtYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7b3V0bGluZS1vZmZzZXQ6LTJweH1bdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb257LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmV9Ojotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbnstd2Via2l0LWFwcGVhcmFuY2U6YnV0dG9uO2ZvbnQ6aW5oZXJpdH1zdW1tYXJ5e2Rpc3BsYXk6bGlzdC1pdGVtfVtoaWRkZW5dLHRlbXBsYXRle2Rpc3BsYXk6bm9uZX0nO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgJHtyZXNldH1cblxuICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5iYXNlLmRhcmt9XG4gICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIH1cblxuICAgICAgICAud3JhcCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogNSU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIGgxLFxuICAgICAgICBoMixcbiAgICAgICAgaDMge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbilcbiJdfQ== */\n/*@ sourceURL=components/GlobalStyles.js */'
    });
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/cjkoepke/Repos/frontend-cafe/components/GlobalStyles.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/cjkoepke/Repos/frontend-cafe/components/GlobalStyles.js"); } } })();

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(226);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/cjkoepke/Repos/frontend-cafe/components/HeadMeta.js";


var HeadMeta = function HeadMeta() {
    return _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 4
        }
    }, _react2.default.createElement("title", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, "Frontend.Cafe - A community for frontend developers and software engineers."), _react2.default.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width", __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }));
};

exports.default = HeadMeta;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/cjkoepke/Repos/frontend-cafe/components/HeadMeta.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/cjkoepke/Repos/frontend-cafe/components/HeadMeta.js"); } } })();

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = __webpack_require__(540);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _Navigation = __webpack_require__(552);

var _Navigation2 = _interopRequireDefault(_Navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/cjkoepke/Repos/frontend-cafe/components/Header.js';


var Header = function Header(props) {
    return _react2.default.createElement('header', {
        'data-jsx': 3900704202,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement(_style2.default, {
        styleId: 3900704202,
        css: '[data-jsx="3900704202"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-between;-webkit-justify-content:space-between;-ms-flex-pack:space-between;justify-content:space-between;overflow:hidden;padding:20px 0}h1[data-jsx="3900704202"]{margin-left:0;padding-left:0}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtvQixBQUUwQixBQU9LLGNBQ0MsZUFDbkIsNkNBUm1CLDZGQUNXLCtIQUNkLGdCQUNELGVBTW5CIiwiZmlsZSI6ImNvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jamtvZXBrZS9SZXBvcy9mcm9udGVuZC1jYWZlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbic7XG5cbmNvbnN0IEhlYWRlciA9IChwcm9wcykgPT4gKFxuICAgIDxoZWFkZXI+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcblxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8aDE+RnJvbnRlbmQuQ2FmZTwvaDE+XG4gICAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgPC9oZWFkZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=components/Header.js */'
    }), _react2.default.createElement('h1', {
        'data-jsx': 3900704202,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, 'Frontend.Cafe'), _react2.default.createElement(_Navigation2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }));
};

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/cjkoepke/Repos/frontend-cafe/components/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/cjkoepke/Repos/frontend-cafe/components/Header.js"); } } })();

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = __webpack_require__(540);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(553);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/cjkoepke/Repos/frontend-cafe/components/Navigation.js";


var Navigation = function Navigation() {
    return _react2.default.createElement("nav", {
        "data-jsx": 1643335932,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 4
        }
    }, _react2.default.createElement(_style2.default, {
        styleId: 1643335932,
        css: "[data-jsx=\"1643335932\"]{float:right}ul[data-jsx=\"1643335932\"]{text-align:right}li[data-jsx=\"1643335932\"]{float:none;display:inline-block;list-style-type:none;margin-left:20px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJb0IsQUFFeUIsQUFHUyxBQUdOLFdBQ1UsQ0FJN0IsS0FQSSxlQUl5QixxQkFDSixpQkFDckIiLCJmaWxlIjoiY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jamtvZXBrZS9SZXBvcy9mcm9udGVuZC1jYWZlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgTmF2aWdhdGlvbiA9ICgpID0+IChcbiAgICA8bmF2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG5cbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT48TGluayBwcmVmZXRjaCBocmVmPVwiL1wiPjxhPkhvbWU8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9hcmNoaXZlc1wiPjxhPkFyY2hpdmVzPC9hPjwvTGluaz48L2xpPlxuICAgICAgICA8L3VsPlxuICAgIDwvbmF2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xuIl19 */\n/*@ sourceURL=components/Navigation.js */"
    }), _react2.default.createElement("ul", {
        "data-jsx": 1643335932,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, _react2.default.createElement("li", {
        "data-jsx": 1643335932,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, _react2.default.createElement(_link2.default, { prefetch: true, href: "/", __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, _react2.default.createElement("a", {
        "data-jsx": 1643335932,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, "Home"))), _react2.default.createElement("li", {
        "data-jsx": 1643335932,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }, _react2.default.createElement(_link2.default, { prefetch: true, href: "/archives", __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }, _react2.default.createElement("a", {
        "data-jsx": 1643335932,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }, "Archives")))));
};

exports.default = Navigation;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/cjkoepke/Repos/frontend-cafe/components/Navigation.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/cjkoepke/Repos/frontend-cafe/components/Navigation.js"); } } })();

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(46);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/cjkoepke/Repos/frontend-cafe/components/SubscribeForm.js';


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

            console.log(firstName, lastName, email);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(SubscribeForm, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('form', { onSubmit: this.handleSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement('label', { htmlFor: 'name', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, 'Your Full Name'), _react2.default.createElement('input', { id: 'name', type: 'text', onChange: this.updateName, value: this.state.fullName, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }), _react2.default.createElement('label', { htmlFor: 'email', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, 'Where do ya want your frontend coffee?'), _react2.default.createElement('input', { id: 'email', type: 'email', onChange: this.updateEmail, value: this.state.email, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }), _react2.default.createElement('input', { type: 'submit', value: 'Subscribe!', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }));
        }
    }]);

    return SubscribeForm;
}(_react.Component);

exports.default = SubscribeForm;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/cjkoepke/Repos/frontend-cafe/components/SubscribeForm.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/cjkoepke/Repos/frontend-cafe/components/SubscribeForm.js"); } } })();

/***/ })

},[547]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29sb3JzLmpzPzA2NzgyMDgiLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/MDY3ODIwOCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dsb2JhbFN0eWxlcy5qcz8wNjc4MjA4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZE1ldGEuanM/MDY3ODIwOCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz8wNjc4MjA4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi5qcz8wNjc4MjA4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3Vic2NyaWJlRm9ybS5qcz8wNjc4MjA4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvbG9ycy5cbmV4cG9ydCBjb25zdCBwcmltYXJ5ID0ge1xuICAgIGxpbms6ICcjMTY2NkI3JyxcbiAgICBtdXRlZDogJyMzNzZDQTAnXG59XG5cbmV4cG9ydCBjb25zdCBiYXNlID0ge1xuICAgIGxpZ2h0OiAnI0RFRTJFNScsXG4gICAgZ3JheTogJyM5REIwQzQnLFxuICAgIGRhcms6ICcjMDgxQjJEJ1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Db2xvcnMuanMiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBHbG9iYWxTdHlsZXMgZnJvbSAnLi4vY29tcG9uZW50cy9HbG9iYWxTdHlsZXMnO1xuaW1wb3J0IEhlYWRNZXRhIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZE1ldGEnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgU3Vic2NyaWJlRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1N1YnNjcmliZUZvcm0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7YXNQYXRofSkge1xuICAgICAgICByZXR1cm4gYXNQYXRoID8geyBjdXJyZW50UGFnZTogYXNQYXRofSA6IHtjdXJyZW50UGFnZTogJ25vdCBzdXJlJ307XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEdsb2JhbFN0eWxlcyAvPlxuICAgICAgICAgICAgICAgIDxIZWFkTWV0YSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+RnJvbnRlbmQuQ2FmZTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Kb2luIGFuIGFjdGl2ZSBjb21tdW5pdHkgZm9yIGZyb250ZW5kIGVuZ2luZWVycywgZGV2ZWxvcGVycywgYW5kIGhvYmJpZXN0cy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3Vic2NyaWJlRm9ybSBwYWdlPXt0aGlzLnByb3BzLmN1cnJlbnRQYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgKiBhcyBjb2xvcnMgZnJvbSAnLi9Db2xvcnMnO1xuXG4vLyBTdHlsZXNoZWV0LlxuY29uc3QgcmVzZXQgPSAnLyohIG5vcm1hbGl6ZS5jc3MgdjcuMC4wIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL2J1dHRvbixocixpbnB1dHtvdmVyZmxvdzp2aXNpYmxlfWF1ZGlvLGNhbnZhcyxwcm9ncmVzcyx2aWRlb3tkaXNwbGF5OmlubGluZS1ibG9ja31wcm9ncmVzcyxzdWIsc3Vwe3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lfVt0eXBlPWNoZWNrYm94XSxbdHlwZT1yYWRpb10sbGVnZW5ke2JveC1zaXppbmc6Ym9yZGVyLWJveDtwYWRkaW5nOjB9aHRtbHtsaW5lLWhlaWdodDoxLjE1Oy1tcy10ZXh0LXNpemUtYWRqdXN0OjEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OjEwMCV9Ym9keXttYXJnaW46MH1hcnRpY2xlLGFzaWRlLGRldGFpbHMsZmlnY2FwdGlvbixmaWd1cmUsZm9vdGVyLGhlYWRlcixtYWluLG1lbnUsbmF2LHNlY3Rpb257ZGlzcGxheTpibG9ja31oMXtmb250LXNpemU6MmVtO21hcmdpbjouNjdlbSAwfWZpZ3VyZXttYXJnaW46MWVtIDQwcHh9aHJ7Ym94LXNpemluZzpjb250ZW50LWJveDtoZWlnaHQ6MH1jb2RlLGtiZCxwcmUsc2FtcHtmb250LWZhbWlseTptb25vc3BhY2UsbW9ub3NwYWNlO2ZvbnQtc2l6ZToxZW19YXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50Oy13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXA6b2JqZWN0c31hYmJyW3RpdGxlXXtib3JkZXItYm90dG9tOm5vbmU7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lIGRvdHRlZH1iLHN0cm9uZ3tmb250LXdlaWdodDpib2xkZXJ9ZGZue2ZvbnQtc3R5bGU6aXRhbGljfW1hcmt7YmFja2dyb3VuZC1jb2xvcjojZmYwO2NvbG9yOiMwMDB9c21hbGx7Zm9udC1zaXplOjgwJX1zdWIsc3Vwe2ZvbnQtc2l6ZTo3NSU7bGluZS1oZWlnaHQ6MDtwb3NpdGlvbjpyZWxhdGl2ZX1zdWJ7Ym90dG9tOi0uMjVlbX1zdXB7dG9wOi0uNWVtfWF1ZGlvOm5vdChbY29udHJvbHNdKXtkaXNwbGF5Om5vbmU7aGVpZ2h0OjB9aW1ne2JvcmRlci1zdHlsZTpub25lfXN2Zzpub3QoOnJvb3Qpe292ZXJmbG93OmhpZGRlbn1idXR0b24saW5wdXQsb3B0Z3JvdXAsc2VsZWN0LHRleHRhcmVhe2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7Zm9udC1zaXplOjEwMCU7bGluZS1oZWlnaHQ6MS4xNTttYXJnaW46MH1idXR0b24sc2VsZWN0e3RleHQtdHJhbnNmb3JtOm5vbmV9W3R5cGU9cmVzZXRdLFt0eXBlPXN1Ym1pdF0sYnV0dG9uLGh0bWwgW3R5cGU9YnV0dG9uXXstd2Via2l0LWFwcGVhcmFuY2U6YnV0dG9ufVt0eXBlPWJ1dHRvbl06Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9cmVzZXRdOjotbW96LWZvY3VzLWlubmVyLFt0eXBlPXN1Ym1pdF06Oi1tb3otZm9jdXMtaW5uZXIsYnV0dG9uOjotbW96LWZvY3VzLWlubmVye2JvcmRlci1zdHlsZTpub25lO3BhZGRpbmc6MH1bdHlwZT1idXR0b25dOi1tb3otZm9jdXNyaW5nLFt0eXBlPXJlc2V0XTotbW96LWZvY3VzcmluZyxbdHlwZT1zdWJtaXRdOi1tb3otZm9jdXNyaW5nLGJ1dHRvbjotbW96LWZvY3VzcmluZ3tvdXRsaW5lOkJ1dHRvblRleHQgZG90dGVkIDFweH1maWVsZHNldHtwYWRkaW5nOi4zNWVtIC43NWVtIC42MjVlbX1sZWdlbmR7Y29sb3I6aW5oZXJpdDtkaXNwbGF5OnRhYmxlO21heC13aWR0aDoxMDAlO3doaXRlLXNwYWNlOm5vcm1hbH10ZXh0YXJlYXtvdmVyZmxvdzphdXRvfVt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sW3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbntoZWlnaHQ6YXV0b31bdHlwZT1zZWFyY2hdey13ZWJraXQtYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7b3V0bGluZS1vZmZzZXQ6LTJweH1bdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb257LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmV9Ojotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbnstd2Via2l0LWFwcGVhcmFuY2U6YnV0dG9uO2ZvbnQ6aW5oZXJpdH1zdW1tYXJ5e2Rpc3BsYXk6bGlzdC1pdGVtfVtoaWRkZW5dLHRlbXBsYXRle2Rpc3BsYXk6bm9uZX0nO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgJHtyZXNldH1cblxuICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5iYXNlLmRhcmt9XG4gICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIH1cblxuICAgICAgICAud3JhcCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogNSU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIGgxLFxuICAgICAgICBoMixcbiAgICAgICAgaDMge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvR2xvYmFsU3R5bGVzLmpzIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuY29uc3QgSGVhZE1ldGEgPSAoKSA9PiAoXG4gICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Gcm9udGVuZC5DYWZlIC0gQSBjb21tdW5pdHkgZm9yIGZyb250ZW5kIGRldmVsb3BlcnMgYW5kIHNvZnR3YXJlIGVuZ2luZWVycy48L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgPC9IZWFkPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkTWV0YTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZE1ldGEuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uJztcblxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiAoXG4gICAgPGhlYWRlcj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xuXG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxoMT5Gcm9udGVuZC5DYWZlPC9oMT5cbiAgICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICA8L2hlYWRlcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4gKFxuICAgIDxuYXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcblxuICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPjxMaW5rIHByZWZldGNoIGhyZWY9XCIvXCI+PGE+SG9tZTwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayBwcmVmZXRjaCBocmVmPVwiL2FyY2hpdmVzXCI+PGE+QXJjaGl2ZXM8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgPC9uYXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL05hdmlnYXRpb24uanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBTdWJzY3JpYmVGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBmdWxsTmFtZTogJydcbiAgICB9XG5cbiAgICB1cGRhdGVFbWFpbCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZW1haWwgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW1haWx9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVOYW1lID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmdWxsTmFtZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtmdWxsTmFtZX0pO1xuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgbmFtZXMgPSB0aGlzLnN0YXRlLmZ1bGxOYW1lLnNwbGl0KCcgJyk7XG4gICAgICAgIGNvbnN0IGZpcnN0TmFtZSA9IG5hbWVzWzBdO1xuICAgICAgICBjb25zdCBsYXN0TmFtZSA9IG5hbWVzWzFdO1xuICAgICAgICBjb25zdCBlbWFpbCA9IHRoaXMuc3RhdGUuZW1haWw7XG5cbiAgICAgICAgY29uc29sZS5sb2coIGZpcnN0TmFtZSwgbGFzdE5hbWUsIGVtYWlsKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPllvdXIgRnVsbCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJuYW1lXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy51cGRhdGVOYW1lfSB2YWx1ZT17dGhpcy5zdGF0ZS5mdWxsTmFtZX0gLz5cblxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5XaGVyZSBkbyB5YSB3YW50IHlvdXIgZnJvbnRlbmQgY29mZmVlPzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiBvbkNoYW5nZT17dGhpcy51cGRhdGVFbWFpbH0gdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IC8+XG5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3Vic2NyaWJlIVwiLz5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3Vic2NyaWJlRm9ybTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvU3Vic2NyaWJlRm9ybS5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFFQTtBQUdBO0FBSkE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUxBOzs7Ozs7O0FBYkE7Ozs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBSUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYUE7QUFiQTtBQWFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFjQTtBQWRBO0FBY0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBQUE7QUFEQTtBQU1BO0FBQUE7QUFDQTtBQUdBO0FBRUE7QUFBQTtBQUNBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUdBO0FBSEE7Ozs7OztBQU1BO0FBQ0E7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        