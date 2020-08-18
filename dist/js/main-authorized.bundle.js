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
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
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

    /***/ '../node_modules/@babel/runtime/helpers/construct.js':
      /*!***********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/construct.js ***!
  \***********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var setPrototypeOf = __webpack_require__(
          /*! ./setPrototypeOf */ '../node_modules/@babel/runtime/helpers/setPrototypeOf.js'
        );

        var isNativeReflectConstruct = __webpack_require__(
          /*! ./isNativeReflectConstruct */ '../node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js'
        );

        function _construct(Parent, args, Class) {
          if (isNativeReflectConstruct()) {
            module.exports = _construct = Reflect.construct;
          } else {
            module.exports = _construct = function _construct(
              Parent,
              args,
              Class
            ) {
              var a = [null];
              a.push.apply(a, args);
              var Constructor = Function.bind.apply(Parent, a);
              var instance = new Constructor();
              if (Class) setPrototypeOf(instance, Class.prototype);
              return instance;
            };
          }

          return _construct.apply(null, arguments);
        }

        module.exports = _construct;

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

    /***/ '../node_modules/@babel/runtime/helpers/isNativeFunction.js':
      /*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/isNativeFunction.js ***!
  \******************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        function _isNativeFunction(fn) {
          return Function.toString.call(fn).indexOf('[native code]') !== -1;
        }

        module.exports = _isNativeFunction;

        /***/
      },

    /***/ '../node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js':
      /*!**************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \**************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
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

        module.exports = _isNativeReflectConstruct;

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

    /***/ '../node_modules/@babel/runtime/helpers/wrapNativeSuper.js':
      /*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/wrapNativeSuper.js ***!
  \*****************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var getPrototypeOf = __webpack_require__(
          /*! ./getPrototypeOf */ '../node_modules/@babel/runtime/helpers/getPrototypeOf.js'
        );

        var setPrototypeOf = __webpack_require__(
          /*! ./setPrototypeOf */ '../node_modules/@babel/runtime/helpers/setPrototypeOf.js'
        );

        var isNativeFunction = __webpack_require__(
          /*! ./isNativeFunction */ '../node_modules/@babel/runtime/helpers/isNativeFunction.js'
        );

        var construct = __webpack_require__(
          /*! ./construct */ '../node_modules/@babel/runtime/helpers/construct.js'
        );

        function _wrapNativeSuper(Class) {
          var _cache = typeof Map === 'function' ? new Map() : undefined;

          module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
            if (Class === null || !isNativeFunction(Class)) return Class;

            if (typeof Class !== 'function') {
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            }

            if (typeof _cache !== 'undefined') {
              if (_cache.has(Class)) return _cache.get(Class);

              _cache.set(Class, Wrapper);
            }

            function Wrapper() {
              return construct(
                Class,
                arguments,
                getPrototypeOf(this).constructor
              );
            }

            Wrapper.prototype = Object.create(Class.prototype, {
              constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            });
            return setPrototypeOf(Wrapper, Class);
          };

          return _wrapNativeSuper(Class);
        }

        module.exports = _wrapNativeSuper;

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

    /***/ '../node_modules/moment/locale sync recursive [\\/\\\\](pl(\\.js)?)$':
      /*!*************************************************************!*\
  !*** ../node_modules/moment/locale sync [\/\\](pl(\.js)?)$ ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var map = {
          './pl': '../node_modules/moment/locale/pl.js',
          './pl.js': '../node_modules/moment/locale/pl.js',
        };

        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          }
          return map[req];
        }
        webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        };
        webpackContext.resolve = webpackContextResolve;
        module.exports = webpackContext;
        webpackContext.id =
          '../node_modules/moment/locale sync recursive [\\/\\\\](pl(\\.js)?)$';

        /***/
      },

    /***/ '../node_modules/moment/locale/pl.js':
      /*!*******************************************!*\
  !*** ../node_modules/moment/locale/pl.js ***!
  \*******************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        //! moment.js locale configuration
        //! locale : Polish [pl]
        //! author : Rafal Hirsz : https://github.com/evoL

        (function (global, factory) {
          true
            ? factory(
                __webpack_require__(
                  /*! ../moment */ '../node_modules/moment/moment.js'
                )
              )
            : undefined;
        })(this, function (moment) {
          'use strict';

          //! moment.js locale configuration

          var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split(
              '_'
            ),
            monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split(
              '_'
            );
          function plural(n) {
            return n % 10 < 5 && n % 10 > 1 && ~~(n / 10) % 10 !== 1;
          }
          function translate(number, withoutSuffix, key) {
            var result = number + ' ';
            switch (key) {
              case 'ss':
                return result + (plural(number) ? 'sekundy' : 'sekund');
              case 'm':
                return withoutSuffix ? 'minuta' : 'minutę';
              case 'mm':
                return result + (plural(number) ? 'minuty' : 'minut');
              case 'h':
                return withoutSuffix ? 'godzina' : 'godzinę';
              case 'hh':
                return result + (plural(number) ? 'godziny' : 'godzin');
              case 'MM':
                return result + (plural(number) ? 'miesiące' : 'miesięcy');
              case 'yy':
                return result + (plural(number) ? 'lata' : 'lat');
            }
          }

          var pl = moment.defineLocale('pl', {
            months: function (momentToFormat, format) {
              if (!momentToFormat) {
                return monthsNominative;
              } else if (format === '') {
                // Hack: if format empty we know this is used to generate
                // RegExp by moment. Give then back both valid forms of months
                // in RegExp ready format.
                return (
                  '(' +
                  monthsSubjective[momentToFormat.month()] +
                  '|' +
                  monthsNominative[momentToFormat.month()] +
                  ')'
                );
              } else if (/D MMMM/.test(format)) {
                return monthsSubjective[momentToFormat.month()];
              } else {
                return monthsNominative[momentToFormat.month()];
              }
            },
            monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split(
              '_'
            ),
            weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split(
              '_'
            ),
            weekdaysShort: 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
            weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD.MM.YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd, D MMMM YYYY HH:mm',
            },
            calendar: {
              sameDay: '[Dziś o] LT',
              nextDay: '[Jutro o] LT',
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return '[W niedzielę o] LT';

                  case 2:
                    return '[We wtorek o] LT';

                  case 3:
                    return '[W środę o] LT';

                  case 6:
                    return '[W sobotę o] LT';

                  default:
                    return '[W] dddd [o] LT';
                }
              },
              lastDay: '[Wczoraj o] LT',
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                    return '[W zeszłą niedzielę o] LT';
                  case 3:
                    return '[W zeszłą środę o] LT';
                  case 6:
                    return '[W zeszłą sobotę o] LT';
                  default:
                    return '[W zeszły] dddd [o] LT';
                }
              },
              sameElse: 'L',
            },
            relativeTime: {
              future: 'za %s',
              past: '%s temu',
              s: 'kilka sekund',
              ss: translate,
              m: translate,
              mm: translate,
              h: translate,
              hh: translate,
              d: '1 dzień',
              dd: '%d dni',
              M: 'miesiąc',
              MM: translate,
              y: 'rok',
              yy: translate,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: '%d.',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4, // The week that contains Jan 4th is the first week of the year.
            },
          });

          return pl;
        });

        /***/
      },

    /***/ '../node_modules/moment/moment.js':
      /*!****************************************!*\
  !*** ../node_modules/moment/moment.js ***!
  \****************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function (module) {
          var require; //! moment.js
          //! version : 2.27.0
          //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
          //! license : MIT
          //! momentjs.com

          (function (global, factory) {
            true ? (module.exports = factory()) : undefined;
          })(this, function () {
            'use strict';

            var hookCallback;

            function hooks() {
              return hookCallback.apply(null, arguments);
            }

            // This is done to register the method called with moment()
            // without creating circular dependencies.
            function setHookCallback(callback) {
              hookCallback = callback;
            }

            function isArray(input) {
              return (
                input instanceof Array ||
                Object.prototype.toString.call(input) === '[object Array]'
              );
            }

            function isObject(input) {
              // IE8 will treat undefined and null as object if it wasn't for
              // input != null
              return (
                input != null &&
                Object.prototype.toString.call(input) === '[object Object]'
              );
            }

            function hasOwnProp(a, b) {
              return Object.prototype.hasOwnProperty.call(a, b);
            }

            function isObjectEmpty(obj) {
              if (Object.getOwnPropertyNames) {
                return Object.getOwnPropertyNames(obj).length === 0;
              } else {
                var k;
                for (k in obj) {
                  if (hasOwnProp(obj, k)) {
                    return false;
                  }
                }
                return true;
              }
            }

            function isUndefined(input) {
              return input === void 0;
            }

            function isNumber(input) {
              return (
                typeof input === 'number' ||
                Object.prototype.toString.call(input) === '[object Number]'
              );
            }

            function isDate(input) {
              return (
                input instanceof Date ||
                Object.prototype.toString.call(input) === '[object Date]'
              );
            }

            function map(arr, fn) {
              var res = [],
                i;
              for (i = 0; i < arr.length; ++i) {
                res.push(fn(arr[i], i));
              }
              return res;
            }

            function extend(a, b) {
              for (var i in b) {
                if (hasOwnProp(b, i)) {
                  a[i] = b[i];
                }
              }

              if (hasOwnProp(b, 'toString')) {
                a.toString = b.toString;
              }

              if (hasOwnProp(b, 'valueOf')) {
                a.valueOf = b.valueOf;
              }

              return a;
            }

            function createUTC(input, format, locale, strict) {
              return createLocalOrUTC(
                input,
                format,
                locale,
                strict,
                true
              ).utc();
            }

            function defaultParsingFlags() {
              // We need to deep clone this object.
              return {
                empty: false,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: false,
                invalidEra: null,
                invalidMonth: null,
                invalidFormat: false,
                userInvalidated: false,
                iso: false,
                parsedDateParts: [],
                era: null,
                meridiem: null,
                rfc2822: false,
                weekdayMismatch: false,
              };
            }

            function getParsingFlags(m) {
              if (m._pf == null) {
                m._pf = defaultParsingFlags();
              }
              return m._pf;
            }

            var some;
            if (Array.prototype.some) {
              some = Array.prototype.some;
            } else {
              some = function (fun) {
                var t = Object(this),
                  len = t.length >>> 0,
                  i;

                for (i = 0; i < len; i++) {
                  if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                  }
                }

                return false;
              };
            }

            function isValid(m) {
              if (m._isValid == null) {
                var flags = getParsingFlags(m),
                  parsedParts = some.call(flags.parsedDateParts, function (i) {
                    return i != null;
                  }),
                  isNowValid =
                    !isNaN(m._d.getTime()) &&
                    flags.overflow < 0 &&
                    !flags.empty &&
                    !flags.invalidEra &&
                    !flags.invalidMonth &&
                    !flags.invalidWeekday &&
                    !flags.weekdayMismatch &&
                    !flags.nullInput &&
                    !flags.invalidFormat &&
                    !flags.userInvalidated &&
                    (!flags.meridiem || (flags.meridiem && parsedParts));

                if (m._strict) {
                  isNowValid =
                    isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
                }

                if (Object.isFrozen == null || !Object.isFrozen(m)) {
                  m._isValid = isNowValid;
                } else {
                  return isNowValid;
                }
              }
              return m._isValid;
            }

            function createInvalid(flags) {
              var m = createUTC(NaN);
              if (flags != null) {
                extend(getParsingFlags(m), flags);
              } else {
                getParsingFlags(m).userInvalidated = true;
              }

              return m;
            }

            // Plugins that add properties should also add the key here (null value),
            // so we can properly clone ourselves.
            var momentProperties = (hooks.momentProperties = []),
              updateInProgress = false;

            function copyConfig(to, from) {
              var i, prop, val;

              if (!isUndefined(from._isAMomentObject)) {
                to._isAMomentObject = from._isAMomentObject;
              }
              if (!isUndefined(from._i)) {
                to._i = from._i;
              }
              if (!isUndefined(from._f)) {
                to._f = from._f;
              }
              if (!isUndefined(from._l)) {
                to._l = from._l;
              }
              if (!isUndefined(from._strict)) {
                to._strict = from._strict;
              }
              if (!isUndefined(from._tzm)) {
                to._tzm = from._tzm;
              }
              if (!isUndefined(from._isUTC)) {
                to._isUTC = from._isUTC;
              }
              if (!isUndefined(from._offset)) {
                to._offset = from._offset;
              }
              if (!isUndefined(from._pf)) {
                to._pf = getParsingFlags(from);
              }
              if (!isUndefined(from._locale)) {
                to._locale = from._locale;
              }

              if (momentProperties.length > 0) {
                for (i = 0; i < momentProperties.length; i++) {
                  prop = momentProperties[i];
                  val = from[prop];
                  if (!isUndefined(val)) {
                    to[prop] = val;
                  }
                }
              }

              return to;
            }

            // Moment prototype object
            function Moment(config) {
              copyConfig(this, config);
              this._d = new Date(config._d != null ? config._d.getTime() : NaN);
              if (!this.isValid()) {
                this._d = new Date(NaN);
              }
              // Prevent infinite loop in case updateOffset creates new moment
              // objects.
              if (updateInProgress === false) {
                updateInProgress = true;
                hooks.updateOffset(this);
                updateInProgress = false;
              }
            }

            function isMoment(obj) {
              return (
                obj instanceof Moment ||
                (obj != null && obj._isAMomentObject != null)
              );
            }

            function warn(msg) {
              if (
                hooks.suppressDeprecationWarnings === false &&
                typeof console !== 'undefined' &&
                console.warn
              ) {
                console.warn('Deprecation warning: ' + msg);
              }
            }

            function deprecate(msg, fn) {
              var firstTime = true;

              return extend(function () {
                if (hooks.deprecationHandler != null) {
                  hooks.deprecationHandler(null, msg);
                }
                if (firstTime) {
                  var args = [],
                    arg,
                    i,
                    key;
                  for (i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                      arg += '\n[' + i + '] ';
                      for (key in arguments[0]) {
                        if (hasOwnProp(arguments[0], key)) {
                          arg += key + ': ' + arguments[0][key] + ', ';
                        }
                      }
                      arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                      arg = arguments[i];
                    }
                    args.push(arg);
                  }
                  warn(
                    msg +
                      '\nArguments: ' +
                      Array.prototype.slice.call(args).join('') +
                      '\n' +
                      new Error().stack
                  );
                  firstTime = false;
                }
                return fn.apply(this, arguments);
              }, fn);
            }

            var deprecations = {};

            function deprecateSimple(name, msg) {
              if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(name, msg);
              }
              if (!deprecations[name]) {
                warn(msg);
                deprecations[name] = true;
              }
            }

            hooks.suppressDeprecationWarnings = false;
            hooks.deprecationHandler = null;

            function isFunction(input) {
              return (
                (typeof Function !== 'undefined' &&
                  input instanceof Function) ||
                Object.prototype.toString.call(input) === '[object Function]'
              );
            }

            function set(config) {
              var prop, i;
              for (i in config) {
                if (hasOwnProp(config, i)) {
                  prop = config[i];
                  if (isFunction(prop)) {
                    this[i] = prop;
                  } else {
                    this['_' + i] = prop;
                  }
                }
              }
              this._config = config;
              // Lenient ordinal parsing accepts just a number in addition to
              // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
              // TODO: Remove "ordinalParse" fallback in next major release.
              this._dayOfMonthOrdinalParseLenient = new RegExp(
                (this._dayOfMonthOrdinalParse.source ||
                  this._ordinalParse.source) +
                  '|' +
                  /\d{1,2}/.source
              );
            }

            function mergeConfigs(parentConfig, childConfig) {
              var res = extend({}, parentConfig),
                prop;
              for (prop in childConfig) {
                if (hasOwnProp(childConfig, prop)) {
                  if (
                    isObject(parentConfig[prop]) &&
                    isObject(childConfig[prop])
                  ) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                  } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                  } else {
                    delete res[prop];
                  }
                }
              }
              for (prop in parentConfig) {
                if (
                  hasOwnProp(parentConfig, prop) &&
                  !hasOwnProp(childConfig, prop) &&
                  isObject(parentConfig[prop])
                ) {
                  // make sure changes to properties don't modify parent config
                  res[prop] = extend({}, res[prop]);
                }
              }
              return res;
            }

            function Locale(config) {
              if (config != null) {
                this.set(config);
              }
            }

            var keys;

            if (Object.keys) {
              keys = Object.keys;
            } else {
              keys = function (obj) {
                var i,
                  res = [];
                for (i in obj) {
                  if (hasOwnProp(obj, i)) {
                    res.push(i);
                  }
                }
                return res;
              };
            }

            var defaultCalendar = {
              sameDay: '[Today at] LT',
              nextDay: '[Tomorrow at] LT',
              nextWeek: 'dddd [at] LT',
              lastDay: '[Yesterday at] LT',
              lastWeek: '[Last] dddd [at] LT',
              sameElse: 'L',
            };

            function calendar(key, mom, now) {
              var output = this._calendar[key] || this._calendar['sameElse'];
              return isFunction(output) ? output.call(mom, now) : output;
            }

            function zeroFill(number, targetLength, forceSign) {
              var absNumber = '' + Math.abs(number),
                zerosToFill = targetLength - absNumber.length,
                sign = number >= 0;
              return (
                (sign ? (forceSign ? '+' : '') : '-') +
                Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
                absNumber
              );
            }

            var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
              localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
              formatFunctions = {},
              formatTokenFunctions = {};

            // token:    'M'
            // padded:   ['MM', 2]
            // ordinal:  'Mo'
            // callback: function () { this.month() + 1 }
            function addFormatToken(token, padded, ordinal, callback) {
              var func = callback;
              if (typeof callback === 'string') {
                func = function () {
                  return this[callback]();
                };
              }
              if (token) {
                formatTokenFunctions[token] = func;
              }
              if (padded) {
                formatTokenFunctions[padded[0]] = function () {
                  return zeroFill(
                    func.apply(this, arguments),
                    padded[1],
                    padded[2]
                  );
                };
              }
              if (ordinal) {
                formatTokenFunctions[ordinal] = function () {
                  return this.localeData().ordinal(
                    func.apply(this, arguments),
                    token
                  );
                };
              }
            }

            function removeFormattingTokens(input) {
              if (input.match(/\[[\s\S]/)) {
                return input.replace(/^\[|\]$/g, '');
              }
              return input.replace(/\\/g, '');
            }

            function makeFormatFunction(format) {
              var array = format.match(formattingTokens),
                i,
                length;

              for (i = 0, length = array.length; i < length; i++) {
                if (formatTokenFunctions[array[i]]) {
                  array[i] = formatTokenFunctions[array[i]];
                } else {
                  array[i] = removeFormattingTokens(array[i]);
                }
              }

              return function (mom) {
                var output = '',
                  i;
                for (i = 0; i < length; i++) {
                  output += isFunction(array[i])
                    ? array[i].call(mom, format)
                    : array[i];
                }
                return output;
              };
            }

            // format date using native date object
            function formatMoment(m, format) {
              if (!m.isValid()) {
                return m.localeData().invalidDate();
              }

              format = expandFormat(format, m.localeData());
              formatFunctions[format] =
                formatFunctions[format] || makeFormatFunction(format);

              return formatFunctions[format](m);
            }

            function expandFormat(format, locale) {
              var i = 5;

              function replaceLongDateFormatTokens(input) {
                return locale.longDateFormat(input) || input;
              }

              localFormattingTokens.lastIndex = 0;
              while (i >= 0 && localFormattingTokens.test(format)) {
                format = format.replace(
                  localFormattingTokens,
                  replaceLongDateFormatTokens
                );
                localFormattingTokens.lastIndex = 0;
                i -= 1;
              }

              return format;
            }

            var defaultLongDateFormat = {
              LTS: 'h:mm:ss A',
              LT: 'h:mm A',
              L: 'MM/DD/YYYY',
              LL: 'MMMM D, YYYY',
              LLL: 'MMMM D, YYYY h:mm A',
              LLLL: 'dddd, MMMM D, YYYY h:mm A',
            };

            function longDateFormat(key) {
              var format = this._longDateFormat[key],
                formatUpper = this._longDateFormat[key.toUpperCase()];

              if (format || !formatUpper) {
                return format;
              }

              this._longDateFormat[key] = formatUpper
                .match(formattingTokens)
                .map(function (tok) {
                  if (
                    tok === 'MMMM' ||
                    tok === 'MM' ||
                    tok === 'DD' ||
                    tok === 'dddd'
                  ) {
                    return tok.slice(1);
                  }
                  return tok;
                })
                .join('');

              return this._longDateFormat[key];
            }

            var defaultInvalidDate = 'Invalid date';

            function invalidDate() {
              return this._invalidDate;
            }

            var defaultOrdinal = '%d',
              defaultDayOfMonthOrdinalParse = /\d{1,2}/;

            function ordinal(number) {
              return this._ordinal.replace('%d', number);
            }

            var defaultRelativeTime = {
              future: 'in %s',
              past: '%s ago',
              s: 'a few seconds',
              ss: '%d seconds',
              m: 'a minute',
              mm: '%d minutes',
              h: 'an hour',
              hh: '%d hours',
              d: 'a day',
              dd: '%d days',
              w: 'a week',
              ww: '%d weeks',
              M: 'a month',
              MM: '%d months',
              y: 'a year',
              yy: '%d years',
            };

            function relativeTime(number, withoutSuffix, string, isFuture) {
              var output = this._relativeTime[string];
              return isFunction(output)
                ? output(number, withoutSuffix, string, isFuture)
                : output.replace(/%d/i, number);
            }

            function pastFuture(diff, output) {
              var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
              return isFunction(format)
                ? format(output)
                : format.replace(/%s/i, output);
            }

            var aliases = {};

            function addUnitAlias(unit, shorthand) {
              var lowerCase = unit.toLowerCase();
              aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[
                shorthand
              ] = unit;
            }

            function normalizeUnits(units) {
              return typeof units === 'string'
                ? aliases[units] || aliases[units.toLowerCase()]
                : undefined;
            }

            function normalizeObjectUnits(inputObject) {
              var normalizedInput = {},
                normalizedProp,
                prop;

              for (prop in inputObject) {
                if (hasOwnProp(inputObject, prop)) {
                  normalizedProp = normalizeUnits(prop);
                  if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                  }
                }
              }

              return normalizedInput;
            }

            var priorities = {};

            function addUnitPriority(unit, priority) {
              priorities[unit] = priority;
            }

            function getPrioritizedUnits(unitsObj) {
              var units = [],
                u;
              for (u in unitsObj) {
                if (hasOwnProp(unitsObj, u)) {
                  units.push({ unit: u, priority: priorities[u] });
                }
              }
              units.sort(function (a, b) {
                return a.priority - b.priority;
              });
              return units;
            }

            function isLeapYear(year) {
              return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
            }

            function absFloor(number) {
              if (number < 0) {
                // -0 -> 0
                return Math.ceil(number) || 0;
              } else {
                return Math.floor(number);
              }
            }

            function toInt(argumentForCoercion) {
              var coercedNumber = +argumentForCoercion,
                value = 0;

              if (coercedNumber !== 0 && isFinite(coercedNumber)) {
                value = absFloor(coercedNumber);
              }

              return value;
            }

            function makeGetSet(unit, keepTime) {
              return function (value) {
                if (value != null) {
                  set$1(this, unit, value);
                  hooks.updateOffset(this, keepTime);
                  return this;
                } else {
                  return get(this, unit);
                }
              };
            }

            function get(mom, unit) {
              return mom.isValid()
                ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]()
                : NaN;
            }

            function set$1(mom, unit, value) {
              if (mom.isValid() && !isNaN(value)) {
                if (
                  unit === 'FullYear' &&
                  isLeapYear(mom.year()) &&
                  mom.month() === 1 &&
                  mom.date() === 29
                ) {
                  value = toInt(value);
                  mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](
                    value,
                    mom.month(),
                    daysInMonth(value, mom.month())
                  );
                } else {
                  mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
                }
              }
            }

            // MOMENTS

            function stringGet(units) {
              units = normalizeUnits(units);
              if (isFunction(this[units])) {
                return this[units]();
              }
              return this;
            }

            function stringSet(units, value) {
              if (typeof units === 'object') {
                units = normalizeObjectUnits(units);
                var prioritized = getPrioritizedUnits(units),
                  i;
                for (i = 0; i < prioritized.length; i++) {
                  this[prioritized[i].unit](units[prioritized[i].unit]);
                }
              } else {
                units = normalizeUnits(units);
                if (isFunction(this[units])) {
                  return this[units](value);
                }
              }
              return this;
            }

            var match1 = /\d/, //       0 - 9
              match2 = /\d\d/, //      00 - 99
              match3 = /\d{3}/, //     000 - 999
              match4 = /\d{4}/, //    0000 - 9999
              match6 = /[+-]?\d{6}/, // -999999 - 999999
              match1to2 = /\d\d?/, //       0 - 99
              match3to4 = /\d\d\d\d?/, //     999 - 9999
              match5to6 = /\d\d\d\d\d\d?/, //   99999 - 999999
              match1to3 = /\d{1,3}/, //       0 - 999
              match1to4 = /\d{1,4}/, //       0 - 9999
              match1to6 = /[+-]?\d{1,6}/, // -999999 - 999999
              matchUnsigned = /\d+/, //       0 - inf
              matchSigned = /[+-]?\d+/, //    -inf - inf
              matchOffset = /Z|[+-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
              matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, // +00 -00 +00:00 -00:00 +0000 -0000 or Z
              matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
              // any word (or two) characters or numbers including two/three word month in arabic.
              // includes scottish gaelic two word and hyphenated months
              matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
              regexes;

            regexes = {};

            function addRegexToken(token, regex, strictRegex) {
              regexes[token] = isFunction(regex)
                ? regex
                : function (isStrict, localeData) {
                    return isStrict && strictRegex ? strictRegex : regex;
                  };
            }

            function getParseRegexForToken(token, config) {
              if (!hasOwnProp(regexes, token)) {
                return new RegExp(unescapeFormat(token));
              }

              return regexes[token](config._strict, config._locale);
            }

            // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
            function unescapeFormat(s) {
              return regexEscape(
                s
                  .replace('\\', '')
                  .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (
                    matched,
                    p1,
                    p2,
                    p3,
                    p4
                  ) {
                    return p1 || p2 || p3 || p4;
                  })
              );
            }

            function regexEscape(s) {
              return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            }

            var tokens = {};

            function addParseToken(token, callback) {
              var i,
                func = callback;
              if (typeof token === 'string') {
                token = [token];
              }
              if (isNumber(callback)) {
                func = function (input, array) {
                  array[callback] = toInt(input);
                };
              }
              for (i = 0; i < token.length; i++) {
                tokens[token[i]] = func;
              }
            }

            function addWeekParseToken(token, callback) {
              addParseToken(token, function (input, array, config, token) {
                config._w = config._w || {};
                callback(input, config._w, config, token);
              });
            }

            function addTimeToArrayFromToken(token, input, config) {
              if (input != null && hasOwnProp(tokens, token)) {
                tokens[token](input, config._a, config, token);
              }
            }

            var YEAR = 0,
              MONTH = 1,
              DATE = 2,
              HOUR = 3,
              MINUTE = 4,
              SECOND = 5,
              MILLISECOND = 6,
              WEEK = 7,
              WEEKDAY = 8;

            function mod(n, x) {
              return ((n % x) + x) % x;
            }

            var indexOf;

            if (Array.prototype.indexOf) {
              indexOf = Array.prototype.indexOf;
            } else {
              indexOf = function (o) {
                // I know
                var i;
                for (i = 0; i < this.length; ++i) {
                  if (this[i] === o) {
                    return i;
                  }
                }
                return -1;
              };
            }

            function daysInMonth(year, month) {
              if (isNaN(year) || isNaN(month)) {
                return NaN;
              }
              var modMonth = mod(month, 12);
              year += (month - modMonth) / 12;
              return modMonth === 1
                ? isLeapYear(year)
                  ? 29
                  : 28
                : 31 - ((modMonth % 7) % 2);
            }

            // FORMATTING

            addFormatToken('M', ['MM', 2], 'Mo', function () {
              return this.month() + 1;
            });

            addFormatToken('MMM', 0, 0, function (format) {
              return this.localeData().monthsShort(this, format);
            });

            addFormatToken('MMMM', 0, 0, function (format) {
              return this.localeData().months(this, format);
            });

            // ALIASES

            addUnitAlias('month', 'M');

            // PRIORITY

            addUnitPriority('month', 8);

            // PARSING

            addRegexToken('M', match1to2);
            addRegexToken('MM', match1to2, match2);
            addRegexToken('MMM', function (isStrict, locale) {
              return locale.monthsShortRegex(isStrict);
            });
            addRegexToken('MMMM', function (isStrict, locale) {
              return locale.monthsRegex(isStrict);
            });

            addParseToken(['M', 'MM'], function (input, array) {
              array[MONTH] = toInt(input) - 1;
            });

            addParseToken(['MMM', 'MMMM'], function (
              input,
              array,
              config,
              token
            ) {
              var month = config._locale.monthsParse(
                input,
                token,
                config._strict
              );
              // if we didn't find a month name, mark the date as invalid.
              if (month != null) {
                array[MONTH] = month;
              } else {
                getParsingFlags(config).invalidMonth = input;
              }
            });

            // LOCALES

            var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                '_'
              ),
              defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split(
                '_'
              ),
              MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
              defaultMonthsShortRegex = matchWord,
              defaultMonthsRegex = matchWord;

            function localeMonths(m, format) {
              if (!m) {
                return isArray(this._months)
                  ? this._months
                  : this._months['standalone'];
              }
              return isArray(this._months)
                ? this._months[m.month()]
                : this._months[
                    (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
                      ? 'format'
                      : 'standalone'
                  ][m.month()];
            }

            function localeMonthsShort(m, format) {
              if (!m) {
                return isArray(this._monthsShort)
                  ? this._monthsShort
                  : this._monthsShort['standalone'];
              }
              return isArray(this._monthsShort)
                ? this._monthsShort[m.month()]
                : this._monthsShort[
                    MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'
                  ][m.month()];
            }

            function handleStrictParse(monthName, format, strict) {
              var i,
                ii,
                mom,
                llc = monthName.toLocaleLowerCase();
              if (!this._monthsParse) {
                // this is not used
                this._monthsParse = [];
                this._longMonthsParse = [];
                this._shortMonthsParse = [];
                for (i = 0; i < 12; ++i) {
                  mom = createUTC([2000, i]);
                  this._shortMonthsParse[i] = this.monthsShort(
                    mom,
                    ''
                  ).toLocaleLowerCase();
                  this._longMonthsParse[i] = this.months(
                    mom,
                    ''
                  ).toLocaleLowerCase();
                }
              }

              if (strict) {
                if (format === 'MMM') {
                  ii = indexOf.call(this._shortMonthsParse, llc);
                  return ii !== -1 ? ii : null;
                } else {
                  ii = indexOf.call(this._longMonthsParse, llc);
                  return ii !== -1 ? ii : null;
                }
              } else {
                if (format === 'MMM') {
                  ii = indexOf.call(this._shortMonthsParse, llc);
                  if (ii !== -1) {
                    return ii;
                  }
                  ii = indexOf.call(this._longMonthsParse, llc);
                  return ii !== -1 ? ii : null;
                } else {
                  ii = indexOf.call(this._longMonthsParse, llc);
                  if (ii !== -1) {
                    return ii;
                  }
                  ii = indexOf.call(this._shortMonthsParse, llc);
                  return ii !== -1 ? ii : null;
                }
              }
            }

            function localeMonthsParse(monthName, format, strict) {
              var i, mom, regex;

              if (this._monthsParseExact) {
                return handleStrictParse.call(this, monthName, format, strict);
              }

              if (!this._monthsParse) {
                this._monthsParse = [];
                this._longMonthsParse = [];
                this._shortMonthsParse = [];
              }

              // TODO: add sorting
              // Sorting makes sure if one month (or abbr) is a prefix of another
              // see sorting in computeMonthsParse
              for (i = 0; i < 12; i++) {
                // make the regex if we don't have it already
                mom = createUTC([2000, i]);
                if (strict && !this._longMonthsParse[i]) {
                  this._longMonthsParse[i] = new RegExp(
                    '^' + this.months(mom, '').replace('.', '') + '$',
                    'i'
                  );
                  this._shortMonthsParse[i] = new RegExp(
                    '^' + this.monthsShort(mom, '').replace('.', '') + '$',
                    'i'
                  );
                }
                if (!strict && !this._monthsParse[i]) {
                  regex =
                    '^' +
                    this.months(mom, '') +
                    '|^' +
                    this.monthsShort(mom, '');
                  this._monthsParse[i] = new RegExp(
                    regex.replace('.', ''),
                    'i'
                  );
                }
                // test the regex
                if (
                  strict &&
                  format === 'MMMM' &&
                  this._longMonthsParse[i].test(monthName)
                ) {
                  return i;
                } else if (
                  strict &&
                  format === 'MMM' &&
                  this._shortMonthsParse[i].test(monthName)
                ) {
                  return i;
                } else if (!strict && this._monthsParse[i].test(monthName)) {
                  return i;
                }
              }
            }

            // MOMENTS

            function setMonth(mom, value) {
              var dayOfMonth;

              if (!mom.isValid()) {
                // No op
                return mom;
              }

              if (typeof value === 'string') {
                if (/^\d+$/.test(value)) {
                  value = toInt(value);
                } else {
                  value = mom.localeData().monthsParse(value);
                  // TODO: Another silent failure?
                  if (!isNumber(value)) {
                    return mom;
                  }
                }
              }

              dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
              mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](
                value,
                dayOfMonth
              );
              return mom;
            }

            function getSetMonth(value) {
              if (value != null) {
                setMonth(this, value);
                hooks.updateOffset(this, true);
                return this;
              } else {
                return get(this, 'Month');
              }
            }

            function getDaysInMonth() {
              return daysInMonth(this.year(), this.month());
            }

            function monthsShortRegex(isStrict) {
              if (this._monthsParseExact) {
                if (!hasOwnProp(this, '_monthsRegex')) {
                  computeMonthsParse.call(this);
                }
                if (isStrict) {
                  return this._monthsShortStrictRegex;
                } else {
                  return this._monthsShortRegex;
                }
              } else {
                if (!hasOwnProp(this, '_monthsShortRegex')) {
                  this._monthsShortRegex = defaultMonthsShortRegex;
                }
                return this._monthsShortStrictRegex && isStrict
                  ? this._monthsShortStrictRegex
                  : this._monthsShortRegex;
              }
            }

            function monthsRegex(isStrict) {
              if (this._monthsParseExact) {
                if (!hasOwnProp(this, '_monthsRegex')) {
                  computeMonthsParse.call(this);
                }
                if (isStrict) {
                  return this._monthsStrictRegex;
                } else {
                  return this._monthsRegex;
                }
              } else {
                if (!hasOwnProp(this, '_monthsRegex')) {
                  this._monthsRegex = defaultMonthsRegex;
                }
                return this._monthsStrictRegex && isStrict
                  ? this._monthsStrictRegex
                  : this._monthsRegex;
              }
            }

            function computeMonthsParse() {
              function cmpLenRev(a, b) {
                return b.length - a.length;
              }

              var shortPieces = [],
                longPieces = [],
                mixedPieces = [],
                i,
                mom;
              for (i = 0; i < 12; i++) {
                // make the regex if we don't have it already
                mom = createUTC([2000, i]);
                shortPieces.push(this.monthsShort(mom, ''));
                longPieces.push(this.months(mom, ''));
                mixedPieces.push(this.months(mom, ''));
                mixedPieces.push(this.monthsShort(mom, ''));
              }
              // Sorting makes sure if one month (or abbr) is a prefix of another it
              // will match the longer piece.
              shortPieces.sort(cmpLenRev);
              longPieces.sort(cmpLenRev);
              mixedPieces.sort(cmpLenRev);
              for (i = 0; i < 12; i++) {
                shortPieces[i] = regexEscape(shortPieces[i]);
                longPieces[i] = regexEscape(longPieces[i]);
              }
              for (i = 0; i < 24; i++) {
                mixedPieces[i] = regexEscape(mixedPieces[i]);
              }

              this._monthsRegex = new RegExp(
                '^(' + mixedPieces.join('|') + ')',
                'i'
              );
              this._monthsShortRegex = this._monthsRegex;
              this._monthsStrictRegex = new RegExp(
                '^(' + longPieces.join('|') + ')',
                'i'
              );
              this._monthsShortStrictRegex = new RegExp(
                '^(' + shortPieces.join('|') + ')',
                'i'
              );
            }

            // FORMATTING

            addFormatToken('Y', 0, 0, function () {
              var y = this.year();
              return y <= 9999 ? zeroFill(y, 4) : '+' + y;
            });

            addFormatToken(0, ['YY', 2], 0, function () {
              return this.year() % 100;
            });

            addFormatToken(0, ['YYYY', 4], 0, 'year');
            addFormatToken(0, ['YYYYY', 5], 0, 'year');
            addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

            // ALIASES

            addUnitAlias('year', 'y');

            // PRIORITIES

            addUnitPriority('year', 1);

            // PARSING

            addRegexToken('Y', matchSigned);
            addRegexToken('YY', match1to2, match2);
            addRegexToken('YYYY', match1to4, match4);
            addRegexToken('YYYYY', match1to6, match6);
            addRegexToken('YYYYYY', match1to6, match6);

            addParseToken(['YYYYY', 'YYYYYY'], YEAR);
            addParseToken('YYYY', function (input, array) {
              array[YEAR] =
                input.length === 2
                  ? hooks.parseTwoDigitYear(input)
                  : toInt(input);
            });
            addParseToken('YY', function (input, array) {
              array[YEAR] = hooks.parseTwoDigitYear(input);
            });
            addParseToken('Y', function (input, array) {
              array[YEAR] = parseInt(input, 10);
            });

            // HELPERS

            function daysInYear(year) {
              return isLeapYear(year) ? 366 : 365;
            }

            // HOOKS

            hooks.parseTwoDigitYear = function (input) {
              return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
            };

            // MOMENTS

            var getSetYear = makeGetSet('FullYear', true);

            function getIsLeapYear() {
              return isLeapYear(this.year());
            }

            function createDate(y, m, d, h, M, s, ms) {
              // can't just apply() to create a date:
              // https://stackoverflow.com/q/181348
              var date;
              // the date constructor remaps years 0-99 to 1900-1999
              if (y < 100 && y >= 0) {
                // preserve leap years using a full 400 year cycle, then reset
                date = new Date(y + 400, m, d, h, M, s, ms);
                if (isFinite(date.getFullYear())) {
                  date.setFullYear(y);
                }
              } else {
                date = new Date(y, m, d, h, M, s, ms);
              }

              return date;
            }

            function createUTCDate(y) {
              var date, args;
              // the Date.UTC function remaps years 0-99 to 1900-1999
              if (y < 100 && y >= 0) {
                args = Array.prototype.slice.call(arguments);
                // preserve leap years using a full 400 year cycle, then reset
                args[0] = y + 400;
                date = new Date(Date.UTC.apply(null, args));
                if (isFinite(date.getUTCFullYear())) {
                  date.setUTCFullYear(y);
                }
              } else {
                date = new Date(Date.UTC.apply(null, arguments));
              }

              return date;
            }

            // start-of-first-week - start-of-year
            function firstWeekOffset(year, dow, doy) {
              var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
                fwd = 7 + dow - doy,
                // first-week day local weekday -- which local weekday is fwd
                fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

              return -fwdlw + fwd - 1;
            }

            // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
            function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
              var localWeekday = (7 + weekday - dow) % 7,
                weekOffset = firstWeekOffset(year, dow, doy),
                dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
                resYear,
                resDayOfYear;

              if (dayOfYear <= 0) {
                resYear = year - 1;
                resDayOfYear = daysInYear(resYear) + dayOfYear;
              } else if (dayOfYear > daysInYear(year)) {
                resYear = year + 1;
                resDayOfYear = dayOfYear - daysInYear(year);
              } else {
                resYear = year;
                resDayOfYear = dayOfYear;
              }

              return {
                year: resYear,
                dayOfYear: resDayOfYear,
              };
            }

            function weekOfYear(mom, dow, doy) {
              var weekOffset = firstWeekOffset(mom.year(), dow, doy),
                week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
                resWeek,
                resYear;

              if (week < 1) {
                resYear = mom.year() - 1;
                resWeek = week + weeksInYear(resYear, dow, doy);
              } else if (week > weeksInYear(mom.year(), dow, doy)) {
                resWeek = week - weeksInYear(mom.year(), dow, doy);
                resYear = mom.year() + 1;
              } else {
                resYear = mom.year();
                resWeek = week;
              }

              return {
                week: resWeek,
                year: resYear,
              };
            }

            function weeksInYear(year, dow, doy) {
              var weekOffset = firstWeekOffset(year, dow, doy),
                weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
              return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
            }

            // FORMATTING

            addFormatToken('w', ['ww', 2], 'wo', 'week');
            addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

            // ALIASES

            addUnitAlias('week', 'w');
            addUnitAlias('isoWeek', 'W');

            // PRIORITIES

            addUnitPriority('week', 5);
            addUnitPriority('isoWeek', 5);

            // PARSING

            addRegexToken('w', match1to2);
            addRegexToken('ww', match1to2, match2);
            addRegexToken('W', match1to2);
            addRegexToken('WW', match1to2, match2);

            addWeekParseToken(['w', 'ww', 'W', 'WW'], function (
              input,
              week,
              config,
              token
            ) {
              week[token.substr(0, 1)] = toInt(input);
            });

            // HELPERS

            // LOCALES

            function localeWeek(mom) {
              return weekOfYear(mom, this._week.dow, this._week.doy).week;
            }

            var defaultLocaleWeek = {
              dow: 0, // Sunday is the first day of the week.
              doy: 6, // The week that contains Jan 6th is the first week of the year.
            };

            function localeFirstDayOfWeek() {
              return this._week.dow;
            }

            function localeFirstDayOfYear() {
              return this._week.doy;
            }

            // MOMENTS

            function getSetWeek(input) {
              var week = this.localeData().week(this);
              return input == null ? week : this.add((input - week) * 7, 'd');
            }

            function getSetISOWeek(input) {
              var week = weekOfYear(this, 1, 4).week;
              return input == null ? week : this.add((input - week) * 7, 'd');
            }

            // FORMATTING

            addFormatToken('d', 0, 'do', 'day');

            addFormatToken('dd', 0, 0, function (format) {
              return this.localeData().weekdaysMin(this, format);
            });

            addFormatToken('ddd', 0, 0, function (format) {
              return this.localeData().weekdaysShort(this, format);
            });

            addFormatToken('dddd', 0, 0, function (format) {
              return this.localeData().weekdays(this, format);
            });

            addFormatToken('e', 0, 0, 'weekday');
            addFormatToken('E', 0, 0, 'isoWeekday');

            // ALIASES

            addUnitAlias('day', 'd');
            addUnitAlias('weekday', 'e');
            addUnitAlias('isoWeekday', 'E');

            // PRIORITY
            addUnitPriority('day', 11);
            addUnitPriority('weekday', 11);
            addUnitPriority('isoWeekday', 11);

            // PARSING

            addRegexToken('d', match1to2);
            addRegexToken('e', match1to2);
            addRegexToken('E', match1to2);
            addRegexToken('dd', function (isStrict, locale) {
              return locale.weekdaysMinRegex(isStrict);
            });
            addRegexToken('ddd', function (isStrict, locale) {
              return locale.weekdaysShortRegex(isStrict);
            });
            addRegexToken('dddd', function (isStrict, locale) {
              return locale.weekdaysRegex(isStrict);
            });

            addWeekParseToken(['dd', 'ddd', 'dddd'], function (
              input,
              week,
              config,
              token
            ) {
              var weekday = config._locale.weekdaysParse(
                input,
                token,
                config._strict
              );
              // if we didn't get a weekday name, mark the date as invalid
              if (weekday != null) {
                week.d = weekday;
              } else {
                getParsingFlags(config).invalidWeekday = input;
              }
            });

            addWeekParseToken(['d', 'e', 'E'], function (
              input,
              week,
              config,
              token
            ) {
              week[token] = toInt(input);
            });

            // HELPERS

            function parseWeekday(input, locale) {
              if (typeof input !== 'string') {
                return input;
              }

              if (!isNaN(input)) {
                return parseInt(input, 10);
              }

              input = locale.weekdaysParse(input);
              if (typeof input === 'number') {
                return input;
              }

              return null;
            }

            function parseIsoWeekday(input, locale) {
              if (typeof input === 'string') {
                return locale.weekdaysParse(input) % 7 || 7;
              }
              return isNaN(input) ? null : input;
            }

            // LOCALES
            function shiftWeekdays(ws, n) {
              return ws.slice(n, 7).concat(ws.slice(0, n));
            }

            var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
                '_'
              ),
              defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split(
                '_'
              ),
              defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
              defaultWeekdaysRegex = matchWord,
              defaultWeekdaysShortRegex = matchWord,
              defaultWeekdaysMinRegex = matchWord;

            function localeWeekdays(m, format) {
              var weekdays = isArray(this._weekdays)
                ? this._weekdays
                : this._weekdays[
                    m && m !== true && this._weekdays.isFormat.test(format)
                      ? 'format'
                      : 'standalone'
                  ];
              return m === true
                ? shiftWeekdays(weekdays, this._week.dow)
                : m
                ? weekdays[m.day()]
                : weekdays;
            }

            function localeWeekdaysShort(m) {
              return m === true
                ? shiftWeekdays(this._weekdaysShort, this._week.dow)
                : m
                ? this._weekdaysShort[m.day()]
                : this._weekdaysShort;
            }

            function localeWeekdaysMin(m) {
              return m === true
                ? shiftWeekdays(this._weekdaysMin, this._week.dow)
                : m
                ? this._weekdaysMin[m.day()]
                : this._weekdaysMin;
            }

            function handleStrictParse$1(weekdayName, format, strict) {
              var i,
                ii,
                mom,
                llc = weekdayName.toLocaleLowerCase();
              if (!this._weekdaysParse) {
                this._weekdaysParse = [];
                this._shortWeekdaysParse = [];
                this._minWeekdaysParse = [];

                for (i = 0; i < 7; ++i) {
                  mom = createUTC([2000, 1]).day(i);
                  this._minWeekdaysParse[i] = this.weekdaysMin(
                    mom,
                    ''
                  ).toLocaleLowerCase();
                  this._shortWeekdaysParse[i] = this.weekdaysShort(
                    mom,
                    ''
                  ).toLocaleLowerCase();
                  this._weekdaysParse[i] = this.weekdays(
                    mom,
                    ''
                  ).toLocaleLowerCase();
                }
              }

              if (strict) {
                if (format === 'dddd') {
                  ii = indexOf.call(this._weekdaysParse, llc);
                  return ii !== -1 ? ii : null;
                } else if (format === 'ddd') {
                  ii = indexOf.call(this._shortWeekdaysParse, llc);
                  return ii !== -1 ? ii : null;
                } else {
                  ii = indexOf.call(this._minWeekdaysParse, llc);
                  return ii !== -1 ? ii : null;
                }
              } else {
                if (format === 'dddd') {
                  ii = indexOf.call(this._weekdaysParse, llc);
                  if (ii !== -1) {
                    return ii;
                  }
                  ii = indexOf.call(this._shortWeekdaysParse, llc);
                  if (ii !== -1) {
                    return ii;
                  }
                  ii = indexOf.call(this._minWeekdaysParse, llc);
                  return ii !== -1 ? ii : null;
                } else if (format === 'ddd') {
                  ii = indexOf.call(this._shortWeekdaysParse, llc);
                  if (ii !== -1) {
                    return ii;
                  }
                  ii = indexOf.call(this._weekdaysParse, llc);
                  if (ii !== -1) {
                    return ii;
                  }
                  ii = indexOf.call(this._minWeekdaysParse, llc);
                  return ii !== -1 ? ii : null;
                } else {
                  ii = indexOf.call(this._minWeekdaysParse, llc);
                  if (ii !== -1) {
                    return ii;
                  }
                  ii = indexOf.call(this._weekdaysParse, llc);
                  if (ii !== -1) {
                    return ii;
                  }
                  ii = indexOf.call(this._shortWeekdaysParse, llc);
                  return ii !== -1 ? ii : null;
                }
              }
            }

            function localeWeekdaysParse(weekdayName, format, strict) {
              var i, mom, regex;

              if (this._weekdaysParseExact) {
                return handleStrictParse$1.call(
                  this,
                  weekdayName,
                  format,
                  strict
                );
              }

              if (!this._weekdaysParse) {
                this._weekdaysParse = [];
                this._minWeekdaysParse = [];
                this._shortWeekdaysParse = [];
                this._fullWeekdaysParse = [];
              }

              for (i = 0; i < 7; i++) {
                // make the regex if we don't have it already

                mom = createUTC([2000, 1]).day(i);
                if (strict && !this._fullWeekdaysParse[i]) {
                  this._fullWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdays(mom, '').replace('.', '\\.?') + '$',
                    'i'
                  );
                  this._shortWeekdaysParse[i] = new RegExp(
                    '^' +
                      this.weekdaysShort(mom, '').replace('.', '\\.?') +
                      '$',
                    'i'
                  );
                  this._minWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$',
                    'i'
                  );
                }
                if (!this._weekdaysParse[i]) {
                  regex =
                    '^' +
                    this.weekdays(mom, '') +
                    '|^' +
                    this.weekdaysShort(mom, '') +
                    '|^' +
                    this.weekdaysMin(mom, '');
                  this._weekdaysParse[i] = new RegExp(
                    regex.replace('.', ''),
                    'i'
                  );
                }
                // test the regex
                if (
                  strict &&
                  format === 'dddd' &&
                  this._fullWeekdaysParse[i].test(weekdayName)
                ) {
                  return i;
                } else if (
                  strict &&
                  format === 'ddd' &&
                  this._shortWeekdaysParse[i].test(weekdayName)
                ) {
                  return i;
                } else if (
                  strict &&
                  format === 'dd' &&
                  this._minWeekdaysParse[i].test(weekdayName)
                ) {
                  return i;
                } else if (
                  !strict &&
                  this._weekdaysParse[i].test(weekdayName)
                ) {
                  return i;
                }
              }
            }

            // MOMENTS

            function getSetDayOfWeek(input) {
              if (!this.isValid()) {
                return input != null ? this : NaN;
              }
              var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
              if (input != null) {
                input = parseWeekday(input, this.localeData());
                return this.add(input - day, 'd');
              } else {
                return day;
              }
            }

            function getSetLocaleDayOfWeek(input) {
              if (!this.isValid()) {
                return input != null ? this : NaN;
              }
              var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
              return input == null ? weekday : this.add(input - weekday, 'd');
            }

            function getSetISODayOfWeek(input) {
              if (!this.isValid()) {
                return input != null ? this : NaN;
              }

              // behaves the same as moment#day except
              // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
              // as a setter, sunday should belong to the previous week.

              if (input != null) {
                var weekday = parseIsoWeekday(input, this.localeData());
                return this.day(this.day() % 7 ? weekday : weekday - 7);
              } else {
                return this.day() || 7;
              }
            }

            function weekdaysRegex(isStrict) {
              if (this._weekdaysParseExact) {
                if (!hasOwnProp(this, '_weekdaysRegex')) {
                  computeWeekdaysParse.call(this);
                }
                if (isStrict) {
                  return this._weekdaysStrictRegex;
                } else {
                  return this._weekdaysRegex;
                }
              } else {
                if (!hasOwnProp(this, '_weekdaysRegex')) {
                  this._weekdaysRegex = defaultWeekdaysRegex;
                }
                return this._weekdaysStrictRegex && isStrict
                  ? this._weekdaysStrictRegex
                  : this._weekdaysRegex;
              }
            }

            function weekdaysShortRegex(isStrict) {
              if (this._weekdaysParseExact) {
                if (!hasOwnProp(this, '_weekdaysRegex')) {
                  computeWeekdaysParse.call(this);
                }
                if (isStrict) {
                  return this._weekdaysShortStrictRegex;
                } else {
                  return this._weekdaysShortRegex;
                }
              } else {
                if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                  this._weekdaysShortRegex = defaultWeekdaysShortRegex;
                }
                return this._weekdaysShortStrictRegex && isStrict
                  ? this._weekdaysShortStrictRegex
                  : this._weekdaysShortRegex;
              }
            }

            function weekdaysMinRegex(isStrict) {
              if (this._weekdaysParseExact) {
                if (!hasOwnProp(this, '_weekdaysRegex')) {
                  computeWeekdaysParse.call(this);
                }
                if (isStrict) {
                  return this._weekdaysMinStrictRegex;
                } else {
                  return this._weekdaysMinRegex;
                }
              } else {
                if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                  this._weekdaysMinRegex = defaultWeekdaysMinRegex;
                }
                return this._weekdaysMinStrictRegex && isStrict
                  ? this._weekdaysMinStrictRegex
                  : this._weekdaysMinRegex;
              }
            }

            function computeWeekdaysParse() {
              function cmpLenRev(a, b) {
                return b.length - a.length;
              }

              var minPieces = [],
                shortPieces = [],
                longPieces = [],
                mixedPieces = [],
                i,
                mom,
                minp,
                shortp,
                longp;
              for (i = 0; i < 7; i++) {
                // make the regex if we don't have it already
                mom = createUTC([2000, 1]).day(i);
                minp = regexEscape(this.weekdaysMin(mom, ''));
                shortp = regexEscape(this.weekdaysShort(mom, ''));
                longp = regexEscape(this.weekdays(mom, ''));
                minPieces.push(minp);
                shortPieces.push(shortp);
                longPieces.push(longp);
                mixedPieces.push(minp);
                mixedPieces.push(shortp);
                mixedPieces.push(longp);
              }
              // Sorting makes sure if one weekday (or abbr) is a prefix of another it
              // will match the longer piece.
              minPieces.sort(cmpLenRev);
              shortPieces.sort(cmpLenRev);
              longPieces.sort(cmpLenRev);
              mixedPieces.sort(cmpLenRev);

              this._weekdaysRegex = new RegExp(
                '^(' + mixedPieces.join('|') + ')',
                'i'
              );
              this._weekdaysShortRegex = this._weekdaysRegex;
              this._weekdaysMinRegex = this._weekdaysRegex;

              this._weekdaysStrictRegex = new RegExp(
                '^(' + longPieces.join('|') + ')',
                'i'
              );
              this._weekdaysShortStrictRegex = new RegExp(
                '^(' + shortPieces.join('|') + ')',
                'i'
              );
              this._weekdaysMinStrictRegex = new RegExp(
                '^(' + minPieces.join('|') + ')',
                'i'
              );
            }

            // FORMATTING

            function hFormat() {
              return this.hours() % 12 || 12;
            }

            function kFormat() {
              return this.hours() || 24;
            }

            addFormatToken('H', ['HH', 2], 0, 'hour');
            addFormatToken('h', ['hh', 2], 0, hFormat);
            addFormatToken('k', ['kk', 2], 0, kFormat);

            addFormatToken('hmm', 0, 0, function () {
              return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
            });

            addFormatToken('hmmss', 0, 0, function () {
              return (
                '' +
                hFormat.apply(this) +
                zeroFill(this.minutes(), 2) +
                zeroFill(this.seconds(), 2)
              );
            });

            addFormatToken('Hmm', 0, 0, function () {
              return '' + this.hours() + zeroFill(this.minutes(), 2);
            });

            addFormatToken('Hmmss', 0, 0, function () {
              return (
                '' +
                this.hours() +
                zeroFill(this.minutes(), 2) +
                zeroFill(this.seconds(), 2)
              );
            });

            function meridiem(token, lowercase) {
              addFormatToken(token, 0, 0, function () {
                return this.localeData().meridiem(
                  this.hours(),
                  this.minutes(),
                  lowercase
                );
              });
            }

            meridiem('a', true);
            meridiem('A', false);

            // ALIASES

            addUnitAlias('hour', 'h');

            // PRIORITY
            addUnitPriority('hour', 13);

            // PARSING

            function matchMeridiem(isStrict, locale) {
              return locale._meridiemParse;
            }

            addRegexToken('a', matchMeridiem);
            addRegexToken('A', matchMeridiem);
            addRegexToken('H', match1to2);
            addRegexToken('h', match1to2);
            addRegexToken('k', match1to2);
            addRegexToken('HH', match1to2, match2);
            addRegexToken('hh', match1to2, match2);
            addRegexToken('kk', match1to2, match2);

            addRegexToken('hmm', match3to4);
            addRegexToken('hmmss', match5to6);
            addRegexToken('Hmm', match3to4);
            addRegexToken('Hmmss', match5to6);

            addParseToken(['H', 'HH'], HOUR);
            addParseToken(['k', 'kk'], function (input, array, config) {
              var kInput = toInt(input);
              array[HOUR] = kInput === 24 ? 0 : kInput;
            });
            addParseToken(['a', 'A'], function (input, array, config) {
              config._isPm = config._locale.isPM(input);
              config._meridiem = input;
            });
            addParseToken(['h', 'hh'], function (input, array, config) {
              array[HOUR] = toInt(input);
              getParsingFlags(config).bigHour = true;
            });
            addParseToken('hmm', function (input, array, config) {
              var pos = input.length - 2;
              array[HOUR] = toInt(input.substr(0, pos));
              array[MINUTE] = toInt(input.substr(pos));
              getParsingFlags(config).bigHour = true;
            });
            addParseToken('hmmss', function (input, array, config) {
              var pos1 = input.length - 4,
                pos2 = input.length - 2;
              array[HOUR] = toInt(input.substr(0, pos1));
              array[MINUTE] = toInt(input.substr(pos1, 2));
              array[SECOND] = toInt(input.substr(pos2));
              getParsingFlags(config).bigHour = true;
            });
            addParseToken('Hmm', function (input, array, config) {
              var pos = input.length - 2;
              array[HOUR] = toInt(input.substr(0, pos));
              array[MINUTE] = toInt(input.substr(pos));
            });
            addParseToken('Hmmss', function (input, array, config) {
              var pos1 = input.length - 4,
                pos2 = input.length - 2;
              array[HOUR] = toInt(input.substr(0, pos1));
              array[MINUTE] = toInt(input.substr(pos1, 2));
              array[SECOND] = toInt(input.substr(pos2));
            });

            // LOCALES

            function localeIsPM(input) {
              // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
              // Using charAt should be more compatible.
              return (input + '').toLowerCase().charAt(0) === 'p';
            }

            var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
              // Setting the hour should keep the time, because the user explicitly
              // specified which hour they want. So trying to maintain the same hour (in
              // a new timezone) makes sense. Adding/subtracting hours does not follow
              // this rule.
              getSetHour = makeGetSet('Hours', true);

            function localeMeridiem(hours, minutes, isLower) {
              if (hours > 11) {
                return isLower ? 'pm' : 'PM';
              } else {
                return isLower ? 'am' : 'AM';
              }
            }

            var baseConfig = {
              calendar: defaultCalendar,
              longDateFormat: defaultLongDateFormat,
              invalidDate: defaultInvalidDate,
              ordinal: defaultOrdinal,
              dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
              relativeTime: defaultRelativeTime,

              months: defaultLocaleMonths,
              monthsShort: defaultLocaleMonthsShort,

              week: defaultLocaleWeek,

              weekdays: defaultLocaleWeekdays,
              weekdaysMin: defaultLocaleWeekdaysMin,
              weekdaysShort: defaultLocaleWeekdaysShort,

              meridiemParse: defaultLocaleMeridiemParse,
            };

            // internal storage for locale config files
            var locales = {},
              localeFamilies = {},
              globalLocale;

            function commonPrefix(arr1, arr2) {
              var i,
                minl = Math.min(arr1.length, arr2.length);
              for (i = 0; i < minl; i += 1) {
                if (arr1[i] !== arr2[i]) {
                  return i;
                }
              }
              return minl;
            }

            function normalizeLocale(key) {
              return key ? key.toLowerCase().replace('_', '-') : key;
            }

            // pick the locale from the array
            // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
            // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
            function chooseLocale(names) {
              var i = 0,
                j,
                next,
                locale,
                split;

              while (i < names.length) {
                split = normalizeLocale(names[i]).split('-');
                j = split.length;
                next = normalizeLocale(names[i + 1]);
                next = next ? next.split('-') : null;
                while (j > 0) {
                  locale = loadLocale(split.slice(0, j).join('-'));
                  if (locale) {
                    return locale;
                  }
                  if (
                    next &&
                    next.length >= j &&
                    commonPrefix(split, next) >= j - 1
                  ) {
                    //the next array item is better than a shallower substring of this one
                    break;
                  }
                  j--;
                }
                i++;
              }
              return globalLocale;
            }

            function loadLocale(name) {
              var oldLocale = null,
                aliasedRequire;
              // TODO: Find a better way to register and load all the locales in Node
              if (
                locales[name] === undefined &&
                typeof module !== 'undefined' &&
                module &&
                module.exports
              ) {
                try {
                  oldLocale = globalLocale._abbr;
                  aliasedRequire = require;
                  __webpack_require__(
                    '../node_modules/moment/locale sync recursive [\\/\\\\](pl(\\.js)?)$'
                  )('./' + name);
                  getSetGlobalLocale(oldLocale);
                } catch (e) {
                  // mark as not found to avoid repeating expensive file require call causing high CPU
                  // when trying to find en-US, en_US, en-us for every format call
                  locales[name] = null; // null means not found
                }
              }
              return locales[name];
            }

            // This function will load locale and then set the global locale.  If
            // no arguments are passed in, it will simply return the current global
            // locale key.
            function getSetGlobalLocale(key, values) {
              var data;
              if (key) {
                if (isUndefined(values)) {
                  data = getLocale(key);
                } else {
                  data = defineLocale(key, values);
                }

                if (data) {
                  // moment.duration._locale = moment._locale = data;
                  globalLocale = data;
                } else {
                  if (typeof console !== 'undefined' && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn(
                      'Locale ' + key + ' not found. Did you forget to load it?'
                    );
                  }
                }
              }

              return globalLocale._abbr;
            }

            function defineLocale(name, config) {
              if (config !== null) {
                var locale,
                  parentConfig = baseConfig;
                config.abbr = name;
                if (locales[name] != null) {
                  deprecateSimple(
                    'defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                      'an existing locale. moment.defineLocale(localeName, ' +
                      'config) should only be used for creating a new locale ' +
                      'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
                  );
                  parentConfig = locales[name]._config;
                } else if (config.parentLocale != null) {
                  if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                  } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                      parentConfig = locale._config;
                    } else {
                      if (!localeFamilies[config.parentLocale]) {
                        localeFamilies[config.parentLocale] = [];
                      }
                      localeFamilies[config.parentLocale].push({
                        name: name,
                        config: config,
                      });
                      return null;
                    }
                  }
                }
                locales[name] = new Locale(mergeConfigs(parentConfig, config));

                if (localeFamilies[name]) {
                  localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                  });
                }

                // backwards compat for now: also set the locale
                // make sure we set the locale AFTER all child locales have been
                // created, so we won't end up with the child locale set.
                getSetGlobalLocale(name);

                return locales[name];
              } else {
                // useful for testing
                delete locales[name];
                return null;
              }
            }

            function updateLocale(name, config) {
              if (config != null) {
                var locale,
                  tmpLocale,
                  parentConfig = baseConfig;

                if (
                  locales[name] != null &&
                  locales[name].parentLocale != null
                ) {
                  // Update existing child locale in-place to avoid memory-leaks
                  locales[name].set(
                    mergeConfigs(locales[name]._config, config)
                  );
                } else {
                  // MERGE
                  tmpLocale = loadLocale(name);
                  if (tmpLocale != null) {
                    parentConfig = tmpLocale._config;
                  }
                  config = mergeConfigs(parentConfig, config);
                  if (tmpLocale == null) {
                    // updateLocale is called for creating a new locale
                    // Set abbr so it will have a name (getters return
                    // undefined otherwise).
                    config.abbr = name;
                  }
                  locale = new Locale(config);
                  locale.parentLocale = locales[name];
                  locales[name] = locale;
                }

                // backwards compat for now: also set the locale
                getSetGlobalLocale(name);
              } else {
                // pass null for config to unupdate, useful for tests
                if (locales[name] != null) {
                  if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                    if (name === getSetGlobalLocale()) {
                      getSetGlobalLocale(name);
                    }
                  } else if (locales[name] != null) {
                    delete locales[name];
                  }
                }
              }
              return locales[name];
            }

            // returns locale data
            function getLocale(key) {
              var locale;

              if (key && key._locale && key._locale._abbr) {
                key = key._locale._abbr;
              }

              if (!key) {
                return globalLocale;
              }

              if (!isArray(key)) {
                //short-circuit everything else
                locale = loadLocale(key);
                if (locale) {
                  return locale;
                }
                key = [key];
              }

              return chooseLocale(key);
            }

            function listLocales() {
              return keys(locales);
            }

            function checkOverflow(m) {
              var overflow,
                a = m._a;

              if (a && getParsingFlags(m).overflow === -2) {
                overflow =
                  a[MONTH] < 0 || a[MONTH] > 11
                    ? MONTH
                    : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH])
                    ? DATE
                    : a[HOUR] < 0 ||
                      a[HOUR] > 24 ||
                      (a[HOUR] === 24 &&
                        (a[MINUTE] !== 0 ||
                          a[SECOND] !== 0 ||
                          a[MILLISECOND] !== 0))
                    ? HOUR
                    : a[MINUTE] < 0 || a[MINUTE] > 59
                    ? MINUTE
                    : a[SECOND] < 0 || a[SECOND] > 59
                    ? SECOND
                    : a[MILLISECOND] < 0 || a[MILLISECOND] > 999
                    ? MILLISECOND
                    : -1;

                if (
                  getParsingFlags(m)._overflowDayOfYear &&
                  (overflow < YEAR || overflow > DATE)
                ) {
                  overflow = DATE;
                }
                if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                  overflow = WEEK;
                }
                if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                  overflow = WEEKDAY;
                }

                getParsingFlags(m).overflow = overflow;
              }

              return m;
            }

            // iso 8601 regex
            // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
            var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
              basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
              tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
              isoDates = [
                ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
                ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
                ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
                ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
                ['YYYY-DDD', /\d{4}-\d{3}/],
                ['YYYY-MM', /\d{4}-\d\d/, false],
                ['YYYYYYMMDD', /[+-]\d{10}/],
                ['YYYYMMDD', /\d{8}/],
                ['GGGG[W]WWE', /\d{4}W\d{3}/],
                ['GGGG[W]WW', /\d{4}W\d{2}/, false],
                ['YYYYDDD', /\d{7}/],
                ['YYYYMM', /\d{6}/, false],
                ['YYYY', /\d{4}/, false],
              ],
              // iso time formats and regexes
              isoTimes = [
                ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
                ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
                ['HH:mm:ss', /\d\d:\d\d:\d\d/],
                ['HH:mm', /\d\d:\d\d/],
                ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
                ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
                ['HHmmss', /\d\d\d\d\d\d/],
                ['HHmm', /\d\d\d\d/],
                ['HH', /\d\d/],
              ],
              aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
              // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
              rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
              obsOffsets = {
                UT: 0,
                GMT: 0,
                EDT: -4 * 60,
                EST: -5 * 60,
                CDT: -5 * 60,
                CST: -6 * 60,
                MDT: -6 * 60,
                MST: -7 * 60,
                PDT: -7 * 60,
                PST: -8 * 60,
              };

            // date from iso format
            function configFromISO(config) {
              var i,
                l,
                string = config._i,
                match =
                  extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
                allowTime,
                dateFormat,
                timeFormat,
                tzFormat;

              if (match) {
                getParsingFlags(config).iso = true;

                for (i = 0, l = isoDates.length; i < l; i++) {
                  if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                  }
                }
                if (dateFormat == null) {
                  config._isValid = false;
                  return;
                }
                if (match[3]) {
                  for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                      // match[2] should be 'T' or space
                      timeFormat = (match[2] || ' ') + isoTimes[i][0];
                      break;
                    }
                  }
                  if (timeFormat == null) {
                    config._isValid = false;
                    return;
                  }
                }
                if (!allowTime && timeFormat != null) {
                  config._isValid = false;
                  return;
                }
                if (match[4]) {
                  if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                  } else {
                    config._isValid = false;
                    return;
                  }
                }
                config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
                configFromStringAndFormat(config);
              } else {
                config._isValid = false;
              }
            }

            function extractFromRFC2822Strings(
              yearStr,
              monthStr,
              dayStr,
              hourStr,
              minuteStr,
              secondStr
            ) {
              var result = [
                untruncateYear(yearStr),
                defaultLocaleMonthsShort.indexOf(monthStr),
                parseInt(dayStr, 10),
                parseInt(hourStr, 10),
                parseInt(minuteStr, 10),
              ];

              if (secondStr) {
                result.push(parseInt(secondStr, 10));
              }

              return result;
            }

            function untruncateYear(yearStr) {
              var year = parseInt(yearStr, 10);
              if (year <= 49) {
                return 2000 + year;
              } else if (year <= 999) {
                return 1900 + year;
              }
              return year;
            }

            function preprocessRFC2822(s) {
              // Remove comments and folding whitespace and replace multiple-spaces with a single space
              return s
                .replace(/\([^)]*\)|[\n\t]/g, ' ')
                .replace(/(\s\s+)/g, ' ')
                .replace(/^\s\s*/, '')
                .replace(/\s\s*$/, '');
            }

            function checkWeekday(weekdayStr, parsedInput, config) {
              if (weekdayStr) {
                // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
                var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(
                    weekdayStr
                  ),
                  weekdayActual = new Date(
                    parsedInput[0],
                    parsedInput[1],
                    parsedInput[2]
                  ).getDay();
                if (weekdayProvided !== weekdayActual) {
                  getParsingFlags(config).weekdayMismatch = true;
                  config._isValid = false;
                  return false;
                }
              }
              return true;
            }

            function calculateOffset(obsOffset, militaryOffset, numOffset) {
              if (obsOffset) {
                return obsOffsets[obsOffset];
              } else if (militaryOffset) {
                // the only allowed military tz is Z
                return 0;
              } else {
                var hm = parseInt(numOffset, 10),
                  m = hm % 100,
                  h = (hm - m) / 100;
                return h * 60 + m;
              }
            }

            // date and time from ref 2822 format
            function configFromRFC2822(config) {
              var match = rfc2822.exec(preprocessRFC2822(config._i)),
                parsedArray;
              if (match) {
                parsedArray = extractFromRFC2822Strings(
                  match[4],
                  match[3],
                  match[2],
                  match[5],
                  match[6],
                  match[7]
                );
                if (!checkWeekday(match[1], parsedArray, config)) {
                  return;
                }

                config._a = parsedArray;
                config._tzm = calculateOffset(match[8], match[9], match[10]);

                config._d = createUTCDate.apply(null, config._a);
                config._d.setUTCMinutes(
                  config._d.getUTCMinutes() - config._tzm
                );

                getParsingFlags(config).rfc2822 = true;
              } else {
                config._isValid = false;
              }
            }

            // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
            function configFromString(config) {
              var matched = aspNetJsonRegex.exec(config._i);
              if (matched !== null) {
                config._d = new Date(+matched[1]);
                return;
              }

              configFromISO(config);
              if (config._isValid === false) {
                delete config._isValid;
              } else {
                return;
              }

              configFromRFC2822(config);
              if (config._isValid === false) {
                delete config._isValid;
              } else {
                return;
              }

              if (config._strict) {
                config._isValid = false;
              } else {
                // Final attempt, use Input Fallback
                hooks.createFromInputFallback(config);
              }
            }

            hooks.createFromInputFallback = deprecate(
              'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
                'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
                'discouraged and will be removed in an upcoming major release. Please refer to ' +
                'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
              function (config) {
                config._d = new Date(
                  config._i + (config._useUTC ? ' UTC' : '')
                );
              }
            );

            // Pick the first defined of two or three arguments.
            function defaults(a, b, c) {
              if (a != null) {
                return a;
              }
              if (b != null) {
                return b;
              }
              return c;
            }

            function currentDateArray(config) {
              // hooks is actually the exported moment object
              var nowValue = new Date(hooks.now());
              if (config._useUTC) {
                return [
                  nowValue.getUTCFullYear(),
                  nowValue.getUTCMonth(),
                  nowValue.getUTCDate(),
                ];
              }
              return [
                nowValue.getFullYear(),
                nowValue.getMonth(),
                nowValue.getDate(),
              ];
            }

            // convert an array to a date.
            // the array should mirror the parameters below
            // note: all values past the year are optional and will default to the lowest possible value.
            // [year, month, day , hour, minute, second, millisecond]
            function configFromArray(config) {
              var i,
                date,
                input = [],
                currentDate,
                expectedWeekday,
                yearToUse;

              if (config._d) {
                return;
              }

              currentDate = currentDateArray(config);

              //compute day of the year from weeks and weekdays
              if (
                config._w &&
                config._a[DATE] == null &&
                config._a[MONTH] == null
              ) {
                dayOfYearFromWeekInfo(config);
              }

              //if the day of the year is set, figure out what it is
              if (config._dayOfYear != null) {
                yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

                if (
                  config._dayOfYear > daysInYear(yearToUse) ||
                  config._dayOfYear === 0
                ) {
                  getParsingFlags(config)._overflowDayOfYear = true;
                }

                date = createUTCDate(yearToUse, 0, config._dayOfYear);
                config._a[MONTH] = date.getUTCMonth();
                config._a[DATE] = date.getUTCDate();
              }

              // Default to current date.
              // * if no year, month, day of month are given, default to today
              // * if day of month is given, default month and year
              // * if month is given, default only year
              // * if year is given, don't default anything
              for (i = 0; i < 3 && config._a[i] == null; ++i) {
                config._a[i] = input[i] = currentDate[i];
              }

              // Zero out whatever was not defaulted, including time
              for (; i < 7; i++) {
                config._a[i] = input[i] =
                  config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
              }

              // Check for 24:00:00.000
              if (
                config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0
              ) {
                config._nextDay = true;
                config._a[HOUR] = 0;
              }

              config._d = (config._useUTC ? createUTCDate : createDate).apply(
                null,
                input
              );
              expectedWeekday = config._useUTC
                ? config._d.getUTCDay()
                : config._d.getDay();

              // Apply timezone offset from input. The actual utcOffset can be changed
              // with parseZone.
              if (config._tzm != null) {
                config._d.setUTCMinutes(
                  config._d.getUTCMinutes() - config._tzm
                );
              }

              if (config._nextDay) {
                config._a[HOUR] = 24;
              }

              // check for mismatching day of week
              if (
                config._w &&
                typeof config._w.d !== 'undefined' &&
                config._w.d !== expectedWeekday
              ) {
                getParsingFlags(config).weekdayMismatch = true;
              }
            }

            function dayOfYearFromWeekInfo(config) {
              var w,
                weekYear,
                week,
                weekday,
                dow,
                doy,
                temp,
                weekdayOverflow,
                curWeek;

              w = config._w;
              if (w.GG != null || w.W != null || w.E != null) {
                dow = 1;
                doy = 4;

                // TODO: We need to take the current isoWeekYear, but that depends on
                // how we interpret now (local, utc, fixed offset). So create
                // a now version of current config (take local/utc/offset flags, and
                // create now).
                weekYear = defaults(
                  w.GG,
                  config._a[YEAR],
                  weekOfYear(createLocal(), 1, 4).year
                );
                week = defaults(w.W, 1);
                weekday = defaults(w.E, 1);
                if (weekday < 1 || weekday > 7) {
                  weekdayOverflow = true;
                }
              } else {
                dow = config._locale._week.dow;
                doy = config._locale._week.doy;

                curWeek = weekOfYear(createLocal(), dow, doy);

                weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

                // Default to current week.
                week = defaults(w.w, curWeek.week);

                if (w.d != null) {
                  // weekday -- low day numbers are considered next week
                  weekday = w.d;
                  if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                  }
                } else if (w.e != null) {
                  // local weekday -- counting starts from beginning of week
                  weekday = w.e + dow;
                  if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                  }
                } else {
                  // default to beginning of week
                  weekday = dow;
                }
              }
              if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
                getParsingFlags(config)._overflowWeeks = true;
              } else if (weekdayOverflow != null) {
                getParsingFlags(config)._overflowWeekday = true;
              } else {
                temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
                config._a[YEAR] = temp.year;
                config._dayOfYear = temp.dayOfYear;
              }
            }

            // constant that refers to the ISO standard
            hooks.ISO_8601 = function () {};

            // constant that refers to the RFC 2822 form
            hooks.RFC_2822 = function () {};

            // date from string and format string
            function configFromStringAndFormat(config) {
              // TODO: Move this to another part of the creation flow to prevent circular deps
              if (config._f === hooks.ISO_8601) {
                configFromISO(config);
                return;
              }
              if (config._f === hooks.RFC_2822) {
                configFromRFC2822(config);
                return;
              }
              config._a = [];
              getParsingFlags(config).empty = true;

              // This array is used to make a Date, either with `new Date` or `Date.UTC`
              var string = '' + config._i,
                i,
                parsedInput,
                tokens,
                token,
                skipped,
                stringLength = string.length,
                totalParsedInputLength = 0,
                era;

              tokens =
                expandFormat(config._f, config._locale).match(
                  formattingTokens
                ) || [];

              for (i = 0; i < tokens.length; i++) {
                token = tokens[i];
                parsedInput = (string.match(
                  getParseRegexForToken(token, config)
                ) || [])[0];
                if (parsedInput) {
                  skipped = string.substr(0, string.indexOf(parsedInput));
                  if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                  }
                  string = string.slice(
                    string.indexOf(parsedInput) + parsedInput.length
                  );
                  totalParsedInputLength += parsedInput.length;
                }
                // don't parse if it's not a known token
                if (formatTokenFunctions[token]) {
                  if (parsedInput) {
                    getParsingFlags(config).empty = false;
                  } else {
                    getParsingFlags(config).unusedTokens.push(token);
                  }
                  addTimeToArrayFromToken(token, parsedInput, config);
                } else if (config._strict && !parsedInput) {
                  getParsingFlags(config).unusedTokens.push(token);
                }
              }

              // add remaining unparsed input length to the string
              getParsingFlags(config).charsLeftOver =
                stringLength - totalParsedInputLength;
              if (string.length > 0) {
                getParsingFlags(config).unusedInput.push(string);
              }

              // clear _12h flag if hour is <= 12
              if (
                config._a[HOUR] <= 12 &&
                getParsingFlags(config).bigHour === true &&
                config._a[HOUR] > 0
              ) {
                getParsingFlags(config).bigHour = undefined;
              }

              getParsingFlags(config).parsedDateParts = config._a.slice(0);
              getParsingFlags(config).meridiem = config._meridiem;
              // handle meridiem
              config._a[HOUR] = meridiemFixWrap(
                config._locale,
                config._a[HOUR],
                config._meridiem
              );

              // handle era
              era = getParsingFlags(config).era;
              if (era !== null) {
                config._a[YEAR] = config._locale.erasConvertYear(
                  era,
                  config._a[YEAR]
                );
              }

              configFromArray(config);
              checkOverflow(config);
            }

            function meridiemFixWrap(locale, hour, meridiem) {
              var isPm;

              if (meridiem == null) {
                // nothing to do
                return hour;
              }
              if (locale.meridiemHour != null) {
                return locale.meridiemHour(hour, meridiem);
              } else if (locale.isPM != null) {
                // Fallback
                isPm = locale.isPM(meridiem);
                if (isPm && hour < 12) {
                  hour += 12;
                }
                if (!isPm && hour === 12) {
                  hour = 0;
                }
                return hour;
              } else {
                // this is not supposed to happen
                return hour;
              }
            }

            // date from string and array of format strings
            function configFromStringAndArray(config) {
              var tempConfig,
                bestMoment,
                scoreToBeat,
                i,
                currentScore,
                validFormatFound,
                bestFormatIsValid = false;

              if (config._f.length === 0) {
                getParsingFlags(config).invalidFormat = true;
                config._d = new Date(NaN);
                return;
              }

              for (i = 0; i < config._f.length; i++) {
                currentScore = 0;
                validFormatFound = false;
                tempConfig = copyConfig({}, config);
                if (config._useUTC != null) {
                  tempConfig._useUTC = config._useUTC;
                }
                tempConfig._f = config._f[i];
                configFromStringAndFormat(tempConfig);

                if (isValid(tempConfig)) {
                  validFormatFound = true;
                }

                // if there is any input that was not parsed add a penalty for that format
                currentScore += getParsingFlags(tempConfig).charsLeftOver;

                //or tokens
                currentScore +=
                  getParsingFlags(tempConfig).unusedTokens.length * 10;

                getParsingFlags(tempConfig).score = currentScore;

                if (!bestFormatIsValid) {
                  if (
                    scoreToBeat == null ||
                    currentScore < scoreToBeat ||
                    validFormatFound
                  ) {
                    scoreToBeat = currentScore;
                    bestMoment = tempConfig;
                    if (validFormatFound) {
                      bestFormatIsValid = true;
                    }
                  }
                } else {
                  if (currentScore < scoreToBeat) {
                    scoreToBeat = currentScore;
                    bestMoment = tempConfig;
                  }
                }
              }

              extend(config, bestMoment || tempConfig);
            }

            function configFromObject(config) {
              if (config._d) {
                return;
              }

              var i = normalizeObjectUnits(config._i),
                dayOrDate = i.day === undefined ? i.date : i.day;
              config._a = map(
                [
                  i.year,
                  i.month,
                  dayOrDate,
                  i.hour,
                  i.minute,
                  i.second,
                  i.millisecond,
                ],
                function (obj) {
                  return obj && parseInt(obj, 10);
                }
              );

              configFromArray(config);
            }

            function createFromConfig(config) {
              var res = new Moment(checkOverflow(prepareConfig(config)));
              if (res._nextDay) {
                // Adding is smart enough around DST
                res.add(1, 'd');
                res._nextDay = undefined;
              }

              return res;
            }

            function prepareConfig(config) {
              var input = config._i,
                format = config._f;

              config._locale = config._locale || getLocale(config._l);

              if (input === null || (format === undefined && input === '')) {
                return createInvalid({ nullInput: true });
              }

              if (typeof input === 'string') {
                config._i = input = config._locale.preparse(input);
              }

              if (isMoment(input)) {
                return new Moment(checkOverflow(input));
              } else if (isDate(input)) {
                config._d = input;
              } else if (isArray(format)) {
                configFromStringAndArray(config);
              } else if (format) {
                configFromStringAndFormat(config);
              } else {
                configFromInput(config);
              }

              if (!isValid(config)) {
                config._d = null;
              }

              return config;
            }

            function configFromInput(config) {
              var input = config._i;
              if (isUndefined(input)) {
                config._d = new Date(hooks.now());
              } else if (isDate(input)) {
                config._d = new Date(input.valueOf());
              } else if (typeof input === 'string') {
                configFromString(config);
              } else if (isArray(input)) {
                config._a = map(input.slice(0), function (obj) {
                  return parseInt(obj, 10);
                });
                configFromArray(config);
              } else if (isObject(input)) {
                configFromObject(config);
              } else if (isNumber(input)) {
                // from milliseconds
                config._d = new Date(input);
              } else {
                hooks.createFromInputFallback(config);
              }
            }

            function createLocalOrUTC(input, format, locale, strict, isUTC) {
              var c = {};

              if (format === true || format === false) {
                strict = format;
                format = undefined;
              }

              if (locale === true || locale === false) {
                strict = locale;
                locale = undefined;
              }

              if (
                (isObject(input) && isObjectEmpty(input)) ||
                (isArray(input) && input.length === 0)
              ) {
                input = undefined;
              }
              // object construction must be done this way.
              // https://github.com/moment/moment/issues/1423
              c._isAMomentObject = true;
              c._useUTC = c._isUTC = isUTC;
              c._l = locale;
              c._i = input;
              c._f = format;
              c._strict = strict;

              return createFromConfig(c);
            }

            function createLocal(input, format, locale, strict) {
              return createLocalOrUTC(input, format, locale, strict, false);
            }

            var prototypeMin = deprecate(
                'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
                function () {
                  var other = createLocal.apply(null, arguments);
                  if (this.isValid() && other.isValid()) {
                    return other < this ? this : other;
                  } else {
                    return createInvalid();
                  }
                }
              ),
              prototypeMax = deprecate(
                'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
                function () {
                  var other = createLocal.apply(null, arguments);
                  if (this.isValid() && other.isValid()) {
                    return other > this ? this : other;
                  } else {
                    return createInvalid();
                  }
                }
              );

            // Pick a moment m from moments so that m[fn](other) is true for all
            // other. This relies on the function fn to be transitive.
            //
            // moments should either be an array of moment objects or an array, whose
            // first element is an array of moment objects.
            function pickBy(fn, moments) {
              var res, i;
              if (moments.length === 1 && isArray(moments[0])) {
                moments = moments[0];
              }
              if (!moments.length) {
                return createLocal();
              }
              res = moments[0];
              for (i = 1; i < moments.length; ++i) {
                if (!moments[i].isValid() || moments[i][fn](res)) {
                  res = moments[i];
                }
              }
              return res;
            }

            // TODO: Use [].sort instead?
            function min() {
              var args = [].slice.call(arguments, 0);

              return pickBy('isBefore', args);
            }

            function max() {
              var args = [].slice.call(arguments, 0);

              return pickBy('isAfter', args);
            }

            var now = function () {
              return Date.now ? Date.now() : +new Date();
            };

            var ordering = [
              'year',
              'quarter',
              'month',
              'week',
              'day',
              'hour',
              'minute',
              'second',
              'millisecond',
            ];

            function isDurationValid(m) {
              var key,
                unitHasDecimal = false,
                i;
              for (key in m) {
                if (
                  hasOwnProp(m, key) &&
                  !(
                    indexOf.call(ordering, key) !== -1 &&
                    (m[key] == null || !isNaN(m[key]))
                  )
                ) {
                  return false;
                }
              }

              for (i = 0; i < ordering.length; ++i) {
                if (m[ordering[i]]) {
                  if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                  }
                  if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                  }
                }
              }

              return true;
            }

            function isValid$1() {
              return this._isValid;
            }

            function createInvalid$1() {
              return createDuration(NaN);
            }

            function Duration(duration) {
              var normalizedInput = normalizeObjectUnits(duration),
                years = normalizedInput.year || 0,
                quarters = normalizedInput.quarter || 0,
                months = normalizedInput.month || 0,
                weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
                days = normalizedInput.day || 0,
                hours = normalizedInput.hour || 0,
                minutes = normalizedInput.minute || 0,
                seconds = normalizedInput.second || 0,
                milliseconds = normalizedInput.millisecond || 0;

              this._isValid = isDurationValid(normalizedInput);

              // representation for dateAddRemove
              this._milliseconds =
                +milliseconds +
                seconds * 1e3 + // 1000
                minutes * 6e4 + // 1000 * 60
                hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
              // Because of dateAddRemove treats 24 hours as different from a
              // day when working around DST, we need to store them separately
              this._days = +days + weeks * 7;
              // It is impossible to translate months into days without knowing
              // which months you are are talking about, so we have to store
              // it separately.
              this._months = +months + quarters * 3 + years * 12;

              this._data = {};

              this._locale = getLocale();

              this._bubble();
            }

            function isDuration(obj) {
              return obj instanceof Duration;
            }

            function absRound(number) {
              if (number < 0) {
                return Math.round(-1 * number) * -1;
              } else {
                return Math.round(number);
              }
            }

            // compare two arrays, return the number of differences
            function compareArrays(array1, array2, dontConvert) {
              var len = Math.min(array1.length, array2.length),
                lengthDiff = Math.abs(array1.length - array2.length),
                diffs = 0,
                i;
              for (i = 0; i < len; i++) {
                if (
                  (dontConvert && array1[i] !== array2[i]) ||
                  (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))
                ) {
                  diffs++;
                }
              }
              return diffs + lengthDiff;
            }

            // FORMATTING

            function offset(token, separator) {
              addFormatToken(token, 0, 0, function () {
                var offset = this.utcOffset(),
                  sign = '+';
                if (offset < 0) {
                  offset = -offset;
                  sign = '-';
                }
                return (
                  sign +
                  zeroFill(~~(offset / 60), 2) +
                  separator +
                  zeroFill(~~offset % 60, 2)
                );
              });
            }

            offset('Z', ':');
            offset('ZZ', '');

            // PARSING

            addRegexToken('Z', matchShortOffset);
            addRegexToken('ZZ', matchShortOffset);
            addParseToken(['Z', 'ZZ'], function (input, array, config) {
              config._useUTC = true;
              config._tzm = offsetFromString(matchShortOffset, input);
            });

            // HELPERS

            // timezone chunker
            // '+10:00' > ['10',  '00']
            // '-1530'  > ['-15', '30']
            var chunkOffset = /([\+\-]|\d\d)/gi;

            function offsetFromString(matcher, string) {
              var matches = (string || '').match(matcher),
                chunk,
                parts,
                minutes;

              if (matches === null) {
                return null;
              }

              chunk = matches[matches.length - 1] || [];
              parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
              minutes = +(parts[1] * 60) + toInt(parts[2]);

              return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
            }

            // Return a moment from input, that is local/utc/zone equivalent to model.
            function cloneWithOffset(input, model) {
              var res, diff;
              if (model._isUTC) {
                res = model.clone();
                diff =
                  (isMoment(input) || isDate(input)
                    ? input.valueOf()
                    : createLocal(input).valueOf()) - res.valueOf();
                // Use low-level api, because this fn is low-level api.
                res._d.setTime(res._d.valueOf() + diff);
                hooks.updateOffset(res, false);
                return res;
              } else {
                return createLocal(input).local();
              }
            }

            function getDateOffset(m) {
              // On Firefox.24 Date#getTimezoneOffset returns a floating point.
              // https://github.com/moment/moment/pull/1871
              return -Math.round(m._d.getTimezoneOffset());
            }

            // HOOKS

            // This function will be called whenever a moment is mutated.
            // It is intended to keep the offset in sync with the timezone.
            hooks.updateOffset = function () {};

            // MOMENTS

            // keepLocalTime = true means only change the timezone, without
            // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
            // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
            // +0200, so we adjust the time as needed, to be valid.
            //
            // Keeping the time actually adds/subtracts (one hour)
            // from the actual represented time. That is why we call updateOffset
            // a second time. In case it wants us to change the offset again
            // _changeInProgress == true case, then we have to adjust, because
            // there is no such time in the given timezone.
            function getSetOffset(input, keepLocalTime, keepMinutes) {
              var offset = this._offset || 0,
                localAdjust;
              if (!this.isValid()) {
                return input != null ? this : NaN;
              }
              if (input != null) {
                if (typeof input === 'string') {
                  input = offsetFromString(matchShortOffset, input);
                  if (input === null) {
                    return this;
                  }
                } else if (Math.abs(input) < 16 && !keepMinutes) {
                  input = input * 60;
                }
                if (!this._isUTC && keepLocalTime) {
                  localAdjust = getDateOffset(this);
                }
                this._offset = input;
                this._isUTC = true;
                if (localAdjust != null) {
                  this.add(localAdjust, 'm');
                }
                if (offset !== input) {
                  if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(
                      this,
                      createDuration(input - offset, 'm'),
                      1,
                      false
                    );
                  } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                  }
                }
                return this;
              } else {
                return this._isUTC ? offset : getDateOffset(this);
              }
            }

            function getSetZone(input, keepLocalTime) {
              if (input != null) {
                if (typeof input !== 'string') {
                  input = -input;
                }

                this.utcOffset(input, keepLocalTime);

                return this;
              } else {
                return -this.utcOffset();
              }
            }

            function setOffsetToUTC(keepLocalTime) {
              return this.utcOffset(0, keepLocalTime);
            }

            function setOffsetToLocal(keepLocalTime) {
              if (this._isUTC) {
                this.utcOffset(0, keepLocalTime);
                this._isUTC = false;

                if (keepLocalTime) {
                  this.subtract(getDateOffset(this), 'm');
                }
              }
              return this;
            }

            function setOffsetToParsedOffset() {
              if (this._tzm != null) {
                this.utcOffset(this._tzm, false, true);
              } else if (typeof this._i === 'string') {
                var tZone = offsetFromString(matchOffset, this._i);
                if (tZone != null) {
                  this.utcOffset(tZone);
                } else {
                  this.utcOffset(0, true);
                }
              }
              return this;
            }

            function hasAlignedHourOffset(input) {
              if (!this.isValid()) {
                return false;
              }
              input = input ? createLocal(input).utcOffset() : 0;

              return (this.utcOffset() - input) % 60 === 0;
            }

            function isDaylightSavingTime() {
              return (
                this.utcOffset() > this.clone().month(0).utcOffset() ||
                this.utcOffset() > this.clone().month(5).utcOffset()
              );
            }

            function isDaylightSavingTimeShifted() {
              if (!isUndefined(this._isDSTShifted)) {
                return this._isDSTShifted;
              }

              var c = {},
                other;

              copyConfig(c, this);
              c = prepareConfig(c);

              if (c._a) {
                other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
                this._isDSTShifted =
                  this.isValid() && compareArrays(c._a, other.toArray()) > 0;
              } else {
                this._isDSTShifted = false;
              }

              return this._isDSTShifted;
            }

            function isLocal() {
              return this.isValid() ? !this._isUTC : false;
            }

            function isUtcOffset() {
              return this.isValid() ? this._isUTC : false;
            }

            function isUtc() {
              return this.isValid() ? this._isUTC && this._offset === 0 : false;
            }

            // ASP.NET json date format regex
            var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
              // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
              // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
              // and further modified to allow for strings containing both week and day
              isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

            function createDuration(input, key) {
              var duration = input,
                // matching against regexp is expensive, do it on demand
                match = null,
                sign,
                ret,
                diffRes;

              if (isDuration(input)) {
                duration = {
                  ms: input._milliseconds,
                  d: input._days,
                  M: input._months,
                };
              } else if (isNumber(input) || !isNaN(+input)) {
                duration = {};
                if (key) {
                  duration[key] = +input;
                } else {
                  duration.milliseconds = +input;
                }
              } else if ((match = aspNetRegex.exec(input))) {
                sign = match[1] === '-' ? -1 : 1;
                duration = {
                  y: 0,
                  d: toInt(match[DATE]) * sign,
                  h: toInt(match[HOUR]) * sign,
                  m: toInt(match[MINUTE]) * sign,
                  s: toInt(match[SECOND]) * sign,
                  ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign, // the millisecond decimal point is included in the match
                };
              } else if ((match = isoRegex.exec(input))) {
                sign = match[1] === '-' ? -1 : 1;
                duration = {
                  y: parseIso(match[2], sign),
                  M: parseIso(match[3], sign),
                  w: parseIso(match[4], sign),
                  d: parseIso(match[5], sign),
                  h: parseIso(match[6], sign),
                  m: parseIso(match[7], sign),
                  s: parseIso(match[8], sign),
                };
              } else if (duration == null) {
                // checks for null or undefined
                duration = {};
              } else if (
                typeof duration === 'object' &&
                ('from' in duration || 'to' in duration)
              ) {
                diffRes = momentsDifference(
                  createLocal(duration.from),
                  createLocal(duration.to)
                );

                duration = {};
                duration.ms = diffRes.milliseconds;
                duration.M = diffRes.months;
              }

              ret = new Duration(duration);

              if (isDuration(input) && hasOwnProp(input, '_locale')) {
                ret._locale = input._locale;
              }

              if (isDuration(input) && hasOwnProp(input, '_isValid')) {
                ret._isValid = input._isValid;
              }

              return ret;
            }

            createDuration.fn = Duration.prototype;
            createDuration.invalid = createInvalid$1;

            function parseIso(inp, sign) {
              // We'd normally use ~~inp for this, but unfortunately it also
              // converts floats to ints.
              // inp may be undefined, so careful calling replace on it.
              var res = inp && parseFloat(inp.replace(',', '.'));
              // apply sign while we're at it
              return (isNaN(res) ? 0 : res) * sign;
            }

            function positiveMomentsDifference(base, other) {
              var res = {};

              res.months =
                other.month() -
                base.month() +
                (other.year() - base.year()) * 12;
              if (base.clone().add(res.months, 'M').isAfter(other)) {
                --res.months;
              }

              res.milliseconds = +other - +base.clone().add(res.months, 'M');

              return res;
            }

            function momentsDifference(base, other) {
              var res;
              if (!(base.isValid() && other.isValid())) {
                return { milliseconds: 0, months: 0 };
              }

              other = cloneWithOffset(other, base);
              if (base.isBefore(other)) {
                res = positiveMomentsDifference(base, other);
              } else {
                res = positiveMomentsDifference(other, base);
                res.milliseconds = -res.milliseconds;
                res.months = -res.months;
              }

              return res;
            }

            // TODO: remove 'name' arg after deprecation is removed
            function createAdder(direction, name) {
              return function (val, period) {
                var dur, tmp;
                //invert the arguments, but complain about it
                if (period !== null && !isNaN(+period)) {
                  deprecateSimple(
                    name,
                    'moment().' +
                      name +
                      '(period, number) is deprecated. Please use moment().' +
                      name +
                      '(number, period). ' +
                      'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
                  );
                  tmp = val;
                  val = period;
                  period = tmp;
                }

                dur = createDuration(val, period);
                addSubtract(this, dur, direction);
                return this;
              };
            }

            function addSubtract(mom, duration, isAdding, updateOffset) {
              var milliseconds = duration._milliseconds,
                days = absRound(duration._days),
                months = absRound(duration._months);

              if (!mom.isValid()) {
                // No op
                return;
              }

              updateOffset = updateOffset == null ? true : updateOffset;

              if (months) {
                setMonth(mom, get(mom, 'Month') + months * isAdding);
              }
              if (days) {
                set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
              }
              if (milliseconds) {
                mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
              }
              if (updateOffset) {
                hooks.updateOffset(mom, days || months);
              }
            }

            var add = createAdder(1, 'add'),
              subtract = createAdder(-1, 'subtract');

            function isString(input) {
              return typeof input === 'string' || input instanceof String;
            }

            // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
            function isMomentInput(input) {
              return (
                isMoment(input) ||
                isDate(input) ||
                isString(input) ||
                isNumber(input) ||
                isNumberOrStringArray(input) ||
                isMomentInputObject(input) ||
                input === null ||
                input === undefined
              );
            }

            function isMomentInputObject(input) {
              var objectTest = isObject(input) && !isObjectEmpty(input),
                propertyTest = false,
                properties = [
                  'years',
                  'year',
                  'y',
                  'months',
                  'month',
                  'M',
                  'days',
                  'day',
                  'd',
                  'dates',
                  'date',
                  'D',
                  'hours',
                  'hour',
                  'h',
                  'minutes',
                  'minute',
                  'm',
                  'seconds',
                  'second',
                  's',
                  'milliseconds',
                  'millisecond',
                  'ms',
                ],
                i,
                property;

              for (i = 0; i < properties.length; i += 1) {
                property = properties[i];
                propertyTest = propertyTest || hasOwnProp(input, property);
              }

              return objectTest && propertyTest;
            }

            function isNumberOrStringArray(input) {
              var arrayTest = isArray(input),
                dataTypeTest = false;
              if (arrayTest) {
                dataTypeTest =
                  input.filter(function (item) {
                    return !isNumber(item) && isString(input);
                  }).length === 0;
              }
              return arrayTest && dataTypeTest;
            }

            function isCalendarSpec(input) {
              var objectTest = isObject(input) && !isObjectEmpty(input),
                propertyTest = false,
                properties = [
                  'sameDay',
                  'nextDay',
                  'lastDay',
                  'nextWeek',
                  'lastWeek',
                  'sameElse',
                ],
                i,
                property;

              for (i = 0; i < properties.length; i += 1) {
                property = properties[i];
                propertyTest = propertyTest || hasOwnProp(input, property);
              }

              return objectTest && propertyTest;
            }

            function getCalendarFormat(myMoment, now) {
              var diff = myMoment.diff(now, 'days', true);
              return diff < -6
                ? 'sameElse'
                : diff < -1
                ? 'lastWeek'
                : diff < 0
                ? 'lastDay'
                : diff < 1
                ? 'sameDay'
                : diff < 2
                ? 'nextDay'
                : diff < 7
                ? 'nextWeek'
                : 'sameElse';
            }

            function calendar$1(time, formats) {
              // Support for single parameter, formats only overload to the calendar function
              if (arguments.length === 1) {
                if (isMomentInput(arguments[0])) {
                  time = arguments[0];
                  formats = undefined;
                } else if (isCalendarSpec(arguments[0])) {
                  formats = arguments[0];
                  time = undefined;
                }
              }
              // We want to compare the start of today, vs this.
              // Getting start-of-today depends on whether we're local/utc/offset or not.
              var now = time || createLocal(),
                sod = cloneWithOffset(now, this).startOf('day'),
                format = hooks.calendarFormat(this, sod) || 'sameElse',
                output =
                  formats &&
                  (isFunction(formats[format])
                    ? formats[format].call(this, now)
                    : formats[format]);

              return this.format(
                output ||
                  this.localeData().calendar(format, this, createLocal(now))
              );
            }

            function clone() {
              return new Moment(this);
            }

            function isAfter(input, units) {
              var localInput = isMoment(input) ? input : createLocal(input);
              if (!(this.isValid() && localInput.isValid())) {
                return false;
              }
              units = normalizeUnits(units) || 'millisecond';
              if (units === 'millisecond') {
                return this.valueOf() > localInput.valueOf();
              } else {
                return (
                  localInput.valueOf() < this.clone().startOf(units).valueOf()
                );
              }
            }

            function isBefore(input, units) {
              var localInput = isMoment(input) ? input : createLocal(input);
              if (!(this.isValid() && localInput.isValid())) {
                return false;
              }
              units = normalizeUnits(units) || 'millisecond';
              if (units === 'millisecond') {
                return this.valueOf() < localInput.valueOf();
              } else {
                return (
                  this.clone().endOf(units).valueOf() < localInput.valueOf()
                );
              }
            }

            function isBetween(from, to, units, inclusivity) {
              var localFrom = isMoment(from) ? from : createLocal(from),
                localTo = isMoment(to) ? to : createLocal(to);
              if (
                !(this.isValid() && localFrom.isValid() && localTo.isValid())
              ) {
                return false;
              }
              inclusivity = inclusivity || '()';
              return (
                (inclusivity[0] === '('
                  ? this.isAfter(localFrom, units)
                  : !this.isBefore(localFrom, units)) &&
                (inclusivity[1] === ')'
                  ? this.isBefore(localTo, units)
                  : !this.isAfter(localTo, units))
              );
            }

            function isSame(input, units) {
              var localInput = isMoment(input) ? input : createLocal(input),
                inputMs;
              if (!(this.isValid() && localInput.isValid())) {
                return false;
              }
              units = normalizeUnits(units) || 'millisecond';
              if (units === 'millisecond') {
                return this.valueOf() === localInput.valueOf();
              } else {
                inputMs = localInput.valueOf();
                return (
                  this.clone().startOf(units).valueOf() <= inputMs &&
                  inputMs <= this.clone().endOf(units).valueOf()
                );
              }
            }

            function isSameOrAfter(input, units) {
              return this.isSame(input, units) || this.isAfter(input, units);
            }

            function isSameOrBefore(input, units) {
              return this.isSame(input, units) || this.isBefore(input, units);
            }

            function diff(input, units, asFloat) {
              var that, zoneDelta, output;

              if (!this.isValid()) {
                return NaN;
              }

              that = cloneWithOffset(input, this);

              if (!that.isValid()) {
                return NaN;
              }

              zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

              units = normalizeUnits(units);

              switch (units) {
                case 'year':
                  output = monthDiff(this, that) / 12;
                  break;
                case 'month':
                  output = monthDiff(this, that);
                  break;
                case 'quarter':
                  output = monthDiff(this, that) / 3;
                  break;
                case 'second':
                  output = (this - that) / 1e3;
                  break; // 1000
                case 'minute':
                  output = (this - that) / 6e4;
                  break; // 1000 * 60
                case 'hour':
                  output = (this - that) / 36e5;
                  break; // 1000 * 60 * 60
                case 'day':
                  output = (this - that - zoneDelta) / 864e5;
                  break; // 1000 * 60 * 60 * 24, negate dst
                case 'week':
                  output = (this - that - zoneDelta) / 6048e5;
                  break; // 1000 * 60 * 60 * 24 * 7, negate dst
                default:
                  output = this - that;
              }

              return asFloat ? output : absFloor(output);
            }

            function monthDiff(a, b) {
              if (a.date() < b.date()) {
                // end-of-month calculations work correct when the start month has more
                // days than the end month.
                return -monthDiff(b, a);
              }
              // difference in months
              var wholeMonthDiff =
                  (b.year() - a.year()) * 12 + (b.month() - a.month()),
                // b is in (anchor - 1 month, anchor + 1 month)
                anchor = a.clone().add(wholeMonthDiff, 'months'),
                anchor2,
                adjust;

              if (b - anchor < 0) {
                anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
                // linear across the month
                adjust = (b - anchor) / (anchor - anchor2);
              } else {
                anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
                // linear across the month
                adjust = (b - anchor) / (anchor2 - anchor);
              }

              //check for negative zero, return zero if negative zero
              return -(wholeMonthDiff + adjust) || 0;
            }

            hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
            hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

            function toString() {
              return this.clone()
                .locale('en')
                .format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
            }

            function toISOString(keepOffset) {
              if (!this.isValid()) {
                return null;
              }
              var utc = keepOffset !== true,
                m = utc ? this.clone().utc() : this;
              if (m.year() < 0 || m.year() > 9999) {
                return formatMoment(
                  m,
                  utc
                    ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
                    : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
                );
              }
              if (isFunction(Date.prototype.toISOString)) {
                // native implementation is ~50x faster, use it when we can
                if (utc) {
                  return this.toDate().toISOString();
                } else {
                  return new Date(this.valueOf() + this.utcOffset() * 60 * 1000)
                    .toISOString()
                    .replace('Z', formatMoment(m, 'Z'));
                }
              }
              return formatMoment(
                m,
                utc
                  ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
                  : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
              );
            }

            /**
             * Return a human readable representation of a moment that can
             * also be evaluated to get a new moment which is the same
             *
             * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
             */
            function inspect() {
              if (!this.isValid()) {
                return 'moment.invalid(/* ' + this._i + ' */)';
              }
              var func = 'moment',
                zone = '',
                prefix,
                year,
                datetime,
                suffix;
              if (!this.isLocal()) {
                func =
                  this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
                zone = 'Z';
              }
              prefix = '[' + func + '("]';
              year =
                0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
              datetime = '-MM-DD[T]HH:mm:ss.SSS';
              suffix = zone + '[")]';

              return this.format(prefix + year + datetime + suffix);
            }

            function format(inputString) {
              if (!inputString) {
                inputString = this.isUtc()
                  ? hooks.defaultFormatUtc
                  : hooks.defaultFormat;
              }
              var output = formatMoment(this, inputString);
              return this.localeData().postformat(output);
            }

            function from(time, withoutSuffix) {
              if (
                this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                  createLocal(time).isValid())
              ) {
                return createDuration({ to: this, from: time })
                  .locale(this.locale())
                  .humanize(!withoutSuffix);
              } else {
                return this.localeData().invalidDate();
              }
            }

            function fromNow(withoutSuffix) {
              return this.from(createLocal(), withoutSuffix);
            }

            function to(time, withoutSuffix) {
              if (
                this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                  createLocal(time).isValid())
              ) {
                return createDuration({ from: this, to: time })
                  .locale(this.locale())
                  .humanize(!withoutSuffix);
              } else {
                return this.localeData().invalidDate();
              }
            }

            function toNow(withoutSuffix) {
              return this.to(createLocal(), withoutSuffix);
            }

            // If passed a locale key, it will set the locale for this
            // instance.  Otherwise, it will return the locale configuration
            // variables for this instance.
            function locale(key) {
              var newLocaleData;

              if (key === undefined) {
                return this._locale._abbr;
              } else {
                newLocaleData = getLocale(key);
                if (newLocaleData != null) {
                  this._locale = newLocaleData;
                }
                return this;
              }
            }

            var lang = deprecate(
              'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
              function (key) {
                if (key === undefined) {
                  return this.localeData();
                } else {
                  return this.locale(key);
                }
              }
            );

            function localeData() {
              return this._locale;
            }

            var MS_PER_SECOND = 1000,
              MS_PER_MINUTE = 60 * MS_PER_SECOND,
              MS_PER_HOUR = 60 * MS_PER_MINUTE,
              MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

            // actual modulo - handles negative numbers (for dates before 1970):
            function mod$1(dividend, divisor) {
              return ((dividend % divisor) + divisor) % divisor;
            }

            function localStartOfDate(y, m, d) {
              // the date constructor remaps years 0-99 to 1900-1999
              if (y < 100 && y >= 0) {
                // preserve leap years using a full 400 year cycle, then reset
                return new Date(y + 400, m, d) - MS_PER_400_YEARS;
              } else {
                return new Date(y, m, d).valueOf();
              }
            }

            function utcStartOfDate(y, m, d) {
              // Date.UTC remaps years 0-99 to 1900-1999
              if (y < 100 && y >= 0) {
                // preserve leap years using a full 400 year cycle, then reset
                return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
              } else {
                return Date.UTC(y, m, d);
              }
            }

            function startOf(units) {
              var time, startOfDate;
              units = normalizeUnits(units);
              if (
                units === undefined ||
                units === 'millisecond' ||
                !this.isValid()
              ) {
                return this;
              }

              startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

              switch (units) {
                case 'year':
                  time = startOfDate(this.year(), 0, 1);
                  break;
                case 'quarter':
                  time = startOfDate(
                    this.year(),
                    this.month() - (this.month() % 3),
                    1
                  );
                  break;
                case 'month':
                  time = startOfDate(this.year(), this.month(), 1);
                  break;
                case 'week':
                  time = startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - this.weekday()
                  );
                  break;
                case 'isoWeek':
                  time = startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - (this.isoWeekday() - 1)
                  );
                  break;
                case 'day':
                case 'date':
                  time = startOfDate(this.year(), this.month(), this.date());
                  break;
                case 'hour':
                  time = this._d.valueOf();
                  time -= mod$1(
                    time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                    MS_PER_HOUR
                  );
                  break;
                case 'minute':
                  time = this._d.valueOf();
                  time -= mod$1(time, MS_PER_MINUTE);
                  break;
                case 'second':
                  time = this._d.valueOf();
                  time -= mod$1(time, MS_PER_SECOND);
                  break;
              }

              this._d.setTime(time);
              hooks.updateOffset(this, true);
              return this;
            }

            function endOf(units) {
              var time, startOfDate;
              units = normalizeUnits(units);
              if (
                units === undefined ||
                units === 'millisecond' ||
                !this.isValid()
              ) {
                return this;
              }

              startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

              switch (units) {
                case 'year':
                  time = startOfDate(this.year() + 1, 0, 1) - 1;
                  break;
                case 'quarter':
                  time =
                    startOfDate(
                      this.year(),
                      this.month() - (this.month() % 3) + 3,
                      1
                    ) - 1;
                  break;
                case 'month':
                  time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                  break;
                case 'week':
                  time =
                    startOfDate(
                      this.year(),
                      this.month(),
                      this.date() - this.weekday() + 7
                    ) - 1;
                  break;
                case 'isoWeek':
                  time =
                    startOfDate(
                      this.year(),
                      this.month(),
                      this.date() - (this.isoWeekday() - 1) + 7
                    ) - 1;
                  break;
                case 'day':
                case 'date':
                  time =
                    startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                  break;
                case 'hour':
                  time = this._d.valueOf();
                  time +=
                    MS_PER_HOUR -
                    mod$1(
                      time +
                        (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                      MS_PER_HOUR
                    ) -
                    1;
                  break;
                case 'minute':
                  time = this._d.valueOf();
                  time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                  break;
                case 'second':
                  time = this._d.valueOf();
                  time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                  break;
              }

              this._d.setTime(time);
              hooks.updateOffset(this, true);
              return this;
            }

            function valueOf() {
              return this._d.valueOf() - (this._offset || 0) * 60000;
            }

            function unix() {
              return Math.floor(this.valueOf() / 1000);
            }

            function toDate() {
              return new Date(this.valueOf());
            }

            function toArray() {
              var m = this;
              return [
                m.year(),
                m.month(),
                m.date(),
                m.hour(),
                m.minute(),
                m.second(),
                m.millisecond(),
              ];
            }

            function toObject() {
              var m = this;
              return {
                years: m.year(),
                months: m.month(),
                date: m.date(),
                hours: m.hours(),
                minutes: m.minutes(),
                seconds: m.seconds(),
                milliseconds: m.milliseconds(),
              };
            }

            function toJSON() {
              // new Date(NaN).toJSON() === null
              return this.isValid() ? this.toISOString() : null;
            }

            function isValid$2() {
              return isValid(this);
            }

            function parsingFlags() {
              return extend({}, getParsingFlags(this));
            }

            function invalidAt() {
              return getParsingFlags(this).overflow;
            }

            function creationData() {
              return {
                input: this._i,
                format: this._f,
                locale: this._locale,
                isUTC: this._isUTC,
                strict: this._strict,
              };
            }

            addFormatToken('N', 0, 0, 'eraAbbr');
            addFormatToken('NN', 0, 0, 'eraAbbr');
            addFormatToken('NNN', 0, 0, 'eraAbbr');
            addFormatToken('NNNN', 0, 0, 'eraName');
            addFormatToken('NNNNN', 0, 0, 'eraNarrow');

            addFormatToken('y', ['y', 1], 'yo', 'eraYear');
            addFormatToken('y', ['yy', 2], 0, 'eraYear');
            addFormatToken('y', ['yyy', 3], 0, 'eraYear');
            addFormatToken('y', ['yyyy', 4], 0, 'eraYear');

            addRegexToken('N', matchEraAbbr);
            addRegexToken('NN', matchEraAbbr);
            addRegexToken('NNN', matchEraAbbr);
            addRegexToken('NNNN', matchEraName);
            addRegexToken('NNNNN', matchEraNarrow);

            addParseToken(['N', 'NN', 'NNN', 'NNNN', 'NNNNN'], function (
              input,
              array,
              config,
              token
            ) {
              var era = config._locale.erasParse(input, token, config._strict);
              if (era) {
                getParsingFlags(config).era = era;
              } else {
                getParsingFlags(config).invalidEra = input;
              }
            });

            addRegexToken('y', matchUnsigned);
            addRegexToken('yy', matchUnsigned);
            addRegexToken('yyy', matchUnsigned);
            addRegexToken('yyyy', matchUnsigned);
            addRegexToken('yo', matchEraYearOrdinal);

            addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
            addParseToken(['yo'], function (input, array, config, token) {
              var match;
              if (config._locale._eraYearOrdinalRegex) {
                match = input.match(config._locale._eraYearOrdinalRegex);
              }

              if (config._locale.eraYearOrdinalParse) {
                array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
              } else {
                array[YEAR] = parseInt(input, 10);
              }
            });

            function localeEras(m, format) {
              var i,
                l,
                date,
                eras = this._eras || getLocale('en')._eras;
              for (i = 0, l = eras.length; i < l; ++i) {
                switch (typeof eras[i].since) {
                  case 'string':
                    // truncate time
                    date = hooks(eras[i].since).startOf('day');
                    eras[i].since = date.valueOf();
                    break;
                }

                switch (typeof eras[i].until) {
                  case 'undefined':
                    eras[i].until = +Infinity;
                    break;
                  case 'string':
                    // truncate time
                    date = hooks(eras[i].until).startOf('day').valueOf();
                    eras[i].until = date.valueOf();
                    break;
                }
              }
              return eras;
            }

            function localeErasParse(eraName, format, strict) {
              var i,
                l,
                eras = this.eras(),
                name,
                abbr,
                narrow;
              eraName = eraName.toUpperCase();

              for (i = 0, l = eras.length; i < l; ++i) {
                name = eras[i].name.toUpperCase();
                abbr = eras[i].abbr.toUpperCase();
                narrow = eras[i].narrow.toUpperCase();

                if (strict) {
                  switch (format) {
                    case 'N':
                    case 'NN':
                    case 'NNN':
                      if (abbr === eraName) {
                        return eras[i];
                      }
                      break;

                    case 'NNNN':
                      if (name === eraName) {
                        return eras[i];
                      }
                      break;

                    case 'NNNNN':
                      if (narrow === eraName) {
                        return eras[i];
                      }
                      break;
                  }
                } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
                  return eras[i];
                }
              }
            }

            function localeErasConvertYear(era, year) {
              var dir = era.since <= era.until ? +1 : -1;
              if (year === undefined) {
                return hooks(era.since).year();
              } else {
                return hooks(era.since).year() + (year - era.offset) * dir;
              }
            }

            function getEraName() {
              var i,
                l,
                val,
                eras = this.localeData().eras();
              for (i = 0, l = eras.length; i < l; ++i) {
                // truncate time
                val = this.startOf('day').valueOf();

                if (eras[i].since <= val && val <= eras[i].until) {
                  return eras[i].name;
                }
                if (eras[i].until <= val && val <= eras[i].since) {
                  return eras[i].name;
                }
              }

              return '';
            }

            function getEraNarrow() {
              var i,
                l,
                val,
                eras = this.localeData().eras();
              for (i = 0, l = eras.length; i < l; ++i) {
                // truncate time
                val = this.startOf('day').valueOf();

                if (eras[i].since <= val && val <= eras[i].until) {
                  return eras[i].narrow;
                }
                if (eras[i].until <= val && val <= eras[i].since) {
                  return eras[i].narrow;
                }
              }

              return '';
            }

            function getEraAbbr() {
              var i,
                l,
                val,
                eras = this.localeData().eras();
              for (i = 0, l = eras.length; i < l; ++i) {
                // truncate time
                val = this.startOf('day').valueOf();

                if (eras[i].since <= val && val <= eras[i].until) {
                  return eras[i].abbr;
                }
                if (eras[i].until <= val && val <= eras[i].since) {
                  return eras[i].abbr;
                }
              }

              return '';
            }

            function getEraYear() {
              var i,
                l,
                dir,
                val,
                eras = this.localeData().eras();
              for (i = 0, l = eras.length; i < l; ++i) {
                dir = eras[i].since <= eras[i].until ? +1 : -1;

                // truncate time
                val = this.startOf('day').valueOf();

                if (
                  (eras[i].since <= val && val <= eras[i].until) ||
                  (eras[i].until <= val && val <= eras[i].since)
                ) {
                  return (
                    (this.year() - hooks(eras[i].since).year()) * dir +
                    eras[i].offset
                  );
                }
              }

              return this.year();
            }

            function erasNameRegex(isStrict) {
              if (!hasOwnProp(this, '_erasNameRegex')) {
                computeErasParse.call(this);
              }
              return isStrict ? this._erasNameRegex : this._erasRegex;
            }

            function erasAbbrRegex(isStrict) {
              if (!hasOwnProp(this, '_erasAbbrRegex')) {
                computeErasParse.call(this);
              }
              return isStrict ? this._erasAbbrRegex : this._erasRegex;
            }

            function erasNarrowRegex(isStrict) {
              if (!hasOwnProp(this, '_erasNarrowRegex')) {
                computeErasParse.call(this);
              }
              return isStrict ? this._erasNarrowRegex : this._erasRegex;
            }

            function matchEraAbbr(isStrict, locale) {
              return locale.erasAbbrRegex(isStrict);
            }

            function matchEraName(isStrict, locale) {
              return locale.erasNameRegex(isStrict);
            }

            function matchEraNarrow(isStrict, locale) {
              return locale.erasNarrowRegex(isStrict);
            }

            function matchEraYearOrdinal(isStrict, locale) {
              return locale._eraYearOrdinalRegex || matchUnsigned;
            }

            function computeErasParse() {
              var abbrPieces = [],
                namePieces = [],
                narrowPieces = [],
                mixedPieces = [],
                i,
                l,
                eras = this.eras();

              for (i = 0, l = eras.length; i < l; ++i) {
                namePieces.push(regexEscape(eras[i].name));
                abbrPieces.push(regexEscape(eras[i].abbr));
                narrowPieces.push(regexEscape(eras[i].narrow));

                mixedPieces.push(regexEscape(eras[i].name));
                mixedPieces.push(regexEscape(eras[i].abbr));
                mixedPieces.push(regexEscape(eras[i].narrow));
              }

              this._erasRegex = new RegExp(
                '^(' + mixedPieces.join('|') + ')',
                'i'
              );
              this._erasNameRegex = new RegExp(
                '^(' + namePieces.join('|') + ')',
                'i'
              );
              this._erasAbbrRegex = new RegExp(
                '^(' + abbrPieces.join('|') + ')',
                'i'
              );
              this._erasNarrowRegex = new RegExp(
                '^(' + narrowPieces.join('|') + ')',
                'i'
              );
            }

            // FORMATTING

            addFormatToken(0, ['gg', 2], 0, function () {
              return this.weekYear() % 100;
            });

            addFormatToken(0, ['GG', 2], 0, function () {
              return this.isoWeekYear() % 100;
            });

            function addWeekYearFormatToken(token, getter) {
              addFormatToken(0, [token, token.length], 0, getter);
            }

            addWeekYearFormatToken('gggg', 'weekYear');
            addWeekYearFormatToken('ggggg', 'weekYear');
            addWeekYearFormatToken('GGGG', 'isoWeekYear');
            addWeekYearFormatToken('GGGGG', 'isoWeekYear');

            // ALIASES

            addUnitAlias('weekYear', 'gg');
            addUnitAlias('isoWeekYear', 'GG');

            // PRIORITY

            addUnitPriority('weekYear', 1);
            addUnitPriority('isoWeekYear', 1);

            // PARSING

            addRegexToken('G', matchSigned);
            addRegexToken('g', matchSigned);
            addRegexToken('GG', match1to2, match2);
            addRegexToken('gg', match1to2, match2);
            addRegexToken('GGGG', match1to4, match4);
            addRegexToken('gggg', match1to4, match4);
            addRegexToken('GGGGG', match1to6, match6);
            addRegexToken('ggggg', match1to6, match6);

            addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (
              input,
              week,
              config,
              token
            ) {
              week[token.substr(0, 2)] = toInt(input);
            });

            addWeekParseToken(['gg', 'GG'], function (
              input,
              week,
              config,
              token
            ) {
              week[token] = hooks.parseTwoDigitYear(input);
            });

            // MOMENTS

            function getSetWeekYear(input) {
              return getSetWeekYearHelper.call(
                this,
                input,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy
              );
            }

            function getSetISOWeekYear(input) {
              return getSetWeekYearHelper.call(
                this,
                input,
                this.isoWeek(),
                this.isoWeekday(),
                1,
                4
              );
            }

            function getISOWeeksInYear() {
              return weeksInYear(this.year(), 1, 4);
            }

            function getISOWeeksInISOWeekYear() {
              return weeksInYear(this.isoWeekYear(), 1, 4);
            }

            function getWeeksInYear() {
              var weekInfo = this.localeData()._week;
              return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
            }

            function getWeeksInWeekYear() {
              var weekInfo = this.localeData()._week;
              return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
            }

            function getSetWeekYearHelper(input, week, weekday, dow, doy) {
              var weeksTarget;
              if (input == null) {
                return weekOfYear(this, dow, doy).year;
              } else {
                weeksTarget = weeksInYear(input, dow, doy);
                if (week > weeksTarget) {
                  week = weeksTarget;
                }
                return setWeekAll.call(this, input, week, weekday, dow, doy);
              }
            }

            function setWeekAll(weekYear, week, weekday, dow, doy) {
              var dayOfYearData = dayOfYearFromWeeks(
                  weekYear,
                  week,
                  weekday,
                  dow,
                  doy
                ),
                date = createUTCDate(
                  dayOfYearData.year,
                  0,
                  dayOfYearData.dayOfYear
                );

              this.year(date.getUTCFullYear());
              this.month(date.getUTCMonth());
              this.date(date.getUTCDate());
              return this;
            }

            // FORMATTING

            addFormatToken('Q', 0, 'Qo', 'quarter');

            // ALIASES

            addUnitAlias('quarter', 'Q');

            // PRIORITY

            addUnitPriority('quarter', 7);

            // PARSING

            addRegexToken('Q', match1);
            addParseToken('Q', function (input, array) {
              array[MONTH] = (toInt(input) - 1) * 3;
            });

            // MOMENTS

            function getSetQuarter(input) {
              return input == null
                ? Math.ceil((this.month() + 1) / 3)
                : this.month((input - 1) * 3 + (this.month() % 3));
            }

            // FORMATTING

            addFormatToken('D', ['DD', 2], 'Do', 'date');

            // ALIASES

            addUnitAlias('date', 'D');

            // PRIORITY
            addUnitPriority('date', 9);

            // PARSING

            addRegexToken('D', match1to2);
            addRegexToken('DD', match1to2, match2);
            addRegexToken('Do', function (isStrict, locale) {
              // TODO: Remove "ordinalParse" fallback in next major release.
              return isStrict
                ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
                : locale._dayOfMonthOrdinalParseLenient;
            });

            addParseToken(['D', 'DD'], DATE);
            addParseToken('Do', function (input, array) {
              array[DATE] = toInt(input.match(match1to2)[0]);
            });

            // MOMENTS

            var getSetDayOfMonth = makeGetSet('Date', true);

            // FORMATTING

            addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

            // ALIASES

            addUnitAlias('dayOfYear', 'DDD');

            // PRIORITY
            addUnitPriority('dayOfYear', 4);

            // PARSING

            addRegexToken('DDD', match1to3);
            addRegexToken('DDDD', match3);
            addParseToken(['DDD', 'DDDD'], function (input, array, config) {
              config._dayOfYear = toInt(input);
            });

            // HELPERS

            // MOMENTS

            function getSetDayOfYear(input) {
              var dayOfYear =
                Math.round(
                  (this.clone().startOf('day') - this.clone().startOf('year')) /
                    864e5
                ) + 1;
              return input == null
                ? dayOfYear
                : this.add(input - dayOfYear, 'd');
            }

            // FORMATTING

            addFormatToken('m', ['mm', 2], 0, 'minute');

            // ALIASES

            addUnitAlias('minute', 'm');

            // PRIORITY

            addUnitPriority('minute', 14);

            // PARSING

            addRegexToken('m', match1to2);
            addRegexToken('mm', match1to2, match2);
            addParseToken(['m', 'mm'], MINUTE);

            // MOMENTS

            var getSetMinute = makeGetSet('Minutes', false);

            // FORMATTING

            addFormatToken('s', ['ss', 2], 0, 'second');

            // ALIASES

            addUnitAlias('second', 's');

            // PRIORITY

            addUnitPriority('second', 15);

            // PARSING

            addRegexToken('s', match1to2);
            addRegexToken('ss', match1to2, match2);
            addParseToken(['s', 'ss'], SECOND);

            // MOMENTS

            var getSetSecond = makeGetSet('Seconds', false);

            // FORMATTING

            addFormatToken('S', 0, 0, function () {
              return ~~(this.millisecond() / 100);
            });

            addFormatToken(0, ['SS', 2], 0, function () {
              return ~~(this.millisecond() / 10);
            });

            addFormatToken(0, ['SSS', 3], 0, 'millisecond');
            addFormatToken(0, ['SSSS', 4], 0, function () {
              return this.millisecond() * 10;
            });
            addFormatToken(0, ['SSSSS', 5], 0, function () {
              return this.millisecond() * 100;
            });
            addFormatToken(0, ['SSSSSS', 6], 0, function () {
              return this.millisecond() * 1000;
            });
            addFormatToken(0, ['SSSSSSS', 7], 0, function () {
              return this.millisecond() * 10000;
            });
            addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
              return this.millisecond() * 100000;
            });
            addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
              return this.millisecond() * 1000000;
            });

            // ALIASES

            addUnitAlias('millisecond', 'ms');

            // PRIORITY

            addUnitPriority('millisecond', 16);

            // PARSING

            addRegexToken('S', match1to3, match1);
            addRegexToken('SS', match1to3, match2);
            addRegexToken('SSS', match1to3, match3);

            var token, getSetMillisecond;
            for (token = 'SSSS'; token.length <= 9; token += 'S') {
              addRegexToken(token, matchUnsigned);
            }

            function parseMs(input, array) {
              array[MILLISECOND] = toInt(('0.' + input) * 1000);
            }

            for (token = 'S'; token.length <= 9; token += 'S') {
              addParseToken(token, parseMs);
            }

            getSetMillisecond = makeGetSet('Milliseconds', false);

            // FORMATTING

            addFormatToken('z', 0, 0, 'zoneAbbr');
            addFormatToken('zz', 0, 0, 'zoneName');

            // MOMENTS

            function getZoneAbbr() {
              return this._isUTC ? 'UTC' : '';
            }

            function getZoneName() {
              return this._isUTC ? 'Coordinated Universal Time' : '';
            }

            var proto = Moment.prototype;

            proto.add = add;
            proto.calendar = calendar$1;
            proto.clone = clone;
            proto.diff = diff;
            proto.endOf = endOf;
            proto.format = format;
            proto.from = from;
            proto.fromNow = fromNow;
            proto.to = to;
            proto.toNow = toNow;
            proto.get = stringGet;
            proto.invalidAt = invalidAt;
            proto.isAfter = isAfter;
            proto.isBefore = isBefore;
            proto.isBetween = isBetween;
            proto.isSame = isSame;
            proto.isSameOrAfter = isSameOrAfter;
            proto.isSameOrBefore = isSameOrBefore;
            proto.isValid = isValid$2;
            proto.lang = lang;
            proto.locale = locale;
            proto.localeData = localeData;
            proto.max = prototypeMax;
            proto.min = prototypeMin;
            proto.parsingFlags = parsingFlags;
            proto.set = stringSet;
            proto.startOf = startOf;
            proto.subtract = subtract;
            proto.toArray = toArray;
            proto.toObject = toObject;
            proto.toDate = toDate;
            proto.toISOString = toISOString;
            proto.inspect = inspect;
            if (typeof Symbol !== 'undefined' && Symbol.for != null) {
              proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
                return 'Moment<' + this.format() + '>';
              };
            }
            proto.toJSON = toJSON;
            proto.toString = toString;
            proto.unix = unix;
            proto.valueOf = valueOf;
            proto.creationData = creationData;
            proto.eraName = getEraName;
            proto.eraNarrow = getEraNarrow;
            proto.eraAbbr = getEraAbbr;
            proto.eraYear = getEraYear;
            proto.year = getSetYear;
            proto.isLeapYear = getIsLeapYear;
            proto.weekYear = getSetWeekYear;
            proto.isoWeekYear = getSetISOWeekYear;
            proto.quarter = proto.quarters = getSetQuarter;
            proto.month = getSetMonth;
            proto.daysInMonth = getDaysInMonth;
            proto.week = proto.weeks = getSetWeek;
            proto.isoWeek = proto.isoWeeks = getSetISOWeek;
            proto.weeksInYear = getWeeksInYear;
            proto.weeksInWeekYear = getWeeksInWeekYear;
            proto.isoWeeksInYear = getISOWeeksInYear;
            proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
            proto.date = getSetDayOfMonth;
            proto.day = proto.days = getSetDayOfWeek;
            proto.weekday = getSetLocaleDayOfWeek;
            proto.isoWeekday = getSetISODayOfWeek;
            proto.dayOfYear = getSetDayOfYear;
            proto.hour = proto.hours = getSetHour;
            proto.minute = proto.minutes = getSetMinute;
            proto.second = proto.seconds = getSetSecond;
            proto.millisecond = proto.milliseconds = getSetMillisecond;
            proto.utcOffset = getSetOffset;
            proto.utc = setOffsetToUTC;
            proto.local = setOffsetToLocal;
            proto.parseZone = setOffsetToParsedOffset;
            proto.hasAlignedHourOffset = hasAlignedHourOffset;
            proto.isDST = isDaylightSavingTime;
            proto.isLocal = isLocal;
            proto.isUtcOffset = isUtcOffset;
            proto.isUtc = isUtc;
            proto.isUTC = isUtc;
            proto.zoneAbbr = getZoneAbbr;
            proto.zoneName = getZoneName;
            proto.dates = deprecate(
              'dates accessor is deprecated. Use date instead.',
              getSetDayOfMonth
            );
            proto.months = deprecate(
              'months accessor is deprecated. Use month instead',
              getSetMonth
            );
            proto.years = deprecate(
              'years accessor is deprecated. Use year instead',
              getSetYear
            );
            proto.zone = deprecate(
              'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
              getSetZone
            );
            proto.isDSTShifted = deprecate(
              'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
              isDaylightSavingTimeShifted
            );

            function createUnix(input) {
              return createLocal(input * 1000);
            }

            function createInZone() {
              return createLocal.apply(null, arguments).parseZone();
            }

            function preParsePostFormat(string) {
              return string;
            }

            var proto$1 = Locale.prototype;

            proto$1.calendar = calendar;
            proto$1.longDateFormat = longDateFormat;
            proto$1.invalidDate = invalidDate;
            proto$1.ordinal = ordinal;
            proto$1.preparse = preParsePostFormat;
            proto$1.postformat = preParsePostFormat;
            proto$1.relativeTime = relativeTime;
            proto$1.pastFuture = pastFuture;
            proto$1.set = set;
            proto$1.eras = localeEras;
            proto$1.erasParse = localeErasParse;
            proto$1.erasConvertYear = localeErasConvertYear;
            proto$1.erasAbbrRegex = erasAbbrRegex;
            proto$1.erasNameRegex = erasNameRegex;
            proto$1.erasNarrowRegex = erasNarrowRegex;

            proto$1.months = localeMonths;
            proto$1.monthsShort = localeMonthsShort;
            proto$1.monthsParse = localeMonthsParse;
            proto$1.monthsRegex = monthsRegex;
            proto$1.monthsShortRegex = monthsShortRegex;
            proto$1.week = localeWeek;
            proto$1.firstDayOfYear = localeFirstDayOfYear;
            proto$1.firstDayOfWeek = localeFirstDayOfWeek;

            proto$1.weekdays = localeWeekdays;
            proto$1.weekdaysMin = localeWeekdaysMin;
            proto$1.weekdaysShort = localeWeekdaysShort;
            proto$1.weekdaysParse = localeWeekdaysParse;

            proto$1.weekdaysRegex = weekdaysRegex;
            proto$1.weekdaysShortRegex = weekdaysShortRegex;
            proto$1.weekdaysMinRegex = weekdaysMinRegex;

            proto$1.isPM = localeIsPM;
            proto$1.meridiem = localeMeridiem;

            function get$1(format, index, field, setter) {
              var locale = getLocale(),
                utc = createUTC().set(setter, index);
              return locale[field](utc, format);
            }

            function listMonthsImpl(format, index, field) {
              if (isNumber(format)) {
                index = format;
                format = undefined;
              }

              format = format || '';

              if (index != null) {
                return get$1(format, index, field, 'month');
              }

              var i,
                out = [];
              for (i = 0; i < 12; i++) {
                out[i] = get$1(format, i, field, 'month');
              }
              return out;
            }

            // ()
            // (5)
            // (fmt, 5)
            // (fmt)
            // (true)
            // (true, 5)
            // (true, fmt, 5)
            // (true, fmt)
            function listWeekdaysImpl(localeSorted, format, index, field) {
              if (typeof localeSorted === 'boolean') {
                if (isNumber(format)) {
                  index = format;
                  format = undefined;
                }

                format = format || '';
              } else {
                format = localeSorted;
                index = format;
                localeSorted = false;

                if (isNumber(format)) {
                  index = format;
                  format = undefined;
                }

                format = format || '';
              }

              var locale = getLocale(),
                shift = localeSorted ? locale._week.dow : 0,
                i,
                out = [];

              if (index != null) {
                return get$1(format, (index + shift) % 7, field, 'day');
              }

              for (i = 0; i < 7; i++) {
                out[i] = get$1(format, (i + shift) % 7, field, 'day');
              }
              return out;
            }

            function listMonths(format, index) {
              return listMonthsImpl(format, index, 'months');
            }

            function listMonthsShort(format, index) {
              return listMonthsImpl(format, index, 'monthsShort');
            }

            function listWeekdays(localeSorted, format, index) {
              return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
            }

            function listWeekdaysShort(localeSorted, format, index) {
              return listWeekdaysImpl(
                localeSorted,
                format,
                index,
                'weekdaysShort'
              );
            }

            function listWeekdaysMin(localeSorted, format, index) {
              return listWeekdaysImpl(
                localeSorted,
                format,
                index,
                'weekdaysMin'
              );
            }

            getSetGlobalLocale('en', {
              eras: [
                {
                  since: '0001-01-01',
                  until: +Infinity,
                  offset: 1,
                  name: 'Anno Domini',
                  narrow: 'AD',
                  abbr: 'AD',
                },
                {
                  since: '0000-12-31',
                  until: -Infinity,
                  offset: 1,
                  name: 'Before Christ',
                  narrow: 'BC',
                  abbr: 'BC',
                },
              ],
              dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
              ordinal: function (number) {
                var b = number % 10,
                  output =
                    toInt((number % 100) / 10) === 1
                      ? 'th'
                      : b === 1
                      ? 'st'
                      : b === 2
                      ? 'nd'
                      : b === 3
                      ? 'rd'
                      : 'th';
                return number + output;
              },
            });

            // Side effect imports

            hooks.lang = deprecate(
              'moment.lang is deprecated. Use moment.locale instead.',
              getSetGlobalLocale
            );
            hooks.langData = deprecate(
              'moment.langData is deprecated. Use moment.localeData instead.',
              getLocale
            );

            var mathAbs = Math.abs;

            function abs() {
              var data = this._data;

              this._milliseconds = mathAbs(this._milliseconds);
              this._days = mathAbs(this._days);
              this._months = mathAbs(this._months);

              data.milliseconds = mathAbs(data.milliseconds);
              data.seconds = mathAbs(data.seconds);
              data.minutes = mathAbs(data.minutes);
              data.hours = mathAbs(data.hours);
              data.months = mathAbs(data.months);
              data.years = mathAbs(data.years);

              return this;
            }

            function addSubtract$1(duration, input, value, direction) {
              var other = createDuration(input, value);

              duration._milliseconds += direction * other._milliseconds;
              duration._days += direction * other._days;
              duration._months += direction * other._months;

              return duration._bubble();
            }

            // supports only 2.0-style add(1, 's') or add(duration)
            function add$1(input, value) {
              return addSubtract$1(this, input, value, 1);
            }

            // supports only 2.0-style subtract(1, 's') or subtract(duration)
            function subtract$1(input, value) {
              return addSubtract$1(this, input, value, -1);
            }

            function absCeil(number) {
              if (number < 0) {
                return Math.floor(number);
              } else {
                return Math.ceil(number);
              }
            }

            function bubble() {
              var milliseconds = this._milliseconds,
                days = this._days,
                months = this._months,
                data = this._data,
                seconds,
                minutes,
                hours,
                years,
                monthsFromDays;

              // if we have a mix of positive and negative values, bubble down first
              // check: https://github.com/moment/moment/issues/2166
              if (
                !(
                  (milliseconds >= 0 && days >= 0 && months >= 0) ||
                  (milliseconds <= 0 && days <= 0 && months <= 0)
                )
              ) {
                milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
                days = 0;
                months = 0;
              }

              // The following code bubbles up values, see the tests for
              // examples of what that means.
              data.milliseconds = milliseconds % 1000;

              seconds = absFloor(milliseconds / 1000);
              data.seconds = seconds % 60;

              minutes = absFloor(seconds / 60);
              data.minutes = minutes % 60;

              hours = absFloor(minutes / 60);
              data.hours = hours % 24;

              days += absFloor(hours / 24);

              // convert days to months
              monthsFromDays = absFloor(daysToMonths(days));
              months += monthsFromDays;
              days -= absCeil(monthsToDays(monthsFromDays));

              // 12 months -> 1 year
              years = absFloor(months / 12);
              months %= 12;

              data.days = days;
              data.months = months;
              data.years = years;

              return this;
            }

            function daysToMonths(days) {
              // 400 years have 146097 days (taking into account leap year rules)
              // 400 years have 12 months === 4800
              return (days * 4800) / 146097;
            }

            function monthsToDays(months) {
              // the reverse of daysToMonths
              return (months * 146097) / 4800;
            }

            function as(units) {
              if (!this.isValid()) {
                return NaN;
              }
              var days,
                months,
                milliseconds = this._milliseconds;

              units = normalizeUnits(units);

              if (
                units === 'month' ||
                units === 'quarter' ||
                units === 'year'
              ) {
                days = this._days + milliseconds / 864e5;
                months = this._months + daysToMonths(days);
                switch (units) {
                  case 'month':
                    return months;
                  case 'quarter':
                    return months / 3;
                  case 'year':
                    return months / 12;
                }
              } else {
                // handle milliseconds separately because of floating point math errors (issue #1867)
                days = this._days + Math.round(monthsToDays(this._months));
                switch (units) {
                  case 'week':
                    return days / 7 + milliseconds / 6048e5;
                  case 'day':
                    return days + milliseconds / 864e5;
                  case 'hour':
                    return days * 24 + milliseconds / 36e5;
                  case 'minute':
                    return days * 1440 + milliseconds / 6e4;
                  case 'second':
                    return days * 86400 + milliseconds / 1000;
                  // Math.floor prevents floating point math errors here
                  case 'millisecond':
                    return Math.floor(days * 864e5) + milliseconds;
                  default:
                    throw new Error('Unknown unit ' + units);
                }
              }
            }

            // TODO: Use this.as('ms')?
            function valueOf$1() {
              if (!this.isValid()) {
                return NaN;
              }
              return (
                this._milliseconds +
                this._days * 864e5 +
                (this._months % 12) * 2592e6 +
                toInt(this._months / 12) * 31536e6
              );
            }

            function makeAs(alias) {
              return function () {
                return this.as(alias);
              };
            }

            var asMilliseconds = makeAs('ms'),
              asSeconds = makeAs('s'),
              asMinutes = makeAs('m'),
              asHours = makeAs('h'),
              asDays = makeAs('d'),
              asWeeks = makeAs('w'),
              asMonths = makeAs('M'),
              asQuarters = makeAs('Q'),
              asYears = makeAs('y');

            function clone$1() {
              return createDuration(this);
            }

            function get$2(units) {
              units = normalizeUnits(units);
              return this.isValid() ? this[units + 's']() : NaN;
            }

            function makeGetter(name) {
              return function () {
                return this.isValid() ? this._data[name] : NaN;
              };
            }

            var milliseconds = makeGetter('milliseconds'),
              seconds = makeGetter('seconds'),
              minutes = makeGetter('minutes'),
              hours = makeGetter('hours'),
              days = makeGetter('days'),
              months = makeGetter('months'),
              years = makeGetter('years');

            function weeks() {
              return absFloor(this.days() / 7);
            }

            var round = Math.round,
              thresholds = {
                ss: 44, // a few seconds to seconds
                s: 45, // seconds to minute
                m: 45, // minutes to hour
                h: 22, // hours to day
                d: 26, // days to month/week
                w: null, // weeks to month
                M: 11, // months to year
              };

            // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
            function substituteTimeAgo(
              string,
              number,
              withoutSuffix,
              isFuture,
              locale
            ) {
              return locale.relativeTime(
                number || 1,
                !!withoutSuffix,
                string,
                isFuture
              );
            }

            function relativeTime$1(
              posNegDuration,
              withoutSuffix,
              thresholds,
              locale
            ) {
              var duration = createDuration(posNegDuration).abs(),
                seconds = round(duration.as('s')),
                minutes = round(duration.as('m')),
                hours = round(duration.as('h')),
                days = round(duration.as('d')),
                months = round(duration.as('M')),
                weeks = round(duration.as('w')),
                years = round(duration.as('y')),
                a =
                  (seconds <= thresholds.ss && ['s', seconds]) ||
                  (seconds < thresholds.s && ['ss', seconds]) ||
                  (minutes <= 1 && ['m']) ||
                  (minutes < thresholds.m && ['mm', minutes]) ||
                  (hours <= 1 && ['h']) ||
                  (hours < thresholds.h && ['hh', hours]) ||
                  (days <= 1 && ['d']) ||
                  (days < thresholds.d && ['dd', days]);

              if (thresholds.w != null) {
                a =
                  a ||
                  (weeks <= 1 && ['w']) ||
                  (weeks < thresholds.w && ['ww', weeks]);
              }
              a = a ||
                (months <= 1 && ['M']) ||
                (months < thresholds.M && ['MM', months]) ||
                (years <= 1 && ['y']) || ['yy', years];

              a[2] = withoutSuffix;
              a[3] = +posNegDuration > 0;
              a[4] = locale;
              return substituteTimeAgo.apply(null, a);
            }

            // This function allows you to set the rounding function for relative time strings
            function getSetRelativeTimeRounding(roundingFunction) {
              if (roundingFunction === undefined) {
                return round;
              }
              if (typeof roundingFunction === 'function') {
                round = roundingFunction;
                return true;
              }
              return false;
            }

            // This function allows you to set a threshold for relative time strings
            function getSetRelativeTimeThreshold(threshold, limit) {
              if (thresholds[threshold] === undefined) {
                return false;
              }
              if (limit === undefined) {
                return thresholds[threshold];
              }
              thresholds[threshold] = limit;
              if (threshold === 's') {
                thresholds.ss = limit - 1;
              }
              return true;
            }

            function humanize(argWithSuffix, argThresholds) {
              if (!this.isValid()) {
                return this.localeData().invalidDate();
              }

              var withSuffix = false,
                th = thresholds,
                locale,
                output;

              if (typeof argWithSuffix === 'object') {
                argThresholds = argWithSuffix;
                argWithSuffix = false;
              }
              if (typeof argWithSuffix === 'boolean') {
                withSuffix = argWithSuffix;
              }
              if (typeof argThresholds === 'object') {
                th = Object.assign({}, thresholds, argThresholds);
                if (argThresholds.s != null && argThresholds.ss == null) {
                  th.ss = argThresholds.s - 1;
                }
              }

              locale = this.localeData();
              output = relativeTime$1(this, !withSuffix, th, locale);

              if (withSuffix) {
                output = locale.pastFuture(+this, output);
              }

              return locale.postformat(output);
            }

            var abs$1 = Math.abs;

            function sign(x) {
              return (x > 0) - (x < 0) || +x;
            }

            function toISOString$1() {
              // for ISO strings we do not use the normal bubbling rules:
              //  * milliseconds bubble up until they become hours
              //  * days do not bubble at all
              //  * months bubble up until they become years
              // This is because there is no context-free conversion between hours and days
              // (think of clock changes)
              // and also not between days and months (28-31 days per month)
              if (!this.isValid()) {
                return this.localeData().invalidDate();
              }

              var seconds = abs$1(this._milliseconds) / 1000,
                days = abs$1(this._days),
                months = abs$1(this._months),
                minutes,
                hours,
                years,
                s,
                total = this.asSeconds(),
                totalSign,
                ymSign,
                daysSign,
                hmsSign;

              if (!total) {
                // this is the same as C#'s (Noda) and python (isodate)...
                // but not other JS (goog.date)
                return 'P0D';
              }

              // 3600 seconds -> 60 minutes -> 1 hour
              minutes = absFloor(seconds / 60);
              hours = absFloor(minutes / 60);
              seconds %= 60;
              minutes %= 60;

              // 12 months -> 1 year
              years = absFloor(months / 12);
              months %= 12;

              // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
              s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';

              totalSign = total < 0 ? '-' : '';
              ymSign = sign(this._months) !== sign(total) ? '-' : '';
              daysSign = sign(this._days) !== sign(total) ? '-' : '';
              hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

              return (
                totalSign +
                'P' +
                (years ? ymSign + years + 'Y' : '') +
                (months ? ymSign + months + 'M' : '') +
                (days ? daysSign + days + 'D' : '') +
                (hours || minutes || seconds ? 'T' : '') +
                (hours ? hmsSign + hours + 'H' : '') +
                (minutes ? hmsSign + minutes + 'M' : '') +
                (seconds ? hmsSign + s + 'S' : '')
              );
            }

            var proto$2 = Duration.prototype;

            proto$2.isValid = isValid$1;
            proto$2.abs = abs;
            proto$2.add = add$1;
            proto$2.subtract = subtract$1;
            proto$2.as = as;
            proto$2.asMilliseconds = asMilliseconds;
            proto$2.asSeconds = asSeconds;
            proto$2.asMinutes = asMinutes;
            proto$2.asHours = asHours;
            proto$2.asDays = asDays;
            proto$2.asWeeks = asWeeks;
            proto$2.asMonths = asMonths;
            proto$2.asQuarters = asQuarters;
            proto$2.asYears = asYears;
            proto$2.valueOf = valueOf$1;
            proto$2._bubble = bubble;
            proto$2.clone = clone$1;
            proto$2.get = get$2;
            proto$2.milliseconds = milliseconds;
            proto$2.seconds = seconds;
            proto$2.minutes = minutes;
            proto$2.hours = hours;
            proto$2.days = days;
            proto$2.weeks = weeks;
            proto$2.months = months;
            proto$2.years = years;
            proto$2.humanize = humanize;
            proto$2.toISOString = toISOString$1;
            proto$2.toString = toISOString$1;
            proto$2.toJSON = toISOString$1;
            proto$2.locale = locale;
            proto$2.localeData = localeData;

            proto$2.toIsoString = deprecate(
              'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
              toISOString$1
            );
            proto$2.lang = lang;

            // FORMATTING

            addFormatToken('X', 0, 0, 'unix');
            addFormatToken('x', 0, 0, 'valueOf');

            // PARSING

            addRegexToken('x', matchSigned);
            addRegexToken('X', matchTimestamp);
            addParseToken('X', function (input, array, config) {
              config._d = new Date(parseFloat(input) * 1000);
            });
            addParseToken('x', function (input, array, config) {
              config._d = new Date(toInt(input));
            });

            //! moment.js

            hooks.version = '2.27.0';

            setHookCallback(createLocal);

            hooks.fn = proto;
            hooks.min = min;
            hooks.max = max;
            hooks.now = now;
            hooks.utc = createUTC;
            hooks.unix = createUnix;
            hooks.months = listMonths;
            hooks.isDate = isDate;
            hooks.locale = getSetGlobalLocale;
            hooks.invalid = createInvalid;
            hooks.duration = createDuration;
            hooks.isMoment = isMoment;
            hooks.weekdays = listWeekdays;
            hooks.parseZone = createInZone;
            hooks.localeData = getLocale;
            hooks.isDuration = isDuration;
            hooks.monthsShort = listMonthsShort;
            hooks.weekdaysMin = listWeekdaysMin;
            hooks.defineLocale = defineLocale;
            hooks.updateLocale = updateLocale;
            hooks.locales = listLocales;
            hooks.weekdaysShort = listWeekdaysShort;
            hooks.normalizeUnits = normalizeUnits;
            hooks.relativeTimeRounding = getSetRelativeTimeRounding;
            hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
            hooks.calendarFormat = getCalendarFormat;
            hooks.prototype = proto;

            // currently HTML5 input type only supports 24-hour formats
            hooks.HTML5_FMT = {
              DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
              DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
              DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
              DATE: 'YYYY-MM-DD', // <input type="date" />
              TIME: 'HH:mm', // <input type="time" />
              TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
              TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
              WEEK: 'GGGG-[W]WW', // <input type="week" />
              MONTH: 'YYYY-MM', // <input type="month" />
            };

            return hooks;
          });

          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./../webpack/buildin/module.js */ '../node_modules/webpack/buildin/module.js'
          )(module)
        ));

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

    /***/ '../node_modules/webpack/buildin/module.js':
      /*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/module.js ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = function (module) {
          if (!module.webpackPolyfill) {
            module.deprecate = function () {};
            module.paths = [];
            // module.parent = undefined by default
            if (!module.children) module.children = [];
            Object.defineProperty(module, 'loaded', {
              enumerable: true,
              get: function () {
                return module.l;
              },
            });
            Object.defineProperty(module, 'id', {
              enumerable: true,
              get: function () {
                return module.i;
              },
            });
            module.webpackPolyfill = 1;
          }
          return module;
        };

        /***/
      },

    /***/ './js/main-authorized.js':
      /*!*******************************!*\
  !*** ./js/main-authorized.js ***!
  \*******************************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _modules_uploader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./modules/uploader.js */ './js/modules/uploader.js'
        );
        /* harmony import */ var _modules_editor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./modules/editor.js */ './js/modules/editor.js'
        );
        /* harmony import */ var _modules_boost_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./modules/boost.js */ './js/modules/boost.js'
        );
        /* harmony import */ var _modules_search_profiles_form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./modules/search-profiles-form.js */ './js/modules/search-profiles-form.js'
        );
        /* harmony import */ var _modules_buyPremiumForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./modules/buyPremiumForm.js */ './js/modules/buyPremiumForm.js'
        );
        /* harmony import */ var _modules_chatList_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./modules/chatList.js */ './js/modules/chatList.js'
        );
        /* harmony import */ var _modules_pagination_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./modules/pagination.js */ './js/modules/pagination.js'
        );
        /* harmony import */ var _modules_ad_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./modules/ad.js */ './js/modules/ad.js'
        );
        /* harmony import */ var _modules_gallery_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./modules/gallery.js */ './js/modules/gallery.js'
        );
        /* harmony import */ var _modules_chat_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./modules/chat.js */ './js/modules/chat.js'
        );
        /* harmony import */ var _modules_enlargePhoto_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./modules/enlargePhoto.js */ './js/modules/enlargePhoto.js'
        );

        window['PhotoUploader'] =
          _modules_uploader_js__WEBPACK_IMPORTED_MODULE_0__['default'];
        window['PhotoEditor'] =
          _modules_editor_js__WEBPACK_IMPORTED_MODULE_1__['default'];
        window['Boost'] =
          _modules_boost_js__WEBPACK_IMPORTED_MODULE_2__['default'];
        window['SearchProfilesForm'] =
          _modules_search_profiles_form_js__WEBPACK_IMPORTED_MODULE_3__[
            'default'
          ];
        window['BuyPremiumForm'] =
          _modules_buyPremiumForm_js__WEBPACK_IMPORTED_MODULE_4__['default'];
        window['ChatList'] =
          _modules_chatList_js__WEBPACK_IMPORTED_MODULE_5__['default'];
        window['Pagination'] =
          _modules_pagination_js__WEBPACK_IMPORTED_MODULE_6__['default'];
        window['Ad'] = _modules_ad_js__WEBPACK_IMPORTED_MODULE_7__['default'];
        window['Gallery'] =
          _modules_gallery_js__WEBPACK_IMPORTED_MODULE_8__['default'];
        window['Chat'] =
          _modules_chat_js__WEBPACK_IMPORTED_MODULE_9__['default'];
        window['EnlargePhoto'] =
          _modules_enlargePhoto_js__WEBPACK_IMPORTED_MODULE_10__['default'];

        /***/
      },

    /***/ './js/modules/ad.js':
      /*!**************************!*\
  !*** ./js/modules/ad.js ***!
  \**************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return Ad;
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
        /* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./helper.js */ './js/modules/helper.js'
        );

        var Ad = /*#__PURE__*/ (function () {
          function Ad(options) {
            var _this = this;

            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(
              this,
              Ad
            );

            // Setup internal name for ad wrapper
            this.adWrapperClass = 'pagination-wrapper';
            this.selectors = options['selectors'];
            this.placementConfig = options['placementConfig'];
            this.elementInsertAfter = options['elementInsertAfter'];
            this.$adContainer = $(this['selectors']['container']).fadeOut(0);
            this.$profilesContainer = $(this.selectors['profilesContainer']);
            var $document = $(document);
            $document.on('pagination:beforeInit', function (event, data) {
              if (data) {
                // If pagination is initiated after request
                // Get ad with the passed advertisement type
                _this._getAd(data['advertisementType']);

                _this._makeAdWrapper();
              }

              _this._insertAd();
            });
            $document.on('pagination:beforeDestroyAfterResize', function () {
              _this._removeAds();
            });
          }

          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(
            Ad,
            [
              {
                key: '_getAd',
                value: function _getAd(type) {
                  this.$ad = this.$adContainer
                    .find("[data-type='".concat(type, "']"))
                    .clone();
                },
              },
              {
                key: '_makeAdWrapper',
                value: function _makeAdWrapper() {
                  this.$adWrapper = $('<div></div>')
                    .addClass('col-12 mt-4 mb-5')
                    .addClass(this.adWrapperClass);
                },
              },
              {
                key: '_insertAd',
                value: function _insertAd() {
                  var viewportRange = _helper_js__WEBPACK_IMPORTED_MODULE_2__[
                      'default'
                    ].getViewportRange(),
                    place = this.placementConfig[viewportRange],
                    element = this.elementInsertAfter['element'],
                    htmlClass = this.elementInsertAfter['class'];
                  var formula = String(2 * place) + 'n' + '+' + String(place);
                  this.$profilesContainer
                    .find(
                      ''
                        .concat(element, '.')
                        .concat(htmlClass, ':nth-of-type(')
                        .concat(formula, ')')
                    )
                    .after(this.$adWrapper.clone().append(this.$ad.clone()));
                  this.$profilesContainer.trigger('ad:afterInsert');
                },
              },
              {
                key: '_removeAds',
                value: function _removeAds() {
                  var ads = this.$profilesContainer
                    .find(this.selectors['genericClass'])
                    .closest('.' + this.adWrapperClass)
                    .remove();
                }, // Getters and setters
                // Ads container
              },
              {
                key: '$adContainer',
                set: function set($element) {
                  if (this._adContainer) return;
                  this._adContainer = $element;
                },
                get: function get() {
                  return this._adContainer;
                }, // Profiles container
              },
              {
                key: '$profilesContainer',
                set: function set($element) {
                  if (this._profilesContainer) return;
                  this._profilesContainer = $element;
                },
                get: function get() {
                  return this._profilesContainer;
                },
              },
            ]
          );

          return Ad;
        })();

        /***/
      },

    /***/ './js/modules/bonus.js':
      /*!*****************************!*\
  !*** ./js/modules/bonus.js ***!
  \*****************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return Bonus;
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

        var Bonus = /*#__PURE__*/ (function (_ServerRequest) {
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(
            Bonus,
            _ServerRequest
          );

          var _super = _createSuper(Bonus);

          function Bonus(options) {
            var _this;

            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(
              this,
              Bonus
            );

            _this = _super.call(this, options); // Bind context

            _this.cacheElements = _this.cacheElements.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            );
            _this.setUpEventListeners = _this.setUpEventListeners.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            );
            _this.useBonus = _this.useBonus.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            );
            _this.startUsingBonus = _this.startUsingBonus.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            );
            _this.prepareBonusUsage = _this.prepareBonusUsage.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            ); // Save popup data

            _this.popupData = options.popupData; // Reference request information for the popup usage

            _this.popupData.request = _this.requests.use;
            return _this;
          }

          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(
            Bonus,
            [
              {
                key: 'cacheElements',
                value: function cacheElements() {
                  // Save bonus element
                  this.$bonus = $(this.selectors.bonus); // Save the bonus' data-* attributes

                  var dataAttributes = this.$bonus.data();

                  for (var attribute in dataAttributes) {
                    this[attribute] = dataAttributes[attribute];
                  }
                },
              },
              {
                key: 'setUpEventListeners',
                value: function setUpEventListeners() {
                  var _this2 = this;

                  this.$bonus.click(function () {
                    return _this2.startUsingBonus();
                  });
                },
                /**
                 * Asyncronous event handler for bonus usage
                 */
              },
              {
                key: 'startUsingBonus',
                value: (function () {
                  var _startUsingBonus = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
                    /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                      function _callee() {
                        var approved;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  if (!(this.activated && !this.finished)) {
                                    _context.next = 4;
                                    break;
                                  }

                                  return _context.abrupt('return');

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

                                    this.$bonus.attr(
                                      'data-amount',
                                      this.amount
                                    ); // Start bonus usage

                                    this.useBonus();
                                  }

                                case 12:
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

                  function startUsingBonus() {
                    return _startUsingBonus.apply(this, arguments);
                  }

                  return startUsingBonus;
                })(),
              },
            ]
          );

          return Bonus;
        })(_requests_js__WEBPACK_IMPORTED_MODULE_8__['default']);

        /***/
      },

    /***/ './js/modules/boost.js':
      /*!*****************************!*\
  !*** ./js/modules/boost.js ***!
  \*****************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return Boost;
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
        /* harmony import */ var _bonus_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./bonus.js */ './js/modules/bonus.js'
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

        var Boost = /*#__PURE__*/ (function (_Bonus) {
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(
            Boost,
            _Bonus
          );

          var _super = _createSuper(Boost);

          function Boost(options) {
            var _this;

            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(
              this,
              Boost
            );

            _this = _super.call(this, options);
            _this.type = 'boost'; // Bind context

            _this.displayTime = _this.displayTime.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            ); // Save initial state of the boost

            _this.activated = false;
            _this.finished = false;

            _this.cacheElements();

            _this.setUpEventListeners();

            return _this;
          }

          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(
            Boost,
            [
              {
                key: 'cacheElements',
                value: function cacheElements() {
                  _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(
                    _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(
                      Boost.prototype
                    ),
                    'cacheElements',
                    this
                  ).call(this); // Timer and elements to display time

                  this.$timer = $(this.selectors.timer.element);
                  this.$hours = this.$timer.find(this.selectors.timer.hours);
                  this.$minutes = this.$timer.find(
                    this.selectors.timer.minutes
                  );
                  this.$seconds = this.$timer.find(
                    this.selectors.timer.seconds
                  ); // Hide timer after caching

                  this.$timer.fadeOut(0); //Create expiration popup based on the generic popup

                  this.expirationPopupData = Object.assign({}, this.popupData);
                },
              },
              {
                key: 'setUpEventListeners',
                value: function setUpEventListeners() {
                  _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(
                    _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(
                      Boost.prototype
                    ),
                    'setUpEventListeners',
                    this
                  ).call(this);
                },
              },
              {
                key: 'useBonus',
                value: function useBonus() {
                  // Change boost state
                  this.activated = true;
                  this.finished = false; // Start timer

                  this.startTimer();
                },
              },
              {
                key: 'prepareBonusUsage',
                value: (function () {
                  var _prepareBonusUsage = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
                    /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                      function _callee() {
                        var approved,
                          timestamp,
                          expirationTitle,
                          expirationMessage,
                          _yield$this$askUsageA,
                          _yield$this$askUsageA2;

                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  if (!(!this.activated && !this.finished)) {
                                    _context.next = 10;
                                    break;
                                  }

                                  _context.next = 3;
                                  return this.askUsageApprovement(
                                    this.popupData
                                  );

                                case 3:
                                  _yield$this$askUsageA = _context.sent;
                                  approved = _yield$this$askUsageA.approved;
                                  timestamp = _yield$this$askUsageA.timestamp;
                                  expirationTitle =
                                    _yield$this$askUsageA.expirationTitle;
                                  expirationMessage =
                                    _yield$this$askUsageA.expirationMessage;
                                  _context.next = 19;
                                  break;

                                case 10:
                                  if (!(this.activated && this.finished)) {
                                    _context.next = 19;
                                    break;
                                  }

                                  _context.next = 13;
                                  return this.askUsageApprovement(
                                    this.expirationPopupData
                                  );

                                case 13:
                                  _yield$this$askUsageA2 = _context.sent;
                                  approved = _yield$this$askUsageA2.approved;
                                  timestamp = _yield$this$askUsageA2.timestamp;
                                  expirationTitle =
                                    _yield$this$askUsageA2.expirationTitle;
                                  expirationMessage =
                                    _yield$this$askUsageA2.expirationMessage;

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

                                  return _context.abrupt('return', approved);

                                case 21:
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

                  function prepareBonusUsage() {
                    return _prepareBonusUsage.apply(this, arguments);
                  }

                  return prepareBonusUsage;
                })(),
              },
              {
                key: 'startTimer',
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

                    var hours = Math.floor(
                      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                    );
                    var minutes = Math.floor(
                      (distance % (1000 * 60 * 60)) / (1000 * 60)
                    );
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                    _this2.displayTime(hours, minutes, seconds);

                    _this2.$timer.fadeIn(400);
                  }, 1000);
                },
              },
              {
                key: 'displayTime',
                value: function displayTime(hours, minutes, seconds) {
                  // Add zeros for better displaying
                  if (minutes < 10) {
                    minutes = '0' + String(minutes);
                  }

                  if (seconds < 10) {
                    seconds = '0' + String(seconds);
                  } // Display results

                  this.$hours.text(hours);
                  this.$minutes.text(minutes);
                  this.$seconds.text(seconds);
                },
              },
            ]
          );

          return Boost;
        })(_bonus_js__WEBPACK_IMPORTED_MODULE_9__['default']);

        /***/
      },

    /***/ './js/modules/buyPremiumForm.js':
      /*!**************************************!*\
  !*** ./js/modules/buyPremiumForm.js ***!
  \**************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return BuyPremiumForm;
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
        /* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./form.js */ './js/modules/form.js'
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

        var BuyPremiumForm = /*#__PURE__*/ (function (_Form) {
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(
            BuyPremiumForm,
            _Form
          );

          var _super = _createSuper(BuyPremiumForm);

          function BuyPremiumForm(options) {
            var _this;

            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(
              this,
              BuyPremiumForm
            );

            _this = _super.call(this, options); // Binding context

            _this.setPrice = _this.setPrice.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            );

            _this.$checkout.fadeOut(0);

            return _this;
          }

          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(
            BuyPremiumForm,
            [
              {
                key: 'cacheElements',
                value: function cacheElements() {
                  _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(
                    _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(
                      BuyPremiumForm.prototype
                    ),
                    'cacheElements',
                    this
                  ).call(this); // Price containers

                  this.$priceContainer = $(this.selectors.price);
                  this.$discountContainer = $(
                    this.selectors['card-payment-price']
                  ); // Checkout area

                  this.$checkout = this.$form.find(this.selectors.checkout);
                },
              },
              {
                key: 'setUpEventListeners',
                value: function setUpEventListeners() {
                  var _this2 = this;

                  _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(
                    _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(
                      BuyPremiumForm.prototype
                    ),
                    'setUpEventListeners',
                    this
                  ).call(this); // Additiong and removing bonuses

                  this.$form
                    .find(this.selectors['bonus-inputs'])
                    .on('click', function (event) {
                      var $target = $(event.target);
                      var $buttonWrapper = $target.closest(
                        _this2.selectors['bonus-control']
                      );
                      if ($buttonWrapper.length === 0) return; // Figure out what operation to perform

                      var operation = $buttonWrapper.hasClass(
                        _this2.selectors['add-bonus-input-className']
                      )
                        ? 'add'
                        : 'remove'; // Find closest input group containing current button

                      var $input = $target
                        .closest(_this2.selectors['bonus-inputs'])
                        .find(_this2.selectors.inputs); // Current input value

                      var value = parseInt($input.val());

                      if (operation === 'add') {
                        $input.val(++value);
                      } else {
                        $input.val(--value < 0 ? 0 : value);
                      }

                      $input.trigger('input');
                    }); // Setting price

                  this.$inputs.on('input', function (event) {
                    _this2.collectFormInputs();

                    _this2.setPrice();
                  });
                },
              },
              {
                key: 'setPrice',
                value: (function () {
                  var _setPrice = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
                    /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                      function _callee() {
                        var response, total;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  _context.prev = 0;
                                  _context.next = 3;
                                  return this.getPrice({
                                    headers: this.requests.price.headers,
                                    endpoint: this.requests.price.endpoint,
                                    method: this.requests.price.method,
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
                                  if (response.success) {
                                    total = response['total']; // Show price

                                    this.$priceContainer.text(total);
                                    this.$discountContainer.text(
                                      response['discount']
                                    );
                                    total > 0
                                      ? this.$checkout.fadeIn(400)
                                      : this.$checkout.fadeOut(400);
                                  } else {
                                    if (this.showFailPopup) {
                                      // Unsuccessful Popup
                                      this.showRequestResult({
                                        title: response.title,
                                        text: response.message,
                                        icon: 'error',
                                      });
                                    }
                                  }

                                case 10:
                                case 'end':
                                  return _context.stop();
                              }
                            }
                          },
                          _callee,
                          this,
                          [[0, 6]]
                        );
                      }
                    )
                  );

                  function setPrice() {
                    return _setPrice.apply(this, arguments);
                  }

                  return setPrice;
                })(),
              },
            ]
          );

          return BuyPremiumForm;
        })(_form_js__WEBPACK_IMPORTED_MODULE_9__['default']);

        /***/
      },

    /***/ './js/modules/chat.js':
      /*!****************************!*\
  !*** ./js/modules/chat.js ***!
  \****************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return Chat;
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
        /* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @babel/runtime/helpers/inherits */ '../node_modules/@babel/runtime/helpers/inherits.js'
        );
        /* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @babel/runtime/helpers/possibleConstructorReturn */ '../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'
        );
        /* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @babel/runtime/helpers/getPrototypeOf */ '../node_modules/@babel/runtime/helpers/getPrototypeOf.js'
        );
        /* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var _requests_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./requests.js */ './js/modules/requests.js'
        );

        function _createSuper(Derived) {
          var hasNativeReflectConstruct = _isNativeReflectConstruct();
          return function _createSuperInternal() {
            var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(
                Derived
              ),
              result;
            if (hasNativeReflectConstruct) {
              var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(
                this
              ).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }
            return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(
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

        var Chat = /*#__PURE__*/ (function (_ServerRequest) {
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(
            Chat,
            _ServerRequest
          );

          var _super = _createSuper(Chat);

          function Chat(options) {
            var _this;

            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(
              this,
              Chat
            );

            _this = _super.call(this, options);
            _this.debug = options.debug || false;
            if (!_this.debug) _this.selectors = options.selectors; // Save class names

            _this.classNames = options.classNames;

            _this._cacheElements();

            _this._setUpEventListeners();

            return _this;
          }

          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(
            Chat,
            [
              {
                key: '_cacheElements',
                value: function _cacheElements() {
                  var selectors = this.selectors;
                  this.$chat = $(selectors.chat);
                  this.$sendButton = this.$chat
                    .find(selectors.sendButton)
                    .fadeOut(0);
                  console.log(this.$sendButton);
                },
              },
              {
                key: '_setUpEventListeners',
                value: function _setUpEventListeners() {
                  var _this2 = this;

                  var $document = $(document);
                  var classNames = this.classNames;
                  this.$chat.on('input', function (event) {
                    var $target = $(event.target);
                    if (!$target.hasClass(classNames.message)) return;
                    $target.val()
                      ? _this2.$sendButton.fadeIn()
                      : _this2.$sendButton.fadeOut(300);
                  });
                  $document.click(function (event) {});
                },
              },
            ]
          );

          return Chat;
        })(_requests_js__WEBPACK_IMPORTED_MODULE_5__['default']);

        /***/
      },

    /***/ './js/modules/chatList.js':
      /*!********************************!*\
  !*** ./js/modules/chatList.js ***!
  \********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return ChatList;
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
        /* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @babel/runtime/helpers/assertThisInitialized */ '../node_modules/@babel/runtime/helpers/assertThisInitialized.js'
        );
        /* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @babel/runtime/helpers/createClass */ '../node_modules/@babel/runtime/helpers/createClass.js'
        );
        /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__
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
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! moment */ '../node_modules/moment/moment.js'
        );
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
          moment__WEBPACK_IMPORTED_MODULE_9__
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

        // Adding localization

        moment__WEBPACK_IMPORTED_MODULE_9___default.a.locale('pl');

        var ChatList = /*#__PURE__*/ (function (_ServerRequest) {
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(
            ChatList,
            _ServerRequest
          );

          var _super = _createSuper(ChatList);

          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(
            ChatList,
            [
              {
                key: 'observerOptions',
                get: function get() {
                  return this._observerOptions;
                },
                set: function set(options) {
                  if (!this._observerOptions) {
                    this._observerOptions = options;
                  } else {
                    return;
                  }
                },
              },
            ]
          );

          function ChatList(options) {
            var _this;

            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(
              this,
              ChatList
            );

            _this = _super.call(this, options); // Binding context

            _this.cacheMessages = _this.cacheMessages.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(
                _this
              )
            );
            _this.observeLastMessage = _this.observeLastMessage.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(
                _this
              )
            );
            _this.getMessages = _this.getMessages.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(
                _this
              )
            );
            _this.showNewMessages = _this.showNewMessages.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(
                _this
              )
            );
            _this.displayMessages = _this.displayMessages.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(
                _this
              )
            );
            _this.formatTime = _this.formatTime.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(
                _this
              )
            ); // Set amount of messages for the request

            _this.requests.messages.endpoint.searchParams.set(
              'amount',
              String(options.messagesAmount)
            ); // Initialization call to the functions

            _this.cacheElements();

            _this.setUpEventListeners();

            _this.observeLastMessage();

            return _this;
          }

          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(
            ChatList,
            [
              {
                key: 'cacheElements',
                value: function cacheElements() {
                  this.$chatList = $(this.selectors.chatList);
                  this.cacheMessages(); // Set observer options

                  this.observerOptions = {
                    root: this.$chatList[0],
                    rootMargin: '0px',
                    threshold: 0,
                  };
                },
              },
              {
                key: 'setUpEventListeners',
                value: function setUpEventListeners() {
                  var chatList = document.getElementById('chat-list');
                  chatList.addEventListener(
                    'scroll',
                    function (event) {
                      var target = event.target;
                    },
                    {
                      passive: true,
                    }
                  );
                },
              },
              {
                key: 'cacheMessages',
                value: function cacheMessages() {
                  this.$messages = this.$chatList.find(this.selectors.message);
                  this.lastMessage = this.$messages.last()[0];
                },
              },
              {
                key: 'formatTime',
                value: function formatTime(timestamp) {
                  var now = moment__WEBPACK_IMPORTED_MODULE_9___default()().format(
                    'x'
                  );
                  var duration = Math.round(
                    moment__WEBPACK_IMPORTED_MODULE_9___default.a
                      .duration(now - timestamp)
                      .asHours()
                  );
                  return duration < 24
                    ? moment__WEBPACK_IMPORTED_MODULE_9___default()(
                        timestamp
                      ).format('HH:mm')
                    : moment__WEBPACK_IMPORTED_MODULE_9___default()(
                        timestamp
                      ).format('DD MMM');
                },
              },
              {
                key: 'observeLastMessage',
                value: function observeLastMessage() {
                  var _this2 = this;

                  this.observer =
                    this.observer ||
                    new IntersectionObserver(function (entries) {
                      // Save the last message
                      var element = entries[0];
                      if (!element.isIntersecting) return;
                      setTimeout(_this2.showNewMessages, 0);
                    });
                  this.observer.observe(this.lastMessage);
                },
              },
              {
                key: 'showNewMessages',
                value: (function () {
                  var _showNewMessages = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
                    /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                      function _callee() {
                        var messages, messageHeight;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  _context.next = 2;
                                  return this.getMessages();

                                case 2:
                                  messages = _context.sent;
                                  // Sort messages based on timestamp
                                  messages.sort(function (
                                    firstMessage,
                                    secondMessage
                                  ) {
                                    return firstMessage.timestamp <
                                      secondMessage.timestamp
                                      ? 1
                                      : firstMessage.timestamp >
                                        secondMessage.timestamp
                                      ? -1
                                      : 0;
                                  }); // Show newly retrieved messages

                                  this.displayMessages(messages); // Stop observing the last message

                                  this.observer.unobserve(this.lastMessage); // Recache messages

                                  this.cacheMessages(); // Watch for visibility of the last message

                                  this.observeLastMessage();
                                  messageHeight = this.$messages
                                    .first()
                                    .outerHeight();
                                  this.$chatList.animate({
                                    scrollTop: '+=' + messageHeight,
                                  });

                                case 10:
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

                  function showNewMessages() {
                    return _showNewMessages.apply(this, arguments);
                  }

                  return showNewMessages;
                })(),
              },
              {
                key: 'getMessages',
                value: (function () {
                  var _getMessages = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
                    /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                      function _callee2() {
                        var request;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                          function _callee2$(_context2) {
                            while (1) {
                              switch ((_context2.prev = _context2.next)) {
                                case 0:
                                  request = this.requests.messages;
                                  _context2.next = 3;
                                  return this.makeRequest({
                                    headers: request.headers,
                                    endpoint: request.endpoint,
                                    method: request.method,
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

                  function getMessages() {
                    return _getMessages.apply(this, arguments);
                  }

                  return getMessages;
                })(),
              },
              {
                key: 'displayMessages',
                value: function displayMessages(messages) {
                  var _this3 = this;

                  messages.forEach(function (message) {
                    var date = _this3.formatTime(parseInt(message.timestamp));

                    var $messageContainer = $('<div></div>').addClass(
                      'message border-bottom mx-1 mx-sm-4 d-flex align-items-center py-3'
                    );
                    var $name = $('<h3></h3>')
                      .addClass('name')
                      .append($('<span></span>').text(message['userName']));

                    if (message['unread']) {
                      // Username with badge
                      $name.append(
                        $('<span></span>')
                          .addClass('badge badge-info ml-2')
                          .text(message['amount'])
                      );
                      $messageContainer.addClass('unread');
                    } // Building the entire message

                    $messageContainer
                      .append(
                        $('<figure></figure>')
                          .addClass('avatar')
                          .append(
                            $('<img>')
                              .attr('src', message['avatar'])
                              .attr('alt', '')
                          )
                      )
                      .append(
                        $('<div></div>')
                          .addClass('pl-1 pl-sm-3 w-100')
                          .append(
                            $('<div></div>')
                              .addClass('d-flex justify-content-between')
                              .append($name)
                              .append(
                                $('<time></time>')
                                  .addClass('date small text-secondary')
                                  .text(date)
                              )
                          )
                          .append(
                            $('<p></p>')
                              .addClass('text text-secondary')
                              .text(message['text'])
                          )
                      )
                      .appendTo(_this3.$chatList);
                  });
                },
              },
            ]
          );

          return ChatList;
        })(_requests_js__WEBPACK_IMPORTED_MODULE_8__['default']);

        /***/
      },

    /***/ './js/modules/editor.js':
      /*!******************************!*\
  !*** ./js/modules/editor.js ***!
  \******************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return PhotoEditor;
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

        var PhotoEditor = /*#__PURE__*/ (function (_EditorModal) {
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(
            PhotoEditor,
            _EditorModal
          );

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

            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(
              this,
              PhotoEditor
            );

            _this = _super.call(this, options);

            _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              ),
              'photo',
              null
            );

            _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              ),
              'photoData',
              {}
            );

            _this.configuration.editor = true; // Binding context

            _this.prepareModal = _this.prepareModal.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            );
            _this.updateMarkup = _this.updateMarkup.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            );
            _this.updatePhotoInformation = _this.updatePhotoInformation.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            ); // Prepare editor

            _this.cacheElements();

            _this.setUpEventListeners();

            return _this;
          }
          /**
           * Function caches elements according to passed options.
           */

          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(
            PhotoEditor,
            [
              {
                key: 'cacheElements',
                value: function cacheElements() {
                  // Cache elements required for gallery to work
                  _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(
                    _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(
                      PhotoEditor.prototype
                    ),
                    'cacheElements',
                    this
                  ).call(this); // Description

                  this.$description = this.$modal.find(
                    this.selectors.description
                  ); // Privacy input

                  this.$privacyInput = this.$modal.find(
                    this.selectors['privacy-input']
                  ); // Privacy label

                  this.$privacyLabel = this.$modal.find(
                    this.selectors['privacy-label']
                  ); // Photo in editor

                  this.$modalPhotoElement = this.$modal.find('img'); // Photos gallery

                  this.$gallery = $(this.selectors.gallery);
                },
              },
              {
                key: 'setUpEventListeners',
                value: function setUpEventListeners() {
                  var _this2 = this;

                  _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(
                    _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(
                      PhotoEditor.prototype
                    ),
                    'setUpEventListeners',
                    this
                  ).call(this);

                  this.$gallery.click(function (event) {
                    var target = event.target;
                    if (target.tagName !== 'IMG') return; // Save photo

                    _this2.photo = target; // Cache id

                    var photoId = _this2.photo.dataset.id; // Make empty object for photo information

                    _this2.photoData[photoId] = {}; // Save photo information

                    _this2.savePhotoInformation({
                      id: photoId,
                      src: _this2.photo.src,
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
                },
              },
              {
                key: 'updatePhotoInformation',
                value: (function () {
                  var _updatePhotoInformation = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
                    /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                      function _callee() {
                        var id, response;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  // Cache id
                                  id = this.photo.dataset.id; // Save information

                                  this.savePhotoInformation({
                                    id: id,
                                    privacy: this.$privacyInput.is(':checked'),
                                    description: this.$description.val(),
                                  });
                                  _context.prev = 2;
                                  _context.next = 5;
                                  return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(
                                    _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(
                                      PhotoEditor.prototype
                                    ),
                                    'sendPhotoInformationToServer',
                                    this
                                  ).call(this, {
                                    id: id,
                                    privacy: this.photoData[id].privacy,
                                    description: this.photoData[id].description,
                                    headers: this.requests.savePhoto.headers,
                                    endpoint: this.requests.savePhoto.endpoint,
                                    method: this.requests.savePhoto.method,
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
                                    this.updateMarkup(); // Successful Popup

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

                  function updatePhotoInformation() {
                    return _updatePhotoInformation.apply(this, arguments);
                  }

                  return updatePhotoInformation;
                })(),
                /**
                 * Function updating photo in the gallery
                 */
              },
              {
                key: 'updateMarkup',
                value: function updateMarkup() {
                  var values = this.photoData[this.photo.dataset.id];

                  for (var property in values) {
                    if (property in this.photo.dataset) {
                      this.photo.dataset[property] = values[property];
                    }
                  }
                },
                /**
                 * Function generates content of the modal window
                 * depending on the attributes of the clicked photo
                 * @param {Number} id - database id of the photo
                 */
              },
              {
                key: 'prepareModal',
                value: function prepareModal(id) {
                  // Set photo
                  this.$modalPhotoElement.attr('src', this.photoData[id].src); // Generate photo id

                  var photoId = 'photo-' + id; // Set privacy

                  this.$privacyInput
                    .prop('checked', this.photoData[id].privacy)
                    .attr('id', photoId); // Set toggle

                  this.$privacyLabel.attr('for', photoId); // Set description

                  this.$description.text(this.photoData[id].description);
                },
              },
              {
                key: 'clean',
                value: function clean() {
                  this.photo = null;
                  this.photoData = {};
                },
              },
            ]
          );

          return PhotoEditor;
        })(_modal_js__WEBPACK_IMPORTED_MODULE_10__['default']);

        /***/
      },

    /***/ './js/modules/enlargePhoto.js':
      /*!************************************!*\
  !*** ./js/modules/enlargePhoto.js ***!
  \************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return EnlargePhoto;
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
        /* harmony import */ var _preparePhotoModal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./preparePhotoModal.js */ './js/modules/preparePhotoModal.js'
        );

        var EnlargePhoto = /*#__PURE__*/ (function () {
          function EnlargePhoto(options) {
            var _this = this;

            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(
              this,
              EnlargePhoto
            );

            this.entrance = options.animationClasses.entrance;
            this.exit = options.animationClasses.exit; // Get class or setup default class

            this.enlargeClass = options.enlargeClass || 'enlarge';
            this.selectors = options.selectors;
            var _options$selectors = options.selectors,
              modal = _options$selectors.modal,
              animateOnShown = _options$selectors.animateOnShown;
            this.$modal = $(modal); // Initialize module preparation

            Object(
              _preparePhotoModal_js__WEBPACK_IMPORTED_MODULE_2__['default']
            )({
              modal: modal,
              animateOnShown: animateOnShown,
            }).init();
            $(document).click(function (event) {
              event.preventDefault();
              var $target = $(event.target);
              if (!$target.hasClass(_this.enlargeClass)) return;
              console.log($target);

              _this.$modal.modal('show');
            });
          }

          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(
            EnlargePhoto,
            [
              {
                key: '_showPhoto',
                value: function _showPhoto() {}, // This function works almost the same as the one in the gallery
                // So consider make a single function to handle this functionality
              },
              {
                key: '_getPhotoInfo',
                value: function _getPhotoInfo(target) {
                  var description = target.dataset.description;
                  var src = target.src;
                  return {
                    description: description,
                    src: src,
                  };
                },
              },
            ]
          );

          return EnlargePhoto;
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

            _this.cacheElements = _this.cacheElements.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            );
            _this.setUpEventListeners = _this.setUpEventListeners.bind(
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

            _this.cacheElements();

            _this.setUpEventListeners();

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
                key: 'cacheElements',
                value: function cacheElements() {
                  // Form
                  this.$form = $(this.selectors.form); // Input fields

                  this.$inputs = this.$form.find(this.selectors.inputs);

                  if (this.location) {
                    this.initializeLocationInput();
                  }
                },
              },
              {
                key: 'setUpEventListeners',
                value: function setUpEventListeners() {
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

    /***/ './js/modules/gallery.js':
      /*!*******************************!*\
  !*** ./js/modules/gallery.js ***!
  \*******************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return Gallery;
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
        /* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @babel/runtime/helpers/inherits */ '../node_modules/@babel/runtime/helpers/inherits.js'
        );
        /* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @babel/runtime/helpers/possibleConstructorReturn */ '../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'
        );
        /* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @babel/runtime/helpers/getPrototypeOf */ '../node_modules/@babel/runtime/helpers/getPrototypeOf.js'
        );
        /* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var _requests_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./requests.js */ './js/modules/requests.js'
        );
        /* harmony import */ var _httpError_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./httpError.js */ './js/modules/httpError.js'
        );
        /* harmony import */ var _preparePhotoModal_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./preparePhotoModal.js */ './js/modules/preparePhotoModal.js'
        );

        function _createSuper(Derived) {
          var hasNativeReflectConstruct = _isNativeReflectConstruct();
          return function _createSuperInternal() {
            var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(
                Derived
              ),
              result;
            if (hasNativeReflectConstruct) {
              var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(
                this
              ).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }
            return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(
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

        var Gallery = /*#__PURE__*/ (function (_ServerRequest) {
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(
            Gallery,
            _ServerRequest
          );

          var _super = _createSuper(Gallery);

          function Gallery(options) {
            var _this;

            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(
              this,
              Gallery
            );

            _this = _super.call(this, options); // Bind context

            _this.galleryConfig = options['galleryManipulation'];

            _this._cacheElements();

            _this._setUpEventListeners();

            return _this;
          }

          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(
            Gallery,
            [
              {
                key: '_cacheElements',
                value: function _cacheElements() {
                  var selectors = this.selectors; // Swiper slider

                  this.$gallery = $(selectors.gallery);
                  this.$slides = this.$gallery.find(selectors.photoContainer);
                  this.$photos = this.$gallery.find(selectors.gallerySlide); // Elements inside modal

                  var modal = selectors.modal,
                    animateOnShown = selectors.animateOnShown;
                  this.$modal = $(modal);
                  this.$modalImage = this.$modal.find(selectors.modalImage);
                  this.$modalDescription = this.$modal.find(
                    selectors.modalDescription
                  );
                  this.$modalPermissionButton = this.$modal
                    .find(selectors.modalPermissionButton)
                    .fadeOut(0);
                  this.$modalPrevArrow = this.$modal.find(selectors.prevArrow);
                  this.$modalNextArrow = this.$modal.find(selectors.nextArrow); // Initialize modal preparation

                  Object(
                    _preparePhotoModal_js__WEBPACK_IMPORTED_MODULE_7__[
                      'default'
                    ]
                  )({
                    modal: modal,
                    animateOnShown: animateOnShown,
                  }).init();
                },
              },
              {
                key: '_setUpEventListeners',
                value: function _setUpEventListeners() {
                  var _this2 = this;

                  //Caching
                  var $body = $('body'); // Adjust modal based on the clicked photo

                  this.$gallery.click(function (event) {
                    var target = event.target;
                    if (target.tagName !== 'IMG') return;

                    _this2._generateModal(target);
                  }); // Add gallery behavior to modal

                  this.$modal.click(function (event) {
                    // Show next photo when the photo is typed
                    var target = event.target;
                    if (
                      !$(target).hasClass(_this2.galleryConfig.arrowClass) &&
                      target.tagName !== 'IMG'
                    )
                      return;
                    var config = _this2.galleryConfig; // Change order

                    if (
                      target.tagName === 'IMG' ||
                      $(target).hasClass(config.nextClass)
                    ) {
                      ++_this2.order;
                    }

                    if ($(target).hasClass(config.prevClass)) {
                      --_this2.order;
                    }

                    _this2._updateGallery();
                  }); // Send permission request to the server

                  this.$modalPermissionButton
                    .find('button')
                    .click(function (event) {
                      event.preventDefault();

                      _this2._askPermission();
                    }); // Touch support for mobile devices

                  this._addTouchSupport();

                  this.$modal.on('keydown', function (event) {
                    var key = event.key;
                    if (key !== 'ArrowRight' && key !== 'ArrowLeft') return; // Change order

                    if (key === 'ArrowRight') {
                      ++_this2.order;
                    } else {
                      --_this2.order;
                    }

                    _this2._updateGallery();
                  });
                },
              },
              {
                key: '_addTouchSupport',
                value: function _addTouchSupport() {
                  var _this3 = this;

                  var clientXStart, clientXEnd, distance;
                  this.$modalImage.on('touchstart', function (event) {
                    // Save coordinates of the initial touch point
                    clientXStart = event.touches[0].clientX;
                  });
                  this.$modalImage.on('touchmove', function (event) {
                    // Save coordinates while touch point is moving
                    clientXEnd = event.touches[0].clientX;
                  });
                  this.$modalImage.on('touchend', function () {
                    distance = clientXStart - clientXEnd; // Change order

                    if (distance > _this3.touchTrottle) {
                      // Don't swipe to the right if this is the last photo
                      if (_this3.order === _this3.$slides.length) return;
                      ++_this3.order;
                    } else if (distance < -_this3.touchTrottle) {
                      // Don't swipe to the left if this is the last photo
                      if (_this3.order === 0) return;
                      --_this3.order;
                    }

                    _this3._updateGallery();
                  });
                },
              },
              {
                key: '_updateGallery',
                value: function _updateGallery() {
                  var newImage = this._getImage();

                  this._generateModal(newImage, true);
                },
              },
              {
                key: '_askPermission',
                value: function _askPermission() {
                  var _this4 = this;

                  var request = this.requests.permission; // Add currentle selected photo id to the request

                  request.endpoint.searchParams.set('id', this.id);
                  this.makeRequest({
                    headers: request.headers,
                    endpoint: request.endpoint,
                    method: request.method,
                  })
                    .then(function (response) {
                      if (response.success) {
                        // Show popup about sucessfully sent request
                        _this4.showRequestResult({
                          title: response.title,
                          text: response.message,
                          icon: 'success',
                        });
                      } else {
                        // Show popup about unsucessfully sent request
                        _this4.showRequestResult({
                          title: response.title,
                          text: response.message,
                          icon: 'error',
                        });
                      }
                    })
                    ['catch'](function (error) {
                      // Show error popup here
                      _this4.showRequestResult({
                        title: error.name,
                        text: error.message,
                        icon: 'error',
                      });
                    });
                },
              },
              {
                key: '_generateModal',
                value: function _generateModal(target, animation) {
                  var _target$dataset = target.dataset,
                    order = _target$dataset.order,
                    id = _target$dataset.id;

                  if (animation) {
                    // Animate appearance of the modal content
                    this._animateModalContent(target);
                  } else {
                    // Show modal content without animation
                    this._showModalContent(target);
                  }

                  this.$modal.focus();
                  this.order = parseInt(order);
                  this.id = id; // Handle arrow hiding on first/last photos

                  this.order === 0
                    ? this._hidePrevArrow()
                    : this._showPrevArrow();
                  this.order === this.$slides.length
                    ? this._hideNextArrow()
                    : this._showNextArrow();
                },
              },
              {
                key: '_animateModalContent',
                value: function _animateModalContent(target) {
                  var _this5 = this;

                  var _this$_getPhotoInfo = this._getPhotoInfo(target),
                    description = _this$_getPhotoInfo.description,
                    privacy = _this$_getPhotoInfo.privacy,
                    src = _this$_getPhotoInfo.src; // Animate photo disappearance

                  this.$modalImage.fadeOut({
                    duration: 400,
                    queue: false,
                    complete: function complete() {
                      // Change src attribute of the photo
                      _this5.$modalImage.attr('src', src); // Animate photo appearance

                      _this5.$modalImage.fadeIn({
                        duration: 400,
                        queue: false,
                      });

                      if (privacy) {
                        // Animate button appearance
                        _this5.$modalPermissionButton.fadeIn({
                          duration: 400,
                          queue: false,
                        });
                      }
                    },
                  }); // Animate photo description disappearance

                  this.$modalDescription.fadeOut({
                    duration: 400,
                    queue: false,
                    complete: function complete() {
                      // Change description
                      _this5._changeDescription(description, privacy); // Animate photo description appearance

                      _this5.$modalDescription.fadeIn({
                        duration: 400,
                        queue: false,
                      });
                    },
                  });

                  if (!privacy) {
                    // Animate button disappearance
                    this.$modalPermissionButton.fadeOut({
                      duration: 400,
                      queue: false,
                    });
                  }
                },
              },
              {
                key: '_showModalContent',
                value: function _showModalContent(target) {
                  var _this$_getPhotoInfo2 = this._getPhotoInfo(target),
                    description = _this$_getPhotoInfo2.description,
                    privacy = _this$_getPhotoInfo2.privacy,
                    src = _this$_getPhotoInfo2.src;

                  this.$modalImage.attr('src', src);

                  this._changeDescription(description, privacy);

                  privacy
                    ? this.$modalPermissionButton.fadeIn(0)
                    : this.$modalPermissionButton.fadeOut(0);
                },
              },
              {
                key: '_changeDescription',
                value: function _changeDescription(description, privacy) {
                  this.$modalDescription.text(description);

                  this._alignDescriptionText(privacy);
                },
              },
              {
                key: '_getPhotoInfo',
                value: function _getPhotoInfo(target) {
                  var _target$dataset2 = target.dataset,
                    description = _target$dataset2.description,
                    privacy = _target$dataset2.privacy;
                  var src = target.src; // Convert privacy into boolean

                  privacy = privacy === 'true' ? true : false;
                  return {
                    description: description,
                    privacy: privacy,
                    src: src,
                  };
                },
              },
              {
                key: '_alignDescriptionText',
                value: function _alignDescriptionText(privacy) {
                  privacy
                    ? this.$modal.addClass('private')
                    : this.$modal.removeClass('private');
                },
              },
              {
                key: '_getImage',
                value: function _getImage() {
                  // Find image
                  return this.$gallery.find(
                    'img[data-order="'.concat(this.order, '"]')
                  )[0];
                }, // Hiding and showing arrows
              },
              {
                key: '_hidePrevArrow',
                value: function _hidePrevArrow() {
                  this.$modalPrevArrow.hide();
                },
              },
              {
                key: '_showPrevArrow',
                value: function _showPrevArrow() {
                  this.$modalPrevArrow.show();
                },
              },
              {
                key: '_hideNextArrow',
                value: function _hideNextArrow() {
                  this.$modalNextArrow.hide();
                },
              },
              {
                key: '_showNextArrow',
                value: function _showNextArrow() {
                  this.$modalNextArrow.show();
                }, // Getters and setters
              },
              {
                key: 'touchTrottle',
                get: function get() {
                  return 50;
                },
              },
            ]
          );

          return Gallery;
        })(_requests_js__WEBPACK_IMPORTED_MODULE_5__['default']);

        /***/
      },

    /***/ './js/modules/helper.js':
      /*!******************************!*\
  !*** ./js/modules/helper.js ***!
  \******************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__[
          'default'
        ] = (function () {
          var breakpoints = [320, 576, 768, 992, 1200];
          return {
            getScrollBarWidth: function getScrollBarWidth() {
              var $outer = $('<div>')
                  .css({
                    visibility: 'hidden',
                    width: 100,
                    overflow: 'scroll',
                  })
                  .appendTo('body'),
                widthWithScroll = $('<div>')
                  .css({
                    width: '100%',
                  })
                  .appendTo($outer)
                  .outerWidth();
              $outer.remove();
              return 100 - widthWithScroll;
            },
            getViewportWidth: function getViewportWidth() {
              return $(window).width() + this.getScrollBarWidth();
            },
            getViewportRange: function getViewportRange() {
              var viewportWidth = this.getViewportWidth();

              if (viewportWidth && viewportWidth < breakpoints[1]) {
                return 'xs';
              } else if (
                breakpoints[1] <= viewportWidth &&
                viewportWidth < breakpoints[2]
              ) {
                return 'sm';
              } else if (
                breakpoints[2] <= viewportWidth &&
                viewportWidth < breakpoints[3]
              ) {
                return 'md';
              } else if (
                breakpoints[3] <= viewportWidth &&
                viewportWidth < breakpoints[4]
              ) {
                return 'lg';
              } else if (breakpoints[4] <= viewportWidth) {
                return 'xl';
              }
            },
            getHeaderHeight: function getHeaderHeight() {
              var headerSelector =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : '.private-header';
              return $(headerSelector).outerHeight();
            },
          };
        })();

        /***/
      },

    /***/ './js/modules/httpError.js':
      /*!*********************************!*\
  !*** ./js/modules/httpError.js ***!
  \*********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return HttpError;
          }
        );
        /* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime/helpers/classCallCheck */ '../node_modules/@babel/runtime/helpers/classCallCheck.js'
        );
        /* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime/helpers/inherits */ '../node_modules/@babel/runtime/helpers/inherits.js'
        );
        /* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @babel/runtime/helpers/possibleConstructorReturn */ '../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'
        );
        /* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @babel/runtime/helpers/getPrototypeOf */ '../node_modules/@babel/runtime/helpers/getPrototypeOf.js'
        );
        /* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @babel/runtime/helpers/wrapNativeSuper */ '../node_modules/@babel/runtime/helpers/wrapNativeSuper.js'
        );
        /* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__
        );

        function _createSuper(Derived) {
          var hasNativeReflectConstruct = _isNativeReflectConstruct();
          return function _createSuperInternal() {
            var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(
                Derived
              ),
              result;
            if (hasNativeReflectConstruct) {
              var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(
                this
              ).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }
            return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(
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

        var HttpError = /*#__PURE__*/ (function (_Error) {
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(
            HttpError,
            _Error
          );

          var _super = _createSuper(HttpError);

          function HttpError(name, message, headers) {
            var _this;

            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(
              this,
              HttpError
            );

            _this = _super.call(this, name, message);
            _this.status = name;
            _this.statusText = message;
            _this.headers = headers;
            return _this;
          }

          return HttpError;
        })(
          /*#__PURE__*/ _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4___default()(
            Error
          )
        );

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

            this.cacheLocationElements();
            this.setUpLocationEventListeners();
          },
          cacheLocationElements: function cacheLocationElements() {
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
          setUpLocationEventListeners: function setUpLocationEventListeners() {
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

            _this.cacheElements = _this.cacheElements.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            );
            _this.setUpEventListeners = _this.setUpEventListeners.bind(
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
                key: 'cacheElements',
                value: function cacheElements() {
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
                key: 'setUpEventListeners',
                value: function setUpEventListeners() {
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

    /***/ './js/modules/pagination.js':
      /*!**********************************!*\
  !*** ./js/modules/pagination.js ***!
  \**********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return Pagination;
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
        /* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @babel/runtime/helpers/defineProperty */ '../node_modules/@babel/runtime/helpers/defineProperty.js'
        );
        /* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./helper.js */ './js/modules/helper.js'
        );

        var Pagination = /*#__PURE__*/ (function () {
          function Pagination(config) {
            var _this = this;

            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(
              this,
              Pagination
            );

            _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(
              this,
              '_profilesShown',
              false
            );

            var selectors = config.selectors;
            this.$container = $(selectors.container);
            this.$pagination = $(selectors.pagination); // Options for the plugin

            this.pluginOptions = config['pluginOptions']; // Configuration for breakpoints

            this.perPageConfig = config['perPageConfig'];
            this._init = false;
            $(window).resize(function () {
              var viewportRange = _helper_js__WEBPACK_IMPORTED_MODULE_3__[
                'default'
              ].getViewportRange(); // If there is no any profiles yet

              if (!_this._profilesShown) return;
              if (viewportRange === _this._viewportRange && _this._init) return; // Indicate that destroyment was caused by resize

              _this.destroy({
                resized: true,
              });

              _this.init();
            });
            var $document = $(document);
            $document.on('searchForm:beforeRequest', function () {
              // Delete previous results
              _this.$container.empty(); // Indicate that destroyment wasn't caused by resize

              _this.destroy({
                resized: false,
              });
            });
            $document.on('searchForm:afterSuccessfulRequest', function (
              event,
              data
            ) {
              _this._profilesShown = true;

              _this.init(data);
            });
          }

          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(
            Pagination,
            [
              {
                key: 'init',
                value: function init(data) {
                  // Do not initialize pagination if it is already initiated
                  if (this._init) return;
                  this.$pagination.trigger('pagination:beforeInit', data); // Save current viewport range

                  this._viewportRange = _helper_js__WEBPACK_IMPORTED_MODULE_3__[
                    'default'
                  ].getViewportRange(); // Pass current viewport range to plugin options

                  this.pluginOptions['perPage'] = this.perPageConfig[
                    this._viewportRange
                  ]; // Initiate plugin

                  this.$pagination.jPages(this.pluginOptions);
                  this.$pagination.trigger('pagination:afterInit');
                  this._init = true;
                },
              },
              {
                key: 'destroy',
                value: function destroy(options) {
                  if (this._init) {
                    // Save passed parameters
                    var resized = options.resized;

                    if (resized) {
                      // Trigger event if the destroyment was initiated by resizement
                      this.$pagination.trigger(
                        'pagination:beforeDestroyAfterResize'
                      );
                    } // destroy plugin instance

                    this.$pagination.jPages('destroy');
                    this._init = false;

                    if (resized) {
                      // Trigger event if the destroyment was initiated by resizement
                      this.$pagination.trigger(
                        'pagination:afterDestroyAfterResize'
                      );
                    }
                  }
                }, // Preventing resetting containers after initialization
                // Items container
              },
              {
                key: '$container',
                get: function get() {
                  return this._$container;
                },
                set: function set($container) {
                  if (!this._$container) {
                    this._$container = $container;
                  }
                }, // Pagination container
              },
              {
                key: '$pagination',
                get: function get() {
                  return this._$pagination;
                },
                set: function set($container) {
                  if (!this._$pagination) {
                    this._$pagination = $container;
                  }
                }, // Breakpoints
              },
              {
                key: 'breakpoints',
                get: function get() {
                  return this._breakpoints;
                },
                set: function set(breakpoints) {
                  if (!this.breakpoints) {
                    this._breakpoints = breakpoints;
                  }
                },
              },
            ]
          );

          return Pagination;
        })();

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

    /***/ './js/modules/preparePhotoModal.js':
      /*!*****************************************!*\
  !*** ./js/modules/preparePhotoModal.js ***!
  \*****************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return preparePhotoModal;
          }
        );
        function preparePhotoModal(_ref) {
          var modal = _ref.modal,
            animateOnShown = _ref.animateOnShown;
          var $body = $('body');
          var $modal = $(modal);
          var $animateOnShown = $modal.find(animateOnShown).fadeOut(0);
          var shown = false;
          console.log($animateOnShown);

          function _setUpEventListeners() {
            // Here you can prepare modal
            // Adjust background opacity for gallery modal
            $modal.on('show.bs.modal', function () {
              $body.addClass('gallery');
            });
            $modal.on('shown.bs.modal', function () {
              $animateOnShown.fadeIn(200, function () {
                shown = true;
              });
            });
            $modal.on('hide.bs.modal', function (event) {
              if (shown) event.preventDefault();
              $animateOnShown.fadeOut(100, function () {
                shown = false;
                $modal.modal('hide');
              });
            });
            $modal.on('hidden.bs.modal', function () {
              $body.removeClass('gallery');
            });
          }

          return {
            generateModal: function generateModal(img, animation) {},
            init: function init() {
              _setUpEventListeners();
            },
          };
        }

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

    /***/ './js/modules/search-profiles-form.js':
      /*!********************************************!*\
  !*** ./js/modules/search-profiles-form.js ***!
  \********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return SearchProfilesForm;
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
        /* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @babel/runtime/helpers/assertThisInitialized */ '../node_modules/@babel/runtime/helpers/assertThisInitialized.js'
        );
        /* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @babel/runtime/helpers/get */ '../node_modules/@babel/runtime/helpers/get.js'
        );
        /* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @babel/runtime/helpers/inherits */ '../node_modules/@babel/runtime/helpers/inherits.js'
        );
        /* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @babel/runtime/helpers/possibleConstructorReturn */ '../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'
        );
        /* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @babel/runtime/helpers/getPrototypeOf */ '../node_modules/@babel/runtime/helpers/getPrototypeOf.js'
        );
        /* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./form.js */ './js/modules/form.js'
        );
        /* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./helper.js */ './js/modules/helper.js'
        );

        function _createSuper(Derived) {
          var hasNativeReflectConstruct = _isNativeReflectConstruct();
          return function _createSuperInternal() {
            var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(
                Derived
              ),
              result;
            if (hasNativeReflectConstruct) {
              var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(
                this
              ).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }
            return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(
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

        var SearchProfilesForm = /*#__PURE__*/ (function (_Form) {
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(
            SearchProfilesForm,
            _Form
          );

          var _super = _createSuper(SearchProfilesForm);

          function SearchProfilesForm(options) {
            var _this;

            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(
              this,
              SearchProfilesForm
            );

            _this = _super.call(this, options); //Binding context

            _this.generateAgeRange = _this.generateAgeRange.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(
                _this
              )
            );
            _this.initializeSlider = _this.initializeSlider.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(
                _this
              )
            );
            _this.createProfileView = _this.createProfileView.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(
                _this
              )
            );
            _this.createProfileViews = _this.createProfileViews.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(
                _this
              )
            );
            _this.createNoResultsBadge = _this.createNoResultsBadge.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(
                _this
              )
            );
            _this.searchFormOptions = options['searchFormOptions'];
            _this.$resultsContainer = $(_this.selectors['resultsContainer']);
            _this.slider = options['slider'];

            _this.generateAgeRange();

            _this.initializeSlider();

            return _this;
          }

          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(
            SearchProfilesForm,
            [
              {
                key: 'initializeSlider',
                value: function initializeSlider() {
                  var _this2 = this;

                  this.slider['noUiSlider'].on('change', function () {
                    _this2.$inputs.first().trigger('input');
                  });
                },
              },
              {
                key: 'cacheElements',
                value: function cacheElements() {
                  _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(
                    _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(
                      SearchProfilesForm.prototype
                    ),
                    'cacheElements',
                    this
                  ).call(this);

                  this.$formLoadingIndicator = $(
                    this.selectors['formLoadingIndicator']
                  ).fadeOut(0);
                },
              },
              {
                key: 'setUpEventListeners',
                value: function setUpEventListeners() {
                  var _this3 = this;

                  _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(
                    _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(
                      SearchProfilesForm.prototype
                    ),
                    'setUpEventListeners',
                    this
                  ).call(this);

                  this.$form.on('input', function (event) {
                    var target = event.target;
                    if (target.name === 'city') return;

                    _this3.$form.trigger('inputFinished');
                  });
                  this.$locationInput.on('citySelected', function () {
                    _this3.$form.trigger('inputFinished');
                  });
                  this.$form.on('inputFinished', function (event) {
                    // Show loading indicator
                    _this3.$formLoadingIndicator.fadeIn(200);

                    _this3.collectFormInputs();

                    var request = _this3.requests.profiles;

                    _this3.$form.trigger('searchForm:beforeRequest');

                    _this3
                      .makeRequest({
                        method: request.method,
                        headers: request.headers,
                        endpoint: request.endpoint,
                        body: JSON.stringify(_this3.formData),
                      })
                      .then(function (response) {
                        if (!response.success) {
                          _this3.createNoResultsBadge(response); // Hide loading indicator

                          _this3.$formLoadingIndicator.fadeOut(200);

                          return;
                        }

                        var profiles = response.profiles;

                        _this3.createProfileViews(profiles);

                        _this3.$form.trigger(
                          'searchForm:afterSuccessfulRequest',
                          response
                        ); // Hide loading indicator

                        _this3.$formLoadingIndicator.fadeOut(200);
                      })
                      ['catch'](function (error) {
                        _this3.showRequestResult({
                          title: error.name,
                          text: error.message,
                          icon: 'error',
                        });
                      });
                  });
                },
              },
              {
                key: 'createProfileViews',
                value: function createProfileViews(profiles) {
                  var _this4 = this;

                  // Sort out all the premium users to be at the beginning
                  profiles.sort(function (user1, user2) {
                    return user1.premium.status
                      ? user1.online.status
                        ? user2.premium.status
                          ? user2.online.status
                            ? 0
                            : -1
                          : -1
                        : user2.premium.status
                        ? user2.online.status
                          ? 1
                          : 0
                        : -1
                      : user2.premium.status
                      ? 1
                      : user1.online.status
                      ? user2.online.status
                        ? 0
                        : -1
                      : user2.online.status
                      ? 1
                      : 0;
                  });
                  $('html, body').animate(
                    {
                      scrollTop:
                        this.$resultsContainer.offset().top -
                        2 *
                          _helper_js__WEBPACK_IMPORTED_MODULE_8__[
                            'default'
                          ].getHeaderHeight(),
                    },
                    1100
                  );
                  profiles.forEach(function (profile) {
                    _this4
                      .createProfileView(profile)
                      .appendTo(_this4.$resultsContainer);
                  });
                },
              },
              {
                key: 'generateAgeRange',
                value: function generateAgeRange() {
                  // Cache range
                  var ageFrom = this.searchFormOptions.ageFrom;
                  var ageTo = this.searchFormOptions.ageTo;
                  var $ageInputs = this.$form.find(this.selectors.age);

                  for (var i = ageFrom; i <= ageTo; i++) {
                    $('<option></option>')
                      .attr('value', i)
                      .text(i)
                      .appendTo($ageInputs);
                  }
                },
              },
              {
                key: 'createProfileView',
                value: function createProfileView(profileParameters) {
                  var premium = profileParameters.premium,
                    online = profileParameters.online,
                    avatar = profileParameters.avatar,
                    profile = profileParameters.profile;
                  var $col = $('<div></div>')
                    .addClass('col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2')
                    .addClass('column mx-auto mx-sm-0 search-result');
                  var $profileContainer = $('<div></div>').addClass(
                    'card shadow-sm border-0 mb-4'
                  );
                  var $cardImage = $('<figure></figure>')
                    .addClass('profile-image card-img-top')
                    .append(
                      $('<img>')
                        .addClass('card-img-top')
                        .attr('src', avatar.src)
                        .attr('alt', avatar.alt)
                    );

                  if (premium.status) {
                    $cardImage.addClass('premium').append(
                      $('<span></span>')
                        .addClass('badge badge-primary mb-1')
                        .text(premium.text || 'Premium')
                    );
                  }

                  var $cardBody = $('<div></div>').addClass('card-body');
                  var $userName = $('<h3></h3>')
                    .addClass('mb-0')
                    .append(
                      $('<a></a>')
                        .addClass(
                          'text-dark mb-1 mt-2 mr-2 h6 d-inline-block text-capitalize'
                        )
                        .attr('href', profile.url)
                        .text(profile.name)
                    );

                  if (online.status) {
                    $userName.addClass('name online').append(
                      $('<span></span>')
                        .addClass('badge badge-success mb-1 small')
                        .text(online.text || 'online')
                    );
                  }

                  var $city = $('<p>')
                    .addClass('text-secondary small mb-2')
                    .text(profile.city);
                  $cardBody.append($userName).append($city);
                  var $cardFooter = $('<div></div>')
                    .addClass('card-footer')
                    .append(
                      $('<div></div>')
                        .addClass('text-center mt-2')
                        .append(
                          $('<a></a>')
                            .addClass('btn btn-default')
                            .attr('href', profile.url)
                            .text(profile.buttonText)
                        )
                    ); // Everything together

                  return $col.append(
                    $profileContainer
                      .append($cardImage)
                      .append($cardBody)
                      .append($cardFooter)
                  );
                },
              },
              {
                key: 'createNoResultsBadge',
                value: function createNoResultsBadge(content) {
                  var title = content.title,
                    message = content.message;
                  $('<div></div>')
                    .addClass(
                      'col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3'
                    )
                    .append(
                      $('<div></div>')
                        .addClass(
                          'no-results shadow-sm bg-white rounded text-center px-3 py-5'
                        )
                        .append($('<i></i>').addClass('fas fa-heart-broken'))
                        .append($('<h2></h2>').addClass('title').text(title))
                        .append(
                          $('<p></p>').addClass('text-secondary').text(message)
                        )
                    )
                    .css('opacity', '0')
                    .appendTo(this.$resultsContainer)
                    .animate(
                      {
                        opacity: 1,
                      },
                      800
                    );
                  $('html, body').animate(
                    {
                      scrollTop:
                        this.$resultsContainer.offset().top -
                        _helper_js__WEBPACK_IMPORTED_MODULE_8__[
                          'default'
                        ].getHeaderHeight(),
                    },
                    1100
                  );
                },
              },
            ]
          );

          return SearchProfilesForm;
        })(_form_js__WEBPACK_IMPORTED_MODULE_7__['default']);

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
            Swal.fire({
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
            Swal.fire({
              title: title,
              text: text,
              icon: icon,
              showConfirmButton: false,
              showCloseButton: true,
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
              text = _ref3$text === void 0 ? '' : _ref3$text,
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
                return !Swal.isLoading();
              },
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

    /***/ './js/modules/uploader.js':
      /*!********************************!*\
  !*** ./js/modules/uploader.js ***!
  \********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return PhotoUploader;
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

        var PhotoUploader = /*#__PURE__*/ (function (_EditorModal) {
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(
            PhotoUploader,
            _EditorModal
          );

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

            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(
              this,
              PhotoUploader
            );

            _this = _super.call(this, options);

            _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              ),
              'photoData',
              {}
            );

            _this.configuration.uploader = true; // Binding context

            _this.previewPhotos = _this.previewPhotos.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            );
            _this.generatePreviewHTML = _this.generatePreviewHTML.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            );
            _this.updateMarkup = _this.updateMarkup.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            );
            _this.getPhotosIds = _this.getPhotosIds.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            );
            _this.uploadNewPhotos = _this.uploadNewPhotos.bind(
              _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(
                _this
              )
            ); // Prepare Uploader

            _this.cacheElements();

            _this.setUpEventListeners();

            return _this;
          }

          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(
            PhotoUploader,
            [
              {
                key: 'cacheElements',
                value: function cacheElements() {
                  _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(
                    _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(
                      PhotoUploader.prototype
                    ),
                    'cacheElements',
                    this
                  ).call(this); // Container to preview uploaded images

                  this.$previewContainer = this.$modal.find(
                    this.selectors.previewContainer
                  ); // Inputs

                  this.$photoInputs = this.$modal.find(this.selectors.input); // Gallery

                  this.$gallery = $(this.selectors.gallery);
                },
              },
              {
                key: 'setUpEventListeners',
                value: function setUpEventListeners() {
                  var _this2 = this;

                  _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(
                    _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(
                      PhotoUploader.prototype
                    ),
                    'setUpEventListeners',
                    this
                  ).call(this); // Listen to changes on the input elements

                  this.$photoInputs.change(function (event) {
                    _this2.previewPhotos(event.target);
                  });
                  this.$form.submit(function (event) {
                    event.preventDefault(); // Make server request here
                    // And update markup
                    // After that - clean all the cached data

                    _this2.uploadNewPhotos();
                  });
                },
              },
              {
                key: 'clean',
                value: function clean() {
                  this.photoData = {};
                },
              },
              {
                key: 'uploadNewPhotos',
                value: (function () {
                  var _uploadNewPhotos = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
                    /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                      function _callee() {
                        var response, id, photoData;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  this.collectData();
                                  this.generateFormData();
                                  _context.prev = 2;
                                  _context.next = 5;
                                  return this.makeRequest({
                                    headers: this.requests.savePhotos.headers,
                                    endpoint: this.requests.savePhotos.endpoint,
                                    method: this.requests.savePhotos.method,
                                    body: this.formData,
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
                                    title: 'Oops!',
                                    text: _context.t0.message,
                                    icon: 'error',
                                  });

                                case 11:
                                  if (response.success) {
                                    // Successful Popup
                                    this.showRequestResult({
                                      title: 'Success!',
                                      text: response.message,
                                      icon: 'success',
                                    }); // Update markup according to photoData object

                                    for (id in this.photoData) {
                                      photoData = this.photoData[id]; // Add each uploaded photo to the markup

                                      this.updateMarkup({
                                        id: id,
                                        src: photoData.src,
                                        privacy: photoData.privacy,
                                        description: photoData.description,
                                      });
                                    }

                                    this.closeModal();
                                  } else {
                                    // Unsuccessful Popup
                                    this.showRequestResult({
                                      title: 'Oops!',
                                      text: response.message,
                                      icon: 'error',
                                    });
                                  }

                                case 12:
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

                  function uploadNewPhotos() {
                    return _uploadNewPhotos.apply(this, arguments);
                  }

                  return uploadNewPhotos;
                })(),
                /**
                 * Function retrieving ids according to uploading amount of files.
                 * @param {Number} filesAmount - amount of files to get ids for
                 */
              },
              {
                key: 'getPhotosIds',
                value: (function () {
                  var _getPhotosIds = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
                    /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                      function _callee2(filesAmount) {
                        var response;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                          function _callee2$(_context2) {
                            while (1) {
                              switch ((_context2.prev = _context2.next)) {
                                case 0:
                                  _context2.prev = 0;
                                  _context2.next = 3;
                                  return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(
                                    _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(
                                      PhotoUploader.prototype
                                    ),
                                    'getPhotosIds',
                                    this
                                  ).call(this, {
                                    filesAmount: filesAmount,
                                    headers: this.requests.getIds.headers,
                                    endpoint: this.requests.getIds.endpoint,
                                    method: this.requests.getIds.method,
                                  });

                                case 3:
                                  response = _context2.sent;
                                  _context2.next = 9;
                                  break;

                                case 6:
                                  _context2.prev = 6;
                                  _context2.t0 = _context2['catch'](0);
                                  // Unsuccessful Popup
                                  this.showRequestResult({
                                    title: 'Oops!',
                                    text: _context2.t0.message,
                                    icon: 'error',
                                  });

                                case 9:
                                  if (!response.success) {
                                    _context2.next = 13;
                                    break;
                                  }

                                  return _context2.abrupt(
                                    'return',
                                    response.ids
                                  );

                                case 13:
                                  // Unsuccessful Popup
                                  this.showRequestResult({
                                    title: 'Oops!',
                                    text: response.message,
                                    icon: 'error',
                                  });

                                case 14:
                                case 'end':
                                  return _context2.stop();
                              }
                            }
                          },
                          _callee2,
                          this,
                          [[0, 6]]
                        );
                      }
                    )
                  );

                  function getPhotosIds(_x) {
                    return _getPhotosIds.apply(this, arguments);
                  }

                  return getPhotosIds;
                })(),
                /**
                 * Function reading uploaded photos from input
                 * @param {DOM Element} input - input element from which to take the photo files
                 */
              },
              {
                key: 'previewPhotos',
                value: (function () {
                  var _previewPhotos = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
                    /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                      function _callee3(input) {
                        var ids, filesAmount, i, reader, id;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                          function _callee3$(_context3) {
                            while (1) {
                              switch ((_context3.prev = _context3.next)) {
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
                                  _context3.t0 = _context3['catch'](2);
                                  // Unsuccessful Popup
                                  this.showRequestResult({
                                    title: 'Oops!',
                                    text: _context3.t0.message,
                                    icon: 'error',
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
                                      file: input.files[i],
                                    });
                                  }

                                  this.$modalFooter.show(0);

                                case 13:
                                case 'end':
                                  return _context3.stop();
                              }
                            }
                          },
                          _callee3,
                          this,
                          [[2, 8]]
                        );
                      }
                    )
                  );

                  function previewPhotos(_x2) {
                    return _previewPhotos.apply(this, arguments);
                  }

                  return previewPhotos;
                })(),
                /**
                 * Function attaching event listeners to File Reader
                 * @param {FileReader object} reader - reader to attach event listeners to
                 */
              },
              {
                key: 'setReaderEventListeners',
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
                      src: src,
                    }); // Save src

                    _this3.savePhotoInformation({
                      id: id,
                      src: src,
                    });
                  };

                  reader.onerror = function (event) {
                    // Unsuccessful Popup
                    this.showRequestResult({
                      title: this.error.name,
                      text: this.error.message,
                      icon: 'error',
                    });
                  };
                },
                /**
                 * Function deleting uploaded photos
                 */
              },
              {
                key: 'discardChanges',
                value: function discardChanges() {
                  this.$previewContainer.empty();
                },
                /**
                 * Function generating markup for preview
                 * @param {Number} id - photo id that will be used in the database to store photo
                 * @param {String} src - src of the image to preview
                 */
              },
              {
                key: 'generatePreviewHTML',
                value: function generatePreviewHTML(_ref2) {
                  var _this4 = this;

                  var id = _ref2.id,
                    src = _ref2.src;
                  // Preparing ids for preview
                  var privacyId = 'photo-upload-privacy-' + id;
                  var descriptionId = 'upload-description' + id; // Privacy checkbox control

                  var $privacyControl = $('<div></div>')
                    .addClass('custom-control custom-switch')
                    .append(
                      $('<input>')
                        .attr('type', 'checkbox')
                        .attr('id', privacyId)
                        .addClass('custom-control-input privacy-input')
                    )
                    .append(
                      $('<label></label>')
                        .attr('for', privacyId)
                        .addClass('custom-control-label privacy-label')
                    )
                    .appendTo('body'); // Privacy box

                  var $privacyBox = $('<div></div>')
                    .addClass(
                      'privacy bg-white rounded d-flex justify-content-between align-items-center px-1'
                    )
                    .append($('<h4></h4>').addClass('m-0').text('Privacy'))
                    .append($privacyControl); // Figure

                  var $figure = $('<figure></figure>')
                    .append($('<img>').attr('src', src).attr('alt', ''))
                    .append($privacyBox)
                    .append(
                      $('<button></button>')
                        .attr('type', 'button')
                        .addClass(
                          'delete bg-white rounded d-flex justify-content-between align-items-center px-1'
                        )
                        .text('Delete')
                        .click(function (event) {
                          _this4.deletePhoto(event);
                        })
                        .append($('<i class="fas fa-trash-alt"></i>'))
                    ); // Description textarea

                  var $descriptionTextarea = $('<div></div>')
                    .addClass('form-group')
                    .append(
                      $('<label></label>')
                        .attr('for', descriptionId)
                        .text('Add photo description')
                    )
                    .append(
                      $('<textarea></textarea>')
                        .attr('id', descriptionId)
                        .attr('rows', '4')
                        .attr('placeholder', 'Photo description')
                        .addClass('form-control new-photo-description')
                    ); // Photo container

                  $('<div></div>')
                    .addClass(
                      'col-12 col-sm-6 col-md-4 col-xl-3 photo-container'
                    )
                    .attr('data-id', id)
                    .append(
                      $('<div></div>')
                        .addClass('photo-description')
                        .append([$figure, $descriptionTextarea])
                    )
                    .appendTo(this.$previewContainer);
                },
              },
              {
                key: 'collectData',
                value: function collectData() {
                  var _this5 = this;

                  $(this.selectors.container).each(function (index, element) {
                    var id = element.dataset.id;
                    var privacy = $(element)
                      .find(_this5.selectors['privacy-input'])
                      .is(':checked');
                    var description = $(element)
                      .find(_this5.selectors.description)
                      .val();

                    _this5.savePhotoInformation({
                      id: id,
                      privacy: privacy,
                      description: description,
                    });
                  });
                },
              },
              {
                key: 'updateMarkup',
                value: function updateMarkup(_ref3) {
                  var _ref3$id = _ref3.id,
                    id = _ref3$id === void 0 ? null : _ref3$id,
                    _ref3$src = _ref3.src,
                    src = _ref3$src === void 0 ? null : _ref3$src,
                    _ref3$privacy = _ref3.privacy,
                    privacy = _ref3$privacy === void 0 ? false : _ref3$privacy,
                    _ref3$description = _ref3.description,
                    description =
                      _ref3$description === void 0 ? '' : _ref3$description;
                  this.$gallery.append(
                    $('<div></div>')
                      .addClass('swiper-slide gallery-slide')
                      .append(
                        $('<img>')
                          .attr('src', src)
                          .attr('alt', description)
                          .attr('data-toggle', 'modal')
                          .attr('data-target', '#edit-photo')
                          .attr('data-id', id)
                          .attr('data-description', description)
                          .attr('data-privacy', privacy)
                          .addClass('gallery-photo')
                      )
                  );
                },
              },
            ]
          );

          return PhotoUploader;
        })(_modal_js__WEBPACK_IMPORTED_MODULE_10__['default']);

        /***/
      },

    /***/ 0:
      /*!*************************************!*\
  !*** multi ./js/main-authorized.js ***!
  \*************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! ./js/main-authorized.js */ './js/main-authorized.js'
        );

        /***/
      },

    /******/
  }
);
//# sourceMappingURL=main-authorized.bundle.js.map
