/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* exports provided: add, minus, times */
/* exports used: add, minus, times */
/*!**********************************!*\
  !*** ./project-0/js/src/test.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return add; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return minus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return times; });\nvar add = function add(a, b) {\n  return a + b;\n};\nvar minus = function minus(a, b) {\n  return a - b;\n};\nvar times = function times(a, b) {\n  return a * b;\n};\n\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./project-0/js/src/test.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./project-0/js/src/test.js?");

/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./project-0/js/src/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__test__ = __webpack_require__(/*! ./test */ 0);\n\n\nconsole.log(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__test__[\"a\" /* add */])(2, 4), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__test__[\"b\" /* minus */])(4, 2), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__test__[\"c\" /* times */])(2, 5));\n\n//////////////////\n// WEBPACK FOOTER\n// ./project-0/js/src/index.js\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./project-0/js/src/index.js?");

/***/ })
/******/ ]);