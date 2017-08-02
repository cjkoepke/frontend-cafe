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

var Card = _styledComponents2.default.div.withConfig({
    displayName: 'Card__Card',
    componentId: 'cpyr3k-0'
})(['background:', ';border-radius:8px;box-shadow:0 3px 48px rgba(0,0,0,.2),0 0 20px rgba(0,0,0,.1);padding:32px;width:', ';'], colors.base.light, function (props) {
    return props.half ? '50%' : 'auto';
});

exports.default = Card;