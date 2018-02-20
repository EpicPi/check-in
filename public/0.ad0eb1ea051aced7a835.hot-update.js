webpackHotUpdate(0,{

/***/ 248:
/* no static exports found */
/* all exports used */
/*!***************************!*\
  !*** ./frontend/index.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ 2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ 506);\n\nvar _configureStore = __webpack_require__(/*! ./store/configureStore */ 655);\n\nvar _Root = __webpack_require__(/*! ./containers/Root */ 272);\n\nvar _Root2 = _interopRequireDefault(_Root);\n\nvar _redux = __webpack_require__(/*! redux */ 138);\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ 644);\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _reducers = __webpack_require__(/*! ./reducers */ 275);\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\n__webpack_require__(/*! ./assets/stylesheets/base.scss */ 650);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar store = (0, _configureStore.configureStore)(); //this is the correct way but i cant get it to work\n// const store = createStore(reducers ,{}, applyMiddleware(reduxThunk));\n(0, _reactDom.render)(_react2.default.createElement(_Root2.default, { store: store, history: _configureStore.history }), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjQ4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2luZGV4LmpzPzgwNjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBjb25maWd1cmVTdG9yZSwgaGlzdG9yeSB9IGZyb20gJy4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xuaW1wb3J0IFJvb3QgZnJvbSAnLi9jb250YWluZXJzL1Jvb3QnO1xuXG5pbXBvcnQge2NyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmV9IGZyb20gJ3JlZHV4JztcbmltcG9ydCByZWR1eFRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcblxuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMnO1xuXG5pbXBvcnQgJy4vYXNzZXRzL3N0eWxlc2hlZXRzL2Jhc2Uuc2Nzcyc7XG5cblxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpOyAvL3RoaXMgaXMgdGhlIGNvcnJlY3Qgd2F5IGJ1dCBpIGNhbnQgZ2V0IGl0IHRvIHdvcmtcbi8vIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMgLHt9LCBhcHBseU1pZGRsZXdhcmUocmVkdXhUaHVuaykpO1xucmVuZGVyKFxuICAgIDxSb290IHN0b3JlPXtzdG9yZX0gaGlzdG9yeT17aGlzdG9yeX0gLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTtcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///248\n");

/***/ }),

/***/ 654:
/* no static exports found */
/* all exports used */
/*!**********************************************!*\
  !*** ./frontend/store/configureStore.dev.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.configureStore = configureStore;\n\nvar _redux = __webpack_require__(/*! redux */ 138);\n\nvar _reducers = __webpack_require__(/*! ../reducers */ 275);\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nvar _DevTools = __webpack_require__(/*! ../containers/DevTools */ 270);\n\nvar _DevTools2 = _interopRequireDefault(_DevTools);\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ 644);\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction configureStore(initialState) {\n    return (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.compose)(_DevTools2.default.instrument()), (0, _redux.applyMiddleware)(_reduxThunk2.default));\n}\n// import {applyMiddleware} from \"redux/index\";;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjU0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmRldi5qcz8xNTAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xuaW1wb3J0IERldlRvb2xzIGZyb20gJy4uL2NvbnRhaW5lcnMvRGV2VG9vbHMnO1xuLy8gaW1wb3J0IHthcHBseU1pZGRsZXdhcmV9IGZyb20gXCJyZWR1eC9pbmRleFwiOztcbmltcG9ydCB7Y3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZX0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHJlZHV4VGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4uL3JlZHVjZXJzJztcblxuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxuICAgICAgICByZWR1Y2VycyxcbiAgICAgICAgaW5pdGlhbFN0YXRlLFxuICAgICAgICBjb21wb3NlKFxuICAgICAgICAgICAgRGV2VG9vbHMuaW5zdHJ1bWVudCgpXG4gICAgICAgICksXG4gICAgICAgIGFwcGx5TWlkZGxld2FyZShyZWR1eFRodW5rKVxuICAgICk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvc3RvcmUvY29uZmlndXJlU3RvcmUuZGV2LmpzIl0sIm1hcHBpbmdzIjoiOzs7OztBQVNBO0FBQ0E7QUFWQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7QUFHQTtBQUNBO0FBUUE7QUFmQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///654\n");

/***/ }),

/***/ 655:
/* no static exports found */
/* all exports used */
/*!******************************************!*\
  !*** ./frontend/store/configureStore.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {\n\nif (process.env.NODE_ENV === 'production') {\n    module.exports = __webpack_require__(/*! ./configureStore.prod */ 656);\n} else {\n    module.exports = __webpack_require__(/*! ./configureStore.dev */ 654);\n}\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/process/browser.js */ 0)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjU1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzP2I2ZjciXSwic291cmNlc0NvbnRlbnQiOlsiaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY29uZmlndXJlU3RvcmUucHJvZCcpO1xufSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY29uZmlndXJlU3RvcmUuZGV2Jyk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvc3RvcmUvY29uZmlndXJlU3RvcmUuanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///655\n");

/***/ }),

/***/ 656:
/* no static exports found */
/* all exports used */
/*!***********************************************!*\
  !*** ./frontend/store/configureStore.prod.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.configureStore = configureStore;\n\nvar _redux = __webpack_require__(/*! redux */ 138);\n\nvar _reducers = __webpack_require__(/*! ../reducers */ 275);\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction configureStore(initialState) {\n    return (0, _redux.createStore)(_reducers2.default, initialState);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjU2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLnByb2QuanM/OWQ2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZShpbml0aWFsU3RhdGUpIHtcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUoXG4gICAgICAgIHJvb3RSZWR1Y2VyLFxuICAgICAgICBpbml0aWFsU3RhdGVcbiAgICApO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLnByb2QuanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0E7QUFDQTtBQUpBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFJQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///656\n");

/***/ })

})