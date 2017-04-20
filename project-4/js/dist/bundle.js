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
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************!*\
  !*** ./~/ramda/src/internal/_curry1.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var _isPlaceholder = __webpack_require__(/*! ./_isPlaceholder */ 3);\n\n\n/**\n * Optimized internal one-arity curry function.\n *\n * @private\n * @category Function\n * @param {Function} fn The function to curry.\n * @return {Function} The curried function.\n */\nmodule.exports = function _curry1(fn) {\n  return function f1(a) {\n    if (arguments.length === 0 || _isPlaceholder(a)) {\n      return f1;\n    } else {\n      return fn.apply(this, arguments);\n    }\n  };\n};\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/internal/_curry1.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/internal/_curry1.js?");

/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************!*\
  !*** ./~/ramda/src/internal/_curry2.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry1 = __webpack_require__(/*! ./_curry1 */ 0);\nvar _isPlaceholder = __webpack_require__(/*! ./_isPlaceholder */ 3);\n\n\n/**\n * Optimized internal two-arity curry function.\n *\n * @private\n * @category Function\n * @param {Function} fn The function to curry.\n * @return {Function} The curried function.\n */\nmodule.exports = function _curry2(fn) {\n  return function f2(a, b) {\n    switch (arguments.length) {\n      case 0:\n        return f2;\n      case 1:\n        return _isPlaceholder(a) ? f2\n             : _curry1(function(_b) { return fn(a, _b); });\n      default:\n        return _isPlaceholder(a) && _isPlaceholder(b) ? f2\n             : _isPlaceholder(a) ? _curry1(function(_a) { return fn(_a, b); })\n             : _isPlaceholder(b) ? _curry1(function(_b) { return fn(a, _b); })\n             : fn(a, b);\n    }\n  };\n};\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/internal/_curry2.js\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/internal/_curry2.js?");

/***/ }),
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!****************************************!*\
  !*** ./~/ramda/src/internal/_arity.js ***!
  \****************************************/
/***/ (function(module, exports) {

eval("module.exports = function _arity(n, fn) {\n  /* eslint-disable no-unused-vars */\n  switch (n) {\n    case 0: return function() { return fn.apply(this, arguments); };\n    case 1: return function(a0) { return fn.apply(this, arguments); };\n    case 2: return function(a0, a1) { return fn.apply(this, arguments); };\n    case 3: return function(a0, a1, a2) { return fn.apply(this, arguments); };\n    case 4: return function(a0, a1, a2, a3) { return fn.apply(this, arguments); };\n    case 5: return function(a0, a1, a2, a3, a4) { return fn.apply(this, arguments); };\n    case 6: return function(a0, a1, a2, a3, a4, a5) { return fn.apply(this, arguments); };\n    case 7: return function(a0, a1, a2, a3, a4, a5, a6) { return fn.apply(this, arguments); };\n    case 8: return function(a0, a1, a2, a3, a4, a5, a6, a7) { return fn.apply(this, arguments); };\n    case 9: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) { return fn.apply(this, arguments); };\n    case 10: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) { return fn.apply(this, arguments); };\n    default: throw new Error('First argument to _arity must be a non-negative integer no greater than ten');\n  }\n};\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/internal/_arity.js\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/internal/_arity.js?");

/***/ }),
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ./~/ramda/src/internal/_isPlaceholder.js ***!
  \************************************************/
/***/ (function(module, exports) {

eval("module.exports = function _isPlaceholder(a) {\n  return a != null &&\n         typeof a === 'object' &&\n         a['@@functional/placeholder'] === true;\n};\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/internal/_isPlaceholder.js\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/internal/_isPlaceholder.js?");

/***/ }),
/* 4 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** ./~/ramda/src/compose.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var pipe = __webpack_require__(/*! ./pipe */ 39);\nvar reverse = __webpack_require__(/*! ./reverse */ 41);\n\n\n/**\n * Performs right-to-left function composition. The rightmost function may have\n * any arity; the remaining functions must be unary.\n *\n * **Note:** The result of compose is not automatically curried.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Function\n * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)\n * @param {...Function} ...functions The functions to compose\n * @return {Function}\n * @see R.pipe\n * @example\n *\n *      var classyGreeting = (firstName, lastName) => \"The name's \" + lastName + \", \" + firstName + \" \" + lastName\n *      var yellGreeting = R.compose(R.toUpper, classyGreeting);\n *      yellGreeting('James', 'Bond'); //=> \"THE NAME'S BOND, JAMES BOND\"\n *\n *      R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7\n *\n * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))\n */\nmodule.exports = function compose() {\n  if (arguments.length === 0) {\n    throw new Error('compose requires at least one argument');\n  }\n  return pipe.apply(this, reverse(arguments));\n};\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/compose.js\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/compose.js?");

/***/ }),
/* 5 */
/* unknown exports provided */
/* all exports used */
/*!**************************************!*\
  !*** ./~/ramda/src/internal/_has.js ***!
  \**************************************/
/***/ (function(module, exports) {

eval("module.exports = function _has(prop, obj) {\n  return Object.prototype.hasOwnProperty.call(obj, prop);\n};\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/internal/_has.js\n// module id = 5\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/internal/_has.js?");

/***/ }),
/* 6 */
/* unknown exports provided */
/* all exports used */
/*!******************************************!*\
  !*** ./~/ramda/src/internal/_isArray.js ***!
  \******************************************/
/***/ (function(module, exports) {

eval("/**\n * Tests whether or not an object is an array.\n *\n * @private\n * @param {*} val The object to test.\n * @return {Boolean} `true` if `val` is an array, `false` otherwise.\n * @example\n *\n *      _isArray([]); //=> true\n *      _isArray(null); //=> false\n *      _isArray({}); //=> false\n */\nmodule.exports = Array.isArray || function _isArray(val) {\n  return (val != null &&\n          val.length >= 0 &&\n          Object.prototype.toString.call(val) === '[object Array]');\n};\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/internal/_isArray.js\n// module id = 6\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/internal/_isArray.js?");

/***/ }),
/* 7 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/process/browser.js ***!
  \******************************/
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/process/browser.js\n// module id = 7\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/process/browser.js?");

/***/ }),
/* 8 */
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** ./~/ramda/src/curryN.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var _arity = __webpack_require__(/*! ./internal/_arity */ 2);\nvar _curry1 = __webpack_require__(/*! ./internal/_curry1 */ 0);\nvar _curry2 = __webpack_require__(/*! ./internal/_curry2 */ 1);\nvar _curryN = __webpack_require__(/*! ./internal/_curryN */ 27);\n\n\n/**\n * Returns a curried equivalent of the provided function, with the specified\n * arity. The curried function has two unusual capabilities. First, its\n * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the\n * following are equivalent:\n *\n *   - `g(1)(2)(3)`\n *   - `g(1)(2, 3)`\n *   - `g(1, 2)(3)`\n *   - `g(1, 2, 3)`\n *\n * Secondly, the special placeholder value `R.__` may be used to specify\n * \"gaps\", allowing partial application of any combination of arguments,\n * regardless of their positions. If `g` is as above and `_` is `R.__`, the\n * following are equivalent:\n *\n *   - `g(1, 2, 3)`\n *   - `g(_, 2, 3)(1)`\n *   - `g(_, _, 3)(1)(2)`\n *   - `g(_, _, 3)(1, 2)`\n *   - `g(_, 2)(1)(3)`\n *   - `g(_, 2)(1, 3)`\n *   - `g(_, 2)(_, 3)(1)`\n *\n * @func\n * @memberOf R\n * @since v0.5.0\n * @category Function\n * @sig Number -> (* -> a) -> (* -> a)\n * @param {Number} length The arity for the returned function.\n * @param {Function} fn The function to curry.\n * @return {Function} A new, curried function.\n * @see R.curry\n * @example\n *\n *      var sumArgs = (...args) => R.sum(args);\n *\n *      var curriedAddFourNumbers = R.curryN(4, sumArgs);\n *      var f = curriedAddFourNumbers(1, 2);\n *      var g = f(3);\n *      g(4); //=> 10\n */\nmodule.exports = _curry2(function curryN(length, fn) {\n  if (length === 1) {\n    return _curry1(fn);\n  }\n  return _arity(length, _curryN(length, [], fn));\n});\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/curryN.js\n// module id = 8\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/curryN.js?");

/***/ }),
/* 9 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** ./~/ramda/src/internal/_checkForMethod.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var _isArray = __webpack_require__(/*! ./_isArray */ 6);\n\n\n/**\n * This checks whether a function has a [methodname] function. If it isn't an\n * array it will execute that function otherwise it will default to the ramda\n * implementation.\n *\n * @private\n * @param {Function} fn ramda implemtation\n * @param {String} methodname property to check for a custom implementation\n * @return {Object} Whatever the return value of the method is.\n */\nmodule.exports = function _checkForMethod(methodname, fn) {\n  return function() {\n    var length = arguments.length;\n    if (length === 0) {\n      return fn();\n    }\n    var obj = arguments[length - 1];\n    return (_isArray(obj) || typeof obj[methodname] !== 'function') ?\n      fn.apply(this, arguments) :\n      obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));\n  };\n};\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/internal/_checkForMethod.js\n// module id = 9\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/internal/_checkForMethod.js?");

/***/ }),
/* 10 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************!*\
  !*** ./~/ramda/src/internal/_curry3.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry1 = __webpack_require__(/*! ./_curry1 */ 0);\nvar _curry2 = __webpack_require__(/*! ./_curry2 */ 1);\nvar _isPlaceholder = __webpack_require__(/*! ./_isPlaceholder */ 3);\n\n\n/**\n * Optimized internal three-arity curry function.\n *\n * @private\n * @category Function\n * @param {Function} fn The function to curry.\n * @return {Function} The curried function.\n */\nmodule.exports = function _curry3(fn) {\n  return function f3(a, b, c) {\n    switch (arguments.length) {\n      case 0:\n        return f3;\n      case 1:\n        return _isPlaceholder(a) ? f3\n             : _curry2(function(_b, _c) { return fn(a, _b, _c); });\n      case 2:\n        return _isPlaceholder(a) && _isPlaceholder(b) ? f3\n             : _isPlaceholder(a) ? _curry2(function(_a, _c) { return fn(_a, b, _c); })\n             : _isPlaceholder(b) ? _curry2(function(_b, _c) { return fn(a, _b, _c); })\n             : _curry1(function(_c) { return fn(a, b, _c); });\n      default:\n        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3\n             : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function(_a, _b) { return fn(_a, _b, c); })\n             : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function(_a, _c) { return fn(_a, b, _c); })\n             : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function(_b, _c) { return fn(a, _b, _c); })\n             : _isPlaceholder(a) ? _curry1(function(_a) { return fn(_a, b, c); })\n             : _isPlaceholder(b) ? _curry1(function(_b) { return fn(a, _b, c); })\n             : _isPlaceholder(c) ? _curry1(function(_c) { return fn(a, b, _c); })\n             : fn(a, b, c);\n    }\n  };\n};\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/internal/_curry3.js\n// module id = 10\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/internal/_curry3.js?");

/***/ }),
/* 11 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************!*\
  !*** ./~/ramda/src/internal/_isString.js ***!
  \*******************************************/
/***/ (function(module, exports) {

eval("module.exports = function _isString(x) {\n  return Object.prototype.toString.call(x) === '[object String]';\n};\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/internal/_isString.js\n// module id = 11\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/internal/_isString.js?");

/***/ }),
/* 12 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************!*\
  !*** ./~/ramda/src/internal/_reduce.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var _xwrap = __webpack_require__(/*! ./_xwrap */ 36);\nvar bind = __webpack_require__(/*! ../bind */ 24);\nvar isArrayLike = __webpack_require__(/*! ../isArrayLike */ 37);\n\n\nmodule.exports = (function() {\n  function _arrayReduce(xf, acc, list) {\n    var idx = 0;\n    var len = list.length;\n    while (idx < len) {\n      acc = xf['@@transducer/step'](acc, list[idx]);\n      if (acc && acc['@@transducer/reduced']) {\n        acc = acc['@@transducer/value'];\n        break;\n      }\n      idx += 1;\n    }\n    return xf['@@transducer/result'](acc);\n  }\n\n  function _iterableReduce(xf, acc, iter) {\n    var step = iter.next();\n    while (!step.done) {\n      acc = xf['@@transducer/step'](acc, step.value);\n      if (acc && acc['@@transducer/reduced']) {\n        acc = acc['@@transducer/value'];\n        break;\n      }\n      step = iter.next();\n    }\n    return xf['@@transducer/result'](acc);\n  }\n\n  function _methodReduce(xf, acc, obj) {\n    return xf['@@transducer/result'](obj.reduce(bind(xf['@@transducer/step'], xf), acc));\n  }\n\n  var symIterator = (typeof Symbol !== 'undefined') ? Symbol.iterator : '@@iterator';\n  return function _reduce(fn, acc, list) {\n    if (typeof fn === 'function') {\n      fn = _xwrap(fn);\n    }\n    if (isArrayLike(list)) {\n      return _arrayReduce(fn, acc, list);\n    }\n    if (typeof list.reduce === 'function') {\n      return _methodReduce(fn, acc, list);\n    }\n    if (list[symIterator] != null) {\n      return _iterableReduce(fn, acc, list[symIterator]());\n    }\n    if (typeof list.next === 'function') {\n      return _iterableReduce(fn, acc, list);\n    }\n    throw new TypeError('reduce: list must be array or iterable');\n  };\n}());\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/internal/_reduce.js\n// module id = 12\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/internal/_reduce.js?");

/***/ }),
/* 13 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** ./~/ramda/src/keys.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ 0);\nvar _has = __webpack_require__(/*! ./internal/_has */ 5);\nvar _isArguments = __webpack_require__(/*! ./internal/_isArguments */ 29);\n\n\n/**\n * Returns a list containing the names of all the enumerable own properties of\n * the supplied object.\n * Note that the order of the output array is not guaranteed to be consistent\n * across different JS platforms.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Object\n * @sig {k: v} -> [k]\n * @param {Object} obj The object to extract properties from\n * @return {Array} An array of the object's own properties.\n * @example\n *\n *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']\n */\nmodule.exports = (function() {\n  // cover IE < 9 keys issues\n  var hasEnumBug = !({toString: null}).propertyIsEnumerable('toString');\n  var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString',\n                            'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];\n  // Safari bug\n  var hasArgsEnumBug = (function() {\n    'use strict';\n    return arguments.propertyIsEnumerable('length');\n  }());\n\n  var contains = function contains(list, item) {\n    var idx = 0;\n    while (idx < list.length) {\n      if (list[idx] === item) {\n        return true;\n      }\n      idx += 1;\n    }\n    return false;\n  };\n\n  return typeof Object.keys === 'function' && !hasArgsEnumBug ?\n    _curry1(function keys(obj) {\n      return Object(obj) !== obj ? [] : Object.keys(obj);\n    }) :\n    _curry1(function keys(obj) {\n      if (Object(obj) !== obj) {\n        return [];\n      }\n      var prop, nIdx;\n      var ks = [];\n      var checkArgsLength = hasArgsEnumBug && _isArguments(obj);\n      for (prop in obj) {\n        if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {\n          ks[ks.length] = prop;\n        }\n      }\n      if (hasEnumBug) {\n        nIdx = nonEnumerableProps.length - 1;\n        while (nIdx >= 0) {\n          prop = nonEnumerableProps[nIdx];\n          if (_has(prop, obj) && !contains(ks, prop)) {\n            ks[ks.length] = prop;\n          }\n          nIdx -= 1;\n        }\n      }\n      return ks;\n    });\n}());\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/keys.js\n// module id = 13\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/keys.js?");

/***/ }),
/* 14 */
/* unknown exports provided */
/* all exports used */
/*!**********************************!*\
  !*** ./project-4/js/src/util.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.spreadObj = exports.maybe = exports.log = undefined;\n\nvar _data = __webpack_require__(/*! data.maybe */ 20);\n\nvar _data2 = _interopRequireDefault(_data);\n\nvar _values = __webpack_require__(/*! ramda/src/values */ 44);\n\nvar _values2 = _interopRequireDefault(_values);\n\nvar _mergeAll = __webpack_require__(/*! ramda/src/mergeAll */ 38);\n\nvar _mergeAll2 = _interopRequireDefault(_mergeAll);\n\nvar _compose = __webpack_require__(/*! ramda/src/compose */ 4);\n\nvar _compose2 = _interopRequireDefault(_compose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar log = function log(x) {\n\tconsole.log(x);\n\treturn x;\n};\n\nvar maybe = function maybe(val) {\n\treturn val ? _data2.default.just(val) : _data2.default.Nothing();\n};\n\nvar spreadObj = (0, _compose2.default)(_mergeAll2.default, _values2.default);\n\nexports.log = log;\nexports.maybe = maybe;\nexports.spreadObj = spreadObj;\n\n//////////////////\n// WEBPACK FOOTER\n// ./project-4/js/src/util.js\n// module id = 14\n// module chunks = 0\n\n//# sourceURL=webpack:///./project-4/js/src/util.js?");

/***/ }),
/* 15 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./project-4/js/src/youtube.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.searchForChannel = exports.searchForVideos = undefined;\n\nvar _data = __webpack_require__(/*! data.task */ 22);\n\nvar _data2 = _interopRequireDefault(_data);\n\nvar _curry = __webpack_require__(/*! ramda/src/curry */ 25);\n\nvar _curry2 = _interopRequireDefault(_curry);\n\nvar _compose = __webpack_require__(/*! ramda/src/compose */ 4);\n\nvar _compose2 = _interopRequireDefault(_compose);\n\nvar _apiKeys = __webpack_require__(/*! ./api-keys */ 19);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// searchURL: String -> String -> String -> String\nvar searchURL = (0, _curry2.default)(function (apiKey, type, query) {\n\tvar url = 'https://www.googleapis.com/youtube/v3/search?key=' + apiKey + '&part=snippet&type=' + type + '&q=' + query;\n\treturn url;\n});\n\n// queryChanel: String -> String -> String\n// var queryChanel = curry(function(chanelID, searchURL){\n// \tsearchURL += '&channelId=' + chanelID;\n// \treturn searchURL;\n// });\n\n// queryPerPage: Number -> String -> String\nvar queryPerPage = (0, _curry2.default)(function (perPage, searchURL) {\n\tsearchURL += '&maxResults=' + perPage;\n\treturn searchURL;\n});\n\n// search: String -> Task(error, Object)\nvar search = function search(url) {\n\treturn new _data2.default(function (rej, res) {\n\t\tfetch(url).then(function (response) {\n\t\t\tif (!response.ok) {\n\t\t\t\trej('Fetch was rejected');\n\t\t\t}\n\t\t\treturn response.json();\n\t\t}).then(function (data) {\n\t\t\treturn res(data);\n\t\t}).catch(function () {\n\t\t\treturn rej('error occured during fetch');\n\t\t});\n\t});\n};\n\nvar baseSearchURL = searchURL(_apiKeys.youtubeAPIKey);\nvar searchForVideos = (0, _compose2.default)(search, queryPerPage(10), baseSearchURL('video'));\nvar searchForChannel = (0, _compose2.default)(search, queryPerPage(10), baseSearchURL('channel'));\n\nexports.searchForVideos = searchForVideos;\nexports.searchForChannel = searchForChannel;\n\n//////////////////\n// WEBPACK FOOTER\n// ./project-4/js/src/youtube.js\n// module id = 15\n// module chunks = 0\n\n//# sourceURL=webpack:///./project-4/js/src/youtube.js?");

/***/ }),
/* 16 */
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** ./~/ramda/src/map.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ 1);\nvar _dispatchable = __webpack_require__(/*! ./internal/_dispatchable */ 28);\nvar _map = __webpack_require__(/*! ./internal/_map */ 31);\nvar _reduce = __webpack_require__(/*! ./internal/_reduce */ 12);\nvar _xmap = __webpack_require__(/*! ./internal/_xmap */ 35);\nvar curryN = __webpack_require__(/*! ./curryN */ 8);\nvar keys = __webpack_require__(/*! ./keys */ 13);\n\n\n/**\n * Takes a function and\n * a [functor](https://github.com/fantasyland/fantasy-land#functor),\n * applies the function to each of the functor's values, and returns\n * a functor of the same shape.\n *\n * Ramda provides suitable `map` implementations for `Array` and `Object`,\n * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.\n *\n * Dispatches to the `map` method of the second argument, if present.\n *\n * Acts as a transducer if a transformer is given in list position.\n *\n * Also treats functions as functors and will compose them together.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig Functor f => (a -> b) -> f a -> f b\n * @param {Function} fn The function to be called on every element of the input `list`.\n * @param {Array} list The list to be iterated over.\n * @return {Array} The new list.\n * @see R.transduce, R.addIndex\n * @example\n *\n *      var double = x => x * 2;\n *\n *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]\n *\n *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}\n * @symb R.map(f, [a, b]) = [f(a), f(b)]\n * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }\n * @symb R.map(f, functor_o) = functor_o.map(f)\n */\nmodule.exports = _curry2(_dispatchable(['map'], _xmap, function map(fn, functor) {\n  switch (Object.prototype.toString.call(functor)) {\n    case '[object Function]':\n      return curryN(functor.length, function() {\n        return fn.call(this, functor.apply(this, arguments));\n      });\n    case '[object Object]':\n      return _reduce(function(acc, key) {\n        acc[key] = fn(functor[key]);\n        return acc;\n      }, {}, keys(functor));\n    default:\n      return _map(fn, functor);\n  }\n}));\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/map.js\n// module id = 16\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/map.js?");

/***/ }),
/* 17 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** ./~/ramda/src/pick.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ 1);\n\n\n/**\n * Returns a partial copy of an object containing only the keys specified. If\n * the key does not exist, the property is ignored.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Object\n * @sig [k] -> {k: v} -> {k: v}\n * @param {Array} names an array of String property names to copy onto a new object\n * @param {Object} obj The object to copy from\n * @return {Object} A new object with only properties from `names` on it.\n * @see R.omit, R.props\n * @example\n *\n *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}\n *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}\n */\nmodule.exports = _curry2(function pick(names, obj) {\n  var result = {};\n  var idx = 0;\n  while (idx < names.length) {\n    if (names[idx] in obj) {\n      result[names[idx]] = obj[names[idx]];\n    }\n    idx += 1;\n  }\n  return result;\n});\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/pick.js\n// module id = 17\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/pick.js?");

/***/ }),
/* 18 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** ./~/ramda/src/prop.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ 1);\n\n\n/**\n * Returns a function that when supplied an object returns the indicated\n * property of that object, if it exists.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Object\n * @sig s -> {s: a} -> a | Undefined\n * @param {String} p The property name\n * @param {Object} obj The object to query\n * @return {*} The value at `obj.p`.\n * @see R.path\n * @example\n *\n *      R.prop('x', {x: 100}); //=> 100\n *      R.prop('x', {}); //=> undefined\n */\nmodule.exports = _curry2(function prop(p, obj) { return obj[p]; });\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/prop.js\n// module id = 18\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/prop.js?");

/***/ }),
/* 19 */
/* unknown exports provided */
/* all exports used */
/*!**************************************!*\
  !*** ./project-4/js/src/api-keys.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar youtubeAPIKey = 'AIzaSyD6Igj4GxW4blr0TgEAiVgtaFAI_FGdVHU';\n\nexports.youtubeAPIKey = youtubeAPIKey;\n\n//////////////////\n// WEBPACK FOOTER\n// ./project-4/js/src/api-keys.js\n// module id = 19\n// module chunks = 0\n\n//# sourceURL=webpack:///./project-4/js/src/api-keys.js?");

/***/ }),
/* 20 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./~/data.maybe/lib/index.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

eval("// Copyright (c) 2013-2014 Quildreen Motta <quildreen@gmail.com>\n//\n// Permission is hereby granted, free of charge, to any person\n// obtaining a copy of this software and associated documentation files\n// (the \"Software\"), to deal in the Software without restriction,\n// including without limitation the rights to use, copy, modify, merge,\n// publish, distribute, sublicense, and/or sell copies of the Software,\n// and to permit persons to whom the Software is furnished to do so,\n// subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be\n// included in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,\n// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\n// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE\n// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION\n// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION\n// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n\nmodule.exports = __webpack_require__(/*! ./maybe */ 21)\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/data.maybe/lib/index.js\n// module id = 20\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/data.maybe/lib/index.js?");

/***/ }),
/* 21 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./~/data.maybe/lib/maybe.js ***!
  \***********************************/
/***/ (function(module, exports) {

eval("// Copyright (c) 2013-2014 Quildreen Motta <quildreen@gmail.com>\n//\n// Permission is hereby granted, free of charge, to any person\n// obtaining a copy of this software and associated documentation files\n// (the \"Software\"), to deal in the Software without restriction,\n// including without limitation the rights to use, copy, modify, merge,\n// publish, distribute, sublicense, and/or sell copies of the Software,\n// and to permit persons to whom the Software is furnished to do so,\n// subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be\n// included in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,\n// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\n// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE\n// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION\n// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION\n// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n/**\n * @module lib/maybe\n */\nmodule.exports = Maybe\n\n// -- Aliases ----------------------------------------------------------\nvar clone         = Object.create\nvar unimplemented = function(){ throw new Error('Not implemented.') }\nvar noop          = function(){ return this                         }\n\n// -- Implementation ---------------------------------------------------\n\n/**\n * A structure for values that may not be present, or computations that may\n * fail. `Maybe(a)` explicitly models the effects that are implicit in\n * `Nullable` types, thus has none of the problems associated with\n * `null` or `undefined` — like `NullPointerExceptions`.\n *\n * The class models two different cases:\n *\n *  + `Just a` — represents a `Maybe(a)` that contains a value. `a` may\n *     be any value, including `null` or `undefined`.\n *\n *  + `Nothing` — represents a `Maybe(a)` that has no values. Or a\n *     failure that needs no additional information.\n *\n * Common uses of this structure includes modelling values that may or may\n * not be present in a collection, thus instead of needing a\n * `collection.has(a)`, the `collection.get(a)` operation gives you all\n * the information you need — `collection.get(a).is-nothing` being\n * equivalent to `collection.has(a)`; Similarly the same reasoning may\n * be applied to computations that may fail to provide a value, e.g.:\n * `collection.find(predicate)` can safely return a `Maybe(a)` instance,\n * even if the collection contains nullable values.\n *\n * Furthermore, the values of `Maybe(a)` can be combined and manipulated\n * by using the expressive monadic operations. This allows safely\n * sequencing operations that may fail, and safely composing values that\n * you don't know whether they're present or not, failing early\n * (returning a `Nothing`) if any of the operations fail.\n *\n * If one wants to store additional information about failures, the\n * [Either][] and [Validation][] structures provide such a capability, and\n * should be used instead of the `Maybe(a)` structure.\n *\n * [Either]: https://github.com/folktale/data.either\n * [Validation]: https://github.com/folktale/data.validation\n *\n *\n * @class\n */\nfunction Maybe() {}\n\n// The case for successful values\nJust.prototype = clone(Maybe.prototype)\nfunction Just(a){\n  this.value = a\n}\n\n// The case for failure values\nNothing.prototype = clone(Maybe.prototype)\nfunction Nothing(){}\n\n\n// -- Constructors -----------------------------------------------------\n\n/**\n * Constructs a new `Maybe[α]` structure with an absent value. Commonly used\n * to represent a failure.\n *\n * @summary Void → Maybe[α]\n */\nMaybe.Nothing = function() {\n  return new Nothing\n}\nMaybe.prototype.Nothing = Maybe.Nothing\n\n/**\n * Constructs a new `Maybe[α]` structure that holds the single value\n * `α`. Commonly used to represent a success.\n *\n * `α` can be any value, including `null`, `undefined` or another\n * `Maybe[α]` structure.\n *\n * @summary α → Maybe[α]\n */\nMaybe.Just = function(a) {\n  return new Just(a)\n}\nMaybe.prototype.Just = Maybe.Just\n\n\n// -- Conversions ------------------------------------------------------\n\n/**\n * Constructs a new `Maybe[α]` structure from a nullable type.\n *\n * If the value is either `null` or `undefined`, this function returns a\n * `Nothing`, otherwise the value is wrapped in a `Just(α)`.\n *\n * @summary α → Maybe[α]\n */\nMaybe.fromNullable = function(a) {\n  return a != null?       new Just(a)\n  :      /* otherwise */  new Nothing\n}\nMaybe.prototype.fromNullable = Maybe.fromNullable\n\n/**\n * Constructs a new `Maybe[β]` structure from an `Either[α, β]` type.\n *\n * The left side of the `Either` becomes `Nothing`, and the right side\n * is wrapped in a `Just(β)`.\n *\n * @summary Either[α, β] → Maybe[β]\n */\nMaybe.fromEither = function(a) {\n  return a.fold(Maybe.Nothing, Maybe.Just)\n}\nMaybe.prototype.fromEither = Maybe.fromEither\n\n/**\n * Constructs a new `Maybe[β]` structure from a `Validation[α, β]` type.\n *\n * The failure side of the `Validation` becomes `Nothing`, and the right\n * side is wrapped in a `Just(β)`.\n *\n * @method\n * @summary Validation[α, β] → Maybe[β]\n */\nMaybe.fromValidation           = Maybe.fromEither\nMaybe.prototype.fromValidation = Maybe.fromEither\n\n\n// -- Predicates -------------------------------------------------------\n\n/**\n * True if the `Maybe[α]` structure contains a failure (i.e.: `Nothing`).\n *\n * @summary Boolean\n */\nMaybe.prototype.isNothing   = false\nNothing.prototype.isNothing = true\n\n\n/**\n * True if the `Maybe[α]` structure contains a single value (i.e.: `Just(α)`).\n *\n * @summary Boolean\n */\nMaybe.prototype.isJust = false\nJust.prototype.isJust  = true\n\n\n// -- Applicative ------------------------------------------------------\n\n/**\n * Creates a new `Maybe[α]` structure holding the single value `α`.\n *\n * `α` can be any value, including `null`, `undefined`, or another\n * `Maybe[α]` structure.\n *\n * @summary α → Maybe[α]\n */\nMaybe.of = function(a) {\n  return new Just(a)\n}\nMaybe.prototype.of = Maybe.of\n\n\n/**\n * Applies the function inside the `Maybe[α]` structure to another\n * applicative type.\n *\n * The `Maybe[α]` structure should contain a function value, otherwise a\n * `TypeError` is thrown.\n *\n * @method\n * @summary (@Maybe[α → β], f:Applicative[_]) => f[α] → f[β]\n */\nMaybe.prototype.ap = unimplemented\n\nNothing.prototype.ap = noop\n\nJust.prototype.ap = function(b) {\n  return b.map(this.value)\n}\n\n\n\n\n// -- Functor ----------------------------------------------------------\n\n/**\n * Transforms the value of the `Maybe[α]` structure using a regular unary\n * function.\n *\n * @method\n * @summary @Maybe[α] => (α → β) → Maybe[β]\n */\nMaybe.prototype.map   = unimplemented\nNothing.prototype.map = noop\n\nJust.prototype.map = function(f) {\n  return this.of(f(this.value))\n}\n\n\n// -- Chain ------------------------------------------------------------\n\n/**\n * Transforms the value of the `Maybe[α]` structure using an unary function\n * to monads.\n *\n * @method\n * @summary (@Maybe[α], m:Monad[_]) => (α → m[β]) → m[β]\n */\nMaybe.prototype.chain   = unimplemented\nNothing.prototype.chain = noop\n\nJust.prototype.chain = function(f) {\n  return f(this.value)\n}\n\n\n// -- Show -------------------------------------------------------------\n\n/**\n * Returns a textual representation of the `Maybe[α]` structure.\n *\n * @method\n * @summary @Maybe[α] => Void → String\n */\nMaybe.prototype.toString = unimplemented\n\nNothing.prototype.toString = function() {\n  return 'Maybe.Nothing'\n}\n\nJust.prototype.toString = function() {\n  return 'Maybe.Just(' + this.value + ')'\n}\n\n\n// -- Eq ---------------------------------------------------------------\n\n/**\n * Tests if a `Maybe[α]` structure is equal to another `Maybe[α]` structure.\n *\n * @method\n * @summary @Maybe[α] => Maybe[α] → Boolean\n */\nMaybe.prototype.isEqual = unimplemented\n\nNothing.prototype.isEqual = function(b) {\n  return b.isNothing\n}\n\nJust.prototype.isEqual = function(b) {\n  return b.isJust\n  &&     b.value === this.value\n}\n\n\n// -- Extracting and recovering ----------------------------------------\n\n/**\n * Extracts the value out of the `Maybe[α]` structure, if it\n * exists. Otherwise throws a `TypeError`.\n *\n * @method\n * @summary @Maybe[α] => Void → a,      :: partial, throws\n * @see {@link module:lib/maybe~Maybe#getOrElse} — A getter that can handle failures\n * @throws {TypeError} if the structure has no value (`Nothing`).\n */\nMaybe.prototype.get = unimplemented\n\nNothing.prototype.get = function() {\n  throw new TypeError(\"Can't extract the value of a Nothing.\")\n}\n\nJust.prototype.get = function() {\n  return this.value\n}\n\n\n/**\n * Extracts the value out of the `Maybe[α]` structure. If there is no value,\n * returns the given default.\n *\n * @method\n * @summary @Maybe[α] => α → α\n */\nMaybe.prototype.getOrElse = unimplemented\n\nNothing.prototype.getOrElse = function(a) {\n  return a\n}\n\nJust.prototype.getOrElse = function(_) {\n  return this.value\n}\n\n\n/**\n * Transforms a failure into a new `Maybe[α]` structure. Does nothing if the\n * structure already contains a value.\n *\n * @method\n * @summary @Maybe[α] => (Void → Maybe[α]) → Maybe[α]\n */\nMaybe.prototype.orElse = unimplemented\n\nNothing.prototype.orElse = function(f) {\n  return f()\n}\n\nJust.prototype.orElse = function(_) {\n  return this\n}\n\n\n/**\n * Catamorphism.\n * \n * @method\n * @summary @Maybe[α] => { Nothing: Void → β, Just: α → β } → β\n */\nMaybe.prototype.cata = unimplemented\n\nNothing.prototype.cata = function(pattern) {\n  return pattern.Nothing()\n}\n\nJust.prototype.cata = function(pattern) {\n  return pattern.Just(this.value);\n}\n\n\n/**\n * JSON serialisation\n *\n * @method\n * @summary @Maybe[α] => Void → Object\n */\nMaybe.prototype.toJSON = unimplemented\n\nNothing.prototype.toJSON = function() {\n  return { '#type': 'folktale:Maybe.Nothing' }\n}\n\nJust.prototype.toJSON = function() {\n  return { '#type': 'folktale:Maybe.Just'\n         , value: this.value }\n}\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/data.maybe/lib/maybe.js\n// module id = 21\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/data.maybe/lib/maybe.js?");

/***/ }),
/* 22 */
/* unknown exports provided */
/* all exports used */
/*!**********************************!*\
  !*** ./~/data.task/lib/index.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./task */ 23);\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/data.task/lib/index.js\n// module id = 22\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/data.task/lib/index.js?");

/***/ }),
/* 23 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./~/data.task/lib/task.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(setImmediate, process) {\n\n\n/**\n * A helper for delaying the execution of a function.\n * @private\n * @summary (Any... -> Any) -> Void\n */\nvar delayed = typeof setImmediate !== 'undefined'?  setImmediate\n            : typeof process !== 'undefined'?       process.nextTick\n            : /* otherwise */                       setTimeout\n\n/**\n * @module lib/task\n */\nmodule.exports = Task;\n\n// -- Implementation ---------------------------------------------------\n\n/**\n * The `Task[α, β]` structure represents values that depend on time. This\n * allows one to model time-based effects explicitly, such that one can have\n * full knowledge of when they're dealing with delayed computations, latency,\n * or anything that can not be computed immediately.\n *\n * A common use for this structure is to replace the usual Continuation-Passing\n * Style form of programming, in order to be able to compose and sequence\n * time-dependent effects using the generic and powerful monadic operations.\n *\n * @class\n * @summary\n * ((α → Void), (β → Void) → Void), (Void → Void) → Task[α, β]\n *\n * Task[α, β] <: Chain[β]\n *               , Monad[β]\n *               , Functor[β]\n *               , Applicative[β]\n *               , Semigroup[β]\n *               , Monoid[β]\n *               , Show\n */\nfunction Task(computation, cleanup) {\n  this.fork = computation;\n\n  this.cleanup = cleanup || function() {};\n}\n\n/**\n * Constructs a new `Task[α, β]` containing the single value `β`.\n *\n * `β` can be any value, including `null`, `undefined`, or another\n * `Task[α, β]` structure.\n *\n * @summary β → Task[α, β]\n */\nTask.prototype.of = function _of(b) {\n  return new Task(function(_, resolve) {\n    return resolve(b);\n  });\n};\n\nTask.of = Task.prototype.of;\n\n/**\n * Constructs a new `Task[α, β]` containing the single value `α`.\n *\n * `α` can be any value, including `null`, `undefined`, or another\n * `Task[α, β]` structure.\n *\n * @summary α → Task[α, β]\n */\nTask.prototype.rejected = function _rejected(a) {\n  return new Task(function(reject) {\n    return reject(a);\n  });\n};\n\nTask.rejected = Task.prototype.rejected;\n\n// -- Functor ----------------------------------------------------------\n\n/**\n * Transforms the successful value of the `Task[α, β]` using a regular unary\n * function.\n *\n * @summary @Task[α, β] => (β → γ) → Task[α, γ]\n */\nTask.prototype.map = function _map(f) {\n  var fork = this.fork;\n  var cleanup = this.cleanup;\n\n  return new Task(function(reject, resolve) {\n    return fork(function(a) {\n      return reject(a);\n    }, function(b) {\n      return resolve(f(b));\n    });\n  }, cleanup);\n};\n\n// -- Chain ------------------------------------------------------------\n\n/**\n * Transforms the succesful value of the `Task[α, β]` using a function to a\n * monad.\n *\n * @summary @Task[α, β] => (β → Task[α, γ]) → Task[α, γ]\n */\nTask.prototype.chain = function _chain(f) {\n  var fork = this.fork;\n  var cleanup = this.cleanup;\n\n  return new Task(function(reject, resolve) {\n    return fork(function(a) {\n      return reject(a);\n    }, function(b) {\n      return f(b).fork(reject, resolve);\n    });\n  }, cleanup);\n};\n\n// -- Apply ------------------------------------------------------------\n\n/**\n * Applys the successful value of the `Task[α, (β → γ)]` to the successful\n * value of the `Task[α, β]`\n *\n * @summary @Task[α, (β → γ)] => Task[α, β] → Task[α, γ]\n */\n\nTask.prototype.ap = function _ap(that) {\n  var forkThis = this.fork;\n  var forkThat = that.fork;\n  var cleanupThis = this.cleanup;\n  var cleanupThat = that.cleanup;\n\n  function cleanupBoth(state) {\n    cleanupThis(state[0]);\n    cleanupThat(state[1]);\n  }\n\n  return new Task(function(reject, resolve) {\n    var func, funcLoaded = false;\n    var val, valLoaded = false;\n    var rejected = false;\n    var allState;\n\n    var thisState = forkThis(guardReject, guardResolve(function(x) {\n      funcLoaded = true;\n      func = x;\n    }));\n\n    var thatState = forkThat(guardReject, guardResolve(function(x) {\n      valLoaded = true;\n      val = x;\n    }));\n\n    function guardResolve(setter) {\n      return function(x) {\n        if (rejected) {\n          return;\n        }\n\n        setter(x);\n        if (funcLoaded && valLoaded) {\n          delayed(function(){ cleanupBoth(allState) });\n          return resolve(func(val));\n        } else {\n          return x;\n        }\n      }\n    }\n\n    function guardReject(x) {\n      if (!rejected) {\n        rejected = true;\n        return reject(x);\n      }\n    }\n\n    return allState = [thisState, thatState];\n  }, cleanupBoth);\n};\n\n// -- Semigroup ------------------------------------------------------------\n\n/**\n * Selects the earlier of the two tasks `Task[α, β]`\n *\n * @summary @Task[α, β] => Task[α, β] → Task[α, β]\n */\n\nTask.prototype.concat = function _concat(that) {\n  var forkThis = this.fork;\n  var forkThat = that.fork;\n  var cleanupThis = this.cleanup;\n  var cleanupThat = that.cleanup;\n\n  function cleanupBoth(state) {\n    cleanupThis(state[0]);\n    cleanupThat(state[1]);\n  }\n\n  return new Task(function(reject, resolve) {\n    var done = false;\n    var allState;\n    var thisState = forkThis(guard(reject), guard(resolve));\n    var thatState = forkThat(guard(reject), guard(resolve));\n\n    return allState = [thisState, thatState];\n\n    function guard(f) {\n      return function(x) {\n        if (!done) {\n          done = true;\n          delayed(function(){ cleanupBoth(allState) })\n          return f(x);\n        }\n      };\n    }\n  }, cleanupBoth);\n\n};\n\n// -- Monoid ------------------------------------------------------------\n\n/**\n * Returns a Task that will never resolve\n *\n * @summary Void → Task[α, _]\n */\nTask.empty = function _empty() {\n  return new Task(function() {});\n};\n\nTask.prototype.empty = Task.empty;\n\n// -- Show -------------------------------------------------------------\n\n/**\n * Returns a textual representation of the `Task[α, β]`\n *\n * @summary @Task[α, β] => Void → String\n */\nTask.prototype.toString = function _toString() {\n  return 'Task';\n};\n\n// -- Extracting and recovering ----------------------------------------\n\n/**\n * Transforms a failure value into a new `Task[α, β]`. Does nothing if the\n * structure already contains a successful value.\n *\n * @summary @Task[α, β] => (α → Task[γ, β]) → Task[γ, β]\n */\nTask.prototype.orElse = function _orElse(f) {\n  var fork = this.fork;\n  var cleanup = this.cleanup;\n\n  return new Task(function(reject, resolve) {\n    return fork(function(a) {\n      return f(a).fork(reject, resolve);\n    }, function(b) {\n      return resolve(b);\n    });\n  }, cleanup);\n};\n\n// -- Folds and extended transformations -------------------------------\n\n/**\n * Catamorphism. Takes two functions, applies the leftmost one to the failure\n * value, and the rightmost one to the successful value, depending on which one\n * is present.\n *\n * @summary @Task[α, β] => (α → γ), (β → γ) → Task[δ, γ]\n */\nTask.prototype.fold = function _fold(f, g) {\n  var fork = this.fork;\n  var cleanup = this.cleanup;\n\n  return new Task(function(reject, resolve) {\n    return fork(function(a) {\n      return resolve(f(a));\n    }, function(b) {\n      return resolve(g(b));\n    });\n  }, cleanup);\n};\n\n/**\n * Catamorphism.\n *\n * @summary @Task[α, β] => { Rejected: α → γ, Resolved: β → γ } → Task[δ, γ]\n */\nTask.prototype.cata = function _cata(pattern) {\n  return this.fold(pattern.Rejected, pattern.Resolved);\n};\n\n/**\n * Swaps the disjunction values.\n *\n * @summary @Task[α, β] => Void → Task[β, α]\n */\nTask.prototype.swap = function _swap() {\n  var fork = this.fork;\n  var cleanup = this.cleanup;\n\n  return new Task(function(reject, resolve) {\n    return fork(function(a) {\n      return resolve(a);\n    }, function(b) {\n      return reject(b);\n    });\n  }, cleanup);\n};\n\n/**\n * Maps both sides of the disjunction.\n *\n * @summary @Task[α, β] => (α → γ), (β → δ) → Task[γ, δ]\n */\nTask.prototype.bimap = function _bimap(f, g) {\n  var fork = this.fork;\n  var cleanup = this.cleanup;\n\n  return new Task(function(reject, resolve) {\n    return fork(function(a) {\n      return reject(f(a));\n    }, function(b) {\n      return resolve(g(b));\n    });\n  }, cleanup);\n};\n\n/**\n * Maps the left side of the disjunction (failure).\n *\n * @summary @Task[α, β] => (α → γ) → Task[γ, β]\n */\nTask.prototype.rejectedMap = function _rejectedMap(f) {\n  var fork = this.fork;\n  var cleanup = this.cleanup;\n\n  return new Task(function(reject, resolve) {\n    return fork(function(a) {\n      return reject(f(a));\n    }, function(b) {\n      return resolve(b);\n    });\n  }, cleanup);\n};\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../timers-browserify/main.js */ 46).setImmediate, __webpack_require__(/*! ./../../process/browser.js */ 7)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/data.task/lib/task.js\n// module id = 23\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/data.task/lib/task.js?");

/***/ }),
/* 24 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** ./~/ramda/src/bind.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var _arity = __webpack_require__(/*! ./internal/_arity */ 2);\nvar _curry2 = __webpack_require__(/*! ./internal/_curry2 */ 1);\n\n\n/**\n * Creates a function that is bound to a context.\n * Note: `R.bind` does not provide the additional argument-binding capabilities of\n * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).\n *\n * @func\n * @memberOf R\n * @since v0.6.0\n * @category Function\n * @category Object\n * @sig (* -> *) -> {*} -> (* -> *)\n * @param {Function} fn The function to bind to context\n * @param {Object} thisObj The context to bind `fn` to\n * @return {Function} A function that will execute in the context of `thisObj`.\n * @see R.partial\n * @example\n *\n *      var log = R.bind(console.log, console);\n *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}\n *      // logs {a: 2}\n * @symb R.bind(f, o)(a, b) = f.call(o, a, b)\n */\nmodule.exports = _curry2(function bind(fn, thisObj) {\n  return _arity(fn.length, function() {\n    return fn.apply(thisObj, arguments);\n  });\n});\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/bind.js\n// module id = 24\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/bind.js?");

/***/ }),
/* 25 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/ramda/src/curry.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ 0);\nvar curryN = __webpack_require__(/*! ./curryN */ 8);\n\n\n/**\n * Returns a curried equivalent of the provided function. The curried function\n * has two unusual capabilities. First, its arguments needn't be provided one\n * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the\n * following are equivalent:\n *\n *   - `g(1)(2)(3)`\n *   - `g(1)(2, 3)`\n *   - `g(1, 2)(3)`\n *   - `g(1, 2, 3)`\n *\n * Secondly, the special placeholder value `R.__` may be used to specify\n * \"gaps\", allowing partial application of any combination of arguments,\n * regardless of their positions. If `g` is as above and `_` is `R.__`, the\n * following are equivalent:\n *\n *   - `g(1, 2, 3)`\n *   - `g(_, 2, 3)(1)`\n *   - `g(_, _, 3)(1)(2)`\n *   - `g(_, _, 3)(1, 2)`\n *   - `g(_, 2)(1)(3)`\n *   - `g(_, 2)(1, 3)`\n *   - `g(_, 2)(_, 3)(1)`\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Function\n * @sig (* -> a) -> (* -> a)\n * @param {Function} fn The function to curry.\n * @return {Function} A new, curried function.\n * @see R.curryN\n * @example\n *\n *      var addFourNumbers = (a, b, c, d) => a + b + c + d;\n *\n *      var curriedAddFourNumbers = R.curry(addFourNumbers);\n *      var f = curriedAddFourNumbers(1, 2);\n *      var g = f(3);\n *      g(4); //=> 10\n */\nmodule.exports = _curry1(function curry(fn) {\n  return curryN(fn.length, fn);\n});\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/curry.js\n// module id = 25\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/curry.js?");

/***/ }),
/* 26 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************!*\
  !*** ./~/ramda/src/internal/_assign.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var _objectAssign = __webpack_require__(/*! ./_objectAssign */ 32);\n\nmodule.exports =\n  typeof Object.assign === 'function' ? Object.assign : _objectAssign;\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/internal/_assign.js\n// module id = 26\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/internal/_assign.js?");

/***/ }),
/* 27 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************!*\
  !*** ./~/ramda/src/internal/_curryN.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var _arity = __webpack_require__(/*! ./_arity */ 2);\nvar _isPlaceholder = __webpack_require__(/*! ./_isPlaceholder */ 3);\n\n\n/**\n * Internal curryN function.\n *\n * @private\n * @category Function\n * @param {Number} length The arity of the curried function.\n * @param {Array} received An array of arguments received thus far.\n * @param {Function} fn The function to curry.\n * @return {Function} The curried function.\n */\nmodule.exports = function _curryN(length, received, fn) {\n  return function() {\n    var combined = [];\n    var argsIdx = 0;\n    var left = length;\n    var combinedIdx = 0;\n    while (combinedIdx < received.length || argsIdx < arguments.length) {\n      var result;\n      if (combinedIdx < received.length &&\n          (!_isPlaceholder(received[combinedIdx]) ||\n           argsIdx >= arguments.length)) {\n        result = received[combinedIdx];\n      } else {\n        result = arguments[argsIdx];\n        argsIdx += 1;\n      }\n      combined[combinedIdx] = result;\n      if (!_isPlaceholder(result)) {\n        left -= 1;\n      }\n      combinedIdx += 1;\n    }\n    return left <= 0 ? fn.apply(this, combined)\n                     : _arity(left, _curryN(length, combined, fn));\n  };\n};\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/internal/_curryN.js\n// module id = 27\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/internal/_curryN.js?");

/***/ }),
/* 28 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************!*\
  !*** ./~/ramda/src/internal/_dispatchable.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var _isArray = __webpack_require__(/*! ./_isArray */ 6);\nvar _isTransformer = __webpack_require__(/*! ./_isTransformer */ 30);\n\n\n/**\n * Returns a function that dispatches with different strategies based on the\n * object in list position (last argument). If it is an array, executes [fn].\n * Otherwise, if it has a function with one of the given method names, it will\n * execute that function (functor case). Otherwise, if it is a transformer,\n * uses transducer [xf] to return a new transformer (transducer case).\n * Otherwise, it will default to executing [fn].\n *\n * @private\n * @param {Array} methodNames properties to check for a custom implementation\n * @param {Function} xf transducer to initialize if object is transformer\n * @param {Function} fn default ramda implementation\n * @return {Function} A function that dispatches on object in list position\n */\nmodule.exports = function _dispatchable(methodNames, xf, fn) {\n  return function() {\n    if (arguments.length === 0) {\n      return fn();\n    }\n    var args = Array.prototype.slice.call(arguments, 0);\n    var obj = args.pop();\n    if (!_isArray(obj)) {\n      var idx = 0;\n      while (idx < methodNames.length) {\n        if (typeof obj[methodNames[idx]] === 'function') {\n          return obj[methodNames[idx]].apply(obj, args);\n        }\n        idx += 1;\n      }\n      if (_isTransformer(obj)) {\n        var transducer = xf.apply(null, args);\n        return transducer(obj);\n      }\n    }\n    return fn.apply(this, arguments);\n  };\n};\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/internal/_dispatchable.js\n// module id = 28\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/internal/_dispatchable.js?");

/***/ }),
/* 29 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ./~/ramda/src/internal/_isArguments.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var _has = __webpack_require__(/*! ./_has */ 5);\n\n\nmodule.exports = (function() {\n  var toString = Object.prototype.toString;\n  return toString.call(arguments) === '[object Arguments]' ?\n    function _isArguments(x) { return toString.call(x) === '[object Arguments]'; } :\n    function _isArguments(x) { return _has('callee', x); };\n}());\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/internal/_isArguments.js\n// module id = 29\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/internal/_isArguments.js?");

/***/ }),
/* 30 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ./~/ramda/src/internal/_isTransformer.js ***!
  \************************************************/
/***/ (function(module, exports) {

eval("module.exports = function _isTransformer(obj) {\n  return typeof obj['@@transducer/step'] === 'function';\n};\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/internal/_isTransformer.js\n// module id = 30\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/internal/_isTransformer.js?");

/***/ }),
/* 31 */
/* unknown exports provided */
/* all exports used */
/*!**************************************!*\
  !*** ./~/ramda/src/internal/_map.js ***!
  \**************************************/
/***/ (function(module, exports) {

eval("module.exports = function _map(fn, functor) {\n  var idx = 0;\n  var len = functor.length;\n  var result = Array(len);\n  while (idx < len) {\n    result[idx] = fn(functor[idx]);\n    idx += 1;\n  }\n  return result;\n};\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/internal/_map.js\n// module id = 31\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/internal/_map.js?");

/***/ }),
/* 32 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************!*\
  !*** ./~/ramda/src/internal/_objectAssign.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var _has = __webpack_require__(/*! ./_has */ 5);\n\n// Based on https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign\nmodule.exports = function _objectAssign(target) {\n  if (target == null) {\n    throw new TypeError('Cannot convert undefined or null to object');\n  }\n\n  var output = Object(target);\n  var idx = 1;\n  var length = arguments.length;\n  while (idx < length) {\n    var source = arguments[idx];\n    if (source != null) {\n      for (var nextKey in source) {\n        if (_has(nextKey, source)) {\n          output[nextKey] = source[nextKey];\n        }\n      }\n    }\n    idx += 1;\n  }\n  return output;\n};\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/internal/_objectAssign.js\n// module id = 32\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/internal/_objectAssign.js?");

/***/ }),
/* 33 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./~/ramda/src/internal/_pipe.js ***!
  \***************************************/
/***/ (function(module, exports) {

eval("module.exports = function _pipe(f, g) {\n  return function() {\n    return g.call(this, f.apply(this, arguments));\n  };\n};\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/internal/_pipe.js\n// module id = 33\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/internal/_pipe.js?");

/***/ }),
/* 34 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************!*\
  !*** ./~/ramda/src/internal/_xfBase.js ***!
  \*****************************************/
/***/ (function(module, exports) {

eval("module.exports = {\n  init: function() {\n    return this.xf['@@transducer/init']();\n  },\n  result: function(result) {\n    return this.xf['@@transducer/result'](result);\n  }\n};\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/internal/_xfBase.js\n// module id = 34\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/internal/_xfBase.js?");

/***/ }),
/* 35 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./~/ramda/src/internal/_xmap.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry2 = __webpack_require__(/*! ./_curry2 */ 1);\nvar _xfBase = __webpack_require__(/*! ./_xfBase */ 34);\n\n\nmodule.exports = (function() {\n  function XMap(f, xf) {\n    this.xf = xf;\n    this.f = f;\n  }\n  XMap.prototype['@@transducer/init'] = _xfBase.init;\n  XMap.prototype['@@transducer/result'] = _xfBase.result;\n  XMap.prototype['@@transducer/step'] = function(result, input) {\n    return this.xf['@@transducer/step'](result, this.f(input));\n  };\n\n  return _curry2(function _xmap(f, xf) { return new XMap(f, xf); });\n}());\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/internal/_xmap.js\n// module id = 35\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/internal/_xmap.js?");

/***/ }),
/* 36 */
/* unknown exports provided */
/* all exports used */
/*!****************************************!*\
  !*** ./~/ramda/src/internal/_xwrap.js ***!
  \****************************************/
/***/ (function(module, exports) {

eval("module.exports = (function() {\n  function XWrap(fn) {\n    this.f = fn;\n  }\n  XWrap.prototype['@@transducer/init'] = function() {\n    throw new Error('init not implemented on XWrap');\n  };\n  XWrap.prototype['@@transducer/result'] = function(acc) { return acc; };\n  XWrap.prototype['@@transducer/step'] = function(acc, x) {\n    return this.f(acc, x);\n  };\n\n  return function _xwrap(fn) { return new XWrap(fn); };\n}());\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/internal/_xwrap.js\n// module id = 36\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/internal/_xwrap.js?");

/***/ }),
/* 37 */
/* unknown exports provided */
/* all exports used */
/*!************************************!*\
  !*** ./~/ramda/src/isArrayLike.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ 0);\nvar _isArray = __webpack_require__(/*! ./internal/_isArray */ 6);\nvar _isString = __webpack_require__(/*! ./internal/_isString */ 11);\n\n\n/**\n * Tests whether or not an object is similar to an array.\n *\n * @func\n * @memberOf R\n * @since v0.5.0\n * @category Type\n * @category List\n * @sig * -> Boolean\n * @param {*} x The object to test.\n * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.\n * @deprecated since v0.23.0\n * @example\n *\n *      R.isArrayLike([]); //=> true\n *      R.isArrayLike(true); //=> false\n *      R.isArrayLike({}); //=> false\n *      R.isArrayLike({length: 10}); //=> false\n *      R.isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true\n */\nmodule.exports = _curry1(function isArrayLike(x) {\n  if (_isArray(x)) { return true; }\n  if (!x) { return false; }\n  if (typeof x !== 'object') { return false; }\n  if (_isString(x)) { return false; }\n  if (x.nodeType === 1) { return !!x.length; }\n  if (x.length === 0) { return true; }\n  if (x.length > 0) {\n    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);\n  }\n  return false;\n});\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/isArrayLike.js\n// module id = 37\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/isArrayLike.js?");

/***/ }),
/* 38 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./~/ramda/src/mergeAll.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var _assign = __webpack_require__(/*! ./internal/_assign */ 26);\nvar _curry1 = __webpack_require__(/*! ./internal/_curry1 */ 0);\n\n\n/**\n * Merges a list of objects together into one object.\n *\n * @func\n * @memberOf R\n * @since v0.10.0\n * @category List\n * @sig [{k: v}] -> {k: v}\n * @param {Array} list An array of objects\n * @return {Object} A merged object.\n * @see R.reduce\n * @example\n *\n *      R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}\n *      R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}\n * @symb R.mergeAll([{ x: 1 }, { y: 2 }, { z: 3 }]) = { x: 1, y: 2, z: 3 }\n */\nmodule.exports = _curry1(function mergeAll(list) {\n  return _assign.apply(null, [{}].concat(list));\n});\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/mergeAll.js\n// module id = 38\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/mergeAll.js?");

/***/ }),
/* 39 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** ./~/ramda/src/pipe.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var _arity = __webpack_require__(/*! ./internal/_arity */ 2);\nvar _pipe = __webpack_require__(/*! ./internal/_pipe */ 33);\nvar reduce = __webpack_require__(/*! ./reduce */ 40);\nvar tail = __webpack_require__(/*! ./tail */ 43);\n\n\n/**\n * Performs left-to-right function composition. The leftmost function may have\n * any arity; the remaining functions must be unary.\n *\n * In some libraries this function is named `sequence`.\n *\n * **Note:** The result of pipe is not automatically curried.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Function\n * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)\n * @param {...Function} functions\n * @return {Function}\n * @see R.compose\n * @example\n *\n *      var f = R.pipe(Math.pow, R.negate, R.inc);\n *\n *      f(3, 4); // -(3^4) + 1\n * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))\n */\nmodule.exports = function pipe() {\n  if (arguments.length === 0) {\n    throw new Error('pipe requires at least one argument');\n  }\n  return _arity(arguments[0].length,\n                reduce(_pipe, arguments[0], tail(arguments)));\n};\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/pipe.js\n// module id = 39\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/pipe.js?");

/***/ }),
/* 40 */
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** ./~/ramda/src/reduce.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry3 = __webpack_require__(/*! ./internal/_curry3 */ 10);\nvar _reduce = __webpack_require__(/*! ./internal/_reduce */ 12);\n\n\n/**\n * Returns a single item by iterating through the list, successively calling\n * the iterator function and passing it an accumulator value and the current\n * value from the array, and then passing the result to the next call.\n *\n * The iterator function receives two values: *(acc, value)*. It may use\n * `R.reduced` to shortcut the iteration.\n *\n * The arguments' order of `reduceRight`'s iterator function is *(value, acc)*.\n *\n * Note: `R.reduce` does not skip deleted or unassigned indices (sparse\n * arrays), unlike the native `Array.prototype.reduce` method. For more details\n * on this behavior, see:\n * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description\n *\n * Dispatches to the `reduce` method of the third argument, if present.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig ((a, b) -> a) -> a -> [b] -> a\n * @param {Function} fn The iterator function. Receives two values, the accumulator and the\n *        current element from the array.\n * @param {*} acc The accumulator value.\n * @param {Array} list The list to iterate over.\n * @return {*} The final, accumulated value.\n * @see R.reduced, R.addIndex, R.reduceRight\n * @example\n *\n *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10\n *                -               -10\n *               / \\              / \\\n *              -   4           -6   4\n *             / \\              / \\\n *            -   3   ==>     -3   3\n *           / \\              / \\\n *          -   2           -1   2\n *         / \\              / \\\n *        0   1            0   1\n *\n * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)\n */\nmodule.exports = _curry3(_reduce);\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/reduce.js\n// module id = 40\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/reduce.js?");

/***/ }),
/* 41 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** ./~/ramda/src/reverse.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ 0);\nvar _isString = __webpack_require__(/*! ./internal/_isString */ 11);\n\n\n/**\n * Returns a new list or string with the elements or characters in reverse\n * order.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig [a] -> [a]\n * @sig String -> String\n * @param {Array|String} list\n * @return {Array|String}\n * @example\n *\n *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]\n *      R.reverse([1, 2]);     //=> [2, 1]\n *      R.reverse([1]);        //=> [1]\n *      R.reverse([]);         //=> []\n *\n *      R.reverse('abc');      //=> 'cba'\n *      R.reverse('ab');       //=> 'ba'\n *      R.reverse('a');        //=> 'a'\n *      R.reverse('');         //=> ''\n */\nmodule.exports = _curry1(function reverse(list) {\n  return _isString(list) ? list.split('').reverse().join('') :\n                           Array.prototype.slice.call(list, 0).reverse();\n});\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/reverse.js\n// module id = 41\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/reverse.js?");

/***/ }),
/* 42 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/ramda/src/slice.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var _checkForMethod = __webpack_require__(/*! ./internal/_checkForMethod */ 9);\nvar _curry3 = __webpack_require__(/*! ./internal/_curry3 */ 10);\n\n\n/**\n * Returns the elements of the given list or string (or object with a `slice`\n * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).\n *\n * Dispatches to the `slice` method of the third argument, if present.\n *\n * @func\n * @memberOf R\n * @since v0.1.4\n * @category List\n * @sig Number -> Number -> [a] -> [a]\n * @sig Number -> Number -> String -> String\n * @param {Number} fromIndex The start index (inclusive).\n * @param {Number} toIndex The end index (exclusive).\n * @param {*} list\n * @return {*}\n * @example\n *\n *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']\n *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']\n *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']\n *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']\n *      R.slice(0, 3, 'ramda');                     //=> 'ram'\n */\nmodule.exports = _curry3(_checkForMethod('slice', function slice(fromIndex, toIndex, list) {\n  return Array.prototype.slice.call(list, fromIndex, toIndex);\n}));\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/slice.js\n// module id = 42\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/slice.js?");

/***/ }),
/* 43 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** ./~/ramda/src/tail.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var _checkForMethod = __webpack_require__(/*! ./internal/_checkForMethod */ 9);\nvar _curry1 = __webpack_require__(/*! ./internal/_curry1 */ 0);\nvar slice = __webpack_require__(/*! ./slice */ 42);\n\n\n/**\n * Returns all but the first element of the given list or string (or object\n * with a `tail` method).\n *\n * Dispatches to the `slice` method of the first argument, if present.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig [a] -> [a]\n * @sig String -> String\n * @param {*} list\n * @return {*}\n * @see R.head, R.init, R.last\n * @example\n *\n *      R.tail([1, 2, 3]);  //=> [2, 3]\n *      R.tail([1, 2]);     //=> [2]\n *      R.tail([1]);        //=> []\n *      R.tail([]);         //=> []\n *\n *      R.tail('abc');  //=> 'bc'\n *      R.tail('ab');   //=> 'b'\n *      R.tail('a');    //=> ''\n *      R.tail('');     //=> ''\n */\nmodule.exports = _curry1(_checkForMethod('tail', slice(1, Infinity)));\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/tail.js\n// module id = 43\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/tail.js?");

/***/ }),
/* 44 */
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** ./~/ramda/src/values.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ 0);\nvar keys = __webpack_require__(/*! ./keys */ 13);\n\n\n/**\n * Returns a list of all the enumerable own properties of the supplied object.\n * Note that the order of the output array is not guaranteed across different\n * JS platforms.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Object\n * @sig {k: v} -> [v]\n * @param {Object} obj The object to extract values from\n * @return {Array} An array of the values of the object's own properties.\n * @example\n *\n *      R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]\n */\nmodule.exports = _curry1(function values(obj) {\n  var props = keys(obj);\n  var len = props.length;\n  var vals = [];\n  var idx = 0;\n  while (idx < len) {\n    vals[idx] = obj[props[idx]];\n    idx += 1;\n  }\n  return vals;\n});\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/ramda/src/values.js\n// module id = 44\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/ramda/src/values.js?");

/***/ }),
/* 45 */
/* unknown exports provided */
/* all exports used */
/*!****************************************!*\
  !*** ./~/setimmediate/setImmediate.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {\n    \"use strict\";\n\n    if (global.setImmediate) {\n        return;\n    }\n\n    var nextHandle = 1; // Spec says greater than zero\n    var tasksByHandle = {};\n    var currentlyRunningATask = false;\n    var doc = global.document;\n    var registerImmediate;\n\n    function setImmediate(callback) {\n      // Callback can either be a function or a string\n      if (typeof callback !== \"function\") {\n        callback = new Function(\"\" + callback);\n      }\n      // Copy function arguments\n      var args = new Array(arguments.length - 1);\n      for (var i = 0; i < args.length; i++) {\n          args[i] = arguments[i + 1];\n      }\n      // Store and register the task\n      var task = { callback: callback, args: args };\n      tasksByHandle[nextHandle] = task;\n      registerImmediate(nextHandle);\n      return nextHandle++;\n    }\n\n    function clearImmediate(handle) {\n        delete tasksByHandle[handle];\n    }\n\n    function run(task) {\n        var callback = task.callback;\n        var args = task.args;\n        switch (args.length) {\n        case 0:\n            callback();\n            break;\n        case 1:\n            callback(args[0]);\n            break;\n        case 2:\n            callback(args[0], args[1]);\n            break;\n        case 3:\n            callback(args[0], args[1], args[2]);\n            break;\n        default:\n            callback.apply(undefined, args);\n            break;\n        }\n    }\n\n    function runIfPresent(handle) {\n        // From the spec: \"Wait until any invocations of this algorithm started before this one have completed.\"\n        // So if we're currently running a task, we'll need to delay this invocation.\n        if (currentlyRunningATask) {\n            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a\n            // \"too much recursion\" error.\n            setTimeout(runIfPresent, 0, handle);\n        } else {\n            var task = tasksByHandle[handle];\n            if (task) {\n                currentlyRunningATask = true;\n                try {\n                    run(task);\n                } finally {\n                    clearImmediate(handle);\n                    currentlyRunningATask = false;\n                }\n            }\n        }\n    }\n\n    function installNextTickImplementation() {\n        registerImmediate = function(handle) {\n            process.nextTick(function () { runIfPresent(handle); });\n        };\n    }\n\n    function canUsePostMessage() {\n        // The test against `importScripts` prevents this implementation from being installed inside a web worker,\n        // where `global.postMessage` means something completely different and can't be used for this purpose.\n        if (global.postMessage && !global.importScripts) {\n            var postMessageIsAsynchronous = true;\n            var oldOnMessage = global.onmessage;\n            global.onmessage = function() {\n                postMessageIsAsynchronous = false;\n            };\n            global.postMessage(\"\", \"*\");\n            global.onmessage = oldOnMessage;\n            return postMessageIsAsynchronous;\n        }\n    }\n\n    function installPostMessageImplementation() {\n        // Installs an event handler on `global` for the `message` event: see\n        // * https://developer.mozilla.org/en/DOM/window.postMessage\n        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages\n\n        var messagePrefix = \"setImmediate$\" + Math.random() + \"$\";\n        var onGlobalMessage = function(event) {\n            if (event.source === global &&\n                typeof event.data === \"string\" &&\n                event.data.indexOf(messagePrefix) === 0) {\n                runIfPresent(+event.data.slice(messagePrefix.length));\n            }\n        };\n\n        if (global.addEventListener) {\n            global.addEventListener(\"message\", onGlobalMessage, false);\n        } else {\n            global.attachEvent(\"onmessage\", onGlobalMessage);\n        }\n\n        registerImmediate = function(handle) {\n            global.postMessage(messagePrefix + handle, \"*\");\n        };\n    }\n\n    function installMessageChannelImplementation() {\n        var channel = new MessageChannel();\n        channel.port1.onmessage = function(event) {\n            var handle = event.data;\n            runIfPresent(handle);\n        };\n\n        registerImmediate = function(handle) {\n            channel.port2.postMessage(handle);\n        };\n    }\n\n    function installReadyStateChangeImplementation() {\n        var html = doc.documentElement;\n        registerImmediate = function(handle) {\n            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted\n            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.\n            var script = doc.createElement(\"script\");\n            script.onreadystatechange = function () {\n                runIfPresent(handle);\n                script.onreadystatechange = null;\n                html.removeChild(script);\n                script = null;\n            };\n            html.appendChild(script);\n        };\n    }\n\n    function installSetTimeoutImplementation() {\n        registerImmediate = function(handle) {\n            setTimeout(runIfPresent, 0, handle);\n        };\n    }\n\n    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.\n    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);\n    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;\n\n    // Don't get fooled by e.g. browserify environments.\n    if ({}.toString.call(global.process) === \"[object process]\") {\n        // For Node.js before 0.9\n        installNextTickImplementation();\n\n    } else if (canUsePostMessage()) {\n        // For non-IE10 modern browsers\n        installPostMessageImplementation();\n\n    } else if (global.MessageChannel) {\n        // For web workers, where supported\n        installMessageChannelImplementation();\n\n    } else if (doc && \"onreadystatechange\" in doc.createElement(\"script\")) {\n        // For IE 6–8\n        installReadyStateChangeImplementation();\n\n    } else {\n        // For older browsers\n        installSetTimeoutImplementation();\n    }\n\n    attachTo.setImmediate = setImmediate;\n    attachTo.clearImmediate = clearImmediate;\n}(typeof self === \"undefined\" ? typeof global === \"undefined\" ? this : global : self));\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/global.js */ 47), __webpack_require__(/*! ./../process/browser.js */ 7)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/setimmediate/setImmediate.js\n// module id = 45\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/setimmediate/setImmediate.js?");

/***/ }),
/* 46 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./~/timers-browserify/main.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var apply = Function.prototype.apply;\n\n// DOM APIs, for completeness\n\nexports.setTimeout = function() {\n  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);\n};\nexports.setInterval = function() {\n  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);\n};\nexports.clearTimeout =\nexports.clearInterval = function(timeout) {\n  if (timeout) {\n    timeout.close();\n  }\n};\n\nfunction Timeout(id, clearFn) {\n  this._id = id;\n  this._clearFn = clearFn;\n}\nTimeout.prototype.unref = Timeout.prototype.ref = function() {};\nTimeout.prototype.close = function() {\n  this._clearFn.call(window, this._id);\n};\n\n// Does not start the time, just sets up the members needed.\nexports.enroll = function(item, msecs) {\n  clearTimeout(item._idleTimeoutId);\n  item._idleTimeout = msecs;\n};\n\nexports.unenroll = function(item) {\n  clearTimeout(item._idleTimeoutId);\n  item._idleTimeout = -1;\n};\n\nexports._unrefActive = exports.active = function(item) {\n  clearTimeout(item._idleTimeoutId);\n\n  var msecs = item._idleTimeout;\n  if (msecs >= 0) {\n    item._idleTimeoutId = setTimeout(function onTimeout() {\n      if (item._onTimeout)\n        item._onTimeout();\n    }, msecs);\n  }\n};\n\n// setimmediate attaches itself to the global object\n__webpack_require__(/*! setimmediate */ 45);\nexports.setImmediate = setImmediate;\nexports.clearImmediate = clearImmediate;\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/timers-browserify/main.js\n// module id = 46\n// module chunks = 0\n\n//# sourceURL=webpack:///./~/timers-browserify/main.js?");

/***/ }),
/* 47 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/***/ (function(module, exports) {

eval("var g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function(\"return this\")() || (1,eval)(\"this\");\r\n} catch(e) {\r\n\t// This works if the window reference is available\r\n\tif(typeof window === \"object\")\r\n\t\tg = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// (webpack)/buildin/global.js\n// module id = 47\n// module chunks = 0\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),
/* 48 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./project-4/js/src/index.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _youtube = __webpack_require__(/*! ./youtube */ 15);\n\nvar _prop = __webpack_require__(/*! ramda/src/prop */ 18);\n\nvar _prop2 = _interopRequireDefault(_prop);\n\nvar _pick = __webpack_require__(/*! ramda/src/pick */ 17);\n\nvar _pick2 = _interopRequireDefault(_pick);\n\nvar _compose = __webpack_require__(/*! ramda/src/compose */ 4);\n\nvar _compose2 = _interopRequireDefault(_compose);\n\nvar _map = __webpack_require__(/*! ramda/src/map */ 16);\n\nvar _map2 = _interopRequireDefault(_map);\n\nvar _util = __webpack_require__(/*! ./util */ 14);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// getVideoProps: {k:v} -> {k:v}\nvar getVideoProps = (0, _pick2.default)(['videoId', 'title', 'channelTitle', 'description']);\n\n// getVideoItem: {k:v} -> {k:v}\nvar getVideoItem = (0, _compose2.default)(getVideoProps, _util.spreadObj, (0, _pick2.default)(['snippet', 'id']));\n\n// getVideoItems: [{k:v}] -> [{k:v}]\nvar getVideoItems = (0, _compose2.default)((0, _map2.default)(getVideoItem), (0, _prop2.default)('items'));\n\n// seachAndGetVideoItems: String -> Task(error, [{k:v}])\nvar seachAndGetVideoItems = (0, _compose2.default)((0, _map2.default)(getVideoItems), _youtube.searchForVideos);\n\nfunction main() {\n\tseachAndGetVideoItems('extra credits').fork(_util.log, _util.log);\n}\n\ndocument.addEventListener('DOMContentLoaded', main);\n\n//////////////////\n// WEBPACK FOOTER\n// ./project-4/js/src/index.js\n// module id = 48\n// module chunks = 0\n\n//# sourceURL=webpack:///./project-4/js/src/index.js?");

/***/ })
/******/ ]);