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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/form.js */ "./js/modules/form.js");
/* harmony import */ var _modules_chained_forms_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/chained-forms.js */ "./js/modules/chained-forms.js");
/* harmony import */ var _modules_avatar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/avatar.js */ "./js/modules/avatar.js");



window["Form"] = _modules_form_js__WEBPACK_IMPORTED_MODULE_0__["default"];
window["ChainedForms"] = _modules_chained_forms_js__WEBPACK_IMPORTED_MODULE_1__["default"];
window["Avatar"] = _modules_avatar_js__WEBPACK_IMPORTED_MODULE_2__["default"];
$(document).ready(function () {
  /* Browser fullscreen experience on double click */
  if (self == top) {
    $("body").on("dblclick", function (e) {
      if (!document.fullscreenElement && // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }
    });
  } else {}
  /* float label checking input is not empty */


  $(".float-label .form-control").on("blur", function () {
    if ($(this).val() || $(this).val().length != 0) {
      $(this).closest(".float-label").addClass("active");
    } else {
      $(this).closest(".float-label").removeClass("active");
    }
  });
  /* menu open close wrapper screen click close menu */

  $(".menu-btn").on("click", function (e) {
    e.stopPropagation();

    if ($("body").hasClass("sidemenu-open") == true) {
      $("body, html").removeClass("sidemenu-open");
      setTimeout(function () {
        $("body, html").removeClass("menuactive");
      }, 500);
    } else {
      $("body, html").addClass("sidemenu-open menuactive");
    }
  });
  $(".wrapper").on("click", function () {
    if ($("body").hasClass("sidemenu-open") == true) {
      $("body, html").removeClass("sidemenu-open");
      setTimeout(function () {
        $("body, html").removeClass("menuactive");
      }, 500);
    }
  });
  /* filter click open filter */

  if ($("body").hasClass("filtermenu-open") == true) {
    $(".filter-btn").find("i").html("close");
  }

  $(".filter-btn").on("click", function () {
    if ($("body").hasClass("filtermenu-open") == true) {
      $("body").removeClass("filtermenu-open");
      $(this).find("i").html("filter_list");
    } else {
      $("body").addClass("filtermenu-open");
      $(this).find("i").html("close");
    }
  });
  /* background image to cover */

  $(".background").each(function () {
    var imagewrap = $(this);
    var imagecurrent = $(this).find("img").attr("src");
    imagewrap.css("background-image", 'url("' + imagecurrent + '")');
    $(this).find("img").remove();
  });
});
$(window).on("load", function () {
  $(".loader-screen").fadeOut("slow");
  /* header active on scroll more than 50 px*/

  if ($(this).scrollTop() >= 30) {
    $(".header").addClass("active");
  } else {
    $(".header").removeClass("active");
  }

  $(window).on("scroll", function () {
    /* header active on scroll more than 50 px*/
    if ($(this).scrollTop() >= 30) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
  });
});

/***/ }),

/***/ "./js/modules/avatar.js":
/*!******************************!*\
  !*** ./js/modules/avatar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Avatar; });
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



var Avatar = /*#__PURE__*/function (_EditorModal) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Avatar, _EditorModal);

  var _super = _createSuper(Avatar);

  // Currently selected avatar. Data type - blob or file
  // Generated link pointing to the avatar locally in the browser
  // Previous avatar link

  /**
   * Constructor accepts options object which contains:
   * jQuery Object containing DOM Element for avatar preview,
   * jQuery objects containing DOM Elements of the avatar input
   * Server endpoint where to send avatar,
   * Headers to specify when sending avatar
   * @param {object} options
   */
  function Avatar(options) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Avatar);

    _this = _super.call(this, options);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "avatar", null);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "newAvatarLink", null);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "prevAvatarLink", null);

    _this.configuration.avatar = true; // FormData object containing avatar

    _this.formData = null; // Array containing avatar input elements

    _this.$avatarInputs = null; // Create FileReader instance to handle reading image data

    _this.reader = new FileReader(); // Binding context

    _this.cacheElements = _this.cacheElements.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.setUpEventListeners = _this.setUpEventListeners.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.previewAvatar = _this.previewAvatar.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.submitAvatar = _this.submitAvatar.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.updateMarkup = _this.updateMarkup.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.generateFormData = _this.generateFormData.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)); // Cache elements according to passed selectors

    _this.cacheElements(); // Setup event listeners


    _this.setUpEventListeners();

    return _this;
  }
  /**
   * Function caches elements according to passed options.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Avatar, [{
    key: "cacheElements",
    value: function cacheElements() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Avatar.prototype), "cacheElements", this).call(this); // Avatar elements in the markup


      this.$avatar = $(this.selectors.elementSelector); // Avatar preview

      this.$avatarPreview = this.$modal.find(this.selectors.preview); // Save previous avatar to discard changes if user doesn't submit the form

      this.prevAvatarLink = this.$avatarPreview.attr("src"); // Form

      this.$avatarForm = this.$modal.find(this.selectors.form); // Inputs

      this.$avatarInputs = this.$modal.find(this.selectors.input);
    }
    /**
     * Function setup event listeners on the initialization stage of the object creation
     */

  }, {
    key: "setUpEventListeners",
    value: function setUpEventListeners() {
      var _this2 = this;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Avatar.prototype), "setUpEventListeners", this).call(this); // Setup event handler for loading of the image data event


      this.reader.onload = function (e) {
        // Show avatar preview
        _this2.$avatarPreview.attr("src", e.target.result);

        _this2.$modalFooter.slideDown();

        _this2.newAvatarLink = e.target.result;
      }; // Listen to changes on the input elements


      this.$avatarInputs.change(function (event) {
        _this2.previewAvatar(event.target);
      }); // Submit avatar

      this.$avatarForm.submit(function (event) {
        event.preventDefault();

        _this2.submitAvatar();
      });
    }
    /**
     * This function is called when the process of avatar preview is occuring.
     * It accepts the input field from which the avatar is being upload
     * The function starts loading the image
     * @param {DOMElement} input
     */

  }, {
    key: "previewAvatar",
    value: function previewAvatar(input) {
      if (input.files && input.files[0]) {
        //Save the currently selected avatar
        this.avatar = input.files[0]; //Start reading the image from the input

        this.reader.readAsDataURL(input.files[0]);
      }
    }
  }, {
    key: "submitAvatar",
    value: function () {
      var _submitAvatar = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.generateFormData();
                _context.prev = 1;
                _context.next = 4;
                return this.makeRequest({
                  headers: this.requests.saveAvatar.headers,
                  endpoint: this.requests.saveAvatar.endpoint,
                  method: this.requests.saveAvatar.method,
                  body: this.formData
                });

              case 4:
                response = _context.sent;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](1);
                // Unsuccessful Popup
                this.showRequestResult({
                  title: _context.t0.name,
                  text: _context.t0.message,
                  icon: "error"
                });

              case 10:
                if (response.success) {
                  this.uploaded = true;
                  this.updateMarkup(); // Successful Popup

                  this.showRequestResult({
                    title: response.title,
                    text: response.message,
                    icon: "success"
                  });
                  this.closeModal();
                  this.clean();
                } else {
                  // Unsuccessful Popup
                  this.showRequestResult({
                    title: response.title,
                    text: response.message,
                    icon: "error"
                  });
                }

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 7]]);
      }));

      function submitAvatar() {
        return _submitAvatar.apply(this, arguments);
      }

      return submitAvatar;
    }()
    /**
     * The function to perform cleaning object fields after
     * all the actions with avatar upload are performed
     */

  }, {
    key: "clean",
    value: function clean() {
      // Delete formData object
      this.formData = null; // Update previous avatar link

      this.prevAvatarLink = this.$avatarPreview.attr("src"); // Discard new link

      this.newAvatarLink = null; // Return the previous avatar status

      this.uploaded = false;
    }
    /**
     * Function updates the avatar in the editing area and in the menu
     */

  }, {
    key: "updateMarkup",
    value: function updateMarkup() {
      this.$avatar.attr("src", this.newAvatarLink);
    }
    /**
     * Function delete the newly uploaded avatar
     * If user didn't submit the form
     */

  }, {
    key: "discardChanges",
    value: function discardChanges() {
      this.$avatarPreview.attr("src", this.prevAvatarLink);
    }
  }]);

  return Avatar;
}(_modal_js__WEBPACK_IMPORTED_MODULE_10__["default"]);



/***/ }),

/***/ "./js/modules/chained-forms.js":
/*!*************************************!*\
  !*** ./js/modules/chained-forms.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChainedForms; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var ChainedForms = /*#__PURE__*/function () {
  function ChainedForms(options) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ChainedForms);

    // Bind context
    this.cacheElements = this.cacheElements.bind(this);
    this.setUpEventListeners = this.setUpEventListeners.bind(this); // Save options

    this.selectors = options.selectors;
    this.cacheElements();
    this.setUpEventListeners();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ChainedForms, [{
    key: "cacheElements",
    value: function cacheElements() {
      var _this = this;

      // Forms container
      this.$container = $(this.selectors.formsContainer); // Forms to chain

      this.$forms = this.$container.find(this.selectors.forms).each(function (index, element) {
        if (index !== 0) {
          $(element).closest(_this.selectors.wrapper).fadeOut().hide();
        }
      }); // Forward button

      this.$forwardButton = this.selectors.forward ? this.$container.find(this.selectors.forward) : null; // Backward button

      this.$backwardButton = this.selectors.backward ? this.$container.find(this.selectors.backward) : null;
    }
  }, {
    key: "setUpEventListeners",
    value: function setUpEventListeners() {
      var _this2 = this;

      // Show next form when the current is submitted
      this.$forms.on("submitted", function (event) {
        var target = event.target;
        var step = target.dataset.step;
        ++step;
        if (step === _this2.$forms.length) return;
        $(target).closest(_this2.selectors.wrapper).fadeOut(400, function () {
          $(_this2.$forms.get(step)).closest(_this2.selectors.wrapper).fadeIn(400);
        });
      });

      if (this.selectors.backward) {
        // Show previous form when the "back" button is clicked"
        this.$backwardButton.click(function (event) {
          // Here something is not working
          event.stopPropagation();
          var $form = $(event.target).closest(_this2.selectors.wrapper).find(_this2.selectors.forms);
          var previousStep = Number($form.data("step")) - 1; // Hide the form wrapper

          $form.closest(_this2.selectors.wrapper).fadeOut(400, function () {
            // Show the form wrapper of the previous form
            $(_this2.$forms.get(previousStep)).closest(_this2.selectors.wrapper).fadeIn(400);
          });
        });
      }

      if (this.selectors.forward) {
        this.$forwardButton.click(function (event) {
          event.stopPropagation();
          var $form = $(event.target).closest(_this2.selectors.wrapper).find(_this2.selectors.forms);
          var nextStep = Number($form.data("step")) + 1; // Hide the form wrapper

          $form.closest(_this2.selectors.wrapper).fadeOut(400, function () {
            // Show the form wrapper of the previous form
            $(_this2.$forms.get(nextStep)).closest(_this2.selectors.wrapper).fadeIn(400);
          });
        });
      }
    }
  }]);

  return ChainedForms;
}();



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
        } else if (name === "city") {
          _this3.collectLocationData(element);
        } else {
          _this3.formData[name] = $element.val();
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
                    window.location.replace(response.redirect);
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

              case 13:
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
  }, {
    key: "hideErrorMessage",
    value: function hideErrorMessage() {}
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
    this.$locationInput = this.$form.find(this.selectors.locationInput); // location dropdown wrapper

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


      if (_this.citySelection) return;

      if (!_this.locationInputStarted) {
        // If input hasn't started yet
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

      _this.$locationInput.valid();

      _this.citySelection = false;
      _this.locationInputStarted = false;
      _this.newValue = null;

      _this.$locationDropdownMenu.empty();
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
                _context2.next = 12;
                break;
              }

              // If the inputed value has been changed recently
              // Save new value
              _this3.locationInputValue = newValue; // Adjust searchParams

              requestInfo.endpoint.searchParams.set("city", _this3.locationInputValue); // Make request

              _context2.next = 7;
              return _this3.getCities({
                headers: requestInfo.headers,
                endpoint: requestInfo.endpoint,
                method: requestInfo.method
              });

            case 7:
              cities = _context2.sent;
              // Schedule next check
              _this3.locationTimer = setTimeout(_this3.throttleInput, 1500);

              _this3.displayCities(cities);

              _context2.next = 13;
              break;

            case 12:
              _this3.locationInputStarted = false;

            case 13:
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
    key: "requestBonusUsage",
    value: function requestBonusUsage(_ref5) {
      var headers = _ref5.headers,
          endpoint = _ref5.endpoint,
          method = _ref5.method,
          body = _ref5.body;
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
        confirmButtonText = _ref3.confirmButtonText,
        cancelButtonText = _ref3.cancelButtonText,
        imageUrl = _ref3.imageUrl,
        ImageAlt = _ref3.ImageAlt,
        request = _ref3.request;
    return Swal.fire({
      title: title,
      cancelButtonText: cancelButtonText,
      confirmButtonText: confirmButtonText,
      showCancelButton: true,
      confirmButtonColor: "#ff0068",
      cancelButtonColor: "#d33",
      imageUrl: imageUrl,
      ImageAlt: ImageAlt,
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
          }); // Usage is approved


          if (_this.type === "boost") {
            // If bonus type is boost
            return {
              approved: true,
              timestamp: json.timestamp
            };
          }
        } else {
          // If the server restricted bonus usage
          // Show success about error
          _this.showRequestResult({
            title: json.title,
            text: json.message,
            icon: "error"
          }); // Usage is not approved


          if (_this.type === "boost") {
            // If bonus type is boost
            return {
              approved: false,
              timestamp: null
            };
          }
        }
      }
    });
  }
});

/***/ }),

/***/ 1:
/*!**************************!*\
  !*** multi ./js/main.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./js/main.js */"./js/main.js");


/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map