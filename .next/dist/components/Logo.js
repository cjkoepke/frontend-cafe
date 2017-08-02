'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _colors = require('../utils/colors');

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