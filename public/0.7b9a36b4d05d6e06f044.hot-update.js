webpackHotUpdate(0,{

/***/ 268:
/* no static exports found */
/* all exports used */
/*!***********************************!*\
  !*** ./frontend/actions/index.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.addEvent = exports.fetchUser = undefined;\n\nvar _axios = __webpack_require__(/*! axios */ 250);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _types = __webpack_require__(/*! ./types */ 145);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar fetchUser = exports.fetchUser = function fetchUser() {\n    return async function (dispatch) {\n        var res = await _axios2.default.get('/api/current_user');\n        dispatch({ type: _types.FETCH_USER, payload: res.data });\n    };\n};\n\nvar addEvent = exports.addEvent = function addEvent(event) {\n    return function (dispatch) {\n        dispatch({ type: _types.ADD_EVENT, payload: event });\n    };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjY4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2FjdGlvbnMvaW5kZXguanM/NGI1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge0ZFVENIX1VTRVIsIEFERF9FVkVOVH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFVzZXIgPSAoKSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvY3VycmVudF91c2VyJyk7XHJcbiAgICBkaXNwYXRjaCh7dHlwZTogRkVUQ0hfVVNFUiwgcGF5bG9hZDogcmVzLmRhdGF9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRFdmVudCA9IChldmVudCkgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgZGlzcGF0Y2goe3R5cGU6IEFERF9FVkVOVCwgcGF5bG9hZDogZXZlbnR9KTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2FjdGlvbnMvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBRkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///268\n");

/***/ })

})