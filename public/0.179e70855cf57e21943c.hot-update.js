webpackHotUpdate(0,{

/***/ 655:
/* no static exports found */
/* all exports used */
/*!******************************************!*\
  !*** ./frontend/containers/dash/dash.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 3);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 55);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 231);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Land = function Land() {\n    return _react2.default.createElement(\n        'h2',\n        null,\n        'lanndd'\n    );\n};\nvar hello = function hello() {\n    return _react2.default.createElement(\n        'h2',\n        null,\n        'hello'\n    );\n};\nvar stuff = function stuff() {\n    return _react2.default.createElement(\n        'h2',\n        null,\n        'stuff'\n    );\n};\n\nvar Dash = function (_Component) {\n    _inherits(Dash, _Component);\n\n    function Dash() {\n        _classCallCheck(this, Dash);\n\n        return _possibleConstructorReturn(this, (Dash.__proto__ || Object.getPrototypeOf(Dash)).apply(this, arguments));\n    }\n\n    _createClass(Dash, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                _reactRouterDom.BrowserRouter,\n                null,\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/dash/', component: Land }),\n                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/dash/stuff', component: stuff }),\n                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/dash/hello', component: hello })\n                )\n            );\n        }\n    }]);\n\n    return Dash;\n}(_react.Component);\n\nDash.propTypes = {\n    // name: PropTypes.string,\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        name: state.name\n    };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps() /* dispatch */{\n    return {};\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Dash);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjU1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbnRhaW5lcnMvZGFzaC9kYXNoLmpzPzA5NTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHtCcm93c2VyUm91dGVyLCBSb3V0ZX0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmNvbnN0IExhbmQgPSAoKSA9PiA8aDI+bGFubmRkPC9oMj47XHJcbmNvbnN0IGhlbGxvID0gKCkgPT4gPGgyPmhlbGxvPC9oMj47XHJcbmNvbnN0IHN0dWZmID0gKCkgPT4gPGgyPnN0dWZmPC9oMj47XHJcblxyXG5cclxuY2xhc3MgRGFzaCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD0nL2Rhc2gvJyBjb21wb25lbnQ9e0xhbmR9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD0nL2Rhc2gvc3R1ZmYnIGNvbXBvbmVudD17c3R1ZmZ9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD0nL2Rhc2gvaGVsbG8nIGNvbXBvbmVudD17aGVsbG99Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuRGFzaC5wcm9wVHlwZXMgPSB7XHJcbiAgICAvLyBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IHN0YXRlLm5hbWVcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoLyogZGlzcGF0Y2ggKi8pID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKERhc2gpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvY29udGFpbmVycy9kYXNoL2Rhc2guanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUUE7Ozs7OztBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///655\n");

/***/ })

})