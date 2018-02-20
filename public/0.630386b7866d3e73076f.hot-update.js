webpackHotUpdate(0,{

/***/ 268:
/* no static exports found */
/* all exports used */
/*!***********************************!*\
  !*** ./frontend/actions/index.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.addEvent = exports.fetchUser = undefined;\n\nvar _axios = __webpack_require__(/*! axios */ 250);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _types = __webpack_require__(/*! ./types */ 145);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar fetchUser = exports.fetchUser = function fetchUser() {\n    return async function (dispatch) {\n        var res = await _axios2.default.get('/api/current_user');\n        dispatch({ type: _types.FETCH_USER, payload: res.data });\n    };\n};\n\nvar addEvent = exports.addEvent = function addEvent() {\n    return function (dispatch) {};\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjY4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2FjdGlvbnMvaW5kZXguanM/NGI1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge0ZFVENIX1VTRVJ9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hVc2VyID0gKCkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2N1cnJlbnRfdXNlcicpO1xyXG4gICAgZGlzcGF0Y2goe3R5cGU6IEZFVENIX1VTRVIsIHBheWxvYWQ6IHJlcy5kYXRhfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkRXZlbnQgPSAoKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvYWN0aW9ucy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBSUE7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///268\n");

/***/ })

})