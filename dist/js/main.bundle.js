/******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module',
      });
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === 'object' &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, 'a', getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = '/dist'; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 1));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ '../node_modules/@babel/runtime/helpers/arrayLikeToArray.js':
      /*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \******************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;

          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }

          return arr2;
        }

        module.exports = _arrayLikeToArray;

        /***/
      },

    /***/ '../node_modules/@babel/runtime/helpers/arrayWithHoles.js':
      /*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }

        module.exports = _arrayWithHoles;

        /***/
      },

    /***/ '../node_modules/@babel/runtime/helpers/assertThisInitialized.js':
      /*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \***********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }

          return self;
        }

        module.exports = _assertThisInitialized;

        /***/
      },

    /***/ '../node_modules/@babel/runtime/helpers/asyncToGenerator.js':
      /*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \******************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        function asyncGeneratorStep(
          gen,
          resolve,
          reject,
          _next,
          _throw,
          key,
          arg
        ) {
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
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  'next',
                  value
                );
              }

              function _throw(err) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  'throw',
                  err
                );
              }

              _next(undefined);
            });
          };
        }

        module.exports = _asyncToGenerator;

        /***/
      },

    /***/ '../node_modules/@babel/runtime/helpers/classCallCheck.js':
      /*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        module.exports = _classCallCheck;

        /***/
      },

    /***/ '../node_modules/@babel/runtime/helpers/createClass.js':
      /*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/createClass.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        module.exports = _createClass;

        /***/
      },

    /***/ '../node_modules/@babel/runtime/helpers/defineProperty.js':
      /*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }

          return obj;
        }

        module.exports = _defineProperty;

        /***/
      },

    /***/ '../node_modules/@babel/runtime/helpers/get.js':
      /*!*****************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/get.js ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var superPropBase = __webpack_require__(
          /*! ./superPropBase */ '../node_modules/@babel/runtime/helpers/superPropBase.js'
        );

        function _get(target, property, receiver) {
          if (typeof Reflect !== 'undefined' && Reflect.get) {
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

        /***/
      },

    /***/ '../node_modules/@babel/runtime/helpers/getPrototypeOf.js':
      /*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        function _getPrototypeOf(o) {
          module.exports = _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
          return _getPrototypeOf(o);
        }

        module.exports = _getPrototypeOf;

        /***/
      },

    /***/ '../node_modules/@babel/runtime/helpers/inherits.js':
      /*!**********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/inherits.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var setPrototypeOf = __webpack_require__(
          /*! ./setPrototypeOf */ '../node_modules/@babel/runtime/helpers/setPrototypeOf.js'
        );

        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          }

          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true,
              },
            }
          );
          if (superClass) setPrototypeOf(subClass, superClass);
        }

        module.exports = _inherits;

        /***/
      },

    /***/ '../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js':
      /*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \**********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        function _iterableToArrayLimit(arr, i) {
          if (
            typeof Symbol === 'undefined' ||
            !(Symbol.iterator in Object(arr))
          )
            return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;

          try {
            for (
              var _i = arr[Symbol.iterator](), _s;
              !(_n = (_s = _i.next()).done);
              _n = true
            ) {
              _arr.push(_s.value);

              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i['return'] != null) _i['return']();
            } finally {
              if (_d) throw _e;
            }
          }

          return _arr;
        }

        module.exports = _iterableToArrayLimit;

        /***/
      },

    /***/ '../node_modules/@babel/runtime/helpers/nonIterableRest.js':
      /*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \*****************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        function _nonIterableRest() {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }

        module.exports = _nonIterableRest;

        /***/
      },

    /***/ '../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js':
      /*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \***************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var _typeof = __webpack_require__(
          /*! ../helpers/typeof */ '../node_modules/@babel/runtime/helpers/typeof.js'
        );

        var assertThisInitialized = __webpack_require__(
          /*! ./assertThisInitialized */ '../node_modules/@babel/runtime/helpers/assertThisInitialized.js'
        );

        function _possibleConstructorReturn(self, call) {
          if (
            call &&
            (_typeof(call) === 'object' || typeof call === 'function')
          ) {
            return call;
          }

          return assertThisInitialized(self);
        }

        module.exports = _possibleConstructorReturn;

        /***/
      },

    /***/ '../node_modules/@babel/runtime/helpers/setPrototypeOf.js':
      /*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        function _setPrototypeOf(o, p) {
          module.exports = _setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(o, p) {
              o.__proto__ = p;
              return o;
            };

          return _setPrototypeOf(o, p);
        }

        module.exports = _setPrototypeOf;

        /***/
      },

    /***/ '../node_modules/@babel/runtime/helpers/slicedToArray.js':
      /*!***************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \***************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var arrayWithHoles = __webpack_require__(
          /*! ./arrayWithHoles */ '../node_modules/@babel/runtime/helpers/arrayWithHoles.js'
        );

        var iterableToArrayLimit = __webpack_require__(
          /*! ./iterableToArrayLimit */ '../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js'
        );

        var unsupportedIterableToArray = __webpack_require__(
          /*! ./unsupportedIterableToArray */ '../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js'
        );

        var nonIterableRest = __webpack_require__(
          /*! ./nonIterableRest */ '../node_modules/@babel/runtime/helpers/nonIterableRest.js'
        );

        function _slicedToArray(arr, i) {
          return (
            arrayWithHoles(arr) ||
            iterableToArrayLimit(arr, i) ||
            unsupportedIterableToArray(arr, i) ||
            nonIterableRest()
          );
        }

        module.exports = _slicedToArray;

        /***/
      },

    /***/ '../node_modules/@babel/runtime/helpers/superPropBase.js':
      /*!***************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \***************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var getPrototypeOf = __webpack_require__(
          /*! ./getPrototypeOf */ '../node_modules/@babel/runtime/helpers/getPrototypeOf.js'
        );

        function _superPropBase(object, property) {
          while (!Object.prototype.hasOwnProperty.call(object, property)) {
            object = getPrototypeOf(object);
            if (object === null) break;
          }

          return object;
        }

        module.exports = _superPropBase;

        /***/
      },

    /***/ '../node_modules/@babel/runtime/helpers/typeof.js':
      /*!********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/typeof.js ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        function _typeof(obj) {
          '@babel/helpers - typeof';

          if (
            typeof Symbol === 'function' &&
            typeof Symbol.iterator === 'symbol'
          ) {
            module.exports = _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            module.exports = _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === 'function' &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj;
            };
          }

          return _typeof(obj);
        }

        module.exports = _typeof;

        /***/
      },

    /***/ '../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js':
      /*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \****************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var arrayLikeToArray = __webpack_require__(
          /*! ./arrayLikeToArray */ '../node_modules/@babel/runtime/helpers/arrayLikeToArray.js'
        );

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === 'string') return arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === 'Object' && o.constructor) n = o.constructor.name;
          if (n === 'Map' || n === 'Set') return Array.from(o);
          if (
            n === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return arrayLikeToArray(o, minLen);
        }

        module.exports = _unsupportedIterableToArray;

        /***/
      },

    /***/ '../node_modules/@babel/runtime/regenerator/index.js':
      /*!***********************************************************!*\
  !*** ../node_modules/@babel/runtime/regenerator/index.js ***!
  \***********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! regenerator-runtime */ '../node_modules/regenerator-runtime/runtime.js'
        );

        /***/
      },

    /***/ '../node_modules/regenerator-runtime/runtime.js':
      /*!******************************************************!*\
  !*** ../node_modules/regenerator-runtime/runtime.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        /**
         * Copyright (c) 2014-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        var runtime = (function (exports) {
          'use strict';

          var Op = Object.prototype;
          var hasOwn = Op.hasOwnProperty;
          var undefined; // More compressible than void 0.
          var $Symbol = typeof Symbol === 'function' ? Symbol : {};
          var iteratorSymbol = $Symbol.iterator || '@@iterator';
          var asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator';
          var toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag';

          function wrap(innerFn, outerFn, self, tryLocsList) {
            // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
            var protoGenerator =
              outerFn && outerFn.prototype instanceof Generator
                ? outerFn
                : Generator;
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
              return { type: 'normal', arg: fn.call(obj, arg) };
            } catch (err) {
              return { type: 'throw', arg: err };
            }
          }

          var GenStateSuspendedStart = 'suspendedStart';
          var GenStateSuspendedYield = 'suspendedYield';
          var GenStateExecuting = 'executing';
          var GenStateCompleted = 'completed';

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
          var NativeIteratorPrototype =
            getProto && getProto(getProto(values([])));
          if (
            NativeIteratorPrototype &&
            NativeIteratorPrototype !== Op &&
            hasOwn.call(NativeIteratorPrototype, iteratorSymbol)
          ) {
            // This environment has a native %IteratorPrototype%; use it instead
            // of the polyfill.
            IteratorPrototype = NativeIteratorPrototype;
          }

          var Gp = (GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(
            IteratorPrototype
          ));
          GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
          GeneratorFunctionPrototype.constructor = GeneratorFunction;
          GeneratorFunctionPrototype[
            toStringTagSymbol
          ] = GeneratorFunction.displayName = 'GeneratorFunction';

          // Helper for defining the .next, .throw, and .return methods of the
          // Iterator interface in terms of a single ._invoke method.
          function defineIteratorMethods(prototype) {
            ['next', 'throw', 'return'].forEach(function (method) {
              prototype[method] = function (arg) {
                return this._invoke(method, arg);
              };
            });
          }

          exports.isGeneratorFunction = function (genFun) {
            var ctor = typeof genFun === 'function' && genFun.constructor;
            return ctor
              ? ctor === GeneratorFunction ||
                  // For the native GeneratorFunction constructor, the best we can
                  // do is to check its .name property.
                  (ctor.displayName || ctor.name) === 'GeneratorFunction'
              : false;
          };

          exports.mark = function (genFun) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
            } else {
              genFun.__proto__ = GeneratorFunctionPrototype;
              if (!(toStringTagSymbol in genFun)) {
                genFun[toStringTagSymbol] = 'GeneratorFunction';
              }
            }
            genFun.prototype = Object.create(Gp);
            return genFun;
          };

          // Within the body of any async function, `await x` is transformed to
          // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
          // `hasOwn.call(value, "__await")` to determine if the yielded value is
          // meant to be awaited.
          exports.awrap = function (arg) {
            return { __await: arg };
          };

          function AsyncIterator(generator, PromiseImpl) {
            function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);
              if (record.type === 'throw') {
                reject(record.arg);
              } else {
                var result = record.arg;
                var value = result.value;
                if (
                  value &&
                  typeof value === 'object' &&
                  hasOwn.call(value, '__await')
                ) {
                  return PromiseImpl.resolve(value.__await).then(
                    function (value) {
                      invoke('next', value, resolve, reject);
                    },
                    function (err) {
                      invoke('throw', err, resolve, reject);
                    }
                  );
                }

                return PromiseImpl.resolve(value).then(
                  function (unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                  },
                  function (error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke('throw', error, resolve, reject);
                  }
                );
              }
            }

            var previousPromise;

            function enqueue(method, arg) {
              function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function (resolve, reject) {
                  invoke(method, arg, resolve, reject);
                });
              }

              return (previousPromise =
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
                previousPromise
                  ? previousPromise.then(
                      callInvokeWithMethodAndArg,
                      // Avoid propagating failures to Promises returned by later
                      // invocations of the iterator.
                      callInvokeWithMethodAndArg
                    )
                  : callInvokeWithMethodAndArg());
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
          exports.async = function (
            innerFn,
            outerFn,
            self,
            tryLocsList,
            PromiseImpl
          ) {
            if (PromiseImpl === void 0) PromiseImpl = Promise;

            var iter = new AsyncIterator(
              wrap(innerFn, outerFn, self, tryLocsList),
              PromiseImpl
            );

            return exports.isGeneratorFunction(outerFn)
              ? iter // If outerFn is a generator, return the full iterator.
              : iter.next().then(function (result) {
                  return result.done ? result.value : iter.next();
                });
          };

          function makeInvokeMethod(innerFn, self, context) {
            var state = GenStateSuspendedStart;

            return function invoke(method, arg) {
              if (state === GenStateExecuting) {
                throw new Error('Generator is already running');
              }

              if (state === GenStateCompleted) {
                if (method === 'throw') {
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

                if (context.method === 'next') {
                  // Setting context._sent for legacy support of Babel's
                  // function.sent implementation.
                  context.sent = context._sent = context.arg;
                } else if (context.method === 'throw') {
                  if (state === GenStateSuspendedStart) {
                    state = GenStateCompleted;
                    throw context.arg;
                  }

                  context.dispatchException(context.arg);
                } else if (context.method === 'return') {
                  context.abrupt('return', context.arg);
                }

                state = GenStateExecuting;

                var record = tryCatch(innerFn, self, context);
                if (record.type === 'normal') {
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
                    done: context.done,
                  };
                } else if (record.type === 'throw') {
                  state = GenStateCompleted;
                  // Dispatch the exception by looping back around to the
                  // context.dispatchException(context.arg) call above.
                  context.method = 'throw';
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

              if (context.method === 'throw') {
                // Note: ["return"] must be used for ES3 parsing compatibility.
                if (delegate.iterator['return']) {
                  // If the delegate iterator has a return method, give it a
                  // chance to clean up.
                  context.method = 'return';
                  context.arg = undefined;
                  maybeInvokeDelegate(delegate, context);

                  if (context.method === 'throw') {
                    // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                  }
                }

                context.method = 'throw';
                context.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                );
              }

              return ContinueSentinel;
            }

            var record = tryCatch(method, delegate.iterator, context.arg);

            if (record.type === 'throw') {
              context.method = 'throw';
              context.arg = record.arg;
              context.delegate = null;
              return ContinueSentinel;
            }

            var info = record.arg;

            if (!info) {
              context.method = 'throw';
              context.arg = new TypeError('iterator result is not an object');
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
              if (context.method !== 'return') {
                context.method = 'next';
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

          Gp[toStringTagSymbol] = 'Generator';

          // A Generator should always return itself as the iterator object when the
          // @@iterator function is called on it. Some browsers' implementations of the
          // iterator prototype chain incorrectly implement this, causing the Generator
          // object to not be returned from this call. This ensures that doesn't happen.
          // See https://github.com/facebook/regenerator/issues/274 for more details.
          Gp[iteratorSymbol] = function () {
            return this;
          };

          Gp.toString = function () {
            return '[object Generator]';
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
            record.type = 'normal';
            delete record.arg;
            entry.completion = record;
          }

          function Context(tryLocsList) {
            // The root entry object (effectively a try statement without a catch
            // or a finally block) gives us a place to store values thrown from
            // locations where there is no enclosing try statement.
            this.tryEntries = [{ tryLoc: 'root' }];
            tryLocsList.forEach(pushTryEntry, this);
            this.reset(true);
          }

          exports.keys = function (object) {
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

              if (typeof iterable.next === 'function') {
                return iterable;
              }

              if (!isNaN(iterable.length)) {
                var i = -1,
                  next = function next() {
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

                return (next.next = next);
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

            reset: function (skipTempReset) {
              this.prev = 0;
              this.next = 0;
              // Resetting context._sent for legacy support of Babel's
              // function.sent implementation.
              this.sent = this._sent = undefined;
              this.done = false;
              this.delegate = null;

              this.method = 'next';
              this.arg = undefined;

              this.tryEntries.forEach(resetTryEntry);

              if (!skipTempReset) {
                for (var name in this) {
                  // Not sure about the optimal order of these conditions:
                  if (
                    name.charAt(0) === 't' &&
                    hasOwn.call(this, name) &&
                    !isNaN(+name.slice(1))
                  ) {
                    this[name] = undefined;
                  }
                }
              }
            },

            stop: function () {
              this.done = true;

              var rootEntry = this.tryEntries[0];
              var rootRecord = rootEntry.completion;
              if (rootRecord.type === 'throw') {
                throw rootRecord.arg;
              }

              return this.rval;
            },

            dispatchException: function (exception) {
              if (this.done) {
                throw exception;
              }

              var context = this;
              function handle(loc, caught) {
                record.type = 'throw';
                record.arg = exception;
                context.next = loc;

                if (caught) {
                  // If the dispatched exception was caught by a catch block,
                  // then let that catch block handle the exception normally.
                  context.method = 'next';
                  context.arg = undefined;
                }

                return !!caught;
              }

              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                var record = entry.completion;

                if (entry.tryLoc === 'root') {
                  // Exception thrown outside of any try block that could handle
                  // it, so set the completion value of the entire function to
                  // throw the exception.
                  return handle('end');
                }

                if (entry.tryLoc <= this.prev) {
                  var hasCatch = hasOwn.call(entry, 'catchLoc');
                  var hasFinally = hasOwn.call(entry, 'finallyLoc');

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
                    throw new Error('try statement without catch or finally');
                  }
                }
              }
            },

            abrupt: function (type, arg) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (
                  entry.tryLoc <= this.prev &&
                  hasOwn.call(entry, 'finallyLoc') &&
                  this.prev < entry.finallyLoc
                ) {
                  var finallyEntry = entry;
                  break;
                }
              }

              if (
                finallyEntry &&
                (type === 'break' || type === 'continue') &&
                finallyEntry.tryLoc <= arg &&
                arg <= finallyEntry.finallyLoc
              ) {
                // Ignore the finally entry if control is not jumping to a
                // location outside the try/catch block.
                finallyEntry = null;
              }

              var record = finallyEntry ? finallyEntry.completion : {};
              record.type = type;
              record.arg = arg;

              if (finallyEntry) {
                this.method = 'next';
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
              }

              return this.complete(record);
            },

            complete: function (record, afterLoc) {
              if (record.type === 'throw') {
                throw record.arg;
              }

              if (record.type === 'break' || record.type === 'continue') {
                this.next = record.arg;
              } else if (record.type === 'return') {
                this.rval = this.arg = record.arg;
                this.method = 'return';
                this.next = 'end';
              } else if (record.type === 'normal' && afterLoc) {
                this.next = afterLoc;
              }

              return ContinueSentinel;
            },

            finish: function (finallyLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                  this.complete(entry.completion, entry.afterLoc);
                  resetTryEntry(entry);
                  return ContinueSentinel;
                }
              }
            },

            catch: function (tryLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                  var record = entry.completion;
                  if (record.type === 'throw') {
                    var thrown = record.arg;
                    resetTryEntry(entry);
                  }
                  return thrown;
                }
              }

              // The context.catch method must only be called with a location
              // argument that corresponds to a known catch block.
              throw new Error('illegal catch attempt');
            },

            delegateYield: function (iterable, resultName, nextLoc) {
              this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc,
              };

              if (this.method === 'next') {
                // Deliberately forget the last sent value so that we don't
                // accidentally pass it on to the delegate.
                this.arg = undefined;
              }

              return ContinueSentinel;
            },
          };

          // Regardless of whether this script is executing as a CommonJS module
          // or not, return the runtime object so that we can declare the variable
          // regeneratorRuntime in the outer scope, which allows this module to be
          // injected easily by `bin/regenerator --include-runtime script.js`.
          return exports;
        })(
          // If this script is executing as a CommonJS module, use module.exports
          // as the regeneratorRuntime namespace. Otherwise create a new empty
          // object. Either way, the resulting object will be used to initialize
          // the regeneratorRuntime variable at the top of this file.
          true ? module.exports : undefined
        );

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
          Function('r', 'regeneratorRuntime = r')(runtime);
        }

        /***/
      },

    /***/ '../node_modules/sweetalert2/dist/sweetalert2.all.js':
      /*!***********************************************************!*\
  !*** ../node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \***********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        /*!
         * sweetalert2 v9.15.3
         * Released under the MIT License.
         */
        (function (global, factory) {
          true ? (module.exports = factory()) : undefined;
        })(this, function () {
          'use strict';

          function _typeof(obj) {
            '@babel/helpers - typeof';

            if (
              typeof Symbol === 'function' &&
              typeof Symbol.iterator === 'symbol'
            ) {
              _typeof = function (obj) {
                return typeof obj;
              };
            } else {
              _typeof = function (obj) {
                return obj &&
                  typeof Symbol === 'function' &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              };
            }

            return _typeof(obj);
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function');
            }
          }

          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps)
              _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            return Constructor;
          }

          function _extends() {
            _extends =
              Object.assign ||
              function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];

                  for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                      target[key] = source[key];
                    }
                  }
                }

                return target;
              };

            return _extends.apply(this, arguments);
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            }

            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass) _setPrototypeOf(subClass, superClass);
          }

          function _getPrototypeOf(o) {
            _getPrototypeOf = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function _getPrototypeOf(o) {
                  return o.__proto__ || Object.getPrototypeOf(o);
                };
            return _getPrototypeOf(o);
          }

          function _setPrototypeOf(o, p) {
            _setPrototypeOf =
              Object.setPrototypeOf ||
              function _setPrototypeOf(o, p) {
                o.__proto__ = p;
                return o;
              };

            return _setPrototypeOf(o, p);
          }

          function _isNativeReflectConstruct() {
            if (typeof Reflect === 'undefined' || !Reflect.construct)
              return false;
            if (Reflect.construct.sham) return false;
            if (typeof Proxy === 'function') return true;

            try {
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              );
              return true;
            } catch (e) {
              return false;
            }
          }

          function _construct(Parent, args, Class) {
            if (_isNativeReflectConstruct()) {
              _construct = Reflect.construct;
            } else {
              _construct = function _construct(Parent, args, Class) {
                var a = [null];
                a.push.apply(a, args);
                var Constructor = Function.bind.apply(Parent, a);
                var instance = new Constructor();
                if (Class) _setPrototypeOf(instance, Class.prototype);
                return instance;
              };
            }

            return _construct.apply(null, arguments);
          }

          function _assertThisInitialized(self) {
            if (self === void 0) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }

            return self;
          }

          function _possibleConstructorReturn(self, call) {
            if (
              call &&
              (typeof call === 'object' || typeof call === 'function')
            ) {
              return call;
            }

            return _assertThisInitialized(self);
          }

          function _createSuper(Derived) {
            var hasNativeReflectConstruct = _isNativeReflectConstruct();

            return function _createSuperInternal() {
              var Super = _getPrototypeOf(Derived),
                result;

              if (hasNativeReflectConstruct) {
                var NewTarget = _getPrototypeOf(this).constructor;

                result = Reflect.construct(Super, arguments, NewTarget);
              } else {
                result = Super.apply(this, arguments);
              }

              return _possibleConstructorReturn(this, result);
            };
          }

          function _superPropBase(object, property) {
            while (!Object.prototype.hasOwnProperty.call(object, property)) {
              object = _getPrototypeOf(object);
              if (object === null) break;
            }

            return object;
          }

          function _get(target, property, receiver) {
            if (typeof Reflect !== 'undefined' && Reflect.get) {
              _get = Reflect.get;
            } else {
              _get = function _get(target, property, receiver) {
                var base = _superPropBase(target, property);

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

          var consolePrefix = 'SweetAlert2:';
          /**
           * Filter the unique values into a new array
           * @param arr
           */

          var uniqueArray = function uniqueArray(arr) {
            var result = [];

            for (var i = 0; i < arr.length; i++) {
              if (result.indexOf(arr[i]) === -1) {
                result.push(arr[i]);
              }
            }

            return result;
          };
          /**
           * Capitalize the first letter of a string
           * @param str
           */

          var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
          };
          /**
           * Returns the array of object values (Object.values isn't supported in IE11)
           * @param obj
           */

          var objectValues = function objectValues(obj) {
            return Object.keys(obj).map(function (key) {
              return obj[key];
            });
          };
          /**
           * Convert NodeList to Array
           * @param nodeList
           */

          var toArray = function toArray(nodeList) {
            return Array.prototype.slice.call(nodeList);
          };
          /**
           * Standardise console warnings
           * @param message
           */

          var warn = function warn(message) {
            console.warn(''.concat(consolePrefix, ' ').concat(message));
          };
          /**
           * Standardise console errors
           * @param message
           */

          var error = function error(message) {
            console.error(''.concat(consolePrefix, ' ').concat(message));
          };
          /**
           * Private global state for `warnOnce`
           * @type {Array}
           * @private
           */

          var previousWarnOnceMessages = [];
          /**
           * Show a console warning, but only if it hasn't already been shown
           * @param message
           */

          var warnOnce = function warnOnce(message) {
            if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
              previousWarnOnceMessages.push(message);
              warn(message);
            }
          };
          /**
           * Show a one-time console warning about deprecated params/methods
           */

          var warnAboutDepreation = function warnAboutDepreation(
            deprecatedParam,
            useInstead
          ) {
            warnOnce(
              '"'
                .concat(
                  deprecatedParam,
                  '" is deprecated and will be removed in the next major release. Please use "'
                )
                .concat(useInstead, '" instead.')
            );
          };
          /**
           * If `arg` is a function, call it (with no arguments or context) and return the result.
           * Otherwise, just pass the value through
           * @param arg
           */

          var callIfFunction = function callIfFunction(arg) {
            return typeof arg === 'function' ? arg() : arg;
          };
          var hasToPromiseFn = function hasToPromiseFn(arg) {
            return arg && typeof arg.toPromise === 'function';
          };
          var asPromise = function asPromise(arg) {
            return hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
          };
          var isPromise = function isPromise(arg) {
            return arg && Promise.resolve(arg) === arg;
          };

          var DismissReason = Object.freeze({
            cancel: 'cancel',
            backdrop: 'backdrop',
            close: 'close',
            esc: 'esc',
            timer: 'timer',
          });

          var isJqueryElement = function isJqueryElement(elem) {
            return _typeof(elem) === 'object' && elem.jquery;
          };

          var isElement = function isElement(elem) {
            return elem instanceof Element || isJqueryElement(elem);
          };

          var argsToParams = function argsToParams(args) {
            var params = {};

            if (_typeof(args[0]) === 'object' && !isElement(args[0])) {
              _extends(params, args[0]);
            } else {
              ['title', 'html', 'icon'].forEach(function (name, index) {
                var arg = args[index];

                if (typeof arg === 'string' || isElement(arg)) {
                  params[name] = arg;
                } else if (arg !== undefined) {
                  error(
                    'Unexpected type of '
                      .concat(name, '! Expected "string" or "Element", got ')
                      .concat(_typeof(arg))
                  );
                }
              });
            }

            return params;
          };

          var swalPrefix = 'swal2-';
          var prefix = function prefix(items) {
            var result = {};

            for (var i in items) {
              result[items[i]] = swalPrefix + items[i];
            }

            return result;
          };
          var swalClasses = prefix([
            'container',
            'shown',
            'height-auto',
            'iosfix',
            'popup',
            'modal',
            'no-backdrop',
            'no-transition',
            'toast',
            'toast-shown',
            'toast-column',
            'show',
            'hide',
            'close',
            'title',
            'header',
            'content',
            'html-container',
            'actions',
            'confirm',
            'cancel',
            'footer',
            'icon',
            'icon-content',
            'image',
            'input',
            'file',
            'range',
            'select',
            'radio',
            'checkbox',
            'label',
            'textarea',
            'inputerror',
            'validation-message',
            'progress-steps',
            'active-progress-step',
            'progress-step',
            'progress-step-line',
            'loading',
            'styled',
            'top',
            'top-start',
            'top-end',
            'top-left',
            'top-right',
            'center',
            'center-start',
            'center-end',
            'center-left',
            'center-right',
            'bottom',
            'bottom-start',
            'bottom-end',
            'bottom-left',
            'bottom-right',
            'grow-row',
            'grow-column',
            'grow-fullscreen',
            'rtl',
            'timer-progress-bar',
            'timer-progress-bar-container',
            'scrollbar-measure',
            'icon-success',
            'icon-warning',
            'icon-info',
            'icon-question',
            'icon-error',
          ]);
          var iconTypes = prefix([
            'success',
            'warning',
            'info',
            'question',
            'error',
          ]);

          var getContainer = function getContainer() {
            return document.body.querySelector(
              '.'.concat(swalClasses.container)
            );
          };
          var elementBySelector = function elementBySelector(selectorString) {
            var container = getContainer();
            return container ? container.querySelector(selectorString) : null;
          };

          var elementByClass = function elementByClass(className) {
            return elementBySelector('.'.concat(className));
          };

          var getPopup = function getPopup() {
            return elementByClass(swalClasses.popup);
          };
          var getIcons = function getIcons() {
            var popup = getPopup();
            return toArray(
              popup.querySelectorAll('.'.concat(swalClasses.icon))
            );
          };
          var getIcon = function getIcon() {
            var visibleIcon = getIcons().filter(function (icon) {
              return isVisible(icon);
            });
            return visibleIcon.length ? visibleIcon[0] : null;
          };
          var getTitle = function getTitle() {
            return elementByClass(swalClasses.title);
          };
          var getContent = function getContent() {
            return elementByClass(swalClasses.content);
          };
          var getHtmlContainer = function getHtmlContainer() {
            return elementByClass(swalClasses['html-container']);
          };
          var getImage = function getImage() {
            return elementByClass(swalClasses.image);
          };
          var getProgressSteps = function getProgressSteps() {
            return elementByClass(swalClasses['progress-steps']);
          };
          var getValidationMessage = function getValidationMessage() {
            return elementByClass(swalClasses['validation-message']);
          };
          var getConfirmButton = function getConfirmButton() {
            return elementBySelector(
              '.'.concat(swalClasses.actions, ' .').concat(swalClasses.confirm)
            );
          };
          var getCancelButton = function getCancelButton() {
            return elementBySelector(
              '.'.concat(swalClasses.actions, ' .').concat(swalClasses.cancel)
            );
          };
          var getActions = function getActions() {
            return elementByClass(swalClasses.actions);
          };
          var getHeader = function getHeader() {
            return elementByClass(swalClasses.header);
          };
          var getFooter = function getFooter() {
            return elementByClass(swalClasses.footer);
          };
          var getTimerProgressBar = function getTimerProgressBar() {
            return elementByClass(swalClasses['timer-progress-bar']);
          };
          var getCloseButton = function getCloseButton() {
            return elementByClass(swalClasses.close);
          }; // https://github.com/jkup/focusable/blob/master/index.js

          var focusable =
            '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n';
          var getFocusableElements = function getFocusableElements() {
            var focusableElementsWithTabindex = toArray(
              getPopup().querySelectorAll(
                '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
              )
            ) // sort according to tabindex
              .sort(function (a, b) {
                a = parseInt(a.getAttribute('tabindex'));
                b = parseInt(b.getAttribute('tabindex'));

                if (a > b) {
                  return 1;
                } else if (a < b) {
                  return -1;
                }

                return 0;
              });
            var otherFocusableElements = toArray(
              getPopup().querySelectorAll(focusable)
            ).filter(function (el) {
              return el.getAttribute('tabindex') !== '-1';
            });
            return uniqueArray(
              focusableElementsWithTabindex.concat(otherFocusableElements)
            ).filter(function (el) {
              return isVisible(el);
            });
          };
          var isModal = function isModal() {
            return (
              !isToast() &&
              !document.body.classList.contains(swalClasses['no-backdrop'])
            );
          };
          var isToast = function isToast() {
            return document.body.classList.contains(swalClasses['toast-shown']);
          };
          var isLoading = function isLoading() {
            return getPopup().hasAttribute('data-loading');
          };

          var states = {
            previousBodyPadding: null,
          };
          var setInnerHtml = function setInnerHtml(elem, html) {
            // #1926
            elem.textContent = '';

            if (html) {
              var parser = new DOMParser();
              var parsed = parser.parseFromString(html, 'text/html');
              toArray(parsed.querySelector('head').childNodes).forEach(
                function (child) {
                  elem.appendChild(child);
                }
              );
              toArray(parsed.querySelector('body').childNodes).forEach(
                function (child) {
                  elem.appendChild(child);
                }
              );
            }
          };
          var hasClass = function hasClass(elem, className) {
            if (!className) {
              return false;
            }

            var classList = className.split(/\s+/);

            for (var i = 0; i < classList.length; i++) {
              if (!elem.classList.contains(classList[i])) {
                return false;
              }
            }

            return true;
          };

          var removeCustomClasses = function removeCustomClasses(elem, params) {
            toArray(elem.classList).forEach(function (className) {
              if (
                !(objectValues(swalClasses).indexOf(className) !== -1) &&
                !(objectValues(iconTypes).indexOf(className) !== -1) &&
                !(objectValues(params.showClass).indexOf(className) !== -1)
              ) {
                elem.classList.remove(className);
              }
            });
          };

          var applyCustomClass = function applyCustomClass(
            elem,
            params,
            className
          ) {
            removeCustomClasses(elem, params);

            if (params.customClass && params.customClass[className]) {
              if (
                typeof params.customClass[className] !== 'string' &&
                !params.customClass[className].forEach
              ) {
                return warn(
                  'Invalid type of customClass.'
                    .concat(
                      className,
                      '! Expected string or iterable object, got "'
                    )
                    .concat(_typeof(params.customClass[className]), '"')
                );
              }

              addClass(elem, params.customClass[className]);
            }
          };
          function getInput(content, inputType) {
            if (!inputType) {
              return null;
            }

            switch (inputType) {
              case 'select':
              case 'textarea':
              case 'file':
                return getChildByClass(content, swalClasses[inputType]);

              case 'checkbox':
                return content.querySelector(
                  '.'.concat(swalClasses.checkbox, ' input')
                );

              case 'radio':
                return (
                  content.querySelector(
                    '.'.concat(swalClasses.radio, ' input:checked')
                  ) ||
                  content.querySelector(
                    '.'.concat(swalClasses.radio, ' input:first-child')
                  )
                );

              case 'range':
                return content.querySelector(
                  '.'.concat(swalClasses.range, ' input')
                );

              default:
                return getChildByClass(content, swalClasses.input);
            }
          }
          var focusInput = function focusInput(input) {
            input.focus(); // place cursor at end of text in text input

            if (input.type !== 'file') {
              // http://stackoverflow.com/a/2345915
              var val = input.value;
              input.value = '';
              input.value = val;
            }
          };
          var toggleClass = function toggleClass(target, classList, condition) {
            if (!target || !classList) {
              return;
            }

            if (typeof classList === 'string') {
              classList = classList.split(/\s+/).filter(Boolean);
            }

            classList.forEach(function (className) {
              if (target.forEach) {
                target.forEach(function (elem) {
                  condition
                    ? elem.classList.add(className)
                    : elem.classList.remove(className);
                });
              } else {
                condition
                  ? target.classList.add(className)
                  : target.classList.remove(className);
              }
            });
          };
          var addClass = function addClass(target, classList) {
            toggleClass(target, classList, true);
          };
          var removeClass = function removeClass(target, classList) {
            toggleClass(target, classList, false);
          };
          var getChildByClass = function getChildByClass(elem, className) {
            for (var i = 0; i < elem.childNodes.length; i++) {
              if (hasClass(elem.childNodes[i], className)) {
                return elem.childNodes[i];
              }
            }
          };
          var applyNumericalStyle = function applyNumericalStyle(
            elem,
            property,
            value
          ) {
            if (value || parseInt(value) === 0) {
              elem.style[property] =
                typeof value === 'number' ? ''.concat(value, 'px') : value;
            } else {
              elem.style.removeProperty(property);
            }
          };
          var show = function show(elem) {
            var display =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : 'flex';
            elem.style.opacity = '';
            elem.style.display = display;
          };
          var hide = function hide(elem) {
            elem.style.opacity = '';
            elem.style.display = 'none';
          };
          var toggle = function toggle(elem, condition, display) {
            condition ? show(elem, display) : hide(elem);
          }; // borrowed from jquery $(elem).is(':visible') implementation

          var isVisible = function isVisible(elem) {
            return !!(
              elem &&
              (elem.offsetWidth ||
                elem.offsetHeight ||
                elem.getClientRects().length)
            );
          };
          /* istanbul ignore next */

          var isScrollable = function isScrollable(elem) {
            return !!(elem.scrollHeight > elem.clientHeight);
          }; // borrowed from https://stackoverflow.com/a/46352119

          var hasCssAnimation = function hasCssAnimation(elem) {
            var style = window.getComputedStyle(elem);
            var animDuration = parseFloat(
              style.getPropertyValue('animation-duration') || '0'
            );
            var transDuration = parseFloat(
              style.getPropertyValue('transition-duration') || '0'
            );
            return animDuration > 0 || transDuration > 0;
          };
          var contains = function contains(haystack, needle) {
            if (typeof haystack.contains === 'function') {
              return haystack.contains(needle);
            }
          };
          var animateTimerProgressBar = function animateTimerProgressBar(
            timer
          ) {
            var reset =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : false;
            var timerProgressBar = getTimerProgressBar();

            if (isVisible(timerProgressBar)) {
              if (reset) {
                timerProgressBar.style.transition = 'none';
                timerProgressBar.style.width = '100%';
              }

              setTimeout(function () {
                timerProgressBar.style.transition = 'width '.concat(
                  timer / 1000,
                  's linear'
                );
                timerProgressBar.style.width = '0%';
              }, 10);
            }
          };
          var stopTimerProgressBar = function stopTimerProgressBar() {
            var timerProgressBar = getTimerProgressBar();
            var timerProgressBarWidth = parseInt(
              window.getComputedStyle(timerProgressBar).width
            );
            timerProgressBar.style.removeProperty('transition');
            timerProgressBar.style.width = '100%';
            var timerProgressBarFullWidth = parseInt(
              window.getComputedStyle(timerProgressBar).width
            );
            var timerProgressBarPercent = parseInt(
              (timerProgressBarWidth / timerProgressBarFullWidth) * 100
            );
            timerProgressBar.style.removeProperty('transition');
            timerProgressBar.style.width = ''.concat(
              timerProgressBarPercent,
              '%'
            );
          };

          // Detect Node env
          var isNodeEnv = function isNodeEnv() {
            return (
              typeof window === 'undefined' || typeof document === 'undefined'
            );
          };

          var sweetHTML = '\n <div aria-labelledby="'
            .concat(swalClasses.title, '" aria-describedby="')
            .concat(swalClasses.content, '" class="')
            .concat(swalClasses.popup, '" tabindex="-1">\n   <div class="')
            .concat(swalClasses.header, '">\n     <ul class="')
            .concat(swalClasses['progress-steps'], '"></ul>\n     <div class="')
            .concat(swalClasses.icon, ' ')
            .concat(iconTypes.error, '"></div>\n     <div class="')
            .concat(swalClasses.icon, ' ')
            .concat(iconTypes.question, '"></div>\n     <div class="')
            .concat(swalClasses.icon, ' ')
            .concat(iconTypes.warning, '"></div>\n     <div class="')
            .concat(swalClasses.icon, ' ')
            .concat(iconTypes.info, '"></div>\n     <div class="')
            .concat(swalClasses.icon, ' ')
            .concat(iconTypes.success, '"></div>\n     <img class="')
            .concat(swalClasses.image, '" />\n     <h2 class="')
            .concat(swalClasses.title, '" id="')
            .concat(
              swalClasses.title,
              '"></h2>\n     <button type="button" class="'
            )
            .concat(
              swalClasses.close,
              '"></button>\n   </div>\n   <div class="'
            )
            .concat(swalClasses.content, '">\n     <div id="')
            .concat(swalClasses.content, '" class="')
            .concat(
              swalClasses['html-container'],
              '"></div>\n     <input class="'
            )
            .concat(swalClasses.input, '" />\n     <input type="file" class="')
            .concat(swalClasses.file, '" />\n     <div class="')
            .concat(
              swalClasses.range,
              '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="'
            )
            .concat(swalClasses.select, '"></select>\n     <div class="')
            .concat(swalClasses.radio, '"></div>\n     <label for="')
            .concat(swalClasses.checkbox, '" class="')
            .concat(
              swalClasses.checkbox,
              '">\n       <input type="checkbox" />\n       <span class="'
            )
            .concat(
              swalClasses.label,
              '"></span>\n     </label>\n     <textarea class="'
            )
            .concat(swalClasses.textarea, '"></textarea>\n     <div class="')
            .concat(swalClasses['validation-message'], '" id="')
            .concat(
              swalClasses['validation-message'],
              '"></div>\n   </div>\n   <div class="'
            )
            .concat(
              swalClasses.actions,
              '">\n     <button type="button" class="'
            )
            .concat(
              swalClasses.confirm,
              '">OK</button>\n     <button type="button" class="'
            )
            .concat(
              swalClasses.cancel,
              '">Cancel</button>\n   </div>\n   <div class="'
            )
            .concat(swalClasses.footer, '"></div>\n   <div class="')
            .concat(
              swalClasses['timer-progress-bar-container'],
              '">\n     <div class="'
            )
            .concat(
              swalClasses['timer-progress-bar'],
              '"></div>\n   </div>\n </div>\n'
            )
            .replace(/(^|\n)\s*/g, '');

          var resetOldContainer = function resetOldContainer() {
            var oldContainer = getContainer();

            if (!oldContainer) {
              return false;
            }

            oldContainer.parentNode.removeChild(oldContainer);
            removeClass(
              [document.documentElement, document.body],
              [
                swalClasses['no-backdrop'],
                swalClasses['toast-shown'],
                swalClasses['has-column'],
              ]
            );
            return true;
          };

          var oldInputVal; // IE11 workaround, see #1109 for details

          var resetValidationMessage = function resetValidationMessage(e) {
            if (Swal.isVisible() && oldInputVal !== e.target.value) {
              Swal.resetValidationMessage();
            }

            oldInputVal = e.target.value;
          };

          var addInputChangeListeners = function addInputChangeListeners() {
            var content = getContent();
            var input = getChildByClass(content, swalClasses.input);
            var file = getChildByClass(content, swalClasses.file);
            var range = content.querySelector(
              '.'.concat(swalClasses.range, ' input')
            );
            var rangeOutput = content.querySelector(
              '.'.concat(swalClasses.range, ' output')
            );
            var select = getChildByClass(content, swalClasses.select);
            var checkbox = content.querySelector(
              '.'.concat(swalClasses.checkbox, ' input')
            );
            var textarea = getChildByClass(content, swalClasses.textarea);
            input.oninput = resetValidationMessage;
            file.onchange = resetValidationMessage;
            select.onchange = resetValidationMessage;
            checkbox.onchange = resetValidationMessage;
            textarea.oninput = resetValidationMessage;

            range.oninput = function (e) {
              resetValidationMessage(e);
              rangeOutput.value = range.value;
            };

            range.onchange = function (e) {
              resetValidationMessage(e);
              range.nextSibling.value = range.value;
            };
          };

          var getTarget = function getTarget(target) {
            return typeof target === 'string'
              ? document.querySelector(target)
              : target;
          };

          var setupAccessibility = function setupAccessibility(params) {
            var popup = getPopup();
            popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
            popup.setAttribute(
              'aria-live',
              params.toast ? 'polite' : 'assertive'
            );

            if (!params.toast) {
              popup.setAttribute('aria-modal', 'true');
            }
          };

          var setupRTL = function setupRTL(targetElement) {
            if (window.getComputedStyle(targetElement).direction === 'rtl') {
              addClass(getContainer(), swalClasses.rtl);
            }
          };
          /*
           * Add modal + backdrop to DOM
           */

          var init = function init(params) {
            // Clean up the old popup container if it exists
            var oldContainerExisted = resetOldContainer();
            /* istanbul ignore if */

            if (isNodeEnv()) {
              error('SweetAlert2 requires document to initialize');
              return;
            }

            var container = document.createElement('div');
            container.className = swalClasses.container;

            if (oldContainerExisted) {
              addClass(container, swalClasses['no-transition']);
            }

            setInnerHtml(container, sweetHTML);
            var targetElement = getTarget(params.target);
            targetElement.appendChild(container);
            setupAccessibility(params);
            setupRTL(targetElement);
            addInputChangeListeners();
          };

          var parseHtmlToContainer = function parseHtmlToContainer(
            param,
            target
          ) {
            // DOM element
            if (param instanceof HTMLElement) {
              target.appendChild(param); // Object
            } else if (_typeof(param) === 'object') {
              handleObject(param, target); // Plain string
            } else if (param) {
              setInnerHtml(target, param);
            }
          };

          var handleObject = function handleObject(param, target) {
            // JQuery element(s)
            if (param.jquery) {
              handleJqueryElem(target, param); // For other objects use their string representation
            } else {
              setInnerHtml(target, param.toString());
            }
          };

          var handleJqueryElem = function handleJqueryElem(target, elem) {
            target.textContent = '';

            if (0 in elem) {
              for (var i = 0; i in elem; i++) {
                target.appendChild(elem[i].cloneNode(true));
              }
            } else {
              target.appendChild(elem.cloneNode(true));
            }
          };

          var animationEndEvent = (function () {
            // Prevent run in Node env

            /* istanbul ignore if */
            if (isNodeEnv()) {
              return false;
            }

            var testEl = document.createElement('div');
            var transEndEventNames = {
              WebkitAnimation: 'webkitAnimationEnd',
              OAnimation: 'oAnimationEnd oanimationend',
              animation: 'animationend',
            };

            for (var i in transEndEventNames) {
              if (
                Object.prototype.hasOwnProperty.call(transEndEventNames, i) &&
                typeof testEl.style[i] !== 'undefined'
              ) {
                return transEndEventNames[i];
              }
            }

            return false;
          })();

          // https://github.com/twbs/bootstrap/blob/master/js/src/modal.js

          var measureScrollbar = function measureScrollbar() {
            var scrollDiv = document.createElement('div');
            scrollDiv.className = swalClasses['scrollbar-measure'];
            document.body.appendChild(scrollDiv);
            var scrollbarWidth =
              scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
            document.body.removeChild(scrollDiv);
            return scrollbarWidth;
          };

          var renderActions = function renderActions(instance, params) {
            var actions = getActions();
            var confirmButton = getConfirmButton();
            var cancelButton = getCancelButton(); // Actions (buttons) wrapper

            if (!params.showConfirmButton && !params.showCancelButton) {
              hide(actions);
            } // Custom class

            applyCustomClass(actions, params, 'actions'); // Render confirm button

            renderButton(confirmButton, 'confirm', params); // render Cancel Button

            renderButton(cancelButton, 'cancel', params);

            if (params.buttonsStyling) {
              handleButtonsStyling(confirmButton, cancelButton, params);
            } else {
              removeClass([confirmButton, cancelButton], swalClasses.styled);
              confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor =
                '';
              cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor =
                '';
            }

            if (params.reverseButtons) {
              confirmButton.parentNode.insertBefore(
                cancelButton,
                confirmButton
              );
            }
          };

          function handleButtonsStyling(confirmButton, cancelButton, params) {
            addClass([confirmButton, cancelButton], swalClasses.styled); // Buttons background colors

            if (params.confirmButtonColor) {
              confirmButton.style.backgroundColor = params.confirmButtonColor;
            }

            if (params.cancelButtonColor) {
              cancelButton.style.backgroundColor = params.cancelButtonColor;
            } // Loading state

            if (!isLoading()) {
              var confirmButtonBackgroundColor = window
                .getComputedStyle(confirmButton)
                .getPropertyValue('background-color');
              confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
              confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
            }
          }

          function renderButton(button, buttonType, params) {
            toggle(
              button,
              params[
                'show'.concat(capitalizeFirstLetter(buttonType), 'Button')
              ],
              'inline-block'
            );
            setInnerHtml(button, params[''.concat(buttonType, 'ButtonText')]); // Set caption text

            button.setAttribute(
              'aria-label',
              params[''.concat(buttonType, 'ButtonAriaLabel')]
            ); // ARIA label
            // Add buttons custom classes

            button.className = swalClasses[buttonType];
            applyCustomClass(button, params, ''.concat(buttonType, 'Button'));
            addClass(button, params[''.concat(buttonType, 'ButtonClass')]);
          }

          function handleBackdropParam(container, backdrop) {
            if (typeof backdrop === 'string') {
              container.style.background = backdrop;
            } else if (!backdrop) {
              addClass(
                [document.documentElement, document.body],
                swalClasses['no-backdrop']
              );
            }
          }

          function handlePositionParam(container, position) {
            if (position in swalClasses) {
              addClass(container, swalClasses[position]);
            } else {
              warn(
                'The "position" parameter is not valid, defaulting to "center"'
              );
              addClass(container, swalClasses.center);
            }
          }

          function handleGrowParam(container, grow) {
            if (grow && typeof grow === 'string') {
              var growClass = 'grow-'.concat(grow);

              if (growClass in swalClasses) {
                addClass(container, swalClasses[growClass]);
              }
            }
          }

          var renderContainer = function renderContainer(instance, params) {
            var container = getContainer();

            if (!container) {
              return;
            }

            handleBackdropParam(container, params.backdrop);

            if (!params.backdrop && params.allowOutsideClick) {
              warn(
                '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
              );
            }

            handlePositionParam(container, params.position);
            handleGrowParam(container, params.grow); // Custom class

            applyCustomClass(container, params, 'container'); // Set queue step attribute for getQueueStep() method

            var queueStep = document.body.getAttribute('data-swal2-queue-step');

            if (queueStep) {
              container.setAttribute('data-queue-step', queueStep);
              document.body.removeAttribute('data-swal2-queue-step');
            }
          };

          /**
           * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
           * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
           * This is the approach that Babel will probably take to implement private methods/fields
           *   https://github.com/tc39/proposal-private-methods
           *   https://github.com/babel/babel/pull/7555
           * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
           *   then we can use that language feature.
           */
          var privateProps = {
            promise: new WeakMap(),
            innerParams: new WeakMap(),
            domCache: new WeakMap(),
          };

          var inputTypes = [
            'input',
            'file',
            'range',
            'select',
            'radio',
            'checkbox',
            'textarea',
          ];
          var renderInput = function renderInput(instance, params) {
            var content = getContent();
            var innerParams = privateProps.innerParams.get(instance);
            var rerender = !innerParams || params.input !== innerParams.input;
            inputTypes.forEach(function (inputType) {
              var inputClass = swalClasses[inputType];
              var inputContainer = getChildByClass(content, inputClass); // set attributes

              setAttributes(inputType, params.inputAttributes); // set class

              inputContainer.className = inputClass;

              if (rerender) {
                hide(inputContainer);
              }
            });

            if (params.input) {
              if (rerender) {
                showInput(params);
              } // set custom class

              setCustomClass(params);
            }
          };

          var showInput = function showInput(params) {
            if (!renderInputType[params.input]) {
              return error(
                'Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(
                  params.input,
                  '"'
                )
              );
            }

            var inputContainer = getInputContainer(params.input);
            var input = renderInputType[params.input](inputContainer, params);
            show(input); // input autofocus

            setTimeout(function () {
              focusInput(input);
            });
          };

          var removeAttributes = function removeAttributes(input) {
            for (var i = 0; i < input.attributes.length; i++) {
              var attrName = input.attributes[i].name;

              if (!(['type', 'value', 'style'].indexOf(attrName) !== -1)) {
                input.removeAttribute(attrName);
              }
            }
          };

          var setAttributes = function setAttributes(
            inputType,
            inputAttributes
          ) {
            var input = getInput(getContent(), inputType);

            if (!input) {
              return;
            }

            removeAttributes(input);

            for (var attr in inputAttributes) {
              // Do not set a placeholder for <input type="range">
              // it'll crash Edge, #1298
              if (inputType === 'range' && attr === 'placeholder') {
                continue;
              }

              input.setAttribute(attr, inputAttributes[attr]);
            }
          };

          var setCustomClass = function setCustomClass(params) {
            var inputContainer = getInputContainer(params.input);

            if (params.customClass) {
              addClass(inputContainer, params.customClass.input);
            }
          };

          var setInputPlaceholder = function setInputPlaceholder(
            input,
            params
          ) {
            if (!input.placeholder || params.inputPlaceholder) {
              input.placeholder = params.inputPlaceholder;
            }
          };

          var getInputContainer = function getInputContainer(inputType) {
            var inputClass = swalClasses[inputType]
              ? swalClasses[inputType]
              : swalClasses.input;
            return getChildByClass(getContent(), inputClass);
          };

          var renderInputType = {};

          renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (
            input,
            params
          ) {
            if (
              typeof params.inputValue === 'string' ||
              typeof params.inputValue === 'number'
            ) {
              input.value = params.inputValue;
            } else if (!isPromise(params.inputValue)) {
              warn(
                'Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(
                  _typeof(params.inputValue),
                  '"'
                )
              );
            }

            setInputPlaceholder(input, params);
            input.type = params.input;
            return input;
          };

          renderInputType.file = function (input, params) {
            setInputPlaceholder(input, params);
            return input;
          };

          renderInputType.range = function (range, params) {
            var rangeInput = range.querySelector('input');
            var rangeOutput = range.querySelector('output');
            rangeInput.value = params.inputValue;
            rangeInput.type = params.input;
            rangeOutput.value = params.inputValue;
            return range;
          };

          renderInputType.select = function (select, params) {
            select.textContent = '';

            if (params.inputPlaceholder) {
              var placeholder = document.createElement('option');
              setInnerHtml(placeholder, params.inputPlaceholder);
              placeholder.value = '';
              placeholder.disabled = true;
              placeholder.selected = true;
              select.appendChild(placeholder);
            }

            return select;
          };

          renderInputType.radio = function (radio) {
            radio.textContent = '';
            return radio;
          };

          renderInputType.checkbox = function (checkboxContainer, params) {
            var checkbox = getInput(getContent(), 'checkbox');
            checkbox.value = 1;
            checkbox.id = swalClasses.checkbox;
            checkbox.checked = Boolean(params.inputValue);
            var label = checkboxContainer.querySelector('span');
            setInnerHtml(label, params.inputPlaceholder);
            return checkboxContainer;
          };

          renderInputType.textarea = function (textarea, params) {
            textarea.value = params.inputValue;
            setInputPlaceholder(textarea, params);

            if ('MutationObserver' in window) {
              // #1699
              var initialPopupWidth = parseInt(
                window.getComputedStyle(getPopup()).width
              );
              var popupPadding =
                parseInt(window.getComputedStyle(getPopup()).paddingLeft) +
                parseInt(window.getComputedStyle(getPopup()).paddingRight);

              var outputsize = function outputsize() {
                var contentWidth = textarea.offsetWidth + popupPadding;

                if (contentWidth > initialPopupWidth) {
                  getPopup().style.width = ''.concat(contentWidth, 'px');
                } else {
                  getPopup().style.width = null;
                }
              };

              new MutationObserver(outputsize).observe(textarea, {
                attributes: true,
                attributeFilter: ['style'],
              });
            }

            return textarea;
          };

          var renderContent = function renderContent(instance, params) {
            var content = getContent().querySelector(
              '#'.concat(swalClasses.content)
            ); // Content as HTML

            if (params.html) {
              parseHtmlToContainer(params.html, content);
              show(content, 'block'); // Content as plain text
            } else if (params.text) {
              content.textContent = params.text;
              show(content, 'block'); // No content
            } else {
              hide(content);
            }

            renderInput(instance, params); // Custom class

            applyCustomClass(getContent(), params, 'content');
          };

          var renderFooter = function renderFooter(instance, params) {
            var footer = getFooter();
            toggle(footer, params.footer);

            if (params.footer) {
              parseHtmlToContainer(params.footer, footer);
            } // Custom class

            applyCustomClass(footer, params, 'footer');
          };

          var renderCloseButton = function renderCloseButton(instance, params) {
            var closeButton = getCloseButton();
            setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

            applyCustomClass(closeButton, params, 'closeButton');
            toggle(closeButton, params.showCloseButton);
            closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
          };

          var renderIcon = function renderIcon(instance, params) {
            var innerParams = privateProps.innerParams.get(instance); // if the give icon already rendered, apply the custom class without re-rendering the icon

            if (innerParams && params.icon === innerParams.icon && getIcon()) {
              applyCustomClass(getIcon(), params, 'icon');
              return;
            }

            hideAllIcons();

            if (!params.icon) {
              return;
            }

            if (Object.keys(iconTypes).indexOf(params.icon) !== -1) {
              var icon = elementBySelector(
                '.'.concat(swalClasses.icon, '.').concat(iconTypes[params.icon])
              );
              show(icon); // Custom or default content

              setContent(icon, params);
              adjustSuccessIconBackgoundColor(); // Custom class

              applyCustomClass(icon, params, 'icon'); // Animate icon

              addClass(icon, params.showClass.icon);
            } else {
              error(
                'Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(
                  params.icon,
                  '"'
                )
              );
            }
          };

          var hideAllIcons = function hideAllIcons() {
            var icons = getIcons();

            for (var i = 0; i < icons.length; i++) {
              hide(icons[i]);
            }
          }; // Adjust success icon background color to match the popup background color

          var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
            var popup = getPopup();
            var popupBackgroundColor = window
              .getComputedStyle(popup)
              .getPropertyValue('background-color');
            var successIconParts = popup.querySelectorAll(
              '[class^=swal2-success-circular-line], .swal2-success-fix'
            );

            for (var i = 0; i < successIconParts.length; i++) {
              successIconParts[i].style.backgroundColor = popupBackgroundColor;
            }
          };

          var setContent = function setContent(icon, params) {
            icon.textContent = '';

            if (params.iconHtml) {
              setInnerHtml(icon, iconContent(params.iconHtml));
            } else if (params.icon === 'success') {
              setInnerHtml(
                icon,
                '\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    '
              );
            } else if (params.icon === 'error') {
              setInnerHtml(
                icon,
                '\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    '
              );
            } else {
              var defaultIconHtml = {
                question: '?',
                warning: '!',
                info: 'i',
              };
              setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
            }
          };

          var iconContent = function iconContent(content) {
            return '<div class="'
              .concat(swalClasses['icon-content'], '">')
              .concat(content, '</div>');
          };

          var renderImage = function renderImage(instance, params) {
            var image = getImage();

            if (!params.imageUrl) {
              return hide(image);
            }

            show(image, ''); // Src, alt

            image.setAttribute('src', params.imageUrl);
            image.setAttribute('alt', params.imageAlt); // Width, height

            applyNumericalStyle(image, 'width', params.imageWidth);
            applyNumericalStyle(image, 'height', params.imageHeight); // Class

            image.className = swalClasses.image;
            applyCustomClass(image, params, 'image');
          };

          var currentSteps = [];
          /*
           * Global function for chaining sweetAlert popups
           */

          var queue = function queue(steps) {
            var Swal = this;
            currentSteps = steps;

            var resetAndResolve = function resetAndResolve(resolve, value) {
              currentSteps = [];
              resolve(value);
            };

            var queueResult = [];
            return new Promise(function (resolve) {
              (function step(i, callback) {
                if (i < currentSteps.length) {
                  document.body.setAttribute('data-swal2-queue-step', i);
                  Swal.fire(currentSteps[i]).then(function (result) {
                    if (typeof result.value !== 'undefined') {
                      queueResult.push(result.value);
                      step(i + 1, callback);
                    } else {
                      resetAndResolve(resolve, {
                        dismiss: result.dismiss,
                      });
                    }
                  });
                } else {
                  resetAndResolve(resolve, {
                    value: queueResult,
                  });
                }
              })(0);
            });
          };
          /*
           * Global function for getting the index of current popup in queue
           */

          var getQueueStep = function getQueueStep() {
            return (
              getContainer() && getContainer().getAttribute('data-queue-step')
            );
          };
          /*
           * Global function for inserting a popup to the queue
           */

          var insertQueueStep = function insertQueueStep(step, index) {
            if (index && index < currentSteps.length) {
              return currentSteps.splice(index, 0, step);
            }

            return currentSteps.push(step);
          };
          /*
           * Global function for deleting a popup from the queue
           */

          var deleteQueueStep = function deleteQueueStep(index) {
            if (typeof currentSteps[index] !== 'undefined') {
              currentSteps.splice(index, 1);
            }
          };

          var createStepElement = function createStepElement(step) {
            var stepEl = document.createElement('li');
            addClass(stepEl, swalClasses['progress-step']);
            setInnerHtml(stepEl, step);
            return stepEl;
          };

          var createLineElement = function createLineElement(params) {
            var lineEl = document.createElement('li');
            addClass(lineEl, swalClasses['progress-step-line']);

            if (params.progressStepsDistance) {
              lineEl.style.width = params.progressStepsDistance;
            }

            return lineEl;
          };

          var renderProgressSteps = function renderProgressSteps(
            instance,
            params
          ) {
            var progressStepsContainer = getProgressSteps();

            if (!params.progressSteps || params.progressSteps.length === 0) {
              return hide(progressStepsContainer);
            }

            show(progressStepsContainer);
            progressStepsContainer.textContent = '';
            var currentProgressStep = parseInt(
              params.currentProgressStep === undefined
                ? getQueueStep()
                : params.currentProgressStep
            );

            if (currentProgressStep >= params.progressSteps.length) {
              warn(
                'Invalid currentProgressStep parameter, it should be less than progressSteps.length ' +
                  '(currentProgressStep like JS arrays starts from 0)'
              );
            }

            params.progressSteps.forEach(function (step, index) {
              var stepEl = createStepElement(step);
              progressStepsContainer.appendChild(stepEl);

              if (index === currentProgressStep) {
                addClass(stepEl, swalClasses['active-progress-step']);
              }

              if (index !== params.progressSteps.length - 1) {
                var lineEl = createLineElement(params);
                progressStepsContainer.appendChild(lineEl);
              }
            });
          };

          var renderTitle = function renderTitle(instance, params) {
            var title = getTitle();
            toggle(title, params.title || params.titleText);

            if (params.title) {
              parseHtmlToContainer(params.title, title);
            }

            if (params.titleText) {
              title.innerText = params.titleText;
            } // Custom class

            applyCustomClass(title, params, 'title');
          };

          var renderHeader = function renderHeader(instance, params) {
            var header = getHeader(); // Custom class

            applyCustomClass(header, params, 'header'); // Progress steps

            renderProgressSteps(instance, params); // Icon

            renderIcon(instance, params); // Image

            renderImage(instance, params); // Title

            renderTitle(instance, params); // Close button

            renderCloseButton(instance, params);
          };

          var renderPopup = function renderPopup(instance, params) {
            var popup = getPopup(); // Width

            applyNumericalStyle(popup, 'width', params.width); // Padding

            applyNumericalStyle(popup, 'padding', params.padding); // Background

            if (params.background) {
              popup.style.background = params.background;
            } // Classes

            addClasses(popup, params);
          };

          var addClasses = function addClasses(popup, params) {
            // Default Class + showClass when updating Swal.update({})
            popup.className = ''
              .concat(swalClasses.popup, ' ')
              .concat(isVisible(popup) ? params.showClass.popup : '');

            if (params.toast) {
              addClass(
                [document.documentElement, document.body],
                swalClasses['toast-shown']
              );
              addClass(popup, swalClasses.toast);
            } else {
              addClass(popup, swalClasses.modal);
            } // Custom class

            applyCustomClass(popup, params, 'popup');

            if (typeof params.customClass === 'string') {
              addClass(popup, params.customClass);
            } // Icon class (#1842)

            if (params.icon) {
              addClass(popup, swalClasses['icon-'.concat(params.icon)]);
            }
          };

          var render = function render(instance, params) {
            renderPopup(instance, params);
            renderContainer(instance, params);
            renderHeader(instance, params);
            renderContent(instance, params);
            renderActions(instance, params);
            renderFooter(instance, params);

            if (typeof params.onRender === 'function') {
              params.onRender(getPopup());
            }
          };

          /*
           * Global function to determine if SweetAlert2 popup is shown
           */

          var isVisible$1 = function isVisible$$1() {
            return isVisible(getPopup());
          };
          /*
           * Global function to click 'Confirm' button
           */

          var clickConfirm = function clickConfirm() {
            return getConfirmButton() && getConfirmButton().click();
          };
          /*
           * Global function to click 'Cancel' button
           */

          var clickCancel = function clickCancel() {
            return getCancelButton() && getCancelButton().click();
          };

          function fire() {
            var Swal = this;

            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }

            return _construct(Swal, args);
          }

          /**
           * Returns an extended version of `Swal` containing `params` as defaults.
           * Useful for reusing Swal configuration.
           *
           * For example:
           *
           * Before:
           * const textPromptOptions = { input: 'text', showCancelButton: true }
           * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
           * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
           *
           * After:
           * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
           * const {value: firstName} = await TextPrompt('What is your first name?')
           * const {value: lastName} = await TextPrompt('What is your last name?')
           *
           * @param mixinParams
           */
          function mixin(mixinParams) {
            var MixinSwal = /*#__PURE__*/ (function (_this) {
              _inherits(MixinSwal, _this);

              var _super = _createSuper(MixinSwal);

              function MixinSwal() {
                _classCallCheck(this, MixinSwal);

                return _super.apply(this, arguments);
              }

              _createClass(MixinSwal, [
                {
                  key: '_main',
                  value: function _main(params) {
                    return _get(
                      _getPrototypeOf(MixinSwal.prototype),
                      '_main',
                      this
                    ).call(this, _extends({}, mixinParams, params));
                  },
                },
              ]);

              return MixinSwal;
            })(this);

            return MixinSwal;
          }

          /**
           * Show spinner instead of Confirm button
           */

          var showLoading = function showLoading() {
            var popup = getPopup();

            if (!popup) {
              Swal.fire();
            }

            popup = getPopup();
            var actions = getActions();
            var confirmButton = getConfirmButton();
            show(actions);
            show(confirmButton, 'inline-block');
            addClass([popup, actions], swalClasses.loading);
            confirmButton.disabled = true;
            popup.setAttribute('data-loading', true);
            popup.setAttribute('aria-busy', true);
            popup.focus();
          };

          var RESTORE_FOCUS_TIMEOUT = 100;

          var globalState = {};

          var focusPreviousActiveElement = function focusPreviousActiveElement() {
            if (
              globalState.previousActiveElement &&
              globalState.previousActiveElement.focus
            ) {
              globalState.previousActiveElement.focus();
              globalState.previousActiveElement = null;
            } else if (document.body) {
              document.body.focus();
            }
          }; // Restore previous active (focused) element

          var restoreActiveElement = function restoreActiveElement() {
            return new Promise(function (resolve) {
              var x = window.scrollX;
              var y = window.scrollY;
              globalState.restoreFocusTimeout = setTimeout(function () {
                focusPreviousActiveElement();
                resolve();
              }, RESTORE_FOCUS_TIMEOUT); // issues/900

              /* istanbul ignore if */

              if (typeof x !== 'undefined' && typeof y !== 'undefined') {
                // IE doesn't have scrollX/scrollY support
                window.scrollTo(x, y);
              }
            });
          };

          /**
           * If `timer` parameter is set, returns number of milliseconds of timer remained.
           * Otherwise, returns undefined.
           */

          var getTimerLeft = function getTimerLeft() {
            return globalState.timeout && globalState.timeout.getTimerLeft();
          };
          /**
           * Stop timer. Returns number of milliseconds of timer remained.
           * If `timer` parameter isn't set, returns undefined.
           */

          var stopTimer = function stopTimer() {
            if (globalState.timeout) {
              stopTimerProgressBar();
              return globalState.timeout.stop();
            }
          };
          /**
           * Resume timer. Returns number of milliseconds of timer remained.
           * If `timer` parameter isn't set, returns undefined.
           */

          var resumeTimer = function resumeTimer() {
            if (globalState.timeout) {
              var remaining = globalState.timeout.start();
              animateTimerProgressBar(remaining);
              return remaining;
            }
          };
          /**
           * Resume timer. Returns number of milliseconds of timer remained.
           * If `timer` parameter isn't set, returns undefined.
           */

          var toggleTimer = function toggleTimer() {
            var timer = globalState.timeout;
            return timer && (timer.running ? stopTimer() : resumeTimer());
          };
          /**
           * Increase timer. Returns number of milliseconds of an updated timer.
           * If `timer` parameter isn't set, returns undefined.
           */

          var increaseTimer = function increaseTimer(n) {
            if (globalState.timeout) {
              var remaining = globalState.timeout.increase(n);
              animateTimerProgressBar(remaining, true);
              return remaining;
            }
          };
          /**
           * Check if timer is running. Returns true if timer is running
           * or false if timer is paused or stopped.
           * If `timer` parameter isn't set, returns undefined
           */

          var isTimerRunning = function isTimerRunning() {
            return globalState.timeout && globalState.timeout.isRunning();
          };

          var defaultParams = {
            title: '',
            titleText: '',
            text: '',
            html: '',
            footer: '',
            icon: undefined,
            iconHtml: undefined,
            toast: false,
            animation: true,
            showClass: {
              popup: 'swal2-show',
              backdrop: 'swal2-backdrop-show',
              icon: 'swal2-icon-show',
            },
            hideClass: {
              popup: 'swal2-hide',
              backdrop: 'swal2-backdrop-hide',
              icon: 'swal2-icon-hide',
            },
            customClass: undefined,
            target: 'body',
            backdrop: true,
            heightAuto: true,
            allowOutsideClick: true,
            allowEscapeKey: true,
            allowEnterKey: true,
            stopKeydownPropagation: true,
            keydownListenerCapture: false,
            showConfirmButton: true,
            showCancelButton: false,
            preConfirm: undefined,
            confirmButtonText: 'OK',
            confirmButtonAriaLabel: '',
            confirmButtonColor: undefined,
            cancelButtonText: 'Cancel',
            cancelButtonAriaLabel: '',
            cancelButtonColor: undefined,
            buttonsStyling: true,
            reverseButtons: false,
            focusConfirm: true,
            focusCancel: false,
            showCloseButton: false,
            closeButtonHtml: '&times;',
            closeButtonAriaLabel: 'Close this dialog',
            showLoaderOnConfirm: false,
            imageUrl: undefined,
            imageWidth: undefined,
            imageHeight: undefined,
            imageAlt: '',
            timer: undefined,
            timerProgressBar: false,
            width: undefined,
            padding: undefined,
            background: undefined,
            input: undefined,
            inputPlaceholder: '',
            inputValue: '',
            inputOptions: {},
            inputAutoTrim: true,
            inputAttributes: {},
            inputValidator: undefined,
            validationMessage: undefined,
            grow: false,
            position: 'center',
            progressSteps: [],
            currentProgressStep: undefined,
            progressStepsDistance: undefined,
            onBeforeOpen: undefined,
            onOpen: undefined,
            onRender: undefined,
            onClose: undefined,
            onAfterClose: undefined,
            onDestroy: undefined,
            scrollbarPadding: true,
          };
          var updatableParams = [
            'title',
            'titleText',
            'text',
            'html',
            'footer',
            'icon',
            'hideClass',
            'customClass',
            'allowOutsideClick',
            'allowEscapeKey',
            'showConfirmButton',
            'showCancelButton',
            'confirmButtonText',
            'confirmButtonAriaLabel',
            'confirmButtonColor',
            'cancelButtonText',
            'cancelButtonAriaLabel',
            'cancelButtonColor',
            'buttonsStyling',
            'reverseButtons',
            'imageUrl',
            'imageWidth',
            'imageHeight',
            'imageAlt',
            'progressSteps',
            'currentProgressStep',
            'onClose',
            'onAfterClose',
            'onDestroy',
          ];
          var deprecatedParams = {
            animation: 'showClass" and "hideClass',
          };
          var toastIncompatibleParams = [
            'allowOutsideClick',
            'allowEnterKey',
            'backdrop',
            'focusConfirm',
            'focusCancel',
            'heightAuto',
            'keydownListenerCapture',
          ];
          /**
           * Is valid parameter
           * @param {String} paramName
           */

          var isValidParameter = function isValidParameter(paramName) {
            return Object.prototype.hasOwnProperty.call(
              defaultParams,
              paramName
            );
          };
          /**
           * Is valid parameter for Swal.update() method
           * @param {String} paramName
           */

          var isUpdatableParameter = function isUpdatableParameter(paramName) {
            return updatableParams.indexOf(paramName) !== -1;
          };
          /**
           * Is deprecated parameter
           * @param {String} paramName
           */

          var isDeprecatedParameter = function isDeprecatedParameter(
            paramName
          ) {
            return deprecatedParams[paramName];
          };

          var checkIfParamIsValid = function checkIfParamIsValid(param) {
            if (!isValidParameter(param)) {
              warn('Unknown parameter "'.concat(param, '"'));
            }
          };

          var checkIfToastParamIsValid = function checkIfToastParamIsValid(
            param
          ) {
            if (toastIncompatibleParams.indexOf(param) !== -1) {
              warn(
                'The parameter "'.concat(param, '" is incompatible with toasts')
              );
            }
          };

          var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(
            param
          ) {
            if (isDeprecatedParameter(param)) {
              warnAboutDepreation(param, isDeprecatedParameter(param));
            }
          };
          /**
           * Show relevant warnings for given params
           *
           * @param params
           */

          var showWarningsForParams = function showWarningsForParams(params) {
            for (var param in params) {
              checkIfParamIsValid(param);

              if (params.toast) {
                checkIfToastParamIsValid(param);
              }

              checkIfParamIsDeprecated(param);
            }
          };

          var staticMethods = /*#__PURE__*/ Object.freeze({
            isValidParameter: isValidParameter,
            isUpdatableParameter: isUpdatableParameter,
            isDeprecatedParameter: isDeprecatedParameter,
            argsToParams: argsToParams,
            isVisible: isVisible$1,
            clickConfirm: clickConfirm,
            clickCancel: clickCancel,
            getContainer: getContainer,
            getPopup: getPopup,
            getTitle: getTitle,
            getContent: getContent,
            getHtmlContainer: getHtmlContainer,
            getImage: getImage,
            getIcon: getIcon,
            getIcons: getIcons,
            getCloseButton: getCloseButton,
            getActions: getActions,
            getConfirmButton: getConfirmButton,
            getCancelButton: getCancelButton,
            getHeader: getHeader,
            getFooter: getFooter,
            getTimerProgressBar: getTimerProgressBar,
            getFocusableElements: getFocusableElements,
            getValidationMessage: getValidationMessage,
            isLoading: isLoading,
            fire: fire,
            mixin: mixin,
            queue: queue,
            getQueueStep: getQueueStep,
            insertQueueStep: insertQueueStep,
            deleteQueueStep: deleteQueueStep,
            showLoading: showLoading,
            enableLoading: showLoading,
            getTimerLeft: getTimerLeft,
            stopTimer: stopTimer,
            resumeTimer: resumeTimer,
            toggleTimer: toggleTimer,
            increaseTimer: increaseTimer,
            isTimerRunning: isTimerRunning,
          });

          /**
           * Enables buttons and hide loader.
           */

          function hideLoading() {
            // do nothing if popup is closed
            var innerParams = privateProps.innerParams.get(this);

            if (!innerParams) {
              return;
            }

            var domCache = privateProps.domCache.get(this);

            if (!innerParams.showConfirmButton) {
              hide(domCache.confirmButton);

              if (!innerParams.showCancelButton) {
                hide(domCache.actions);
              }
            }

            removeClass(
              [domCache.popup, domCache.actions],
              swalClasses.loading
            );
            domCache.popup.removeAttribute('aria-busy');
            domCache.popup.removeAttribute('data-loading');
            domCache.confirmButton.disabled = false;
            domCache.cancelButton.disabled = false;
          }

          function getInput$1(instance) {
            var innerParams = privateProps.innerParams.get(instance || this);
            var domCache = privateProps.domCache.get(instance || this);

            if (!domCache) {
              return null;
            }

            return getInput(domCache.content, innerParams.input);
          }

          var fixScrollbar = function fixScrollbar() {
            // for queues, do not do this more than once
            if (states.previousBodyPadding !== null) {
              return;
            } // if the body has overflow

            if (document.body.scrollHeight > window.innerHeight) {
              // add padding so the content doesn't shift after removal of scrollbar
              states.previousBodyPadding = parseInt(
                window
                  .getComputedStyle(document.body)
                  .getPropertyValue('padding-right')
              );
              document.body.style.paddingRight = ''.concat(
                states.previousBodyPadding + measureScrollbar(),
                'px'
              );
            }
          };
          var undoScrollbar = function undoScrollbar() {
            if (states.previousBodyPadding !== null) {
              document.body.style.paddingRight = ''.concat(
                states.previousBodyPadding,
                'px'
              );
              states.previousBodyPadding = null;
            }
          };

          /* istanbul ignore file */

          var iOSfix = function iOSfix() {
            var iOS =
              (/iPad|iPhone|iPod/.test(navigator.userAgent) &&
                !window.MSStream) ||
              (navigator.platform === 'MacIntel' &&
                navigator.maxTouchPoints > 1);

            if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
              var offset = document.body.scrollTop;
              document.body.style.top = ''.concat(offset * -1, 'px');
              addClass(document.body, swalClasses.iosfix);
              lockBodyScroll();
              addBottomPaddingForTallPopups(); // #1948
            }
          };

          var addBottomPaddingForTallPopups = function addBottomPaddingForTallPopups() {
            var safari = !navigator.userAgent.match(
              /(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i
            );

            if (safari) {
              var bottomPanelHeight = 44;

              if (
                getPopup().scrollHeight >
                window.innerHeight - bottomPanelHeight
              ) {
                getContainer().style.paddingBottom = ''.concat(
                  bottomPanelHeight,
                  'px'
                );
              }
            }
          };

          var lockBodyScroll = function lockBodyScroll() {
            // #1246
            var container = getContainer();
            var preventTouchMove;

            container.ontouchstart = function (e) {
              preventTouchMove = shouldPreventTouchMove(e.target);
            };

            container.ontouchmove = function (e) {
              if (preventTouchMove) {
                e.preventDefault();
                e.stopPropagation();
              }
            };
          };

          var shouldPreventTouchMove = function shouldPreventTouchMove(target) {
            var container = getContainer();

            if (target === container) {
              return true;
            }

            if (
              !isScrollable(container) &&
              target.tagName !== 'INPUT' && // #1603
              !(
                isScrollable(getContent()) && getContent().contains(target) // #1944
              )
            ) {
              return true;
            }

            return false;
          };

          var undoIOSfix = function undoIOSfix() {
            if (hasClass(document.body, swalClasses.iosfix)) {
              var offset = parseInt(document.body.style.top, 10);
              removeClass(document.body, swalClasses.iosfix);
              document.body.style.top = '';
              document.body.scrollTop = offset * -1;
            }
          };

          /* istanbul ignore file */

          var isIE11 = function isIE11() {
            return !!window.MSInputMethodContext && !!document.documentMode;
          }; // Fix IE11 centering sweetalert2/issues/933

          var fixVerticalPositionIE = function fixVerticalPositionIE() {
            var container = getContainer();
            var popup = getPopup();
            container.style.removeProperty('align-items');

            if (popup.offsetTop < 0) {
              container.style.alignItems = 'flex-start';
            }
          };

          var IEfix = function IEfix() {
            if (typeof window !== 'undefined' && isIE11()) {
              fixVerticalPositionIE();
              window.addEventListener('resize', fixVerticalPositionIE);
            }
          };
          var undoIEfix = function undoIEfix() {
            if (typeof window !== 'undefined' && isIE11()) {
              window.removeEventListener('resize', fixVerticalPositionIE);
            }
          };

          // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
          // elements not within the active modal dialog will not be surfaced if a user opens a screen
          // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

          var setAriaHidden = function setAriaHidden() {
            var bodyChildren = toArray(document.body.children);
            bodyChildren.forEach(function (el) {
              if (el === getContainer() || contains(el, getContainer())) {
                return;
              }

              if (el.hasAttribute('aria-hidden')) {
                el.setAttribute(
                  'data-previous-aria-hidden',
                  el.getAttribute('aria-hidden')
                );
              }

              el.setAttribute('aria-hidden', 'true');
            });
          };
          var unsetAriaHidden = function unsetAriaHidden() {
            var bodyChildren = toArray(document.body.children);
            bodyChildren.forEach(function (el) {
              if (el.hasAttribute('data-previous-aria-hidden')) {
                el.setAttribute(
                  'aria-hidden',
                  el.getAttribute('data-previous-aria-hidden')
                );
                el.removeAttribute('data-previous-aria-hidden');
              } else {
                el.removeAttribute('aria-hidden');
              }
            });
          };

          /**
           * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
           * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
           * This is the approach that Babel will probably take to implement private methods/fields
           *   https://github.com/tc39/proposal-private-methods
           *   https://github.com/babel/babel/pull/7555
           * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
           *   then we can use that language feature.
           */
          var privateMethods = {
            swalPromiseResolve: new WeakMap(),
          };

          /*
           * Instance method to close sweetAlert
           */

          function removePopupAndResetState(
            instance,
            container,
            isToast$$1,
            onAfterClose
          ) {
            if (isToast$$1) {
              triggerOnAfterCloseAndDispose(instance, onAfterClose);
            } else {
              restoreActiveElement().then(function () {
                return triggerOnAfterCloseAndDispose(instance, onAfterClose);
              });
              globalState.keydownTarget.removeEventListener(
                'keydown',
                globalState.keydownHandler,
                {
                  capture: globalState.keydownListenerCapture,
                }
              );
              globalState.keydownHandlerAdded = false;
            }

            if (
              container.parentNode &&
              !document.body.getAttribute('data-swal2-queue-step')
            ) {
              container.parentNode.removeChild(container);
            }

            if (isModal()) {
              undoScrollbar();
              undoIOSfix();
              undoIEfix();
              unsetAriaHidden();
            }

            removeBodyClasses();
          }

          function removeBodyClasses() {
            removeClass(
              [document.documentElement, document.body],
              [
                swalClasses.shown,
                swalClasses['height-auto'],
                swalClasses['no-backdrop'],
                swalClasses['toast-shown'],
                swalClasses['toast-column'],
              ]
            );
          }

          function close(resolveValue) {
            var popup = getPopup();

            if (!popup) {
              return;
            }

            var innerParams = privateProps.innerParams.get(this);

            if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
              return;
            }

            var swalPromiseResolve = privateMethods.swalPromiseResolve.get(
              this
            );
            removeClass(popup, innerParams.showClass.popup);
            addClass(popup, innerParams.hideClass.popup);
            var backdrop = getContainer();
            removeClass(backdrop, innerParams.showClass.backdrop);
            addClass(backdrop, innerParams.hideClass.backdrop);
            handlePopupAnimation(this, popup, innerParams);

            if (typeof resolveValue !== 'undefined') {
              resolveValue.isDismissed =
                typeof resolveValue.dismiss !== 'undefined';
              resolveValue.isConfirmed =
                typeof resolveValue.dismiss === 'undefined';
            } else {
              resolveValue = {
                isDismissed: true,
                isConfirmed: false,
              };
            } // Resolve Swal promise

            swalPromiseResolve(resolveValue || {});
          }

          var handlePopupAnimation = function handlePopupAnimation(
            instance,
            popup,
            innerParams
          ) {
            var container = getContainer(); // If animation is supported, animate

            var animationIsSupported =
              animationEndEvent && hasCssAnimation(popup);
            var onClose = innerParams.onClose,
              onAfterClose = innerParams.onAfterClose;

            if (onClose !== null && typeof onClose === 'function') {
              onClose(popup);
            }

            if (animationIsSupported) {
              animatePopup(instance, popup, container, onAfterClose);
            } else {
              // Otherwise, remove immediately
              removePopupAndResetState(
                instance,
                container,
                isToast(),
                onAfterClose
              );
            }
          };

          var animatePopup = function animatePopup(
            instance,
            popup,
            container,
            onAfterClose
          ) {
            globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(
              null,
              instance,
              container,
              isToast(),
              onAfterClose
            );
            popup.addEventListener(animationEndEvent, function (e) {
              if (e.target === popup) {
                globalState.swalCloseEventFinishedCallback();
                delete globalState.swalCloseEventFinishedCallback;
              }
            });
          };

          var triggerOnAfterCloseAndDispose = function triggerOnAfterCloseAndDispose(
            instance,
            onAfterClose
          ) {
            setTimeout(function () {
              if (typeof onAfterClose === 'function') {
                onAfterClose();
              }

              instance._destroy();
            });
          };

          function setButtonsDisabled(instance, buttons, disabled) {
            var domCache = privateProps.domCache.get(instance);
            buttons.forEach(function (button) {
              domCache[button].disabled = disabled;
            });
          }

          function setInputDisabled(input, disabled) {
            if (!input) {
              return false;
            }

            if (input.type === 'radio') {
              var radiosContainer = input.parentNode.parentNode;
              var radios = radiosContainer.querySelectorAll('input');

              for (var i = 0; i < radios.length; i++) {
                radios[i].disabled = disabled;
              }
            } else {
              input.disabled = disabled;
            }
          }

          function enableButtons() {
            setButtonsDisabled(this, ['confirmButton', 'cancelButton'], false);
          }
          function disableButtons() {
            setButtonsDisabled(this, ['confirmButton', 'cancelButton'], true);
          }
          function enableInput() {
            return setInputDisabled(this.getInput(), false);
          }
          function disableInput() {
            return setInputDisabled(this.getInput(), true);
          }

          function showValidationMessage(error) {
            var domCache = privateProps.domCache.get(this);
            setInnerHtml(domCache.validationMessage, error);
            var popupComputedStyle = window.getComputedStyle(domCache.popup);
            domCache.validationMessage.style.marginLeft = '-'.concat(
              popupComputedStyle.getPropertyValue('padding-left')
            );
            domCache.validationMessage.style.marginRight = '-'.concat(
              popupComputedStyle.getPropertyValue('padding-right')
            );
            show(domCache.validationMessage);
            var input = this.getInput();

            if (input) {
              input.setAttribute('aria-invalid', true);
              input.setAttribute(
                'aria-describedBy',
                swalClasses['validation-message']
              );
              focusInput(input);
              addClass(input, swalClasses.inputerror);
            }
          } // Hide block with validation message

          function resetValidationMessage$1() {
            var domCache = privateProps.domCache.get(this);

            if (domCache.validationMessage) {
              hide(domCache.validationMessage);
            }

            var input = this.getInput();

            if (input) {
              input.removeAttribute('aria-invalid');
              input.removeAttribute('aria-describedBy');
              removeClass(input, swalClasses.inputerror);
            }
          }

          function getProgressSteps$1() {
            var domCache = privateProps.domCache.get(this);
            return domCache.progressSteps;
          }

          var Timer = /*#__PURE__*/ (function () {
            function Timer(callback, delay) {
              _classCallCheck(this, Timer);

              this.callback = callback;
              this.remaining = delay;
              this.running = false;
              this.start();
            }

            _createClass(Timer, [
              {
                key: 'start',
                value: function start() {
                  if (!this.running) {
                    this.running = true;
                    this.started = new Date();
                    this.id = setTimeout(this.callback, this.remaining);
                  }

                  return this.remaining;
                },
              },
              {
                key: 'stop',
                value: function stop() {
                  if (this.running) {
                    this.running = false;
                    clearTimeout(this.id);
                    this.remaining -= new Date() - this.started;
                  }

                  return this.remaining;
                },
              },
              {
                key: 'increase',
                value: function increase(n) {
                  var running = this.running;

                  if (running) {
                    this.stop();
                  }

                  this.remaining += n;

                  if (running) {
                    this.start();
                  }

                  return this.remaining;
                },
              },
              {
                key: 'getTimerLeft',
                value: function getTimerLeft() {
                  if (this.running) {
                    this.stop();
                    this.start();
                  }

                  return this.remaining;
                },
              },
              {
                key: 'isRunning',
                value: function isRunning() {
                  return this.running;
                },
              },
            ]);

            return Timer;
          })();

          var defaultInputValidators = {
            email: function email(string, validationMessage) {
              return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(
                string
              )
                ? Promise.resolve()
                : Promise.resolve(validationMessage || 'Invalid email address');
            },
            url: function url(string, validationMessage) {
              // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
              return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
                string
              )
                ? Promise.resolve()
                : Promise.resolve(validationMessage || 'Invalid URL');
            },
          };

          function setDefaultInputValidators(params) {
            // Use default `inputValidator` for supported input types if not provided
            if (!params.inputValidator) {
              Object.keys(defaultInputValidators).forEach(function (key) {
                if (params.input === key) {
                  params.inputValidator = defaultInputValidators[key];
                }
              });
            }
          }

          function validateCustomTargetElement(params) {
            // Determine if the custom target element is valid
            if (
              !params.target ||
              (typeof params.target === 'string' &&
                !document.querySelector(params.target)) ||
              (typeof params.target !== 'string' && !params.target.appendChild)
            ) {
              warn('Target parameter is not valid, defaulting to "body"');
              params.target = 'body';
            }
          }
          /**
           * Set type, text and actions on popup
           *
           * @param params
           * @returns {boolean}
           */

          function setParameters(params) {
            setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

            if (params.showLoaderOnConfirm && !params.preConfirm) {
              warn(
                'showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' +
                  'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' +
                  'https://sweetalert2.github.io/#ajax-request'
              );
            } // params.animation will be actually used in renderPopup.js
            // but in case when params.animation is a function, we need to call that function
            // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
            // inside the params.animation function

            params.animation = callIfFunction(params.animation);
            validateCustomTargetElement(params); // Replace newlines with <br> in title

            if (typeof params.title === 'string') {
              params.title = params.title.split('\n').join('<br />');
            }

            init(params);
          }

          /**
           * Open popup, add necessary classes and styles, fix scrollbar
           *
           * @param {Array} params
           */

          var openPopup = function openPopup(params) {
            var container = getContainer();
            var popup = getPopup();

            if (typeof params.onBeforeOpen === 'function') {
              params.onBeforeOpen(popup);
            }

            var bodyStyles = window.getComputedStyle(document.body);
            var initialBodyOverflow = bodyStyles.overflowY;
            addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

            setScrollingVisibility(container, popup);

            if (isModal()) {
              fixScrollContainer(
                container,
                params.scrollbarPadding,
                initialBodyOverflow
              );
              setAriaHidden();
            }

            if (!isToast() && !globalState.previousActiveElement) {
              globalState.previousActiveElement = document.activeElement;
            }

            if (typeof params.onOpen === 'function') {
              setTimeout(function () {
                return params.onOpen(popup);
              });
            }

            removeClass(container, swalClasses['no-transition']);
          };

          function swalOpenAnimationFinished(event) {
            var popup = getPopup();

            if (event.target !== popup) {
              return;
            }

            var container = getContainer();
            popup.removeEventListener(
              animationEndEvent,
              swalOpenAnimationFinished
            );
            container.style.overflowY = 'auto';
          }

          var setScrollingVisibility = function setScrollingVisibility(
            container,
            popup
          ) {
            if (animationEndEvent && hasCssAnimation(popup)) {
              container.style.overflowY = 'hidden';
              popup.addEventListener(
                animationEndEvent,
                swalOpenAnimationFinished
              );
            } else {
              container.style.overflowY = 'auto';
            }
          };

          var fixScrollContainer = function fixScrollContainer(
            container,
            scrollbarPadding,
            initialBodyOverflow
          ) {
            iOSfix();
            IEfix();

            if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
              fixScrollbar();
            } // sweetalert2/issues/1247

            setTimeout(function () {
              container.scrollTop = 0;
            });
          };

          var addClasses$1 = function addClasses(container, popup, params) {
            addClass(container, params.showClass.backdrop);
            show(popup); // Animate popup right after showing it

            addClass(popup, params.showClass.popup);
            addClass(
              [document.documentElement, document.body],
              swalClasses.shown
            );

            if (params.heightAuto && params.backdrop && !params.toast) {
              addClass(
                [document.documentElement, document.body],
                swalClasses['height-auto']
              );
            }
          };

          var handleInputOptionsAndValue = function handleInputOptionsAndValue(
            instance,
            params
          ) {
            if (params.input === 'select' || params.input === 'radio') {
              handleInputOptions(instance, params);
            } else if (
              ['text', 'email', 'number', 'tel', 'textarea'].indexOf(
                params.input
              ) !== -1 &&
              (hasToPromiseFn(params.inputValue) ||
                isPromise(params.inputValue))
            ) {
              handleInputValue(instance, params);
            }
          };
          var getInputValue = function getInputValue(instance, innerParams) {
            var input = instance.getInput();

            if (!input) {
              return null;
            }

            switch (innerParams.input) {
              case 'checkbox':
                return getCheckboxValue(input);

              case 'radio':
                return getRadioValue(input);

              case 'file':
                return getFileValue(input);

              default:
                return innerParams.inputAutoTrim
                  ? input.value.trim()
                  : input.value;
            }
          };

          var getCheckboxValue = function getCheckboxValue(input) {
            return input.checked ? 1 : 0;
          };

          var getRadioValue = function getRadioValue(input) {
            return input.checked ? input.value : null;
          };

          var getFileValue = function getFileValue(input) {
            return input.files.length
              ? input.getAttribute('multiple') !== null
                ? input.files
                : input.files[0]
              : null;
          };

          var handleInputOptions = function handleInputOptions(
            instance,
            params
          ) {
            var content = getContent();

            var processInputOptions = function processInputOptions(
              inputOptions
            ) {
              return populateInputOptions[params.input](
                content,
                formatInputOptions(inputOptions),
                params
              );
            };

            if (
              hasToPromiseFn(params.inputOptions) ||
              isPromise(params.inputOptions)
            ) {
              showLoading();
              asPromise(params.inputOptions).then(function (inputOptions) {
                instance.hideLoading();
                processInputOptions(inputOptions);
              });
            } else if (_typeof(params.inputOptions) === 'object') {
              processInputOptions(params.inputOptions);
            } else {
              error(
                'Unexpected type of inputOptions! Expected object, Map or Promise, got '.concat(
                  _typeof(params.inputOptions)
                )
              );
            }
          };

          var handleInputValue = function handleInputValue(instance, params) {
            var input = instance.getInput();
            hide(input);
            asPromise(params.inputValue)
              .then(function (inputValue) {
                input.value =
                  params.input === 'number'
                    ? parseFloat(inputValue) || 0
                    : ''.concat(inputValue);
                show(input);
                input.focus();
                instance.hideLoading();
              })
              ['catch'](function (err) {
                error('Error in inputValue promise: '.concat(err));
                input.value = '';
                show(input);
                input.focus();
                instance.hideLoading();
              });
          };

          var populateInputOptions = {
            select: function select(content, inputOptions, params) {
              var select = getChildByClass(content, swalClasses.select);

              var renderOption = function renderOption(
                parent,
                optionLabel,
                optionValue
              ) {
                var option = document.createElement('option');
                option.value = optionValue;
                setInnerHtml(option, optionLabel);

                if (params.inputValue.toString() === optionValue.toString()) {
                  option.selected = true;
                }

                parent.appendChild(option);
              };

              inputOptions.forEach(function (inputOption) {
                var optionValue = inputOption[0];
                var optionLabel = inputOption[1]; // <optgroup> spec:
                // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
                // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
                // check whether this is a <optgroup>

                if (Array.isArray(optionLabel)) {
                  // if it is an array, then it is an <optgroup>
                  var optgroup = document.createElement('optgroup');
                  optgroup.label = optionValue;
                  optgroup.disabled = false; // not configurable for now

                  select.appendChild(optgroup);
                  optionLabel.forEach(function (o) {
                    return renderOption(optgroup, o[1], o[0]);
                  });
                } else {
                  // case of <option>
                  renderOption(select, optionLabel, optionValue);
                }
              });
              select.focus();
            },
            radio: function radio(content, inputOptions, params) {
              var radio = getChildByClass(content, swalClasses.radio);
              inputOptions.forEach(function (inputOption) {
                var radioValue = inputOption[0];
                var radioLabel = inputOption[1];
                var radioInput = document.createElement('input');
                var radioLabelElement = document.createElement('label');
                radioInput.type = 'radio';
                radioInput.name = swalClasses.radio;
                radioInput.value = radioValue;

                if (params.inputValue.toString() === radioValue.toString()) {
                  radioInput.checked = true;
                }

                var label = document.createElement('span');
                setInnerHtml(label, radioLabel);
                label.className = swalClasses.label;
                radioLabelElement.appendChild(radioInput);
                radioLabelElement.appendChild(label);
                radio.appendChild(radioLabelElement);
              });
              var radios = radio.querySelectorAll('input');

              if (radios.length) {
                radios[0].focus();
              }
            },
          };
          /**
           * Converts `inputOptions` into an array of `[value, label]`s
           * @param inputOptions
           */

          var formatInputOptions = function formatInputOptions(inputOptions) {
            var result = [];

            if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
              inputOptions.forEach(function (value, key) {
                var valueFormatted = value;

                if (_typeof(valueFormatted) === 'object') {
                  // case of <optgroup>
                  valueFormatted = formatInputOptions(valueFormatted);
                }

                result.push([key, valueFormatted]);
              });
            } else {
              Object.keys(inputOptions).forEach(function (key) {
                var valueFormatted = inputOptions[key];

                if (_typeof(valueFormatted) === 'object') {
                  // case of <optgroup>
                  valueFormatted = formatInputOptions(valueFormatted);
                }

                result.push([key, valueFormatted]);
              });
            }

            return result;
          };

          var handleConfirmButtonClick = function handleConfirmButtonClick(
            instance,
            innerParams
          ) {
            instance.disableButtons();

            if (innerParams.input) {
              handleConfirmWithInput(instance, innerParams);
            } else {
              confirm(instance, innerParams, true);
            }
          };
          var handleCancelButtonClick = function handleCancelButtonClick(
            instance,
            dismissWith
          ) {
            instance.disableButtons();
            dismissWith(DismissReason.cancel);
          };

          var handleConfirmWithInput = function handleConfirmWithInput(
            instance,
            innerParams
          ) {
            var inputValue = getInputValue(instance, innerParams);

            if (innerParams.inputValidator) {
              instance.disableInput();
              var validationPromise = Promise.resolve().then(function () {
                return asPromise(
                  innerParams.inputValidator(
                    inputValue,
                    innerParams.validationMessage
                  )
                );
              });
              validationPromise.then(function (validationMessage) {
                instance.enableButtons();
                instance.enableInput();

                if (validationMessage) {
                  instance.showValidationMessage(validationMessage);
                } else {
                  confirm(instance, innerParams, inputValue);
                }
              });
            } else if (!instance.getInput().checkValidity()) {
              instance.enableButtons();
              instance.showValidationMessage(innerParams.validationMessage);
            } else {
              confirm(instance, innerParams, inputValue);
            }
          };

          var succeedWith = function succeedWith(instance, value) {
            instance.closePopup({
              value: value,
            });
          };

          var confirm = function confirm(instance, innerParams, value) {
            if (innerParams.showLoaderOnConfirm) {
              showLoading(); // TODO: make showLoading an *instance* method
            }

            if (innerParams.preConfirm) {
              instance.resetValidationMessage();
              var preConfirmPromise = Promise.resolve().then(function () {
                return asPromise(
                  innerParams.preConfirm(value, innerParams.validationMessage)
                );
              });
              preConfirmPromise.then(function (preConfirmValue) {
                if (
                  isVisible(getValidationMessage()) ||
                  preConfirmValue === false
                ) {
                  instance.hideLoading();
                } else {
                  succeedWith(
                    instance,
                    typeof preConfirmValue === 'undefined'
                      ? value
                      : preConfirmValue
                  );
                }
              });
            } else {
              succeedWith(instance, value);
            }
          };

          var addKeydownHandler = function addKeydownHandler(
            instance,
            globalState,
            innerParams,
            dismissWith
          ) {
            if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
              globalState.keydownTarget.removeEventListener(
                'keydown',
                globalState.keydownHandler,
                {
                  capture: globalState.keydownListenerCapture,
                }
              );
              globalState.keydownHandlerAdded = false;
            }

            if (!innerParams.toast) {
              globalState.keydownHandler = function (e) {
                return keydownHandler(instance, e, dismissWith);
              };

              globalState.keydownTarget = innerParams.keydownListenerCapture
                ? window
                : getPopup();
              globalState.keydownListenerCapture =
                innerParams.keydownListenerCapture;
              globalState.keydownTarget.addEventListener(
                'keydown',
                globalState.keydownHandler,
                {
                  capture: globalState.keydownListenerCapture,
                }
              );
              globalState.keydownHandlerAdded = true;
            }
          }; // Focus handling

          var setFocus = function setFocus(innerParams, index, increment) {
            var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

            for (var i = 0; i < focusableElements.length; i++) {
              index = index + increment; // rollover to first item

              if (index === focusableElements.length) {
                index = 0; // go to last item
              } else if (index === -1) {
                index = focusableElements.length - 1;
              }

              return focusableElements[index].focus();
            } // no visible focusable elements, focus the popup

            getPopup().focus();
          };
          var arrowKeys = [
            'ArrowLeft',
            'ArrowRight',
            'ArrowUp',
            'ArrowDown',
            'Left',
            'Right',
            'Up',
            'Down', // IE11
          ];
          var escKeys = [
            'Escape',
            'Esc', // IE11
          ];

          var keydownHandler = function keydownHandler(
            instance,
            e,
            dismissWith
          ) {
            var innerParams = privateProps.innerParams.get(instance);

            if (innerParams.stopKeydownPropagation) {
              e.stopPropagation();
            } // ENTER

            if (e.key === 'Enter') {
              handleEnter(instance, e, innerParams); // TAB
            } else if (e.key === 'Tab') {
              handleTab(e, innerParams); // ARROWS - switch focus between buttons
            } else if (arrowKeys.indexOf(e.key) !== -1) {
              handleArrows(); // ESC
            } else if (escKeys.indexOf(e.key) !== -1) {
              handleEsc(e, innerParams, dismissWith);
            }
          };

          var handleEnter = function handleEnter(instance, e, innerParams) {
            // #720 #721
            if (e.isComposing) {
              return;
            }

            if (
              e.target &&
              instance.getInput() &&
              e.target.outerHTML === instance.getInput().outerHTML
            ) {
              if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
                return; // do not submit
              }

              clickConfirm();
              e.preventDefault();
            }
          };

          var handleTab = function handleTab(e, innerParams) {
            var targetElement = e.target;
            var focusableElements = getFocusableElements();
            var btnIndex = -1;

            for (var i = 0; i < focusableElements.length; i++) {
              if (targetElement === focusableElements[i]) {
                btnIndex = i;
                break;
              }
            }

            if (!e.shiftKey) {
              // Cycle to the next button
              setFocus(innerParams, btnIndex, 1);
            } else {
              // Cycle to the prev button
              setFocus(innerParams, btnIndex, -1);
            }

            e.stopPropagation();
            e.preventDefault();
          };

          var handleArrows = function handleArrows() {
            var confirmButton = getConfirmButton();
            var cancelButton = getCancelButton(); // focus Cancel button if Confirm button is currently focused

            if (
              document.activeElement === confirmButton &&
              isVisible(cancelButton)
            ) {
              cancelButton.focus(); // and vice versa
            } else if (
              document.activeElement === cancelButton &&
              isVisible(confirmButton)
            ) {
              confirmButton.focus();
            }
          };

          var handleEsc = function handleEsc(e, innerParams, dismissWith) {
            if (callIfFunction(innerParams.allowEscapeKey)) {
              e.preventDefault();
              dismissWith(DismissReason.esc);
            }
          };

          var handlePopupClick = function handlePopupClick(
            instance,
            domCache,
            dismissWith
          ) {
            var innerParams = privateProps.innerParams.get(instance);

            if (innerParams.toast) {
              handleToastClick(instance, domCache, dismissWith);
            } else {
              // Ignore click events that had mousedown on the popup but mouseup on the container
              // This can happen when the user drags a slider
              handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

              handleContainerMousedown(domCache);
              handleModalClick(instance, domCache, dismissWith);
            }
          };

          var handleToastClick = function handleToastClick(
            instance,
            domCache,
            dismissWith
          ) {
            // Closing toast by internal click
            domCache.popup.onclick = function () {
              var innerParams = privateProps.innerParams.get(instance);

              if (
                innerParams.showConfirmButton ||
                innerParams.showCancelButton ||
                innerParams.showCloseButton ||
                innerParams.input
              ) {
                return;
              }

              dismissWith(DismissReason.close);
            };
          };

          var ignoreOutsideClick = false;

          var handleModalMousedown = function handleModalMousedown(domCache) {
            domCache.popup.onmousedown = function () {
              domCache.container.onmouseup = function (e) {
                domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
                // have any other direct children aside of the popup

                if (e.target === domCache.container) {
                  ignoreOutsideClick = true;
                }
              };
            };
          };

          var handleContainerMousedown = function handleContainerMousedown(
            domCache
          ) {
            domCache.container.onmousedown = function () {
              domCache.popup.onmouseup = function (e) {
                domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

                if (
                  e.target === domCache.popup ||
                  domCache.popup.contains(e.target)
                ) {
                  ignoreOutsideClick = true;
                }
              };
            };
          };

          var handleModalClick = function handleModalClick(
            instance,
            domCache,
            dismissWith
          ) {
            domCache.container.onclick = function (e) {
              var innerParams = privateProps.innerParams.get(instance);

              if (ignoreOutsideClick) {
                ignoreOutsideClick = false;
                return;
              }

              if (
                e.target === domCache.container &&
                callIfFunction(innerParams.allowOutsideClick)
              ) {
                dismissWith(DismissReason.backdrop);
              }
            };
          };

          function _main(userParams) {
            showWarningsForParams(userParams);

            if (globalState.currentInstance) {
              globalState.currentInstance._destroy();
            }

            globalState.currentInstance = this;
            var innerParams = prepareParams(userParams);
            setParameters(innerParams);
            Object.freeze(innerParams); // clear the previous timer

            if (globalState.timeout) {
              globalState.timeout.stop();
              delete globalState.timeout;
            } // clear the restore focus timeout

            clearTimeout(globalState.restoreFocusTimeout);
            var domCache = populateDomCache(this);
            render(this, innerParams);
            privateProps.innerParams.set(this, innerParams);
            return swalPromise(this, domCache, innerParams);
          }

          var prepareParams = function prepareParams(userParams) {
            var showClass = _extends(
              {},
              defaultParams.showClass,
              userParams.showClass
            );

            var hideClass = _extends(
              {},
              defaultParams.hideClass,
              userParams.hideClass
            );

            var params = _extends({}, defaultParams, userParams);

            params.showClass = showClass;
            params.hideClass = hideClass; // @deprecated

            if (userParams.animation === false) {
              params.showClass = {
                popup: 'swal2-noanimation',
                backdrop: 'swal2-noanimation',
              };
              params.hideClass = {};
            }

            return params;
          };

          var swalPromise = function swalPromise(
            instance,
            domCache,
            innerParams
          ) {
            return new Promise(function (resolve) {
              // functions to handle all closings/dismissals
              var dismissWith = function dismissWith(dismiss) {
                instance.closePopup({
                  dismiss: dismiss,
                });
              };

              privateMethods.swalPromiseResolve.set(instance, resolve);

              domCache.confirmButton.onclick = function () {
                return handleConfirmButtonClick(instance, innerParams);
              };

              domCache.cancelButton.onclick = function () {
                return handleCancelButtonClick(instance, dismissWith);
              };

              domCache.closeButton.onclick = function () {
                return dismissWith(DismissReason.close);
              };

              handlePopupClick(instance, domCache, dismissWith);
              addKeydownHandler(
                instance,
                globalState,
                innerParams,
                dismissWith
              );

              if (
                innerParams.toast &&
                (innerParams.input ||
                  innerParams.footer ||
                  innerParams.showCloseButton)
              ) {
                addClass(document.body, swalClasses['toast-column']);
              } else {
                removeClass(document.body, swalClasses['toast-column']);
              }

              handleInputOptionsAndValue(instance, innerParams);
              openPopup(innerParams);
              setupTimer(globalState, innerParams, dismissWith);
              initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

              setTimeout(function () {
                domCache.container.scrollTop = 0;
              });
            });
          };

          var populateDomCache = function populateDomCache(instance) {
            var domCache = {
              popup: getPopup(),
              container: getContainer(),
              content: getContent(),
              actions: getActions(),
              confirmButton: getConfirmButton(),
              cancelButton: getCancelButton(),
              closeButton: getCloseButton(),
              validationMessage: getValidationMessage(),
              progressSteps: getProgressSteps(),
            };
            privateProps.domCache.set(instance, domCache);
            return domCache;
          };

          var setupTimer = function setupTimer(
            globalState$$1,
            innerParams,
            dismissWith
          ) {
            var timerProgressBar = getTimerProgressBar();
            hide(timerProgressBar);

            if (innerParams.timer) {
              globalState$$1.timeout = new Timer(function () {
                dismissWith('timer');
                delete globalState$$1.timeout;
              }, innerParams.timer);

              if (innerParams.timerProgressBar) {
                show(timerProgressBar);
                setTimeout(function () {
                  if (globalState$$1.timeout.running) {
                    // timer can be already stopped at this point
                    animateTimerProgressBar(innerParams.timer);
                  }
                });
              }
            }
          };

          var initFocus = function initFocus(domCache, innerParams) {
            if (innerParams.toast) {
              return;
            }

            if (!callIfFunction(innerParams.allowEnterKey)) {
              return blurActiveElement();
            }

            if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
              return domCache.cancelButton.focus();
            }

            if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
              return domCache.confirmButton.focus();
            }

            setFocus(innerParams, -1, 1);
          };

          var blurActiveElement = function blurActiveElement() {
            if (
              document.activeElement &&
              typeof document.activeElement.blur === 'function'
            ) {
              document.activeElement.blur();
            }
          };

          /**
           * Updates popup parameters.
           */

          function update(params) {
            var popup = getPopup();
            var innerParams = privateProps.innerParams.get(this);

            if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
              return warn(
                "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
              );
            }

            var validUpdatableParams = {}; // assign valid params from `params` to `defaults`

            Object.keys(params).forEach(function (param) {
              if (Swal.isUpdatableParameter(param)) {
                validUpdatableParams[param] = params[param];
              } else {
                warn(
                  'Invalid parameter to update: "'.concat(
                    param,
                    '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js'
                  )
                );
              }
            });

            var updatedParams = _extends({}, innerParams, validUpdatableParams);

            render(this, updatedParams);
            privateProps.innerParams.set(this, updatedParams);
            Object.defineProperties(this, {
              params: {
                value: _extends({}, this.params, params),
                writable: false,
                enumerable: true,
              },
            });
          }

          function _destroy() {
            var domCache = privateProps.domCache.get(this);
            var innerParams = privateProps.innerParams.get(this);

            if (!innerParams) {
              return; // This instance has already been destroyed
            } // Check if there is another Swal closing

            if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
              globalState.swalCloseEventFinishedCallback();
              delete globalState.swalCloseEventFinishedCallback;
            } // Check if there is a swal disposal defer timer

            if (globalState.deferDisposalTimer) {
              clearTimeout(globalState.deferDisposalTimer);
              delete globalState.deferDisposalTimer;
            }

            if (typeof innerParams.onDestroy === 'function') {
              innerParams.onDestroy();
            }

            disposeSwal(this);
          }

          var disposeSwal = function disposeSwal(instance) {
            // Unset this.params so GC will dispose it (#1569)
            delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

            delete globalState.keydownHandler;
            delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)

            unsetWeakMaps(privateProps);
            unsetWeakMaps(privateMethods);
          };

          var unsetWeakMaps = function unsetWeakMaps(obj) {
            for (var i in obj) {
              obj[i] = new WeakMap();
            }
          };

          var instanceMethods = /*#__PURE__*/ Object.freeze({
            hideLoading: hideLoading,
            disableLoading: hideLoading,
            getInput: getInput$1,
            close: close,
            closePopup: close,
            closeModal: close,
            closeToast: close,
            enableButtons: enableButtons,
            disableButtons: disableButtons,
            enableInput: enableInput,
            disableInput: disableInput,
            showValidationMessage: showValidationMessage,
            resetValidationMessage: resetValidationMessage$1,
            getProgressSteps: getProgressSteps$1,
            _main: _main,
            update: update,
            _destroy: _destroy,
          });

          var currentInstance;

          var SweetAlert = /*#__PURE__*/ (function () {
            function SweetAlert() {
              _classCallCheck(this, SweetAlert);

              // Prevent run in Node env
              if (typeof window === 'undefined') {
                return;
              } // Check for the existence of Promise

              if (typeof Promise === 'undefined') {
                error(
                  'This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)'
                );
              }

              currentInstance = this;

              for (
                var _len = arguments.length, args = new Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                args[_key] = arguments[_key];
              }

              var outerParams = Object.freeze(
                this.constructor.argsToParams(args)
              );
              Object.defineProperties(this, {
                params: {
                  value: outerParams,
                  writable: false,
                  enumerable: true,
                  configurable: true,
                },
              });

              var promise = this._main(this.params);

              privateProps.promise.set(this, promise);
            } // `catch` cannot be the name of a module export, so we define our thenable methods here instead

            _createClass(SweetAlert, [
              {
                key: 'then',
                value: function then(onFulfilled) {
                  var promise = privateProps.promise.get(this);
                  return promise.then(onFulfilled);
                },
              },
              {
                key: 'finally',
                value: function _finally(onFinally) {
                  var promise = privateProps.promise.get(this);
                  return promise['finally'](onFinally);
                },
              },
            ]);

            return SweetAlert;
          })(); // Assign instance methods from src/instanceMethods/*.js to prototype

          _extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor

          _extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility

          Object.keys(instanceMethods).forEach(function (key) {
            SweetAlert[key] = function () {
              if (currentInstance) {
                var _currentInstance;

                return (_currentInstance = currentInstance)[key].apply(
                  _currentInstance,
                  arguments
                );
              }
            };
          });
          SweetAlert.DismissReason = DismissReason;
          SweetAlert.version = '9.15.3';

          var Swal = SweetAlert;
          Swal['default'] = Swal;

          return Swal;
        });
        if (typeof this !== 'undefined' && this.Sweetalert2) {
          this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2;
        }

        'undefined' != typeof document &&
          (function (e, t) {
            var n = e.createElement('style');
            if (
              (e.getElementsByTagName('head')[0].appendChild(n), n.styleSheet)
            )
              n.styleSheet.disabled || (n.styleSheet.cssText = t);
            else
              try {
                n.innerHTML = t;
              } catch (e) {
                n.innerText = t;
              }
          })(
            document,
            '.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-no-transition{transition:none!important}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent!important;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:"";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;height:.25em;overflow:hidden;border-bottom-right-radius:.3125em;border-bottom-left-radius:.3125em}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;align-items:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:0;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}'
          );

        /***/
      },

    /***/ './js/main.js':
      /*!********************!*\
  !*** ./js/main.js ***!
  \********************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _modules_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./modules/form.js */ './js/modules/form.js'
        );
        /* harmony import */ var _modules_chained_forms_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./modules/chained-forms.js */ './js/modules/chained-forms.js'
        );
        /* harmony import */ var _modules_avatar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./modules/avatar.js */ './js/modules/avatar.js'
        );

        window['Form'] =
          _modules_form_js__WEBPACK_IMPORTED_MODULE_0__['default'];
        window['ChainedForms'] =
          _modules_chained_forms_js__WEBPACK_IMPORTED_MODULE_1__['default'];
        window['Avatar'] =
          _modules_avatar_js__WEBPACK_IMPORTED_MODULE_2__['default'];
        $(document).ready(function () {
          /* Browser fullscreen experience on double click */
          if (self == top) {
            $('body').on('dblclick', function (e) {
              if (
                !document.fullscreenElement && // alternative standard method
                !document.mozFullScreenElement &&
                !document.webkitFullscreenElement &&
                !document.msFullscreenElement
              ) {
                // current working methods
                if (document.documentElement.requestFullscreen) {
                  document.documentElement.requestFullscreen();
                } else if (document.documentElement.msRequestFullscreen) {
                  document.documentElement.msRequestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                  document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                  document.documentElement.webkitRequestFullscreen(
                    Element.ALLOW_KEYBOARD_INPUT
                  );
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
          } else {
          }
          /* float label checking input is not empty */

          $('.float-label .form-control').on('blur', function () {
            if ($(this).val() || $(this).val().length != 0) {
              $(this).closest('.float-label').addClass('active');
            } else {
              $(this).closest('.float-label').removeClass('active');
            }
          });
          /* menu open close wrapper screen click close menu */

          $('.menu-btn').on('click', function (e) {
            e.stopPropagation();

            if ($('body').hasClass('sidemenu-open') == true) {
              $('body, html').removeClass('sidemenu-open');
              setTimeout(function () {
                $('body, html').removeClass('menuactive');
              }, 500);
            } else {
              $('body, html').addClass('sidemenu-open menuactive');
            }
          });
          $('.wrapper').on('click', function () {
            if ($('body').hasClass('sidemenu-open') == true) {
              $('body, html').removeClass('sidemenu-open');
              setTimeout(function () {
                $('body, html').removeClass('menuactive');
              }, 500);
            }
          });
          /* filter click open filter */

          if ($('body').hasClass('filtermenu-open') == true) {
            $('.filter-btn').find('i').html('close');
          }

          $('.filter-btn').on('click', function () {
            if ($('body').hasClass('filtermenu-open') == true) {
              $('body').removeClass('filtermenu-open');
              $(this).find('i').html('filter_list');
            } else {
              $('body').addClass('filtermenu-open');
              $(this).find('i').html('close');
            }
          });
          /* background image to cover */

          $('.background').each(function () {
            var imagewrap = $(this);
            var imagecurrent = $(this).find('img').attr('src');
            imagewrap.css('background-image', 'url("' + imagecurrent + '")');
            $(this).find('img').remove();
          });
        });
        $(window).on('load', function () {
          $('.loader-screen').fadeOut('slow');
          /* header active on scroll more than 50 px*/

          if ($(this).scrollTop() >= 30) {
            $('.header').addClass('active');
          } else {
            $('.header').removeClass('active');
          }

          $(window).on('scroll', function () {
            /* header active on scroll more than 50 px*/
            if ($(this).scrollTop() >= 30) {
              $('.header').addClass('active');
            } else {
              $('.header').removeClass('active');
            }
          });
        });

        /***/
      },

    /***/ './js/modules/avatar.js':
      /*!******************************!*\
  !*** ./js/modules/avatar.js ***!
  \******************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return Avatar;
          }
        );
        /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime/regenerator */ '../node_modules/@babel/runtime/regenerator/index.js'
        );
        /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime/helpers/asyncToGenerator */ '../node_modules/@babel/runtime/helpers/asyncToGenerator.js'
        );
        /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @babel/runtime/helpers/classCallCheck */ '../node_modules/@babel/runtime/helpers/classCallCheck.js'
        );
        /* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @babel/runtime/helpers/createClass */ '../node_modules/@babel/runtime/helpers/createClass.js'
        );
        /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @babel/runtime/helpers/assertThisInitialized */ '../node_modules/@babel/runtime/helpers/assertThisInitialized.js'
        );
        /* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @babel/runtime/helpers/get */ '../node_modules/@babel/runtime/helpers/get.js'
        );
        /* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @babel/runtime/helpers/inherits */ '../node_modules/@babel/runtime/helpers/inherits.js'
        );
        /* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @babel/runtime/helpers/possibleConstructorReturn */ '../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'
        );
        /* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__
        );
        /* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @babel/runtime/helpers/getPrototypeOf */ '../node_modules/@babel/runtime/helpers/getPrototypeOf.js'
        );
        /* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__
        );
        /* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! @babel/runtime/helpers/defineProperty */ '../node_modules/@babel/runtime/helpers/defineProperty.js'
        );
        /* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__
        );
        /* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./modal.js */ './js/modules/modal.js'
        );

        function _createSuper(Derived) {
          var hasNativeReflectConstruct = _isNativeReflectConstruct();
          return function _createSuperInternal() {
            var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(
                Derived
              ),
              result;
            if (hasNativeReflectConstruct) {
              var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(
                this
              ).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }
            return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(
              this,
              result
            );
          };
        }

        function _isNativeReflectConstruct() {
          if (typeof Reflect === 'undefined' || !Reflect.construct)
            return false;
          if (Reflect.construct.sham) return false;
          if (typeof Proxy === 'function') return true;
          try {
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            );
            return true;
          } catch (e) {
            return false;
          }
        }

        var Avatar = /*#__PURE__*/ (function (_EditorModal) {
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(
            Avatar,
            _EditorModal
          );

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

            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(
              this,
              Avatar
            );

            _this = _super.call(this, options);

            _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              ),
              'avatar',
              null
            );

            _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              ),
              'newAvatarLink',
              null
            );

            _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              ),
              'prevAvatarLink',
              null
            );

            _this.configuration.avatar = true; // FormData object containing avatar

            _this.formData = null; // Array containing avatar input elements

            _this.$avatarInputs = null; // Create FileReader instance to handle reading image data

            _this.reader = new FileReader(); // Binding context

            _this._cacheElements = _this._cacheElements.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            );
            _this._setUpEventListeners = _this._setUpEventListeners.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            );
            _this.previewAvatar = _this.previewAvatar.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            );
            _this.submitAvatar = _this.submitAvatar.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            );
            _this.updateMarkup = _this.updateMarkup.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            );
            _this.generateFormData = _this.generateFormData.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            ); // Cache elements according to passed selectors

            _this._cacheElements(); // Setup event listeners

            _this._setUpEventListeners();

            return _this;
          }
          /**
           * Function caches elements according to passed options.
           */

          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(
            Avatar,
            [
              {
                key: '_cacheElements',
                value: function _cacheElements() {
                  _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(
                    _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(
                      Avatar.prototype
                    ),
                    '_cacheElements',
                    this
                  ).call(this); // Avatar elements in the markup

                  this.$avatar = $(this.selectors.elementSelector); // Avatar preview

                  this.$avatarPreview = this.$modal.find(
                    this.selectors.preview
                  ); // Save previous avatar to discard changes if user doesn't submit the form

                  this.prevAvatarLink = this.$avatarPreview.attr('src'); // Form

                  this.$avatarForm = this.$modal.find(this.selectors.form); // Inputs

                  this.$avatarInputs = this.$modal.find(this.selectors.input);
                },
                /**
                 * Function setup event listeners on the initialization stage of the object creation
                 */
              },
              {
                key: '_setUpEventListeners',
                value: function _setUpEventListeners() {
                  var _this2 = this;

                  _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(
                    _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(
                      Avatar.prototype
                    ),
                    '_setUpEventListeners',
                    this
                  ).call(this); // Setup event handler for loading of the image data event

                  this.reader.onload = function (e) {
                    // Show avatar preview
                    _this2.$avatarPreview.attr('src', e.target.result);

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
                },
                /**
                 * This function is called when the process of avatar preview is occuring.
                 * It accepts the input field from which the avatar is being upload
                 * The function starts loading the image
                 * @param {DOMElement} input
                 */
              },
              {
                key: 'previewAvatar',
                value: function previewAvatar(input) {
                  if (input.files && input.files[0]) {
                    //Save the currently selected avatar
                    this.avatar = input.files[0]; //Start reading the image from the input

                    this.reader.readAsDataURL(input.files[0]);
                  }
                },
              },
              {
                key: 'submitAvatar',
                value: (function () {
                  var _submitAvatar = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
                    /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                      function _callee() {
                        var response;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  this.generateFormData();
                                  _context.prev = 1;
                                  _context.next = 4;
                                  return this.makeRequest({
                                    headers: this.requests.saveAvatar.headers,
                                    endpoint: this.requests.saveAvatar.endpoint,
                                    method: this.requests.saveAvatar.method,
                                    body: this.formData,
                                  });

                                case 4:
                                  response = _context.sent;
                                  _context.next = 10;
                                  break;

                                case 7:
                                  _context.prev = 7;
                                  _context.t0 = _context['catch'](1);
                                  // Unsuccessful Popup
                                  this.showRequestResult({
                                    title: _context.t0.name,
                                    text: _context.t0.message,
                                    icon: 'error',
                                  });

                                case 10:
                                  if (response.success) {
                                    this.uploaded = true;
                                    this.updateMarkup(); // Successful Popup

                                    this.showRequestResult({
                                      title: response.title,
                                      text: response.message,
                                      icon: 'success',
                                    });
                                    this.closeModal();
                                    this.clean();
                                  } else {
                                    // Unsuccessful Popup
                                    this.showRequestResult({
                                      title: response.title,
                                      text: response.message,
                                      icon: 'error',
                                    });
                                  }

                                case 11:
                                case 'end':
                                  return _context.stop();
                              }
                            }
                          },
                          _callee,
                          this,
                          [[1, 7]]
                        );
                      }
                    )
                  );

                  function submitAvatar() {
                    return _submitAvatar.apply(this, arguments);
                  }

                  return submitAvatar;
                })(),
                /**
                 * The function to perform cleaning object fields after
                 * all the actions with avatar upload are performed
                 */
              },
              {
                key: 'clean',
                value: function clean() {
                  // Delete formData object
                  this.formData = null; // Update previous avatar link

                  this.prevAvatarLink = this.$avatarPreview.attr('src'); // Discard new link

                  this.newAvatarLink = null; // Return the previous avatar status

                  this.uploaded = false;
                },
                /**
                 * Function updates the avatar in the editing area and in the menu
                 */
              },
              {
                key: 'updateMarkup',
                value: function updateMarkup() {
                  this.$avatar.attr('src', this.newAvatarLink);
                },
                /**
                 * Function delete the newly uploaded avatar
                 * If user didn't submit the form
                 */
              },
              {
                key: 'discardChanges',
                value: function discardChanges() {
                  this.$avatarPreview.attr('src', this.prevAvatarLink);
                },
              },
            ]
          );

          return Avatar;
        })(_modal_js__WEBPACK_IMPORTED_MODULE_10__['default']);

        /***/
      },

    /***/ './js/modules/chained-forms.js':
      /*!*************************************!*\
  !*** ./js/modules/chained-forms.js ***!
  \*************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return ChainedForms;
          }
        );
        /* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime/helpers/classCallCheck */ '../node_modules/@babel/runtime/helpers/classCallCheck.js'
        );
        /* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime/helpers/createClass */ '../node_modules/@babel/runtime/helpers/createClass.js'
        );
        /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__
        );

        var ChainedForms = /*#__PURE__*/ (function () {
          function ChainedForms(options) {
            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(
              this,
              ChainedForms
            );

            // Bind context
            this._cacheElements = this._cacheElements.bind(this);
            this._setUpEventListeners = this._setUpEventListeners.bind(this); // Save options

            this.selectors = options.selectors;

            this._cacheElements();

            this._setUpEventListeners();
          }

          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(
            ChainedForms,
            [
              {
                key: '_cacheElements',
                value: function _cacheElements() {
                  var _this = this;

                  // Forms container
                  this.$container = $(this.selectors.formsContainer); // Forms to chain

                  this.$forms = this.$container
                    .find(this.selectors.forms)
                    .each(function (index, element) {
                      if (index !== 0) {
                        $(element)
                          .closest(_this.selectors.wrapper)
                          .fadeOut()
                          .hide();
                      }
                    }); // Forward button

                  this.$forwardButton = this.selectors.forward
                    ? this.$container.find(this.selectors.forward)
                    : null; // Backward button

                  this.$backwardButton = this.selectors.backward
                    ? this.$container.find(this.selectors.backward)
                    : null;
                },
              },
              {
                key: '_setUpEventListeners',
                value: function _setUpEventListeners() {
                  var _this2 = this;

                  // Show next form when the current is submitted
                  this.$forms.on('submitted', function (event) {
                    var target = event.target;
                    var step = target.dataset.step;
                    ++step;
                    if (step === _this2.$forms.length) return;
                    $(target)
                      .closest(_this2.selectors.wrapper)
                      .fadeOut(400, function () {
                        $(_this2.$forms.get(step))
                          .closest(_this2.selectors.wrapper)
                          .fadeIn(400);
                      });
                  });

                  if (this.selectors.backward) {
                    // Show previous form when the "back" button is clicked"
                    this.$backwardButton.click(function (event) {
                      // Here something is not working
                      event.stopPropagation();
                      var $form = $(event.target)
                        .closest(_this2.selectors.wrapper)
                        .find(_this2.selectors.forms);
                      var previousStep = Number($form.data('step')) - 1; // Hide the form wrapper

                      $form
                        .closest(_this2.selectors.wrapper)
                        .fadeOut(400, function () {
                          // Show the form wrapper of the previous form
                          $(_this2.$forms.get(previousStep))
                            .closest(_this2.selectors.wrapper)
                            .fadeIn(400);
                        });
                    });
                  }

                  if (this.selectors.forward) {
                    this.$forwardButton.click(function (event) {
                      event.stopPropagation();
                      var $form = $(event.target)
                        .closest(_this2.selectors.wrapper)
                        .find(_this2.selectors.forms);
                      var nextStep = Number($form.data('step')) + 1; // Hide the form wrapper

                      $form
                        .closest(_this2.selectors.wrapper)
                        .fadeOut(400, function () {
                          // Show the form wrapper of the previous form
                          $(_this2.$forms.get(nextStep))
                            .closest(_this2.selectors.wrapper)
                            .fadeIn(400);
                        });
                    });
                  }
                },
              },
            ]
          );

          return ChainedForms;
        })();

        /***/
      },

    /***/ './js/modules/form.js':
      /*!****************************!*\
  !*** ./js/modules/form.js ***!
  \****************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return Form;
          }
        );
        /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime/regenerator */ '../node_modules/@babel/runtime/regenerator/index.js'
        );
        /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime/helpers/asyncToGenerator */ '../node_modules/@babel/runtime/helpers/asyncToGenerator.js'
        );
        /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @babel/runtime/helpers/classCallCheck */ '../node_modules/@babel/runtime/helpers/classCallCheck.js'
        );
        /* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @babel/runtime/helpers/createClass */ '../node_modules/@babel/runtime/helpers/createClass.js'
        );
        /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @babel/runtime/helpers/assertThisInitialized */ '../node_modules/@babel/runtime/helpers/assertThisInitialized.js'
        );
        /* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @babel/runtime/helpers/inherits */ '../node_modules/@babel/runtime/helpers/inherits.js'
        );
        /* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @babel/runtime/helpers/possibleConstructorReturn */ '../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'
        );
        /* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @babel/runtime/helpers/getPrototypeOf */ '../node_modules/@babel/runtime/helpers/getPrototypeOf.js'
        );
        /* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__
        );
        /* harmony import */ var _requests_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./requests.js */ './js/modules/requests.js'
        );
        /* harmony import */ var _locationMixin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./locationMixin.js */ './js/modules/locationMixin.js'
        );
        /* harmony import */ var _paymentMixin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./paymentMixin.js */ './js/modules/paymentMixin.js'
        );

        function _createSuper(Derived) {
          var hasNativeReflectConstruct = _isNativeReflectConstruct();
          return function _createSuperInternal() {
            var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(
                Derived
              ),
              result;
            if (hasNativeReflectConstruct) {
              var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(
                this
              ).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }
            return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(
              this,
              result
            );
          };
        }

        function _isNativeReflectConstruct() {
          if (typeof Reflect === 'undefined' || !Reflect.construct)
            return false;
          if (Reflect.construct.sham) return false;
          if (typeof Proxy === 'function') return true;
          try {
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            );
            return true;
          } catch (e) {
            return false;
          }
        }

        var Form = /*#__PURE__*/ (function (_ServerRequest) {
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(
            Form,
            _ServerRequest
          );

          var _super = _createSuper(Form);

          function Form(options) {
            var _this;

            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(
              this,
              Form
            );

            _this = _super.call(this, options); // Data that will be sent to the server

            _this.formData = {}; // Bind context

            _this._cacheElements = _this._cacheElements.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            );
            _this._setUpEventListeners = _this._setUpEventListeners.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            );
            _this.collectLocationData = _this.collectLocationData.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            );
            _this.sendFormInformation = _this.sendFormInformation.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            );
            _this.showErrorMessages = _this.showErrorMessages.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            );
            _this.collectFormInputs = _this.collectFormInputs.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            );

            if (options.location) {
              // Add location methods to the form object
              Object.assign(
                Form.prototype,
                _locationMixin_js__WEBPACK_IMPORTED_MODULE_9__['default']
              );
              _this.location = true;
            }

            _this._cacheElements();

            _this._setUpEventListeners();

            if (options.payment) {
              Object.assign(
                Form.prototype,
                _paymentMixin_js__WEBPACK_IMPORTED_MODULE_10__['default']
              );
              _this.payment = true;
              jQuery.validator.addMethod(
                'expiration',
                _this.creditCardExpirationValidation,
                'Expiration date is passed'
              );
              jQuery.validator.addMethod(
                'cardNumber',
                _this.creditCardNumberValidation,
                'Card number is invalid'
              );
            }

            if (options.frontendValidation) {
              // If this form requires frontend validation
              _this.frontendValidation = true; // Change where error messages occur
              // This is required for label to work properly when errors are shown

              options.validatorOptions['errorPlacement'] = function (
                error,
                element
              ) {
                element.closest(_this.selectors['input-wrapper']).append(error);
              };

              if (_this.location) {
                // Add custom frontend validation for location field
                jQuery.validator.addMethod(
                  'location',
                  _this.frontendCityValidator,
                  'No such city'
                );
              } // Add frontend validation

              _this.$form.validate(options.validatorOptions);
            }

            _this.redirectOnSubmit = options.redirectOnSubmit ? true : false;
            _this.generateSubmitEvent = options.generateSubmitEvent
              ? true
              : false; // Clean fields after submission?

            _this.cleanFields = options.cleanFields ? true : false; // Show popup after submission with successful result?

            _this.showSuccessPopup = options.showSuccessPopup ? true : false; // Show popup after submission with failed result?

            _this.showFailPopup = options.showFailPopup ? true : false;
            return _this;
          }

          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(
            Form,
            [
              {
                key: '_cacheElements',
                value: function _cacheElements() {
                  // Form
                  this.$form = $(this.selectors.form); // Input fields

                  this.$inputs = this.$form.find(this.selectors.inputs);

                  if (this.location) {
                    this.initializeLocationInput();
                  }
                },
              },
              {
                key: '_setUpEventListeners',
                value: function _setUpEventListeners() {
                  var _this2 = this;

                  // Form submission
                  this.$form.submit(function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    console.log('Submitted!');

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
                    $(event.target)
                      .closest(_this2.selectors['input-wrapper'])
                      .find('.custom-error')
                      .remove();
                  });
                },
              },
              {
                key: 'collectLocationData',
                value: function collectLocationData(element) {
                  this.formData['city'] = {};

                  for (var property in element.dataset) {
                    this.formData['city'][property] = element.dataset[property];
                  }
                },
              },
              {
                key: 'collectFormInputs',
                value: function collectFormInputs() {
                  var _this3 = this;

                  // Collect form inputs
                  this.$inputs.each(function (index, element) {
                    var name = element.name;
                    var $element = $(element);

                    if ($element.is(':checkbox')) {
                      _this3.formData[name] = $element.is(':checked');
                    } else if ($element.is(':radio')) {
                      _this3.formData[name] = $(
                        'input[name=' + name + ']:checked'
                      ).val();
                    } else if (name === 'city') {
                      _this3.collectLocationData(element);
                    } else {
                      var value = $element.val();
                      var numericValue = Number(value); // Perform type conversion if the value is a number

                      _this3.formData[name] = numericValue.isNaN
                        ? value
                        : numericValue;
                    }
                  });
                },
              },
              {
                key: 'sendFormInformation',
                value: (function () {
                  var _sendFormInformation = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
                    /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                      function _callee() {
                        var response, customSubmittedEvent;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  _context.prev = 0;
                                  _context.next = 3;
                                  return this.makeRequest({
                                    headers: this.requests.submit.headers,
                                    endpoint: this.requests.submit.endpoint,
                                    method: this.requests.submit.method,
                                    body: JSON.stringify(this.formData),
                                  });

                                case 3:
                                  response = _context.sent;
                                  _context.next = 9;
                                  break;

                                case 6:
                                  _context.prev = 6;
                                  _context.t0 = _context['catch'](0);
                                  // Unsuccessful Popup
                                  this.showRequestResult({
                                    title: _context.t0.name,
                                    text: _context.t0.message,
                                    icon: 'error',
                                  });

                                case 9:
                                  _context.prev = 9;
                                  // Remove error messages
                                  this.$form.find('.error').remove();
                                  return _context.finish(9);

                                case 12:
                                  if (response.success) {
                                    if (this.generateSubmitEvent) {
                                      // Make custom event for form submission
                                      customSubmittedEvent = new CustomEvent(
                                        'submitted'
                                      ); // Dispatch custom event

                                      this.$form[0].dispatchEvent(
                                        customSubmittedEvent
                                      );
                                    }

                                    if (this.showSuccessPopup) {
                                      // Successful Popup
                                      this.showRequestResult({
                                        title: response.title,
                                        text: response.message,
                                        icon: 'success',
                                      });
                                    }

                                    if (this.cleanFields) {
                                      // Clean input fields
                                      this.$inputs.val('');
                                    }

                                    if (this.redirectOnSubmit) {
                                      // Redirection with simulating HTTP request
                                      setTimeout(function () {
                                        window.location.replace(
                                          response.redirect
                                        );
                                      }, 1000);
                                    }
                                  } else {
                                    if (this.showFailPopup) {
                                      // Unsuccessful Popup
                                      this.showRequestResult({
                                        title: response.title,
                                        text: response.message,
                                        icon: 'error',
                                      });
                                    }

                                    this.showErrorMessages({
                                      errors: response.errors,
                                    });
                                  }

                                  this.formData = {};

                                case 14:
                                case 'end':
                                  return _context.stop();
                              }
                            }
                          },
                          _callee,
                          this,
                          [[0, 6, 9, 12]]
                        );
                      }
                    )
                  );

                  function sendFormInformation() {
                    return _sendFormInformation.apply(this, arguments);
                  }

                  return sendFormInformation;
                })(),
              },
              {
                key: 'showErrorMessages',
                value: function showErrorMessages(_ref) {
                  var _this4 = this;

                  var errors = _ref.errors;
                  this.$inputs.each(function (index, element) {
                    var name = element.name;

                    if (name in errors) {
                      $(element)
                        .closest(_this4.selectors['input-wrapper'])
                        .append(
                          $('<span></span>')
                            .addClass('error')
                            .addClass('custom-error')
                            .text(errors[name])
                        );
                    }
                  });
                },
              },
            ]
          );

          return Form;
        })(_requests_js__WEBPACK_IMPORTED_MODULE_8__['default']);

        /***/
      },

    /***/ './js/modules/locationMixin.js':
      /*!*************************************!*\
  !*** ./js/modules/locationMixin.js ***!
  \*************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime/regenerator */ '../node_modules/@babel/runtime/regenerator/index.js'
        );
        /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime/helpers/asyncToGenerator */ '../node_modules/@babel/runtime/helpers/asyncToGenerator.js'
        );
        /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__
        );

        /* harmony default export */ __webpack_exports__['default'] = {
          locationInputStarted: false,
          locationInputValue: null,
          initializeLocationInput: function initializeLocationInput() {
            var requestInfo = this.requests.location; // Bind context

            this.throttleInput = this.throttleInput.bind(this);
            this.displayCities = this.displayCities.bind(this);
            this.frontendCityValidator = this.frontendCityValidator.bind(this); // Add default query params

            for (var key in requestInfo.searchParams) {
              requestInfo.endpoint.searchParams.set(
                key,
                requestInfo.searchParams[key]
              );
            }
            /* Elements caching and event listeners initialization */

            this._cacheLocationElements();

            this._setUpLocationEventListeners();
          },
          _cacheLocationElements: function _cacheLocationElements() {
            // Cache input element
            this.$locationInput = this.$form.find(this.selectors.locationInput); // Loading indicator

            this.$loadingIndicator = this.$form
              .find(this.selectors.locationLoadingIndicator)
              .fadeOut(0); // location dropdown wrapper

            this.$locationDropdownWrapper = this.$form.find(
              this.selectors['location-dropdown']
            ); // Dropdown toggle

            this.$locationDropdownToggle = this.$locationDropdownWrapper.find(
              this.selectors['dropdown-toggle']
            ); // Dropdown menu

            this.$locationDropdownMenu = this.$locationDropdownWrapper.find(
              this.selectors['dropdown-menu']
            );
          },
          _setUpLocationEventListeners: function _setUpLocationEventListeners() {
            var _this = this;

            // Listen to typing event
            this.$locationInput.on('input change', function (event) {
              // Clean previously cached values
              var customAttributes = event.target.dataset;

              for (var key in customAttributes) {
                customAttributes[key] = '';
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
              if (target.tagName !== 'LI') return;
              var dataset = target.dataset;
              _this.citySelection = true;
              clearTimeout(_this.locationTimer); // Save attributes from selected city

              _this.$locationInput
                .attr('data-lat', dataset.lat)
                .attr('data-lon', dataset.lon)
                .attr('data-name', dataset.name)
                .val(dataset.name);

              _this.citySelection = false;
              _this.locationInputStarted = false;
              _this.newValue = null;

              _this.$locationDropdownMenu.empty();

              if (_this.$locationInput.valid()) {
                _this.$locationInput.trigger('citySelected');
              }
            });
          },
          getCities: function getCities(_ref) {
            var _this2 = this;

            return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
              /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                function _callee() {
                  var headers, endpoint, method;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                    function _callee$(_context) {
                      while (1) {
                        switch ((_context.prev = _context.next)) {
                          case 0:
                            (headers = _ref.headers),
                              (endpoint = _ref.endpoint),
                              (method = _ref.method);
                            _context.next = 3;
                            return _this2.makeRequest({
                              headers: headers,
                              endpoint: endpoint,
                              method: method,
                            });

                          case 3:
                            return _context.abrupt('return', _context.sent);

                          case 4:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    },
                    _callee
                  );
                }
              )
            )();
          },
          throttleInput: function throttleInput() {
            var _this3 = this;

            return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
              /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                function _callee2() {
                  var requestInfo, newValue, cities;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                    function _callee2$(_context2) {
                      while (1) {
                        switch ((_context2.prev = _context2.next)) {
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

                            requestInfo.endpoint.searchParams.set(
                              'city',
                              _this3.locationInputValue
                            );

                            _this3.$loadingIndicator.fadeIn(150); // Make request

                            _context2.next = 8;
                            return _this3.getCities({
                              headers: requestInfo.headers,
                              endpoint: requestInfo.endpoint,
                              method: requestInfo.method,
                            });

                          case 8:
                            cities = _context2.sent;
                            // Schedule next check
                            _this3.locationTimer = setTimeout(
                              _this3.throttleInput,
                              1500
                            );

                            _this3.$loadingIndicator.fadeOut(150);

                            _this3.displayCities(cities);

                            _context2.next = 15;
                            break;

                          case 14:
                            // If the location hasn't changed recently
                            _this3.locationInputStarted = false;

                          case 15:
                          case 'end':
                            return _context2.stop();
                        }
                      }
                    },
                    _callee2
                  );
                }
              )
            )();
          },
          displayCities: function displayCities(cities) {
            var _this4 = this;

            if (cities.length === 0) return;
            cities.forEach(function (city) {
              _this4.$locationDropdownMenu
                .append(
                  $('<li></li>')
                    .addClass('dropdown-item')
                    .attr('data-lat', city.lat)
                    .attr('data-lon', city.lon)
                    .attr('data-name', city['display_name'])
                    .text(city['display_name'])
                )
                .append($('<li></li>').addClass('dropdown-divider'));
            });
            this.$locationDropdownToggle.dropdown('toggle');
          },
          frontendCityValidator: function frontendCityValidator(
            value,
            element
          ) {
            // Cache data-* sttributes
            var dataset = element.dataset;

            if (dataset['lat'] && dataset['lon'] && dataset['name']) {
              // If dataset properties are not empty, the element is valid
              return true;
            } else {
              return false;
            }
          },
        };

        /***/
      },

    /***/ './js/modules/modal.js':
      /*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime/regenerator */ '../node_modules/@babel/runtime/regenerator/index.js'
        );
        /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime/helpers/asyncToGenerator */ '../node_modules/@babel/runtime/helpers/asyncToGenerator.js'
        );
        /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @babel/runtime/helpers/classCallCheck */ '../node_modules/@babel/runtime/helpers/classCallCheck.js'
        );
        /* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @babel/runtime/helpers/createClass */ '../node_modules/@babel/runtime/helpers/createClass.js'
        );
        /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @babel/runtime/helpers/assertThisInitialized */ '../node_modules/@babel/runtime/helpers/assertThisInitialized.js'
        );
        /* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @babel/runtime/helpers/get */ '../node_modules/@babel/runtime/helpers/get.js'
        );
        /* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @babel/runtime/helpers/inherits */ '../node_modules/@babel/runtime/helpers/inherits.js'
        );
        /* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @babel/runtime/helpers/possibleConstructorReturn */ '../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'
        );
        /* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__
        );
        /* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @babel/runtime/helpers/getPrototypeOf */ '../node_modules/@babel/runtime/helpers/getPrototypeOf.js'
        );
        /* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__
        );
        /* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! @babel/runtime/helpers/defineProperty */ '../node_modules/@babel/runtime/helpers/defineProperty.js'
        );
        /* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__
        );
        /* harmony import */ var _requests_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./requests.js */ './js/modules/requests.js'
        );

        function _createSuper(Derived) {
          var hasNativeReflectConstruct = _isNativeReflectConstruct();
          return function _createSuperInternal() {
            var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(
                Derived
              ),
              result;
            if (hasNativeReflectConstruct) {
              var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(
                this
              ).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }
            return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(
              this,
              result
            );
          };
        }

        function _isNativeReflectConstruct() {
          if (typeof Reflect === 'undefined' || !Reflect.construct)
            return false;
          if (Reflect.construct.sham) return false;
          if (typeof Proxy === 'function') return true;
          try {
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            );
            return true;
          } catch (e) {
            return false;
          }
        }

        var EditorModal = /*#__PURE__*/ (function (_ServerRequest) {
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(
            EditorModal,
            _ServerRequest
          );

          var _super = _createSuper(EditorModal);

          function EditorModal(options) {
            var _this;

            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(
              this,
              EditorModal
            );

            _this = _super.call(this, options); // Making configuration object

            _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              ),
              'formData',
              null
            );

            _this.configuration = {
              avatar: false,
              uploader: false,
              editor: false,
            };

            if (_this.configuration.avatar || _this.configuration.uploader) {
              _this.uploaded = false;
            } // Binding context

            _this._cacheElements = _this._cacheElements.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            );
            _this._setUpEventListeners = _this._setUpEventListeners.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            );
            _this.savePhotoInformation = _this.savePhotoInformation.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            );
            _this.generateFormData = _this.generateFormData.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            );
            _this.closeModal = _this.closeModal.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            );
            _this.deletePhoto = _this.deletePhoto.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            );
            _this.makeURLObjects = _this.makeURLObjects.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            );
            _this.clean = _this.clean.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            );
            return _this;
          }
          /**
           * Function caches elements according to passed options.
           */

          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(
            EditorModal,
            [
              {
                key: '_cacheElements',
                value: function _cacheElements() {
                  // Modal
                  this.$modal = $(this.selectors.modal); // Find modal footer is presented
                  // And hide it

                  if (this.selectors['modal-footer']) {
                    this.$modalFooter = $(
                      this.$modal.find(this.selectors['modal-footer'])
                    ).hide();
                  } // Form

                  this.$form = this.$modal.find(this.selectors.form); // Closing button

                  this.$closeButton = this.$modal.find('.close'); // Deleting button

                  if ('deleteButton' in this.selectors) {
                    this.$deleteButton = this.$modal.find(
                      this.selectors.deleteButton
                    );
                  }
                },
              },
              {
                key: '_setUpEventListeners',
                value: function _setUpEventListeners() {
                  var _this2 = this;

                  if (
                    this.configuration.avatar ||
                    this.configuration.uploader
                  ) {
                    this.$closeButton.click(function (event) {
                      // If user closes modal without submitting changes
                      if (!_this2.uploaded) {
                        // Delete his newly uploaded photo
                        _this2.discardChanges();
                      }

                      _this2.$modalFooter.hide();
                    });
                  }
                },
                /**
                 * Function to close the modal
                 */
              },
              {
                key: 'closeModal',
                value: function closeModal() {
                  this.$closeButton.click();
                  this.clean();
                },
                /**
                 * Function to delete photo
                 * If used in editor, it will delete provided photo
                 * If used in uploader, it will find the photo containing the currently clicked button
                 * and delete the photo container
                 */
              },
              {
                key: 'deletePhoto',
                value: (function () {
                  var _deletePhoto = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
                    /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                      function _callee(event, photo) {
                        var response;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  event.preventDefault();

                                  if (!this.configuration.editor) {
                                    _context.next = 12;
                                    break;
                                  }

                                  _context.prev = 2;
                                  _context.next = 5;
                                  return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(
                                    _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(
                                      EditorModal.prototype
                                    ),
                                    'deletePhotoOnServer',
                                    this
                                  ).call(this, {
                                    id: photo.dataset.id,
                                    headers: this.requests.deletePhoto.headers,
                                    endpoint: this.requests.deletePhoto
                                      .endpoint,
                                    method: this.requests.deletePhoto.method,
                                  });

                                case 5:
                                  response = _context.sent;
                                  _context.next = 11;
                                  break;

                                case 8:
                                  _context.prev = 8;
                                  _context.t0 = _context['catch'](2);
                                  // Unsuccessful Popup
                                  this.showRequestResult({
                                    title: _context.t0.name,
                                    text: _context.t0.message,
                                    icon: 'error',
                                  });

                                case 11:
                                  if (response.success) {
                                    // Delete photo container
                                    $(photo)
                                      .closest(this.selectors.container)
                                      .remove(); // Successful Popup

                                    this.showRequestResult({
                                      title: response.title,
                                      text: response.message,
                                      icon: 'success',
                                    });
                                    this.closeModal();
                                  } else {
                                    // Unsuccessful Popup
                                    this.showRequestResult({
                                      title: response.title,
                                      text: response.message,
                                      icon: 'error',
                                    });
                                  }

                                case 12:
                                  if (this.configuration.uploader) {
                                    $(event.target)
                                      .closest(this.selectors.container)
                                      .remove();
                                  }

                                case 13:
                                case 'end':
                                  return _context.stop();
                              }
                            }
                          },
                          _callee,
                          this,
                          [[2, 8]]
                        );
                      }
                    )
                  );

                  function deletePhoto(_x, _x2) {
                    return _deletePhoto.apply(this, arguments);
                  }

                  return deletePhoto;
                })(),
                /**
                 * Function saving information about the photo
                 * @param {object}
                 * @param {object.id} id from the database for particular photo
                 * @param {object.file} file object containing photo
                 * @param {object.src} src for the image preview
                 * @param {object.privacy} privacy input value
                 * @param {object.description} description for the current photo
                 */
              },
              {
                key: 'savePhotoInformation',
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
                    description =
                      _ref$description === void 0 ? '' : _ref$description;

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
                },
              },
              {
                key: 'generateFormData',
                value: function generateFormData() {
                  this.formData = new FormData();

                  if (this.configuration.uploader) {
                    for (var id in this.photoData) {
                      for (var property in this.photoData[id]) {
                        // Don't send src for previews
                        if (property === 'src') continue;
                        this.formData.append(
                          property + id,
                          this.photoData[id][property]
                        );
                      }
                    }
                  }

                  if (this.configuration.avatar) {
                    this.formData.set('avatar', this.avatar, this.avatar.name);
                  }
                },
              },
            ]
          );

          return EditorModal;
        })(_requests_js__WEBPACK_IMPORTED_MODULE_10__['default']);

        /* harmony default export */ __webpack_exports__[
          'default'
        ] = EditorModal;

        /***/
      },

    /***/ './js/modules/paymentMixin.js':
      /*!************************************!*\
  !*** ./js/modules/paymentMixin.js ***!
  \************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime/helpers/slicedToArray */ '../node_modules/@babel/runtime/helpers/slicedToArray.js'
        );
        /* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__
        );

        /* harmony default export */ __webpack_exports__['default'] = {
          creditCardNumberValidation: function creditCardNumberValidation(
            value
          ) {
            // remove all non digit characters
            value = value.replace(/\D/g, '');
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
          creditCardExpirationValidation: function creditCardExpirationValidation(
            value
          ) {
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
              _value$match2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(
                _value$match,
                2
              ),
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

            console.log('currentYear === year:');
            console.log(currentYear === year);
            console.log('currentMonth < month');
            console.log(currentMonth < month);
            console.log('currentYear > year');
            console.log(currentYear > year);
            return currentYear === year
              ? currentMonth < month
                ? true
                : false
              : currentYear > year
              ? false
              : true;
          },
        };

        /***/
      },

    /***/ './js/modules/requests.js':
      /*!********************************!*\
  !*** ./js/modules/requests.js ***!
  \********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return ServerRequest;
          }
        );
        /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime/regenerator */ '../node_modules/@babel/runtime/regenerator/index.js'
        );
        /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime/helpers/asyncToGenerator */ '../node_modules/@babel/runtime/helpers/asyncToGenerator.js'
        );
        /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @babel/runtime/helpers/classCallCheck */ '../node_modules/@babel/runtime/helpers/classCallCheck.js'
        );
        /* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @babel/runtime/helpers/createClass */ '../node_modules/@babel/runtime/helpers/createClass.js'
        );
        /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var _swalAlertMixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./swalAlertMixin.js */ './js/modules/swalAlertMixin.js'
        );

        var ServerRequest = /*#__PURE__*/ (function () {
          function ServerRequest(options) {
            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(
              this,
              ServerRequest
            );

            // Bind context
            this.sendPhotoInformationToServer = this.sendPhotoInformationToServer.bind(
              this
            );
            this.deletePhotoOnServer = this.deletePhotoOnServer.bind(this);
            this.getPhotosIds = this.getPhotosIds.bind(this);
            this.requestBonusUsage = this.requestBonusUsage.bind(this); // Save passed options

            this.selectors = options['selectors'];
            this.requests = options['requests']; // Transform endpoints into URL Objects

            this.makeURLObjects();
            Object.assign(
              ServerRequest.prototype,
              _swalAlertMixin_js__WEBPACK_IMPORTED_MODULE_4__['default']
            );
          }
          /**
           * Transform endpoints into URL objects
           */

          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(
            ServerRequest,
            [
              {
                key: 'makeURLObjects',
                value: function makeURLObjects() {
                  for (var request in this.requests) {
                    this.requests[request].endpoint = new URL(
                      this.requests[request].endpoint
                    );
                  }
                },
                /**
                 * Make server request with the passed headers, endpoint, method and body.
                 * Function checks whether the method is GET and if so, sends request without body
                 */
              },
              {
                key: 'makeRequest',
                value: function makeRequest(_ref) {
                  var _this = this;

                  var headers = _ref.headers,
                    endpoint = _ref.endpoint,
                    method = _ref.method,
                    body = _ref.body;

                  if (method === 'GET') {
                    return fetch(endpoint, {
                      headers: headers,
                    })
                      .then(function (response) {
                        if (response.ok) {
                          return response.json();
                        } else {
                          // Unsuccessful Popup
                          _this.showRequestResult({
                            title: response.status,
                            text: response.statusText,
                            icon: 'error',
                          });
                        }
                      })
                      .then(function (json) {
                        return json;
                      })
                      ['catch'](function (error) {
                        // Unsuccessful Popup
                        _this.showRequestResult({
                          title: error.name,
                          text: error.message,
                          icon: 'error',
                        });
                      });
                  } else {
                    // If method is not GET
                    return fetch(endpoint, {
                      method: method,
                      headers: headers,
                      body: body,
                    })
                      .then(function (response) {
                        if (response.ok) {
                          return response.json();
                        } else {
                          // Unsuccessful Popup
                          _this.showRequestResult({
                            title: response.status,
                            text: response.statusText,
                            icon: 'error',
                          });
                        }
                      })
                      .then(function (json) {
                        return json;
                      })
                      ['catch'](function (error) {
                        // Unsuccessful Popup
                        _this.showRequestResult({
                          title: error.name,
                          text: error.message,
                          icon: 'error',
                        });
                      });
                  }
                },
              },
              {
                key: 'deletePhotoOnServer',
                value: (function () {
                  var _deletePhotoOnServer = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
                    /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                      function _callee(_ref2) {
                        var id, headers, endpoint, method;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  (id = _ref2.id),
                                    (headers = _ref2.headers),
                                    (endpoint = _ref2.endpoint),
                                    (method = _ref2.method);
                                  _context.next = 3;
                                  return this.makeRequest({
                                    headers: headers,
                                    endpoint: endpoint,
                                    method: method,
                                    body: JSON.stringify({
                                      id: id,
                                    }),
                                  });

                                case 3:
                                  return _context.abrupt(
                                    'return',
                                    _context.sent
                                  );

                                case 4:
                                case 'end':
                                  return _context.stop();
                              }
                            }
                          },
                          _callee,
                          this
                        );
                      }
                    )
                  );

                  function deletePhotoOnServer(_x) {
                    return _deletePhotoOnServer.apply(this, arguments);
                  }

                  return deletePhotoOnServer;
                })(),
              },
              {
                key: 'sendPhotoInformationToServer',
                value: (function () {
                  var _sendPhotoInformationToServer = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
                    /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                      function _callee2(_ref3) {
                        var id, privacy, description, headers, endpoint, method;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                          function _callee2$(_context2) {
                            while (1) {
                              switch ((_context2.prev = _context2.next)) {
                                case 0:
                                  (id = _ref3.id),
                                    (privacy = _ref3.privacy),
                                    (description = _ref3.description),
                                    (headers = _ref3.headers),
                                    (endpoint = _ref3.endpoint),
                                    (method = _ref3.method);
                                  _context2.next = 3;
                                  return this.makeRequest({
                                    headers: headers,
                                    endpoint: endpoint,
                                    method: method,
                                    body: JSON.stringify({
                                      id: id,
                                      privacy: privacy,
                                      description: description,
                                    }),
                                  });

                                case 3:
                                  return _context2.abrupt(
                                    'return',
                                    _context2.sent
                                  );

                                case 4:
                                case 'end':
                                  return _context2.stop();
                              }
                            }
                          },
                          _callee2,
                          this
                        );
                      }
                    )
                  );

                  function sendPhotoInformationToServer(_x2) {
                    return _sendPhotoInformationToServer.apply(this, arguments);
                  }

                  return sendPhotoInformationToServer;
                })(),
              },
              {
                key: 'getPhotosIds',
                value: (function () {
                  var _getPhotosIds = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
                    /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                      function _callee3(_ref4) {
                        var filesAmount, headers, endpoint, method;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                          function _callee3$(_context3) {
                            while (1) {
                              switch ((_context3.prev = _context3.next)) {
                                case 0:
                                  (filesAmount = _ref4.filesAmount),
                                    (headers = _ref4.headers),
                                    (endpoint = _ref4.endpoint),
                                    (method = _ref4.method);
                                  // Add amount of files as a query parameter
                                  this.requests.getIds.endpoint.searchParams.set(
                                    'amount',
                                    String(filesAmount)
                                  );
                                  _context3.next = 4;
                                  return this.makeRequest({
                                    headers: headers,
                                    endpoint: endpoint,
                                    method: method,
                                  });

                                case 4:
                                  return _context3.abrupt(
                                    'return',
                                    _context3.sent
                                  );

                                case 5:
                                case 'end':
                                  return _context3.stop();
                              }
                            }
                          },
                          _callee3,
                          this
                        );
                      }
                    )
                  );

                  function getPhotosIds(_x3) {
                    return _getPhotosIds.apply(this, arguments);
                  }

                  return getPhotosIds;
                })(),
              },
              {
                key: 'getPrice',
                value: (function () {
                  var _getPrice = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
                    /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                      function _callee4(_ref5) {
                        var headers, endpoint, method, name;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                          function _callee4$(_context4) {
                            while (1) {
                              switch ((_context4.prev = _context4.next)) {
                                case 0:
                                  (headers = _ref5.headers),
                                    (endpoint = _ref5.endpoint),
                                    (method = _ref5.method);

                                  for (name in this.formData) {
                                    endpoint.searchParams.set(
                                      name,
                                      this.formData[name]
                                    );
                                  }

                                  _context4.next = 4;
                                  return this.makeRequest({
                                    headers: headers,
                                    endpoint: endpoint,
                                    method: method,
                                  });

                                case 4:
                                  return _context4.abrupt(
                                    'return',
                                    _context4.sent
                                  );

                                case 5:
                                case 'end':
                                  return _context4.stop();
                              }
                            }
                          },
                          _callee4,
                          this
                        );
                      }
                    )
                  );

                  function getPrice(_x4) {
                    return _getPrice.apply(this, arguments);
                  }

                  return getPrice;
                })(),
              },
              {
                key: 'requestBonusUsage',
                value: function requestBonusUsage(_ref6) {
                  var headers = _ref6.headers,
                    endpoint = _ref6.endpoint,
                    method = _ref6.method,
                    body = _ref6.body;
                  return fetch(endpoint, {
                    method: method,
                    headers: headers,
                    body: body,
                  })
                    .then(function (response) {
                      if (!response.ok) {
                        throw new Error(response.statusText);
                      }

                      return response.json();
                    })
                    ['catch'](function (error) {
                      Swal.showValidationMessage(
                        'Request failed: '.concat(error)
                      );
                    });
                },
              },
            ]
          );

          return ServerRequest;
        })();

        /***/
      },

    /***/ './js/modules/swalAlertMixin.js':
      /*!**************************************!*\
  !*** ./js/modules/swalAlertMixin.js ***!
  \**************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! sweetalert2 */ '../node_modules/sweetalert2/dist/sweetalert2.all.js'
        );
        /* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          sweetalert2__WEBPACK_IMPORTED_MODULE_0__
        );

        /* harmony default export */ __webpack_exports__['default'] = {
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
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
              title: title,
              text: text,
              icon: icon,
              showConfirmButton: false,
              showCloseButton: true,
            });
          },
          showTimerExpired: function showTimerExpired(_ref2) {
            var title = _ref2.title,
              text = _ref2.text;
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
              title: title,
              text: text,
              icon: icon,
              showConfirmButton: false,
              showCloseButton: true,
            });
          },
          fireBuyingAlert: function fireBuyingAlert(_ref3) {
            var title = _ref3.title,
              text = _ref3.text,
              confirmButtonText = _ref3.confirmButtonText,
              cancelButtonText = _ref3.cancelButtonText;
            return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
              title: title,
              text: text,
              cancelButtonText: cancelButtonText,
              confirmButtonText: confirmButtonText,
              showCancelButton: true,
              confirmButtonColor: '#ff0068',
              cancelButtonColor: '#bbb',
            });
          },
          fireSendAlert: function fireSendAlert(_ref4) {
            var title = _ref4.title,
              text = _ref4.text,
              confirmButtonText = _ref4.confirmButtonText,
              cancelButtonText = _ref4.cancelButtonText,
              imageUrl = _ref4.imageUrl,
              imageAlt = _ref4.imageAlt;
            return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
              title: title,
              text: text,
              cancelButtonText: cancelButtonText,
              confirmButtonText: confirmButtonText,
              confirmButtonColor: '#ff0068',
              imageUrl: imageUrl,
              imageAlt: imageAlt,
              imageWidth: '150px',
              imageHeight: '150px',
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
          askUsageApprovement: function askUsageApprovement(_ref5) {
            var _this = this;

            var title = _ref5.title,
              _ref5$text = _ref5.text,
              text = _ref5$text === void 0 ? '' : _ref5$text,
              confirmButtonText = _ref5.confirmButtonText,
              cancelButtonText = _ref5.cancelButtonText,
              imageUrl = _ref5.imageUrl,
              imageAlt = _ref5.imageAlt,
              request = _ref5.request;
            return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a
              .fire({
                title: title,
                text: text,
                cancelButtonText: cancelButtonText,
                confirmButtonText: confirmButtonText,
                showCancelButton: true,
                confirmButtonColor: '#ff0068',
                cancelButtonColor: '#bbb',
                imageUrl: imageUrl,
                imageAlt: imageAlt,
                imageWidth: '150px',
                imageHeight: '150px',
                showLoaderOnConfirm: true,
                // Request telling the server thas user wants to use the bonus
                preConfirm: function preConfirm() {
                  return _this.requestBonusUsage(request);
                },
                allowOutsideClick: function allowOutsideClick() {
                  return !sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.isLoading();
                },
              })
              .then(function (result) {
                if (result.value) {
                  // If the server answered
                  var json = result.value;

                  if (json.success) {
                    // If the server approved bonus usage
                    // Show popup about success
                    _this.showRequestResult({
                      title: json.title,
                      text: json.message,
                      icon: 'success',
                    });
                  } else {
                    // If the server restricted bonus usage
                    // Show success about error
                    _this.showRequestResult({
                      title: json.title,
                      text: json.message,
                      icon: 'error',
                    });
                  } // Maybe change to switch statement when other bonuses will be added

                  if (_this.type === 'boost') {
                    return {
                      approved: json.success,
                      title: json.title,
                      message: json.message,
                      timestamp: json.timestamp,
                      expirationTitle: json.expirationTitle,
                      expirationMessage: json.expirationMessage,
                    };
                  }
                } else {
                  return {
                    approved: false,
                  };
                }
              });
          },
        };

        /***/
      },

    /***/ 1:
      /*!**************************!*\
  !*** multi ./js/main.js ***!
  \**************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! ./js/main.js */ './js/main.js'
        );

        /***/
      },

    /******/
  }
);
//# sourceMappingURL=main.bundle.js.map
