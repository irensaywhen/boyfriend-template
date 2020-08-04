/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/createClass.js":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/createClass.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/get.js":
/*!*****************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/get.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(/*! ./superPropBase */ "../node_modules/@babel/runtime/helpers/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/inherits.js":
/*!**********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/inherits.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!***************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "../node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "../node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/superPropBase.js":
/*!***************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/typeof.js":
/*!********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/typeof.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "../node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "../node_modules/@babel/runtime/regenerator/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/@babel/runtime/regenerator/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "../node_modules/regenerator-runtime/runtime.js":
/*!******************************************************!*\
  !*** ../node_modules/regenerator-runtime/runtime.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./js/main-authorized.js":
/*!*******************************!*\
  !*** ./js/main-authorized.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_uploader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/uploader.js */ "./js/modules/uploader.js");
/* harmony import */ var _modules_editor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/editor.js */ "./js/modules/editor.js");
/* harmony import */ var _modules_boost_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/boost.js */ "./js/modules/boost.js");
/* harmony import */ var _modules_search_profiles_form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/search-profiles-form.js */ "./js/modules/search-profiles-form.js");
/* harmony import */ var _modules_buyPremiumForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/buyPremiumForm.js */ "./js/modules/buyPremiumForm.js");





window["PhotoUploader"] = _modules_uploader_js__WEBPACK_IMPORTED_MODULE_0__["default"];
window["PhotoEditor"] = _modules_editor_js__WEBPACK_IMPORTED_MODULE_1__["default"];
window["Boost"] = _modules_boost_js__WEBPACK_IMPORTED_MODULE_2__["default"];
window["SearchProfilesForm"] = _modules_search_profiles_form_js__WEBPACK_IMPORTED_MODULE_3__["default"];
window["BuyPremiumForm"] = _modules_buyPremiumForm_js__WEBPACK_IMPORTED_MODULE_4__["default"];

/***/ }),

/***/ "./js/modules/bonus.js":
/*!*****************************!*\
  !*** ./js/modules/bonus.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bonus; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _requests_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./requests.js */ "./js/modules/requests.js");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var Bonus = /*#__PURE__*/function (_ServerRequest) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Bonus, _ServerRequest);

  var _super = _createSuper(Bonus);

  function Bonus(options) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Bonus);

    _this = _super.call(this, options); // Bind context

    _this.cacheElements = _this.cacheElements.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.setUpEventListeners = _this.setUpEventListeners.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.useBonus = _this.useBonus.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.startUsingBonus = _this.startUsingBonus.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.prepareBonusUsage = _this.prepareBonusUsage.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)); // Save popup data

    _this.popupData = options.popupData; // Reference request information for the popup usage

    _this.popupData.request = _this.requests.use;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Bonus, [{
    key: "cacheElements",
    value: function cacheElements() {
      // Save bonus element
      this.$bonus = $(this.selectors.bonus); // Save the bonus' data-* attributes

      var dataAttributes = this.$bonus.data();

      for (var attribute in dataAttributes) {
        this[attribute] = dataAttributes[attribute];
      }
    }
  }, {
    key: "setUpEventListeners",
    value: function setUpEventListeners() {
      var _this2 = this;

      this.$bonus.click(function () {
        return _this2.startUsingBonus();
      });
    }
    /**
     * Asyncronous event handler for bonus usage
     */

  }, {
    key: "startUsingBonus",
    value: function () {
      var _startUsingBonus = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var approved;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.activated && !this.finished)) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                if (!(this.amount === 0)) {
                  _context.next = 8;
                  break;
                }

                // If there are no bonuses available
                // Redirect
                window.location.href = this.redirect;
                _context.next = 12;
                break;

              case 8:
                _context.next = 10;
                return this.prepareBonusUsage();

              case 10:
                approved = _context.sent;

                if (approved) {
                  this.amount = --this.amount; //Update data-amount attribute of the bonus

                  this.$bonus.attr("data-amount", this.amount); // Start bonus usage

                  this.useBonus();
                }

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function startUsingBonus() {
        return _startUsingBonus.apply(this, arguments);
      }

      return startUsingBonus;
    }()
  }]);

  return Bonus;
}(_requests_js__WEBPACK_IMPORTED_MODULE_8__["default"]);



/***/ }),

/***/ "./js/modules/boost.js":
/*!*****************************!*\
  !*** ./js/modules/boost.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Boost; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "../node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _bonus_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bonus.js */ "./js/modules/bonus.js");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var Boost = /*#__PURE__*/function (_Bonus) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Boost, _Bonus);

  var _super = _createSuper(Boost);

  function Boost(options) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Boost);

    _this = _super.call(this, options);
    _this.type = "boost"; // Bind context

    _this.displayTime = _this.displayTime.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)); // Save initial state of the boost

    _this.activated = false;
    _this.finished = false;

    _this.cacheElements();

    _this.setUpEventListeners();

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Boost, [{
    key: "cacheElements",
    value: function cacheElements() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Boost.prototype), "cacheElements", this).call(this); // Timer and elements to display time


      this.$timer = $(this.selectors.timer.element);
      this.$hours = this.$timer.find(this.selectors.timer.hours);
      this.$minutes = this.$timer.find(this.selectors.timer.minutes);
      this.$seconds = this.$timer.find(this.selectors.timer.seconds); // Hide timer after caching

      this.$timer.fadeOut(0); //Create expiration popup based on the generic popup

      this.expirationPopupData = Object.assign({}, this.popupData);
    }
  }, {
    key: "setUpEventListeners",
    value: function setUpEventListeners() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Boost.prototype), "setUpEventListeners", this).call(this);
    }
  }, {
    key: "useBonus",
    value: function useBonus() {
      // Change boost state
      this.activated = true;
      this.finished = false; // Start timer

      this.startTimer();
    }
  }, {
    key: "prepareBonusUsage",
    value: function () {
      var _prepareBonusUsage = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var approved, timestamp, expirationTitle, expirationMessage, _yield$this$askUsageA, _yield$this$askUsageA2;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(!this.activated && !this.finished)) {
                  _context.next = 10;
                  break;
                }

                _context.next = 3;
                return this.askUsageApprovement(this.popupData);

              case 3:
                _yield$this$askUsageA = _context.sent;
                approved = _yield$this$askUsageA.approved;
                timestamp = _yield$this$askUsageA.timestamp;
                expirationTitle = _yield$this$askUsageA.expirationTitle;
                expirationMessage = _yield$this$askUsageA.expirationMessage;
                _context.next = 19;
                break;

              case 10:
                if (!(this.activated && this.finished)) {
                  _context.next = 19;
                  break;
                }

                _context.next = 13;
                return this.askUsageApprovement(this.expirationPopupData);

              case 13:
                _yield$this$askUsageA2 = _context.sent;
                approved = _yield$this$askUsageA2.approved;
                timestamp = _yield$this$askUsageA2.timestamp;
                expirationTitle = _yield$this$askUsageA2.expirationTitle;
                expirationMessage = _yield$this$askUsageA2.expirationMessage;

                if (!approved) {
                  // If the user don't want to use boost again
                  // Hide the timer
                  this.$timer.fadeOut(400);
                }

              case 19:
                if (approved) {
                  // If the boost usage was approved by the server
                  // Save timestamp
                  this.countDownTime = timestamp;

                  if (expirationTitle) {
                    // Change the title if provided
                    // For asking about futher usage
                    this.expirationPopupData.title = expirationTitle;
                  }

                  if (expirationMessage) {
                    // Change the message if provided
                    // For asking about futher usage
                    this.expirationPopupData.text = expirationMessage;
                  }
                } else {
                  // If the boost usage wasn't approved by the server
                  // Discard boost state
                  this.activated = false;
                  this.finished = false;
                }

                return _context.abrupt("return", approved);

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function prepareBonusUsage() {
        return _prepareBonusUsage.apply(this, arguments);
      }

      return prepareBonusUsage;
    }()
  }, {
    key: "startTimer",
    value: function startTimer() {
      var _this2 = this;

      var intervalId = setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime(); // Find the distance between now and the count down date

        var distance = _this2.countDownTime - now; // If the count down is finished

        if (distance <= 1000) {
          _this2.displayTime(0, 0, 0);

          clearInterval(intervalId); // Change the state of the bonus

          _this2.activated = true;
          _this2.finished = true; // Clear timestamp

          _this2.timestamp = null; // Ask user to use more

          _this2.$bonus.click();
        } // Time calculations for hours, minutes and seconds


        var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        var seconds = Math.floor(distance % (1000 * 60) / 1000);

        _this2.displayTime(hours, minutes, seconds);

        _this2.$timer.fadeIn(400);
      }, 1000);
    }
  }, {
    key: "displayTime",
    value: function displayTime(hours, minutes, seconds) {
      // Add zeros for better displaying
      if (minutes < 10) {
        minutes = "0" + String(minutes);
      }

      if (seconds < 10) {
        seconds = "0" + String(seconds);
      } // Display results


      this.$hours.text(hours);
      this.$minutes.text(minutes);
      this.$seconds.text(seconds);
    }
  }]);

  return Boost;
}(_bonus_js__WEBPACK_IMPORTED_MODULE_9__["default"]);



/***/ }),

/***/ "./js/modules/buyPremiumForm.js":
/*!**************************************!*\
  !*** ./js/modules/buyPremiumForm.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BuyPremiumForm; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "../node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form.js */ "./js/modules/form.js");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var BuyPremiumForm = /*#__PURE__*/function (_Form) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(BuyPremiumForm, _Form);

  var _super = _createSuper(BuyPremiumForm);

  function BuyPremiumForm(options) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, BuyPremiumForm);

    _this = _super.call(this, options); // Binding context

    _this.setPrice = _this.setPrice.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));

    _this.$checkout.fadeOut(0);

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(BuyPremiumForm, [{
    key: "cacheElements",
    value: function cacheElements() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(BuyPremiumForm.prototype), "cacheElements", this).call(this); // Price containers


      this.$priceContainer = $(this.selectors.price);
      this.$discountContainer = $(this.selectors["card-payment-price"]); // Checkout area

      this.$checkout = this.$form.find(this.selectors.checkout);
    }
  }, {
    key: "setUpEventListeners",
    value: function setUpEventListeners() {
      var _this2 = this;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(BuyPremiumForm.prototype), "setUpEventListeners", this).call(this); // Additiong and removing bonuses


      this.$form.find(this.selectors["bonus-inputs"]).on("click", function (event) {
        var $target = $(event.target);
        var $buttonWrapper = $target.closest(_this2.selectors["bonus-control"]);
        if ($buttonWrapper.length === 0) return; // Figure out what operation to perform

        var operation = $buttonWrapper.hasClass(_this2.selectors["add-bonus-input-className"]) ? "add" : "remove"; // Find closest input group containing current button

        var $input = $target.closest(_this2.selectors["bonus-inputs"]).find(_this2.selectors.inputs); // Current input value

        var value = parseInt($input.val());

        if (operation === "add") {
          $input.val(++value);
        } else {
          $input.val(--value < 0 ? 0 : value);
        }

        $input.trigger("input");
      }); // Setting price

      this.$inputs.on("input", function (event) {
        _this2.collectFormInputs();

        _this2.setPrice();
      });
    }
  }, {
    key: "setPrice",
    value: function () {
      var _setPrice = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response, total;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.getPrice({
                  headers: this.requests.price.headers,
                  endpoint: this.requests.price.endpoint,
                  method: this.requests.price.method
                });

              case 3:
                response = _context.sent;
                _context.next = 9;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                // Unsuccessful Popup
                this.showRequestResult({
                  title: _context.t0.name,
                  text: _context.t0.message,
                  icon: "error"
                });

              case 9:
                if (response.success) {
                  total = response["total"]; // Show price

                  this.$priceContainer.text(total);
                  this.$discountContainer.text(response["discount"]);
                  total > 0 ? this.$checkout.fadeIn(400) : this.$checkout.fadeOut(400);
                } else {
                  if (this.showFailPopup) {
                    // Unsuccessful Popup
                    this.showRequestResult({
                      title: response.title,
                      text: response.message,
                      icon: "error"
                    });
                  }
                }

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 6]]);
      }));

      function setPrice() {
        return _setPrice.apply(this, arguments);
      }

      return setPrice;
    }()
  }]);

  return BuyPremiumForm;
}(_form_js__WEBPACK_IMPORTED_MODULE_9__["default"]);



/***/ }),

/***/ "./js/modules/editor.js":
/*!******************************!*\
  !*** ./js/modules/editor.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhotoEditor; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "../node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modal.js */ "./js/modules/modal.js");











function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var PhotoEditor = /*#__PURE__*/function (_EditorModal) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(PhotoEditor, _EditorModal);

  var _super = _createSuper(PhotoEditor);

  // Currently clicked photo

  /**
   * Information about photo.
   *  photoData.id - id of the photo from the database
   *  photoData.id.img - photo image element
   *  photoData.id.src - photo src
   *  photoData.id.private - photo privacy information
   *  photoData.id.description - photo description
   */
  function PhotoEditor(options) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, PhotoEditor);

    _this = _super.call(this, options);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "photo", null);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "photoData", {});

    _this.configuration.editor = true; // Binding context

    _this.prepareModal = _this.prepareModal.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.updateMarkup = _this.updateMarkup.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.updatePhotoInformation = _this.updatePhotoInformation.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)); // Prepare editor

    _this.cacheElements();

    _this.setUpEventListeners();

    return _this;
  }
  /**
   * Function caches elements according to passed options.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(PhotoEditor, [{
    key: "cacheElements",
    value: function cacheElements() {
      // Cache elements required for gallery to work
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(PhotoEditor.prototype), "cacheElements", this).call(this); // Description


      this.$description = this.$modal.find(this.selectors.description); // Privacy input

      this.$privacyInput = this.$modal.find(this.selectors["privacy-input"]); // Privacy label

      this.$privacyLabel = this.$modal.find(this.selectors["privacy-label"]); // Photo in editor

      this.$modalPhotoElement = this.$modal.find("img"); // Photos gallery

      this.$gallery = $(this.selectors.gallery);
    }
  }, {
    key: "setUpEventListeners",
    value: function setUpEventListeners() {
      var _this2 = this;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(PhotoEditor.prototype), "setUpEventListeners", this).call(this);

      this.$gallery.click(function (event) {
        var target = event.target;
        if (target.tagName !== "IMG") return; // Save photo

        _this2.photo = target; // Cache id

        var photoId = _this2.photo.dataset.id; // Make empty object for photo information

        _this2.photoData[photoId] = {}; // Save photo information

        _this2.savePhotoInformation({
          id: photoId,
          src: _this2.photo.src
        });

        _this2.savePhotoInformation(_this2.photo.dataset); // Adjust modal


        _this2.prepareModal(photoId);
      }); // Delete photo when user clicks on deleting button

      this.$deleteButton.click(function (event) {
        _this2.deletePhoto(event, _this2.photo);
      });
      this.$form.submit(function (event) {
        event.preventDefault();

        _this2.updatePhotoInformation();
      });
    }
  }, {
    key: "updatePhotoInformation",
    value: function () {
      var _updatePhotoInformation = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var id, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Cache id
                id = this.photo.dataset.id; // Save information

                this.savePhotoInformation({
                  id: id,
                  privacy: this.$privacyInput.is(":checked"),
                  description: this.$description.val()
                });
                _context.prev = 2;
                _context.next = 5;
                return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(PhotoEditor.prototype), "sendPhotoInformationToServer", this).call(this, {
                  id: id,
                  privacy: this.photoData[id].privacy,
                  description: this.photoData[id].description,
                  headers: this.requests.savePhoto.headers,
                  endpoint: this.requests.savePhoto.endpoint,
                  method: this.requests.savePhoto.method
                });

              case 5:
                response = _context.sent;
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](2);
                // Unsuccessful Popup
                this.showRequestResult({
                  title: _context.t0.name,
                  text: _context.t0.message,
                  icon: "error"
                });

              case 11:
                if (response.success) {
                  // Delete photo container
                  this.updateMarkup(); // Successful Popup

                  this.showRequestResult({
                    title: response.title,
                    text: response.message,
                    icon: "success"
                  });
                  this.closeModal();
                } else {
                  // Unsuccessful Popup
                  this.showRequestResult({
                    title: response.title,
                    text: response.message,
                    icon: "error"
                  });
                }

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 8]]);
      }));

      function updatePhotoInformation() {
        return _updatePhotoInformation.apply(this, arguments);
      }

      return updatePhotoInformation;
    }()
    /**
     * Function updating photo in the gallery
     */

  }, {
    key: "updateMarkup",
    value: function updateMarkup() {
      var values = this.photoData[this.photo.dataset.id];

      for (var property in values) {
        if (property in this.photo.dataset) {
          this.photo.dataset[property] = values[property];
        }
      }
    }
    /**
     * Function generates content of the modal window
     * depending on the attributes of the clicked photo
     * @param {Number} id - database id of the photo
     */

  }, {
    key: "prepareModal",
    value: function prepareModal(id) {
      // Set photo
      this.$modalPhotoElement.attr("src", this.photoData[id].src); // Generate photo id

      var photoId = "photo-" + id; // Set privacy

      this.$privacyInput.prop("checked", this.photoData[id].privacy).attr("id", photoId); // Set toggle

      this.$privacyLabel.attr("for", photoId); // Set description

      this.$description.text(this.photoData[id].description);
    }
  }, {
    key: "clean",
    value: function clean() {
      this.photo = null;
      this.photoData = {};
    }
  }]);

  return PhotoEditor;
}(_modal_js__WEBPACK_IMPORTED_MODULE_10__["default"]);



/***/ }),

/***/ "./js/modules/form.js":
/*!****************************!*\
  !*** ./js/modules/form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _requests_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./requests.js */ "./js/modules/requests.js");
/* harmony import */ var _locationMixin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./locationMixin.js */ "./js/modules/locationMixin.js");
/* harmony import */ var _paymentMixin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./paymentMixin.js */ "./js/modules/paymentMixin.js");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Form = /*#__PURE__*/function (_ServerRequest) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Form, _ServerRequest);

  var _super = _createSuper(Form);

  function Form(options) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Form);

    _this = _super.call(this, options); // Data that will be sent to the server

    _this.formData = {}; // Bind context

    _this.cacheElements = _this.cacheElements.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.setUpEventListeners = _this.setUpEventListeners.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.collectLocationData = _this.collectLocationData.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.sendFormInformation = _this.sendFormInformation.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.showErrorMessages = _this.showErrorMessages.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.collectFormInputs = _this.collectFormInputs.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));

    if (options.location) {
      // Add location methods to the form object
      Object.assign(Form.prototype, _locationMixin_js__WEBPACK_IMPORTED_MODULE_9__["default"]);
      _this.location = true;
    }

    _this.cacheElements();

    _this.setUpEventListeners();

    if (options.payment) {
      Object.assign(Form.prototype, _paymentMixin_js__WEBPACK_IMPORTED_MODULE_10__["default"]);
      _this.payment = true;
      jQuery.validator.addMethod("expiration", _this.creditCardExpirationValidation, "Expiration date is passed");
      jQuery.validator.addMethod("cardNumber", _this.creditCardNumberValidation, "Card number is invalid");
    }

    if (options.frontendValidation) {
      // If this form requires frontend validation
      _this.frontendValidation = true; // Change where error messages occur
      // This is required for label to work properly when errors are shown

      options.validatorOptions["errorPlacement"] = function (error, element) {
        element.closest(_this.selectors["input-wrapper"]).append(error);
      };

      if (_this.location) {
        // Add custom frontend validation for location field
        jQuery.validator.addMethod("location", _this.frontendCityValidator, "No such city");
      } // Add frontend validation


      _this.$form.validate(options.validatorOptions);
    }

    _this.redirectOnSubmit = options.redirectOnSubmit ? true : false;
    _this.generateSubmitEvent = options.generateSubmitEvent ? true : false; // Clean fields after submission?

    _this.cleanFields = options.cleanFields ? true : false; // Show popup after submission with successful result?

    _this.showSuccessPopup = options.showSuccessPopup ? true : false; // Show popup after submission with failed result?

    _this.showFailPopup = options.showFailPopup ? true : false;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Form, [{
    key: "cacheElements",
    value: function cacheElements() {
      // Form
      this.$form = $(this.selectors.form); // Input fields

      this.$inputs = this.$form.find(this.selectors.inputs);

      if (this.location) {
        this.initializeLocationInput();
      }
    }
  }, {
    key: "setUpEventListeners",
    value: function setUpEventListeners() {
      var _this2 = this;

      // Form submission
      this.$form.submit(function (event) {
        event.preventDefault();
        event.stopPropagation();
        console.log("Submitted!");

        if (!_this2.frontendValidation) {
          // If this form doesn't require frontend validation (as with checkboxes)
          _this2.collectFormInputs();

          _this2.sendFormInformation();

          return;
        }

        if (_this2.$form.valid()) {
          // If the form has frontend validation
          _this2.collectFormInputs();

          _this2.sendFormInformation();
        }
      }); // Hiding error message on focus

      this.$inputs.focus(function (event) {
        $(event.target).closest(_this2.selectors["input-wrapper"]).find(".custom-error").remove();
      });
    }
  }, {
    key: "collectLocationData",
    value: function collectLocationData(element) {
      this.formData["city"] = {};

      for (var property in element.dataset) {
        this.formData["city"][property] = element.dataset[property];
      }
    }
  }, {
    key: "collectFormInputs",
    value: function collectFormInputs() {
      var _this3 = this;

      // Collect form inputs
      this.$inputs.each(function (index, element) {
        var name = element.name;
        var $element = $(element);

        if ($element.is(":checkbox")) {
          _this3.formData[name] = $element.is(":checked");
        } else if ($element.is(":radio")) {
          _this3.formData[name] = $("input[name=" + name + "]:checked").val();
        } else if (name === "city") {
          _this3.collectLocationData(element);
        } else {
          var value = $element.val();
          var numericValue = Number(value); // Perform type conversion if the value is a number

          _this3.formData[name] = numericValue.isNaN ? value : numericValue;
        }
      });
    }
  }, {
    key: "sendFormInformation",
    value: function () {
      var _sendFormInformation = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response, customSubmittedEvent;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.makeRequest({
                  headers: this.requests.submit.headers,
                  endpoint: this.requests.submit.endpoint,
                  method: this.requests.submit.method,
                  body: JSON.stringify(this.formData)
                });

              case 3:
                response = _context.sent;
                _context.next = 9;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                // Unsuccessful Popup
                this.showRequestResult({
                  title: _context.t0.name,
                  text: _context.t0.message,
                  icon: "error"
                });

              case 9:
                _context.prev = 9;
                // Remove error messages
                this.$form.find(".error").remove();
                return _context.finish(9);

              case 12:
                if (response.success) {
                  if (this.generateSubmitEvent) {
                    // Make custom event for form submission
                    customSubmittedEvent = new CustomEvent("submitted"); // Dispatch custom event

                    this.$form[0].dispatchEvent(customSubmittedEvent);
                  }

                  if (this.showSuccessPopup) {
                    // Successful Popup
                    this.showRequestResult({
                      title: response.title,
                      text: response.message,
                      icon: "success"
                    });
                  }

                  if (this.cleanFields) {
                    // Clean input fields
                    this.$inputs.val("");
                  }

                  if (this.redirectOnSubmit) {
                    // Redirection with simulating HTTP request
                    setTimeout(function () {
                      window.location.replace(response.redirect);
                    }, 1000);
                  }
                } else {
                  if (this.showFailPopup) {
                    // Unsuccessful Popup
                    this.showRequestResult({
                      title: response.title,
                      text: response.message,
                      icon: "error"
                    });
                  }

                  this.showErrorMessages({
                    errors: response.errors
                  });
                }

                this.formData = {};

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 6, 9, 12]]);
      }));

      function sendFormInformation() {
        return _sendFormInformation.apply(this, arguments);
      }

      return sendFormInformation;
    }()
  }, {
    key: "showErrorMessages",
    value: function showErrorMessages(_ref) {
      var _this4 = this;

      var errors = _ref.errors;
      this.$inputs.each(function (index, element) {
        var name = element.name;

        if (name in errors) {
          $(element).closest(_this4.selectors["input-wrapper"]).append($("<span></span>").addClass("error").addClass("custom-error").text(errors[name]));
        }
      });
    }
  }]);

  return Form;
}(_requests_js__WEBPACK_IMPORTED_MODULE_8__["default"]);



/***/ }),

/***/ "./js/modules/locationMixin.js":
/*!*************************************!*\
  !*** ./js/modules/locationMixin.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  locationInputStarted: false,
  locationInputValue: null,
  initializeLocationInput: function initializeLocationInput() {
    var requestInfo = this.requests.location; // Bind context

    this.throttleInput = this.throttleInput.bind(this);
    this.displayCities = this.displayCities.bind(this);
    this.frontendCityValidator = this.frontendCityValidator.bind(this); // Add default query params

    for (var key in requestInfo.searchParams) {
      requestInfo.endpoint.searchParams.set(key, requestInfo.searchParams[key]);
    }
    /* Elements caching and event listeners initialization */


    this.cacheLocationElements();
    this.setUpLocationEventListeners();
  },
  cacheLocationElements: function cacheLocationElements() {
    // Cache input element
    this.$locationInput = this.$form.find(this.selectors.locationInput); // Loading indicator

    this.$loadingIndicator = this.$form.find(this.selectors.locationLoadingIndicator).fadeOut(0); // location dropdown wrapper

    this.$locationDropdownWrapper = this.$form.find(this.selectors["location-dropdown"]); // Dropdown toggle

    this.$locationDropdownToggle = this.$locationDropdownWrapper.find(this.selectors["dropdown-toggle"]); // Dropdown menu

    this.$locationDropdownMenu = this.$locationDropdownWrapper.find(this.selectors["dropdown-menu"]);
  },
  setUpLocationEventListeners: function setUpLocationEventListeners() {
    var _this = this;

    // Listen to typing event
    this.$locationInput.on("input change", function (event) {
      // Clean previously cached values
      var customAttributes = event.target.dataset;

      for (var key in customAttributes) {
        customAttributes[key] = "";
      } // If the user selects the city
      // from dropdown


      if (_this.citySelection) return;

      if (!_this.locationInputStarted) {
        // If input hasn't started yet
        // Indicate that input started
        _this.locationInputStarted = true; // Save the value

        _this.locationInputValue = _this.$locationInput.val(); // Schedule next check

        _this.locationTimer = setTimeout(_this.throttleInput, 1500);
      }
    }); // Handle city selection from dropdown

    this.$locationDropdownMenu.click(function (event) {
      var target = event.target;
      if (target.tagName !== "LI") return;
      var dataset = target.dataset;
      _this.citySelection = true;
      clearTimeout(_this.locationTimer); // Save attributes from selected city

      _this.$locationInput.attr("data-lat", dataset.lat).attr("data-lon", dataset.lon).attr("data-name", dataset.name).val(dataset.name);

      _this.citySelection = false;
      _this.locationInputStarted = false;
      _this.newValue = null;

      _this.$locationDropdownMenu.empty();

      if (_this.$locationInput.valid()) {
        _this.$locationInput.trigger("citySelected");
      }
    });
  },
  getCities: function getCities(_ref) {
    var _this2 = this;

    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var headers, endpoint, method;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              headers = _ref.headers, endpoint = _ref.endpoint, method = _ref.method;
              _context.next = 3;
              return _this2.makeRequest({
                headers: headers,
                endpoint: endpoint,
                method: method
              });

            case 3:
              return _context.abrupt("return", _context.sent);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  throttleInput: function throttleInput() {
    var _this3 = this;

    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var requestInfo, newValue, cities;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // Cache request information
              requestInfo = _this3.requests.location;
              newValue = _this3.$locationInput.val();

              if (newValue === _this3.locationInputValue) {
                _context2.next = 14;
                break;
              }

              // If the inputed value has been changed recently
              // Save new value
              _this3.locationInputValue = newValue; // Adjust searchParams

              requestInfo.endpoint.searchParams.set("city", _this3.locationInputValue);

              _this3.$loadingIndicator.fadeIn(150); // Make request


              _context2.next = 8;
              return _this3.getCities({
                headers: requestInfo.headers,
                endpoint: requestInfo.endpoint,
                method: requestInfo.method
              });

            case 8:
              cities = _context2.sent;
              // Schedule next check
              _this3.locationTimer = setTimeout(_this3.throttleInput, 1500);

              _this3.$loadingIndicator.fadeOut(150);

              _this3.displayCities(cities);

              _context2.next = 15;
              break;

            case 14:
              // If the location hasn't changed recently
              _this3.locationInputStarted = false;

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  displayCities: function displayCities(cities) {
    var _this4 = this;

    if (cities.length === 0) return;
    cities.forEach(function (city) {
      _this4.$locationDropdownMenu.append($("<li></li>").addClass("dropdown-item").attr("data-lat", city.lat).attr("data-lon", city.lon).attr("data-name", city["display_name"]).text(city["display_name"])).append($("<li></li>").addClass("dropdown-divider"));
    });
    this.$locationDropdownToggle.dropdown("toggle");
  },
  frontendCityValidator: function frontendCityValidator(value, element) {
    // Cache data-* sttributes
    var dataset = element.dataset;

    if (dataset["lat"] && dataset["lon"] && dataset["name"]) {
      // If dataset properties are not empty, the element is valid
      return true;
    } else {
      return false;
    }
  }
});

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "../node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _requests_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./requests.js */ "./js/modules/requests.js");











function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var EditorModal = /*#__PURE__*/function (_ServerRequest) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(EditorModal, _ServerRequest);

  var _super = _createSuper(EditorModal);

  function EditorModal(options) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, EditorModal);

    _this = _super.call(this, options); // Making configuration object

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "formData", null);

    _this.configuration = {
      avatar: false,
      uploader: false,
      editor: false
    };

    if (_this.configuration.avatar || _this.configuration.uploader) {
      _this.uploaded = false;
    } // Binding context


    _this.cacheElements = _this.cacheElements.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.setUpEventListeners = _this.setUpEventListeners.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.savePhotoInformation = _this.savePhotoInformation.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.generateFormData = _this.generateFormData.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.closeModal = _this.closeModal.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.deletePhoto = _this.deletePhoto.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.makeURLObjects = _this.makeURLObjects.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.clean = _this.clean.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }
  /**
   * Function caches elements according to passed options.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(EditorModal, [{
    key: "cacheElements",
    value: function cacheElements() {
      // Modal
      this.$modal = $(this.selectors.modal); // Find modal footer is presented
      // And hide it

      if (this.selectors["modal-footer"]) {
        this.$modalFooter = $(this.$modal.find(this.selectors["modal-footer"])).hide();
      } // Form


      this.$form = this.$modal.find(this.selectors.form); // Closing button

      this.$closeButton = this.$modal.find(".close"); // Deleting button

      if ("deleteButton" in this.selectors) {
        this.$deleteButton = this.$modal.find(this.selectors.deleteButton);
      }
    }
  }, {
    key: "setUpEventListeners",
    value: function setUpEventListeners() {
      var _this2 = this;

      if (this.configuration.avatar || this.configuration.uploader) {
        this.$closeButton.click(function (event) {
          // If user closes modal without submitting changes
          if (!_this2.uploaded) {
            // Delete his newly uploaded photo
            _this2.discardChanges();
          }

          _this2.$modalFooter.hide();
        });
      }
    }
    /**
     * Function to close the modal
     */

  }, {
    key: "closeModal",
    value: function closeModal() {
      this.$closeButton.click();
      this.clean();
    }
    /**
     * Function to delete photo
     * If used in editor, it will delete provided photo
     * If used in uploader, it will find the photo containing the currently clicked button
     * and delete the photo container
     */

  }, {
    key: "deletePhoto",
    value: function () {
      var _deletePhoto = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event, photo) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                if (!this.configuration.editor) {
                  _context.next = 12;
                  break;
                }

                _context.prev = 2;
                _context.next = 5;
                return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(EditorModal.prototype), "deletePhotoOnServer", this).call(this, {
                  id: photo.dataset.id,
                  headers: this.requests.deletePhoto.headers,
                  endpoint: this.requests.deletePhoto.endpoint,
                  method: this.requests.deletePhoto.method
                });

              case 5:
                response = _context.sent;
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](2);
                // Unsuccessful Popup
                this.showRequestResult({
                  title: _context.t0.name,
                  text: _context.t0.message,
                  icon: "error"
                });

              case 11:
                if (response.success) {
                  // Delete photo container
                  $(photo).closest(this.selectors.container).remove(); // Successful Popup

                  this.showRequestResult({
                    title: response.title,
                    text: response.message,
                    icon: "success"
                  });
                  this.closeModal();
                } else {
                  // Unsuccessful Popup
                  this.showRequestResult({
                    title: response.title,
                    text: response.message,
                    icon: "error"
                  });
                }

              case 12:
                if (this.configuration.uploader) {
                  $(event.target).closest(this.selectors.container).remove();
                }

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 8]]);
      }));

      function deletePhoto(_x, _x2) {
        return _deletePhoto.apply(this, arguments);
      }

      return deletePhoto;
    }()
    /**
     * Function saving information about the photo
     * @param {object}
     * @param {object.id} id from the database for particular photo
     * @param {object.file} file object containing photo
     * @param {object.src} src for the image preview
     * @param {object.privacy} privacy input value
     * @param {object.description} description for the current photo
     */

  }, {
    key: "savePhotoInformation",
    value: function savePhotoInformation(_ref) {
      var _ref$id = _ref.id,
          id = _ref$id === void 0 ? null : _ref$id,
          _ref$file = _ref.file,
          file = _ref$file === void 0 ? null : _ref$file,
          _ref$src = _ref.src,
          src = _ref$src === void 0 ? null : _ref$src,
          _ref$privacy = _ref.privacy,
          privacy = _ref$privacy === void 0 ? false : _ref$privacy,
          _ref$description = _ref.description,
          description = _ref$description === void 0 ? "" : _ref$description;

      if (file) {
        this.photoData[id].file = file;
      }

      if (src) {
        this.photoData[id].src = src;
      }

      if (privacy) {
        this.photoData[id].privacy = JSON.parse(privacy);
      } else {
        this.photoData[id].privacy = false;
      }

      this.photoData[id].description = description;
    }
  }, {
    key: "generateFormData",
    value: function generateFormData() {
      this.formData = new FormData();

      if (this.configuration.uploader) {
        for (var id in this.photoData) {
          for (var property in this.photoData[id]) {
            // Don't send src for previews
            if (property === "src") continue;
            this.formData.append(property + id, this.photoData[id][property]);
          }
        }
      }

      if (this.configuration.avatar) {
        this.formData.set("avatar", this.avatar, this.avatar.name);
      }
    }
  }]);

  return EditorModal;
}(_requests_js__WEBPACK_IMPORTED_MODULE_10__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (EditorModal);

/***/ }),

/***/ "./js/modules/paymentMixin.js":
/*!************************************!*\
  !*** ./js/modules/paymentMixin.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  creditCardNumberValidation: function creditCardNumberValidation(value) {
    // remove all non digit characters
    value = value.replace(/\D/g, "");
    var sum = 0;
    var shouldDouble = false; // loop through values starting at the rightmost side

    for (var i = value.length - 1; i >= 0; i--) {
      var digit = parseInt(value.charAt(i));

      if (shouldDouble) {
        if ((digit *= 2) > 9) digit -= 9;
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }

    return sum % 10 == 0;
  },
  creditCardExpirationValidation: function creditCardExpirationValidation(value) {
    var countDigits = function countDigits(year) {
      var count = 0;
      if (year >= 1) ++count;

      while (year / 10 >= 1) {
        year /= 10;
        ++count;
      }

      return count;
    };

    value = String(value);
    var now = new Date();
    var currentMonth = now.getMonth() + 1;
    var currentYear = now.getFullYear(); // Retrieve month and year

    var _value$match = value.match(/\d+/g),
        _value$match2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_value$match, 2),
        month = _value$match2[0],
        year = _value$match2[1]; //Get rid of leading zero


    month = parseInt(month, 10);
    year = parseInt(year, 10);
    var yearDigits = countDigits(year);

    switch (yearDigits) {
      case 4:
        break;

      case 2:
        currentYear -= 2000;
        break;

      default:
        return false;
    }

    console.log("currentYear === year:");
    console.log(currentYear === year);
    console.log("currentMonth < month");
    console.log(currentMonth < month);
    console.log("currentYear > year");
    console.log(currentYear > year);
    return currentYear === year ? currentMonth < month ? true : false : currentYear > year ? false : true;
  }
});

/***/ }),

/***/ "./js/modules/requests.js":
/*!********************************!*\
  !*** ./js/modules/requests.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServerRequest; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _swalAlertMixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./swalAlertMixin.js */ "./js/modules/swalAlertMixin.js");






var ServerRequest = /*#__PURE__*/function () {
  function ServerRequest(options) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, ServerRequest);

    // Bind context
    this.sendPhotoInformationToServer = this.sendPhotoInformationToServer.bind(this);
    this.deletePhotoOnServer = this.deletePhotoOnServer.bind(this);
    this.getPhotosIds = this.getPhotosIds.bind(this);
    this.requestBonusUsage = this.requestBonusUsage.bind(this); // Save passed options

    this.selectors = options.selectors;
    this.requests = options.requests; // Transform endpoints into URL Objects

    this.makeURLObjects();
    Object.assign(ServerRequest.prototype, _swalAlertMixin_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
  }
  /**
   * Transform endpoints into URL objects
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(ServerRequest, [{
    key: "makeURLObjects",
    value: function makeURLObjects() {
      for (var request in this.requests) {
        this.requests[request].endpoint = new URL(this.requests[request].endpoint);
      }
    }
    /**
     * Make server request with the passed headers, endpoint, method and body.
     * Function checks whether the method is GET and if so, sends request without body
     */

  }, {
    key: "makeRequest",
    value: function makeRequest(_ref) {
      var _this = this;

      var headers = _ref.headers,
          endpoint = _ref.endpoint,
          method = _ref.method,
          body = _ref.body;

      if (method === "GET") {
        return fetch(endpoint, {
          headers: headers
        }).then(function (response) {
          if (response.ok) {
            return response.json();
          } else {
            // Unsuccessful Popup
            _this.showRequestResult({
              title: response.status,
              text: response.statusText,
              icon: "error"
            });
          }
        }).then(function (json) {
          return json;
        })["catch"](function (error) {
          // Unsuccessful Popup
          _this.showRequestResult({
            title: error.name,
            text: error.message,
            icon: "error"
          });
        });
      } else {
        // If method is not GET
        return fetch(endpoint, {
          method: method,
          headers: headers,
          body: body
        }).then(function (response) {
          if (response.ok) {
            return response.json();
          } else {
            // Unsuccessful Popup
            _this.showRequestResult({
              title: response.status,
              text: response.statusText,
              icon: "error"
            });
          }
        }).then(function (json) {
          return json;
        })["catch"](function (error) {
          // Unsuccessful Popup
          _this.showRequestResult({
            title: error.name,
            text: error.message,
            icon: "error"
          });
        });
      }
    }
  }, {
    key: "deletePhotoOnServer",
    value: function () {
      var _deletePhotoOnServer = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
        var id, headers, endpoint, method;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = _ref2.id, headers = _ref2.headers, endpoint = _ref2.endpoint, method = _ref2.method;
                _context.next = 3;
                return this.makeRequest({
                  headers: headers,
                  endpoint: endpoint,
                  method: method,
                  body: JSON.stringify({
                    id: id
                  })
                });

              case 3:
                return _context.abrupt("return", _context.sent);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function deletePhotoOnServer(_x) {
        return _deletePhotoOnServer.apply(this, arguments);
      }

      return deletePhotoOnServer;
    }()
  }, {
    key: "sendPhotoInformationToServer",
    value: function () {
      var _sendPhotoInformationToServer = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref3) {
        var id, privacy, description, headers, endpoint, method;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = _ref3.id, privacy = _ref3.privacy, description = _ref3.description, headers = _ref3.headers, endpoint = _ref3.endpoint, method = _ref3.method;
                _context2.next = 3;
                return this.makeRequest({
                  headers: headers,
                  endpoint: endpoint,
                  method: method,
                  body: JSON.stringify({
                    id: id,
                    privacy: privacy,
                    description: description
                  })
                });

              case 3:
                return _context2.abrupt("return", _context2.sent);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function sendPhotoInformationToServer(_x2) {
        return _sendPhotoInformationToServer.apply(this, arguments);
      }

      return sendPhotoInformationToServer;
    }()
  }, {
    key: "getPhotosIds",
    value: function () {
      var _getPhotosIds = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(_ref4) {
        var filesAmount, headers, endpoint, method;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                filesAmount = _ref4.filesAmount, headers = _ref4.headers, endpoint = _ref4.endpoint, method = _ref4.method;
                // Add amount of files as a query parameter
                this.requests.getIds.endpoint.searchParams.set("amount", String(filesAmount));
                _context3.next = 4;
                return this.makeRequest({
                  headers: headers,
                  endpoint: endpoint,
                  method: method
                });

              case 4:
                return _context3.abrupt("return", _context3.sent);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getPhotosIds(_x3) {
        return _getPhotosIds.apply(this, arguments);
      }

      return getPhotosIds;
    }()
  }, {
    key: "getPrice",
    value: function () {
      var _getPrice = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(_ref5) {
        var headers, endpoint, method, name;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                headers = _ref5.headers, endpoint = _ref5.endpoint, method = _ref5.method;

                for (name in this.formData) {
                  endpoint.searchParams.set(name, this.formData[name]);
                }

                _context4.next = 4;
                return this.makeRequest({
                  headers: headers,
                  endpoint: endpoint,
                  method: method
                });

              case 4:
                return _context4.abrupt("return", _context4.sent);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getPrice(_x4) {
        return _getPrice.apply(this, arguments);
      }

      return getPrice;
    }()
  }, {
    key: "requestBonusUsage",
    value: function requestBonusUsage(_ref6) {
      var headers = _ref6.headers,
          endpoint = _ref6.endpoint,
          method = _ref6.method,
          body = _ref6.body;
      return fetch(endpoint, {
        method: method,
        headers: headers,
        body: body
      }).then(function (response) {
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        return response.json();
      })["catch"](function (error) {
        Swal.showValidationMessage("Request failed: ".concat(error));
      });
    }
  }]);

  return ServerRequest;
}();



/***/ }),

/***/ "./js/modules/search-profiles-form.js":
/*!********************************************!*\
  !*** ./js/modules/search-profiles-form.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchProfilesForm; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "../node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form.js */ "./js/modules/form.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var SearchProfilesForm = /*#__PURE__*/function (_Form) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SearchProfilesForm, _Form);

  var _super = _createSuper(SearchProfilesForm);

  function SearchProfilesForm(options) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SearchProfilesForm);

    _this = _super.call(this, options); //Binding context

    _this.generateAgeRange = _this.generateAgeRange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.initializeSlider = _this.initializeSlider.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.showProfile = _this.showProfile.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.searchFormOptions = options.searchFormOptions;
    _this.slider = options.slider;

    _this.generateAgeRange();

    _this.initializeSlider();

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SearchProfilesForm, [{
    key: "cacheElements",
    value: function cacheElements() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(SearchProfilesForm.prototype), "cacheElements", this).call(this);

      this.$formLoadingIndicator = $(this.selectors["formLoadingIndicator"]).fadeOut(0);
      this.$profilesContainer = $(this.selectors["profilesContainer"]);
      var profileExample = {
        premium: {
          status: true,
          text: "Premium"
        },
        online: {
          status: true,
          text: "online"
        },
        avatar: {
          src: "img/photo2.jpg",
          alt: "Avatar photo"
        },
        profile: {
          url: "profile.html",
          buttonText: "View Profile",
          city: "Krakow",
          name: "david, 27"
        }
      };
      var $profile = this.showProfile(profileExample);
      this.$profilesContainer.append($profile);
    }
  }, {
    key: "setUpEventListeners",
    value: function setUpEventListeners() {
      var _this2 = this;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(SearchProfilesForm.prototype), "setUpEventListeners", this).call(this);

      this.$form.on("input", function (event) {
        var target = event.target;
        if (target.name === "city") return;
        console.log("Inputed!"); //console.log("Inputed");

        _this2.collectFormInputs();

        console.log(_this2.formData);
      });
      this.$locationInput.on("citySelected", function () {
        console.log("City selected");

        _this2.collectFormInputs();

        console.log(_this2.formData);
      });
    }
  }, {
    key: "initializeSlider",
    value: function initializeSlider() {
      var _this3 = this;

      // THink whether you need to save it
      this.$distanceFrom = this.$form.find(this.selectors["distanceFrom"]);
      this.$distanceTo = this.$form.find(this.selectors["distanceTo"]);
      this.slider["noUiSlider"].on("end", function () {
        _this3.$inputs.first().trigger("input");
      });
    }
  }, {
    key: "generateAgeRange",
    value: function generateAgeRange() {
      // Cache range
      var ageFrom = this.searchFormOptions.ageFrom;
      var ageTo = this.searchFormOptions.ageTo;
      var $ageInputs = this.$form.find(this.selectors.age);

      for (var i = ageFrom; i <= ageTo; i++) {
        $("<option></option>").attr("value", i).text(i).appendTo($ageInputs);
      }
    }
  }, {
    key: "showProfile",
    value: function showProfile(profileParameters) {
      var premium = profileParameters.premium,
          online = profileParameters.online,
          avatar = profileParameters.avatar,
          profile = profileParameters.profile;
      var $col = $("<div></div>").addClass("col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2").addClass("column mx-auto mx-sm-0");
      var $profileContainer = $("<div></div>").addClass("card shadow-sm border-0 mb-4");
      var $cardImage = $("<figure></figure>").addClass("profile-image card-img-top").append($("<img>").addClass("card-img-top").attr("src", avatar.src).attr("alt", avatar.alt));

      if (premium.status) {
        var $badge = $("<span></span>").addClass("badge badge-primary mb-1").text(premium.text || "Premium").appendTo($cardImage);
      }

      var $cardBody = $("<div></div>").addClass("card-body");
      var $userName = $("<h3></h3>").addClass("mb-0 name online").append($("<a></a>").addClass("text-dark mb-1 mt-2 mr-2 h6 d-inline-block text-capitalize").attr("href", profile.url).text(profile.name));

      if (online.status) {
        var _$badge = $("<span></span>").addClass("badge badge-success mb-1 small").text(online.text || "online").appendTo($userName);
      }

      var $city = $("<p>").addClass("text-secondary small mb-2").text(profile.city);
      $cardBody.append($userName).append($city);
      var $cardFooter = $("<div></div>").addClass("card-footer").append($("<div></div>").addClass("text-center mt-2").append($("<a></a>").addClass("btn btn-default").attr("href", profile.url).text(profile.buttonText))); // Everything together

      return $col.append($profileContainer.append($cardImage).append($cardBody).append($cardFooter));
    }
  }]);

  return SearchProfilesForm;
}(_form_js__WEBPACK_IMPORTED_MODULE_7__["default"]);



/***/ }),

/***/ "./js/modules/swalAlertMixin.js":
/*!**************************************!*\
  !*** ./js/modules/swalAlertMixin.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  /**
   *
   * @param {String} title - Title to show in the popup
   * @param {String} text - Text to show under the title in the popup
   * @param {String} icon - One of the pre-defined icons of the plugin
   */
  showRequestResult: function showRequestResult(_ref) {
    var title = _ref.title,
        text = _ref.text,
        icon = _ref.icon;
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      showConfirmButton: false,
      showCloseButton: true
    });
  },
  showTimerExpired: function showTimerExpired(_ref2) {
    var title = _ref2.title,
        text = _ref2.text;
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      showConfirmButton: false,
      showCloseButton: true
    });
  },

  /**
   *
   * @param {String} title - Popup title
   * @param {String} confirmButtonText - Text of the confirmation button
   * @param {String} cancelButtonText - Text of the cancel button
   * @param {String} imageUrl - Link to the image to show in the popup
   * @param {String} imageAlt - Image alttext
   */
  askUsageApprovement: function askUsageApprovement(_ref3) {
    var _this = this;

    var title = _ref3.title,
        _ref3$text = _ref3.text,
        text = _ref3$text === void 0 ? "" : _ref3$text,
        confirmButtonText = _ref3.confirmButtonText,
        cancelButtonText = _ref3.cancelButtonText,
        imageUrl = _ref3.imageUrl,
        imageAlt = _ref3.imageAlt,
        request = _ref3.request;
    return Swal.fire({
      title: title,
      text: text,
      cancelButtonText: cancelButtonText,
      confirmButtonText: confirmButtonText,
      showCancelButton: true,
      confirmButtonColor: "#ff0068",
      cancelButtonColor: "#bbb",
      imageUrl: imageUrl,
      imageAlt: imageAlt,
      imageWidth: "150px",
      imageHeight: "150px",
      showLoaderOnConfirm: true,
      // Request telling the server thas user wants to use the bonus
      preConfirm: function preConfirm() {
        return _this.requestBonusUsage(request);
      },
      allowOutsideClick: function allowOutsideClick() {
        return !Swal.isLoading();
      }
    }).then(function (result) {
      if (result.value) {
        // If the server answered
        var json = result.value;

        if (json.success) {
          // If the server approved bonus usage
          // Show popup about success
          _this.showRequestResult({
            title: json.title,
            text: json.message,
            icon: "success"
          });
        } else {
          // If the server restricted bonus usage
          // Show success about error
          _this.showRequestResult({
            title: json.title,
            text: json.message,
            icon: "error"
          });
        } // Maybe change to switch statement when other bonuses will be added


        if (_this.type === "boost") {
          return {
            approved: json.success,
            title: json.title,
            message: json.message,
            timestamp: json.timestamp,
            expirationTitle: json.expirationTitle,
            expirationMessage: json.expirationMessage
          };
        }
      } else {
        return {
          approved: false
        };
      }
    });
  }
});

/***/ }),

/***/ "./js/modules/uploader.js":
/*!********************************!*\
  !*** ./js/modules/uploader.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhotoUploader; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "../node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modal.js */ "./js/modules/modal.js");











function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var PhotoUploader = /*#__PURE__*/function (_EditorModal) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(PhotoUploader, _EditorModal);

  var _super = _createSuper(PhotoUploader);

  /**
   * Information about photos.
   * @param photoData.id - id of the photo from the database
   * @param photoData.id.file - photo fileobject to save to the database
   * @param photoData.id.src - photo src
   * @param photoData.id.private - photo privacy information
   * @param photoData.id.description - photo description
   */
  function PhotoUploader(options) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, PhotoUploader);

    _this = _super.call(this, options);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "photoData", {});

    _this.configuration.uploader = true; // Binding context

    _this.previewPhotos = _this.previewPhotos.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.generatePreviewHTML = _this.generatePreviewHTML.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.updateMarkup = _this.updateMarkup.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.getPhotosIds = _this.getPhotosIds.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.uploadNewPhotos = _this.uploadNewPhotos.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)); // Prepare Uploader

    _this.cacheElements();

    _this.setUpEventListeners();

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(PhotoUploader, [{
    key: "cacheElements",
    value: function cacheElements() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(PhotoUploader.prototype), "cacheElements", this).call(this); // Container to preview uploaded images


      this.$previewContainer = this.$modal.find(this.selectors.previewContainer); // Inputs

      this.$photoInputs = this.$modal.find(this.selectors.input); // Gallery

      this.$gallery = $(this.selectors.gallery);
    }
  }, {
    key: "setUpEventListeners",
    value: function setUpEventListeners() {
      var _this2 = this;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(PhotoUploader.prototype), "setUpEventListeners", this).call(this); // Listen to changes on the input elements


      this.$photoInputs.change(function (event) {
        _this2.previewPhotos(event.target);
      });
      this.$form.submit(function (event) {
        event.preventDefault(); // Make server request here
        // And update markup
        // After that - clean all the cached data

        _this2.uploadNewPhotos();
      });
    }
  }, {
    key: "clean",
    value: function clean() {
      this.photoData = {};
    }
  }, {
    key: "uploadNewPhotos",
    value: function () {
      var _uploadNewPhotos = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response, id, photoData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.collectData();
                this.generateFormData();
                _context.prev = 2;
                _context.next = 5;
                return this.makeRequest({
                  headers: this.requests.savePhotos.headers,
                  endpoint: this.requests.savePhotos.endpoint,
                  method: this.requests.savePhotos.method,
                  body: this.formData
                });

              case 5:
                response = _context.sent;
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](2);
                // Unsuccessful Popup
                this.showRequestResult({
                  title: "Oops!",
                  text: _context.t0.message,
                  icon: "error"
                });

              case 11:
                if (response.success) {
                  // Successful Popup
                  this.showRequestResult({
                    title: "Success!",
                    text: response.message,
                    icon: "success"
                  }); // Update markup according to photoData object

                  for (id in this.photoData) {
                    photoData = this.photoData[id]; // Add each uploaded photo to the markup

                    this.updateMarkup({
                      id: id,
                      src: photoData.src,
                      privacy: photoData.privacy,
                      description: photoData.description
                    });
                  }

                  this.closeModal();
                } else {
                  // Unsuccessful Popup
                  this.showRequestResult({
                    title: "Oops!",
                    text: response.message,
                    icon: "error"
                  });
                }

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 8]]);
      }));

      function uploadNewPhotos() {
        return _uploadNewPhotos.apply(this, arguments);
      }

      return uploadNewPhotos;
    }()
    /**
     * Function retrieving ids according to uploading amount of files.
     * @param {Number} filesAmount - amount of files to get ids for
     */

  }, {
    key: "getPhotosIds",
    value: function () {
      var _getPhotosIds = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(filesAmount) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(PhotoUploader.prototype), "getPhotosIds", this).call(this, {
                  filesAmount: filesAmount,
                  headers: this.requests.getIds.headers,
                  endpoint: this.requests.getIds.endpoint,
                  method: this.requests.getIds.method
                });

              case 3:
                response = _context2.sent;
                _context2.next = 9;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                // Unsuccessful Popup
                this.showRequestResult({
                  title: "Oops!",
                  text: _context2.t0.message,
                  icon: "error"
                });

              case 9:
                if (!response.success) {
                  _context2.next = 13;
                  break;
                }

                return _context2.abrupt("return", response.ids);

              case 13:
                // Unsuccessful Popup
                this.showRequestResult({
                  title: "Oops!",
                  text: response.message,
                  icon: "error"
                });

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 6]]);
      }));

      function getPhotosIds(_x) {
        return _getPhotosIds.apply(this, arguments);
      }

      return getPhotosIds;
    }()
    /**
     * Function reading uploaded photos from input
     * @param {DOM Element} input - input element from which to take the photo files
     */

  }, {
    key: "previewPhotos",
    value: function () {
      var _previewPhotos = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(input) {
        var ids, filesAmount, i, reader, id;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!input.files) {
                  _context3.next = 13;
                  break;
                }

                filesAmount = input.files.length;
                _context3.prev = 2;
                _context3.next = 5;
                return this.getPhotosIds(filesAmount);

              case 5:
                ids = _context3.sent;
                _context3.next = 11;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](2);
                // Unsuccessful Popup
                this.showRequestResult({
                  title: "Oops!",
                  text: _context3.t0.message,
                  icon: "error"
                });

              case 11:
                for (i = 0; i < filesAmount; i++) {
                  // Make fileReader for each photo
                  reader = new FileReader(); // Cache id of the loading photo

                  id = ids[i]; // Initialize object to store information about this photo

                  this.photoData[id] = {}; // Save the id of the loading photo for reference

                  reader.id = id;
                  this.setReaderEventListeners(reader); // Start reading photo

                  reader.readAsDataURL(input.files[i]); // Save file

                  this.savePhotoInformation({
                    id: id,
                    file: input.files[i]
                  });
                }

                this.$modalFooter.show(0);

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[2, 8]]);
      }));

      function previewPhotos(_x2) {
        return _previewPhotos.apply(this, arguments);
      }

      return previewPhotos;
    }()
    /**
     * Function attaching event listeners to File Reader
     * @param {FileReader object} reader - reader to attach event listeners to
     */

  }, {
    key: "setReaderEventListeners",
    value: function setReaderEventListeners(reader) {
      var _this3 = this;

      // Preview photos when it is loaded
      reader.onload = function (event) {
        // Cache
        var _ref = [event.target.id, event.target.result],
            id = _ref[0],
            src = _ref[1];

        _this3.generatePreviewHTML({
          id: id,
          src: src
        }); // Save src


        _this3.savePhotoInformation({
          id: id,
          src: src
        });
      };

      reader.onerror = function (event) {
        // Unsuccessful Popup
        this.showRequestResult({
          title: this.error.name,
          text: this.error.message,
          icon: "error"
        });
      };
    }
    /**
     * Function deleting uploaded photos
     */

  }, {
    key: "discardChanges",
    value: function discardChanges() {
      this.$previewContainer.empty();
    }
    /**
     * Function generating markup for preview
     * @param {Number} id - photo id that will be used in the database to store photo
     * @param {String} src - src of the image to preview
     */

  }, {
    key: "generatePreviewHTML",
    value: function generatePreviewHTML(_ref2) {
      var _this4 = this;

      var id = _ref2.id,
          src = _ref2.src;
      // Preparing ids for preview
      var privacyId = "photo-upload-privacy-" + id;
      var descriptionId = "upload-description" + id; // Privacy checkbox control

      var $privacyControl = $("<div></div>").addClass("custom-control custom-switch").append($("<input>").attr("type", "checkbox").attr("id", privacyId).addClass("custom-control-input privacy-input")).append($("<label></label>").attr("for", privacyId).addClass("custom-control-label privacy-label")).appendTo("body"); // Privacy box

      var $privacyBox = $("<div></div>").addClass("privacy bg-white rounded d-flex justify-content-between align-items-center px-1").append($("<h4></h4>").addClass("m-0").text("Privacy")).append($privacyControl); // Figure

      var $figure = $("<figure></figure>").append($("<img>").attr("src", src).attr("alt", "")).append($privacyBox).append($("<button></button>").attr("type", "button").addClass("delete bg-white rounded d-flex justify-content-between align-items-center px-1").text("Delete").click(function (event) {
        _this4.deletePhoto(event);
      }).append($('<i class="fas fa-trash-alt"></i>'))); // Description textarea

      var $descriptionTextarea = $("<div></div>").addClass("form-group").append($("<label></label>").attr("for", descriptionId).text("Add photo description")).append($("<textarea></textarea>").attr("id", descriptionId).attr("rows", "4").attr("placeholder", "Photo description").addClass("form-control new-photo-description")); // Photo container

      $("<div></div>").addClass("col-12 col-sm-6 col-md-4 col-xl-3 photo-container").attr("data-id", id).append($("<div></div>").addClass("photo-description").append([$figure, $descriptionTextarea])).appendTo(this.$previewContainer);
    }
  }, {
    key: "collectData",
    value: function collectData() {
      var _this5 = this;

      $(this.selectors.container).each(function (index, element) {
        var id = element.dataset.id;
        var privacy = $(element).find(_this5.selectors["privacy-input"]).is(":checked");
        var description = $(element).find(_this5.selectors.description).val();

        _this5.savePhotoInformation({
          id: id,
          privacy: privacy,
          description: description
        });
      });
    }
  }, {
    key: "updateMarkup",
    value: function updateMarkup(_ref3) {
      var _ref3$id = _ref3.id,
          id = _ref3$id === void 0 ? null : _ref3$id,
          _ref3$src = _ref3.src,
          src = _ref3$src === void 0 ? null : _ref3$src,
          _ref3$privacy = _ref3.privacy,
          privacy = _ref3$privacy === void 0 ? false : _ref3$privacy,
          _ref3$description = _ref3.description,
          description = _ref3$description === void 0 ? "" : _ref3$description;
      this.$gallery.append($("<div></div>").addClass("swiper-slide gallery-slide").append($("<img>").attr("src", src).attr("alt", description).attr("data-toggle", "modal").attr("data-target", "#edit-photo").attr("data-id", id).attr("data-description", description).attr("data-privacy", privacy).addClass("gallery-photo")));
    }
  }]);

  return PhotoUploader;
}(_modal_js__WEBPACK_IMPORTED_MODULE_10__["default"]);



/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ./js/main-authorized.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./js/main-authorized.js */"./js/main-authorized.js");


/***/ })

/******/ });
//# sourceMappingURL=main-authorized.bundle.js.map