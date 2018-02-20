webpackHotUpdate(0,{

/***/ 134:
/* no static exports found */
/* all exports used */
/*!*********************************************!*\
  !*** ./frontend/containers/AppContainer.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 7);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _react = __webpack_require__(/*! react */ 4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 68);\n\nvar _actions = __webpack_require__(/*! ../actions */ 248);\n\nvar actions = _interopRequireWildcard(_actions);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 643);\n\nvar _Header = __webpack_require__(/*! ../components/Header */ 654);\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Dash = function Dash() {\n    return _react2.default.createElement(\n        'h2',\n        null,\n        'Dash'\n    );\n};\nvar New = function New() {\n    return _react2.default.createElement(\n        'h2',\n        null,\n        'New'\n    );\n};\nvar Land = function Land() {\n    return _react2.default.createElement(\n        'h2',\n        null,\n        'Land'\n    );\n};\n\nvar AppContainer = function (_Component) {\n    _inherits(AppContainer, _Component);\n\n    function AppContainer() {\n        _classCallCheck(this, AppContainer);\n\n        return _possibleConstructorReturn(this, (AppContainer.__proto__ || Object.getPrototypeOf(AppContainer)).apply(this, arguments));\n    }\n\n    _createClass(AppContainer, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this.props.fetchUser();\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                _reactRouterDom.BrowserRouter,\n                null,\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(_Header2.default, null),\n                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/#/', component: Land }),\n                    _react2.default.createElement(_reactRouterDom.Route, { path: '/#/dash', component: Dash }),\n                    _react2.default.createElement(_reactRouterDom.Route, { path: '/#/new', component: New })\n                )\n            );\n        }\n    }]);\n\n    return AppContainer;\n}(_react.Component);\n\nAppContainer.propTypes = {\n    name: _propTypes2.default.string\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        name: state.name\n    };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps() /* dispatch */{\n    return {};\n};\n\nexports.default = (0, _reactRedux.connect)(null, actions)(AppContainer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTM0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbnRhaW5lcnMvQXBwQ29udGFpbmVyLmpzPzZkZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCB7QnJvd3NlclJvdXRlciwgUm91dGV9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuXG5jb25zdCBEYXNoID0gKCkgPT4gPGgyPkRhc2g8L2gyPjtcbmNvbnN0IE5ldyA9ICgpID0+IDxoMj5OZXc8L2gyPjtcbmNvbnN0IExhbmQgPSAoKSA9PiA8aDI+TGFuZDwvaDI+O1xuXG5jbGFzcyBBcHBDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaFVzZXIoKTtcbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyLz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy8jLycgY29tcG9uZW50PXtMYW5kfS8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvIy9kYXNoJyBjb21wb25lbnQ9e0Rhc2h9Lz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy8jL25ldycgY29tcG9uZW50PXtOZXd9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkFwcENvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IHN0YXRlLm5hbWVcbiAgICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKC8qIGRpc3BhdGNoICovKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICBudWxsLFxuICAgIGFjdGlvbnNcbikoQXBwQ29udGFpbmVyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9jb250YWluZXJzL0FwcENvbnRhaW5lci5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQVNBOzs7Ozs7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///134\n");

/***/ })

})