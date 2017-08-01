"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _head = require("next/dist/lib/head.js");

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