webpackHotUpdate(0,{

/***/ 147:
/* no static exports found */
/* all exports used */
/*!************************************!*\
  !*** ./frontend/reducers/index.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ 138);\n\nvar _authreducer = __webpack_require__(/*! ./authreducer */ 656);\n\nvar _authreducer2 = _interopRequireDefault(_authreducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.combineReducers)({\n    auth: _authreducer2.default\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQ3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL3JlZHVjZXJzL2luZGV4LmpzP2NmZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBhdXRocmVkdWNlciBmcm9tICcuL2F1dGhyZWR1Y2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgICBhdXRoOmF1dGhyZWR1Y2VyLFxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9yZWR1Y2Vycy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQURBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///147\n");

/***/ }),

/***/ 249:
/* no static exports found */
/* all exports used */
/*!***************************!*\
  !*** ./frontend/index.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ 2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ 508);\n\nvar _configureStore = __webpack_require__(/*! ./store/configureStore */ 276);\n\nvar _Root = __webpack_require__(/*! ./containers/Root */ 273);\n\nvar _Root2 = _interopRequireDefault(_Root);\n\n__webpack_require__(/*! ./assets/stylesheets/base.scss */ 652);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar store = (0, _configureStore.configureStore)();\n\n(0, _reactDom.render)(_react2.default.createElement(_Root2.default, { store: store, history: _configureStore.history }), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjQ5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2luZGV4LmpzPzgwNjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBjb25maWd1cmVTdG9yZSwgaGlzdG9yeSB9IGZyb20gJy4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xuaW1wb3J0IFJvb3QgZnJvbSAnLi9jb250YWluZXJzL1Jvb3QnO1xuXG5pbXBvcnQgJy4vYXNzZXRzL3N0eWxlc2hlZXRzL2Jhc2Uuc2Nzcyc7XG5cbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKTtcblxucmVuZGVyKFxuICAgIDxSb290IHN0b3JlPXtzdG9yZX0gaGlzdG9yeT17aGlzdG9yeX0gLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTtcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///249\n");

/***/ }),

/***/ 270:
/* no static exports found */
/* all exports used */
/*!***************************************!*\
  !*** ./frontend/components/Header.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 41);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 231);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Header = function (_Component) {\n    _inherits(Header, _Component);\n\n    function Header() {\n        _classCallCheck(this, Header);\n\n        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));\n    }\n\n    _createClass(Header, [{\n        key: 'renderContent',\n        value: function renderContent() {\n            console.log(this.props.auth);\n            switch (this.props.auth) {\n                case null:\n                    return 'stil deciding';\n                case false:\n                    return _react2.default.createElement(\n                        'a',\n                        { href: '/api/auth/google/get' },\n                        'log in'\n                    );\n                default:\n                    return _react2.default.createElement(\n                        'a',\n                        { href: '/api/logout' },\n                        'log out'\n                    );\n            }\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'nav',\n                null,\n                _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { to: this.props.auth ? '/#/dash' : '/' },\n                    'Home'\n                ),\n                _react2.default.createElement('br', null),\n                this.renderContent()\n            );\n        }\n    }]);\n\n    return Header;\n}(_react.Component);\n\nfunction mapStateToProps(state) {\n    return { auth: state.auth };\n}\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjcwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvSGVhZGVyLmpzPzBmYWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyQ29udGVudCgpe1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmF1dGgpO1xuICAgICAgICBzd2l0Y2ggKHRoaXMucHJvcHMuYXV0aCl7XG4gICAgICAgICAgICBjYXNlIG51bGw6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdzdGlsIGRlY2lkaW5nJztcbiAgICAgICAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17Jy9hcGkvYXV0aC9nb29nbGUvZ2V0J30+bG9nIGluPC9hPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eycvYXBpL2xvZ291dCd9PmxvZyBvdXQ8L2E+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hdXRoPyAnLyMvZGFzaCc6ICcvJ1xuICAgICAgICAgICAgICAgIH0+XG4gICAgICAgICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDb250ZW50KCl9XG5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICApO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSl7XG4gICAgcmV0dXJuIHthdXRoOiBzdGF0ZS5hdXRofTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEhlYWRlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFUQTtBQVlBOzs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBUEE7QUFXQTs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///270\n");

/***/ }),

/***/ 275:
/* no static exports found */
/* all exports used */
/*!**********************************************!*\
  !*** ./frontend/store/configureStore.dev.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.configureStore = configureStore;\n\nvar _redux = __webpack_require__(/*! redux */ 138);\n\nvar _DevTools = __webpack_require__(/*! ../containers/DevTools */ 146);\n\nvar _DevTools2 = _interopRequireDefault(_DevTools);\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ 646);\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _reducers = __webpack_require__(/*! ../reducers */ 147);\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction configureStore(initialState) {\n    return (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default)\n    // DevTools.instrument(),\n    ));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjc1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmRldi5qcz8xNTAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgRGV2VG9vbHMgZnJvbSAnLi4vY29udGFpbmVycy9EZXZUb29scyc7XG5cbmltcG9ydCB7Y3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZX0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHJlZHV4VGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4uL3JlZHVjZXJzJztcblxuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxuICAgICAgICByZWR1Y2VycyxcbiAgICAgICAgaW5pdGlhbFN0YXRlLFxuICAgICAgICBjb21wb3NlKFxuICAgICAgICAgICAgYXBwbHlNaWRkbGV3YXJlKHJlZHV4VGh1bmspLFxuICAgICAgICAgICAgLy8gRGV2VG9vbHMuaW5zdHJ1bWVudCgpLFxuICAgICAgICApXG5cbiAgICApO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmRldi5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFRQTtBQUNBO0FBVEE7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUtBO0FBRkE7QUFNQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///275\n");

/***/ }),

/***/ 656:
/* no static exports found */
/* all exports used */
/*!******************************************!*\
  !*** ./frontend/reducers/authreducer.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function () {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n    var action = arguments[1];\n\n    switch (action.type) {\n        case _types.FETCH_USER:\n            return action.payload || false;\n        default:\n            return state;\n    }\n};\n\nvar _types = __webpack_require__(/*! ../actions/types */ 144);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjU2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL3JlZHVjZXJzL2F1dGhyZWR1Y2VyLmpzPzNlZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGRVRDSF9VU0VSfSBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RhdGUgPSBudWxsLCBhY3Rpb24pe1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgICAgIGNhc2UgRkVUQ0hfVVNFUjpcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZCB8fCBmYWxzZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvcmVkdWNlcnMvYXV0aHJlZHVjZXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQVZBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///656\n");

/***/ })

})