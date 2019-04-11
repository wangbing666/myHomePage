module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./less/antMotionStyle.less":
/*!**********************************!*\
  !*** ./less/antMotionStyle.less ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
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

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
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

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/rc-texty/assets/index.css":
/*!************************************************!*\
  !*** ./node_modules/rc-texty/assets/index.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/Banner3.js":
/*!**************************!*\
  !*** ./pages/Banner3.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rc_queue_anim__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-queue-anim */ "rc-queue-anim");
/* harmony import */ var rc_queue_anim__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rc_queue_anim__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rc_texty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-texty */ "rc-texty");
/* harmony import */ var rc_texty__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rc_texty__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rc_texty_assets_index_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rc-texty/assets/index.css */ "./node_modules/rc-texty/assets/index.css");
/* harmony import */ var rc_texty_assets_index_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rc_texty_assets_index_css__WEBPACK_IMPORTED_MODULE_11__);







var _jsxFileName = "/Users/wangbing/\u524D\u7AEF/Home/pages/Banner3.js";






var Banner =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Banner, _React$PureComponent);

  function Banner() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Banner);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Banner).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Banner, [{
    key: "render",
    value: function render() {
      var currentProps = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.props);

      var dataSource = currentProps.dataSource;
      delete currentProps.dataSource;
      delete currentProps.isMobile;
      var children = dataSource.textWrapper.children.map(function (item) {
        var name = item.name,
            texty = item.texty,
            $item = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(item, ["name", "texty"]);

        if (name.match('button')) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Button"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
            type: "primary",
            key: name
          }, $item, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            },
            __self: this
          }), item.children);
        }

        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          key: name
        }, $item, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }), texty ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rc_texty__WEBPACK_IMPORTED_MODULE_10___default.a, {
          type: "mask-bottom",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, item.children) : item.children);
      });
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, currentProps, dataSource.wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rc_queue_anim__WEBPACK_IMPORTED_MODULE_9___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        key: "QueueAnim",
        type: ['bottom', 'top'],
        delay: 200
      }, dataSource.textWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), children));
    }
  }]);

  return Banner;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./pages/Content10.jsx":
/*!*****************************!*\
  !*** ./pages/Content10.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rc_queue_anim__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-queue-anim */ "rc-queue-anim");
/* harmony import */ var rc_queue_anim__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rc_queue_anim__WEBPACK_IMPORTED_MODULE_9__);








var _jsxFileName = "/Users/wangbing/\u524D\u7AEF/Home/pages/Content10.jsx";



var Content10 =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Content10, _React$PureComponent);

  function Content10(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Content10);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Content10).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onClick", function () {
      window.open(_this.props.dataSource.Content.children.url.children);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "markerEnter", function () {
      _this.setState({
        showInfo: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "markerLeave", function () {
      _this.setState({
        showInfo: false
      });
    });

    _this.state = {
      showInfo: props.isMobile
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Content10, [{
    key: "render",
    value: function render() {
      var props = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props);

      var dataSource = props.dataSource;
      delete props.dataSource;
      delete props.isMobile;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, dataSource.wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, dataSource.Content, {
        onMouseEnter: this.markerEnter,
        onMouseLeave: this.markerLeave,
        onClick: this.onClick,
        onTouchEnd: this.onClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, dataSource.Content.children.icon, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: dataSource.Content.children.icon.children,
        alt: "img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, dataSource.Content.children.iconShadow, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: dataSource.Content.children.iconShadow.children,
        alt: "img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(rc_queue_anim__WEBPACK_IMPORTED_MODULE_9___default.a, {
        type: "scale",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, this.state.showInfo && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "map-tip",
        key: "map",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, dataSource.Content.children.title.children), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, dataSource.Content.children.content.children))));
    }
  }]);

  return Content10;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (Content10);

/***/ }),

/***/ "./pages/Content11.jsx":
/*!*****************************!*\
  !*** ./pages/Content11.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rc_scroll_anim_lib_ScrollOverPack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-scroll-anim/lib/ScrollOverPack */ "rc-scroll-anim/lib/ScrollOverPack");
/* harmony import */ var rc_scroll_anim_lib_ScrollOverPack__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rc_scroll_anim_lib_ScrollOverPack__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rc_queue_anim__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-queue-anim */ "rc-queue-anim");
/* harmony import */ var rc_queue_anim__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rc_queue_anim__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rc_tween_one__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-tween-one */ "rc-tween-one");
/* harmony import */ var rc_tween_one__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rc_tween_one__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/Users/wangbing/\u524D\u7AEF/Home/pages/Content11.jsx";





var Content11 =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Content11, _React$PureComponent);

  function Content11() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Content11);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Content11).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Content11, [{
    key: "render",
    value: function render() {
      var props = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.props);

      var dataSource = props.dataSource;
      delete props.dataSource;
      delete props.isMobile;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rc_scroll_anim_lib_ScrollOverPack__WEBPACK_IMPORTED_MODULE_8___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, dataSource.OverPack, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rc_queue_anim__WEBPACK_IMPORTED_MODULE_9___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        type: "bottom",
        leaveReverse: true,
        key: "page",
        delay: [0, 100]
      }, dataSource.titleWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), dataSource.titleWrapper.children.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(item.name.indexOf('title') === 0 ? 'h1' : 'div', Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
          key: i.toString()
        }, item), typeof item.children === 'string' && item.children.match(/\.(svg|gif|jpg|jpeg|png|JPG|PNG|GIF|JPEG)$/) ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', {
          src: item.children,
          alt: 'img'
        }) : item.children);
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rc_tween_one__WEBPACK_IMPORTED_MODULE_10___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        key: "button",
        style: {
          textAlign: 'center'
        }
      }, dataSource.button, {
        animation: {
          y: 30,
          opacity: 0,
          type: 'from',
          delay: 300
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, dataSource.button.children.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), dataSource.button.children.a.children)));
    }
  }]);

  return Content11;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (Content11);

/***/ }),

/***/ "./pages/Content12.jsx":
/*!*****************************!*\
  !*** ./pages/Content12.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rc_tween_one__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rc-tween-one */ "rc-tween-one");
/* harmony import */ var rc_tween_one__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rc_tween_one__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var rc_scroll_anim_lib_ScrollOverPack__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rc-scroll-anim/lib/ScrollOverPack */ "rc-scroll-anim/lib/ScrollOverPack");
/* harmony import */ var rc_scroll_anim_lib_ScrollOverPack__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rc_scroll_anim_lib_ScrollOverPack__WEBPACK_IMPORTED_MODULE_12__);









var _jsxFileName = "/Users/wangbing/\u524D\u7AEF/Home/pages/Content12.jsx";





var Content12 =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Content12, _React$PureComponent);

  function Content12() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Content12);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Content12)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "getChildrenToRender", function (data) {
      return data.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_10__["Col"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          key: item.name
        }, item, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, item.children.wrapper, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, item.children.img, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
          src: item.children.img.children,
          alt: "img",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }))));
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Content12, [{
    key: "render",
    value: function render() {
      var props = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.props);

      var dataSource = props.dataSource;
      delete props.dataSource;
      delete props.isMobile;
      var childrenToRender = this.getChildrenToRender(dataSource.block.children);
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, dataSource.wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, dataSource.page, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        key: "title"
      }, dataSource.titleWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), dataSource.titleWrapper.children.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(item.name.indexOf('title') === 0 ? 'h1' : 'div', Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
          key: i.toString()
        }, item), typeof item.children === 'string' && item.children.match(/\.(svg|gif|jpg|jpeg|png|JPG|PNG|GIF|JPEG)$/) ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('img', {
          src: item.children,
          alt: 'img'
        }) : item.children);
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(rc_scroll_anim_lib_ScrollOverPack__WEBPACK_IMPORTED_MODULE_12___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        className: "content-template ".concat(props.className)
      }, dataSource.OverPack, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(rc_tween_one__WEBPACK_IMPORTED_MODULE_11__["TweenOneGroup"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        component: antd__WEBPACK_IMPORTED_MODULE_10__["Row"],
        key: "ul",
        enter: {
          y: '+=30',
          opacity: 0,
          type: 'from',
          ease: 'easeOutQuad'
        },
        leave: {
          y: '+=30',
          opacity: 0,
          ease: 'easeOutQuad'
        }
      }, dataSource.block, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), childrenToRender))));
    }
  }]);

  return Content12;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (Content12);

/***/ }),

/***/ "./pages/Content8.jsx":
/*!****************************!*\
  !*** ./pages/Content8.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rc_tween_one__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-tween-one */ "rc-tween-one");
/* harmony import */ var rc_tween_one__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rc_tween_one__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rc_scroll_anim_lib_ScrollOverPack__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rc-scroll-anim/lib/ScrollOverPack */ "rc-scroll-anim/lib/ScrollOverPack");
/* harmony import */ var rc_scroll_anim_lib_ScrollOverPack__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rc_scroll_anim_lib_ScrollOverPack__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var rc_queue_anim__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rc-queue-anim */ "rc-queue-anim");
/* harmony import */ var rc_queue_anim__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(rc_queue_anim__WEBPACK_IMPORTED_MODULE_13__);









var _jsxFileName = "/Users/wangbing/\u524D\u7AEF/Home/pages/Content8.jsx";






var Content8 =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Content8, _React$PureComponent);

  function Content8() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Content8);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Content8)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "getDelay", function (e, b) {
      return e % b * 100 + Math.floor(e / b) * 100 + b * 100;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "getBlockChildren", function (item, i) {
      var children = item.children;
      var delay = _this.props.isMobile ? i * 50 : _this.getDelay(i, 24 / item.md);
      var liAnim = {
        y: 30,
        opacity: 0,
        type: 'from',
        ease: 'easeOutQuad',
        delay: delay
      };
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(rc_tween_one__WEBPACK_IMPORTED_MODULE_10___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        component: antd__WEBPACK_IMPORTED_MODULE_12__["Col"],
        animation: liAnim,
        key: i.toString()
      }, item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, children, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        className: "image-wrapper"
      }, children.img, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: children.img.children,
        alt: "img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, children.title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), children.title.children), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, children.content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), children.content.children)));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Content8, [{
    key: "render",
    value: function render() {
      var props = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.props);

      var dataSource = props.dataSource;
      delete props.dataSource;
      delete props.isMobile;
      var children = dataSource.block.children.map(this.getBlockChildren);
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, dataSource.wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, dataSource.page, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, dataSource.titleWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), dataSource.titleWrapper.children.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(item.name.indexOf('title') === 0 ? 'h1' : 'div', Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
          key: i.toString()
        }, item), typeof item.children === 'string' && item.children.match(/\.(svg|gif|jpg|jpeg|png|JPG|PNG|GIF|JPEG)$/) ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('img', {
          src: item.children,
          alt: 'img'
        }) : item.children);
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(rc_scroll_anim_lib_ScrollOverPack__WEBPACK_IMPORTED_MODULE_11___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, dataSource.OverPack, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(rc_queue_anim__WEBPACK_IMPORTED_MODULE_13___default.a, {
        type: "bottom",
        key: "img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_12__["Row"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, dataSource.block, {
        key: "img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), children)))));
    }
  }]);

  return Content8;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (Content8);

/***/ }),

/***/ "./pages/Content9.jsx":
/*!****************************!*\
  !*** ./pages/Content9.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rc_scroll_anim_lib_ScrollOverPack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-scroll-anim/lib/ScrollOverPack */ "rc-scroll-anim/lib/ScrollOverPack");
/* harmony import */ var rc_scroll_anim_lib_ScrollOverPack__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rc_scroll_anim_lib_ScrollOverPack__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rc_queue_anim__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rc-queue-anim */ "rc-queue-anim");
/* harmony import */ var rc_queue_anim__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rc_queue_anim__WEBPACK_IMPORTED_MODULE_11__);









var _jsxFileName = "/Users/wangbing/\u524D\u7AEF/Home/pages/Content9.jsx";




var Content9 =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Content9, _React$PureComponent);

  function Content9() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Content9);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Content9)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "getBlockChildren", function (block, i) {
      var isMobile = _this.props.isMobile;
      var item = block.children;
      var textWrapper = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(rc_queue_anim__WEBPACK_IMPORTED_MODULE_11___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        key: "text",
        leaveReverse: true,
        delay: isMobile ? [0, 100] : 0
      }, item.textWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        key: "time"
      }, item.time, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), item.time.children), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        key: "title"
      }, item.title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, item.icon, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: item.icon.children,
        alt: "img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      })), item.title.children), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        key: "p"
      }, item.content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), item.content.children));
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(rc_scroll_anim_lib_ScrollOverPack__WEBPACK_IMPORTED_MODULE_10___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        key: i.toString()
      }, block, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), isMobile && textWrapper, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(rc_queue_anim__WEBPACK_IMPORTED_MODULE_11___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        className: "image-wrapper",
        key: "image",
        type: isMobile ? 'right' : 'bottom',
        leaveReverse: true,
        delay: isMobile ? [100, 0] : 0
      }, item.imgWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        key: "image"
      }, item.img, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: item.img.children,
        alt: "img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        key: "name",
        className: "name-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        key: "name"
      }, item.name, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), item.name.children), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        key: "post"
      }, item.post, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), item.post.children))), !isMobile && textWrapper);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Content9, [{
    key: "render",
    value: function render() {
      var props = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.props);

      var dataSource = props.dataSource;
      delete props.dataSource;
      delete props.isMobile;
      var children = dataSource.block.children.map(this.getBlockChildren);
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, dataSource.wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, dataSource.page, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, dataSource.titleWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), dataSource.titleWrapper.children.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(item.name.indexOf('title') === 0 ? 'h1' : 'div', Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
          key: i.toString()
        }, item), typeof item.children === 'string' && item.children.match(/\.(svg|gif|jpg|jpeg|png|JPG|PNG|GIF|JPEG)$/) ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('img', {
          src: item.children,
          alt: 'img'
        }) : item.children);
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, dataSource.block, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), children)));
    }
  }]);

  return Content9;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (Content9);

/***/ }),

/***/ "./pages/Footer2.jsx":
/*!***************************!*\
  !*** ./pages/Footer2.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rc_tween_one__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-tween-one */ "rc-tween-one");
/* harmony import */ var rc_tween_one__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rc_tween_one__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rc_scroll_anim_lib_ScrollOverPack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-scroll-anim/lib/ScrollOverPack */ "rc-scroll-anim/lib/ScrollOverPack");
/* harmony import */ var rc_scroll_anim_lib_ScrollOverPack__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rc_scroll_anim_lib_ScrollOverPack__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "/Users/wangbing/\u524D\u7AEF/Home/pages/Footer2.jsx";




var Footer2 =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Footer2, _React$PureComponent);

  function Footer2() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Footer2);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Footer2).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Footer2, [{
    key: "render",
    value: function render() {
      var props = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.props);

      var dataSource = props.dataSource;
      delete props.dataSource;
      delete props.isMobile;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, dataSource.wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rc_scroll_anim_lib_ScrollOverPack__WEBPACK_IMPORTED_MODULE_9___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, dataSource.OverPack, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rc_tween_one__WEBPACK_IMPORTED_MODULE_8___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, dataSource.links, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), dataSource.links.children.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          key: i.toString()
        }, item, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          src: item.children,
          height: "100%",
          alt: "img",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }));
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(rc_tween_one__WEBPACK_IMPORTED_MODULE_8___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        animation: {
          x: '+=30',
          opacity: 0,
          type: 'from'
        },
        key: "copyright"
      }, dataSource.copyright, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), dataSource.copyright.children.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(item.name.indexOf('title') === 0 ? 'h1' : 'div', Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
          key: i.toString()
        }, item), typeof item.children === 'string' && item.children.match(/\.(svg|gif|jpg|jpeg|png|JPG|PNG|GIF|JPEG)$/) ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', {
          src: item.children,
          alt: 'img'
        }) : item.children);
      }))));
    }
  }]);

  return Footer2;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (Footer2);

/***/ }),

/***/ "./pages/Nav2.jsx":
/*!************************!*\
  !*** ./pages/Nav2.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rc_tween_one__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-tween-one */ "rc-tween-one");
/* harmony import */ var rc_tween_one__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rc_tween_one__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rc_scroll_anim__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rc-scroll-anim */ "rc-scroll-anim");
/* harmony import */ var rc_scroll_anim__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rc_scroll_anim__WEBPACK_IMPORTED_MODULE_11__);









var _jsxFileName = "/Users/wangbing/\u524D\u7AEF/Home/pages/Nav2.jsx";




var Header =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Header, _React$Component);

  function Header(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Header);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Header).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "phoneClick", function () {
      var phoneOpen = !_this.state.phoneOpen;

      _this.setState({
        phoneOpen: phoneOpen,
        menuHeight: phoneOpen ? _this.menu.current.dom.scrollHeight : 0
      });
    });

    _this.state = {
      phoneOpen: false,
      menuHeight: 0
    };
    _this.menu = react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    return _this;
  }
  /*
  componentDidMount() {
    // 如果是 react 16.3 以下版本请使用 findDOMNode;
    this.menuDom = findDOMNode(this.menu);
  }
  */


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Header, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.props);

      var dataSource = props.dataSource,
          isMobile = props.isMobile;
      delete props.dataSource;
      delete props.isMobile;
      var _this$state = this.state,
          menuHeight = _this$state.menuHeight,
          phoneOpen = _this$state.phoneOpen;
      var navData = dataSource.Menu.children;

      var navChildren = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(navData).map(function (key, i) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(rc_scroll_anim__WEBPACK_IMPORTED_MODULE_11__["Link"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          key: i.toString()
        }, navData[key], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }), navData[key].children);
      });

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(rc_tween_one__WEBPACK_IMPORTED_MODULE_10___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        component: "header",
        animation: {
          opacity: 0,
          type: 'from'
        }
      }, dataSource.wrapper, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, dataSource.page, {
        className: "".concat(dataSource.page.className).concat(phoneOpen ? ' open' : ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(rc_tween_one__WEBPACK_IMPORTED_MODULE_10___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        animation: {
          x: -30,
          type: 'from',
          ease: 'easeOutQuad'
        }
      }, dataSource.logo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        width: "100%",
        src: dataSource.logo.children,
        alt: "img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      })), isMobile && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, dataSource.mobileMenu, {
        onClick: function onClick() {
          _this2.phoneClick();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(rc_tween_one__WEBPACK_IMPORTED_MODULE_10___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, dataSource.Menu, {
        animation: {
          x: 30,
          type: 'from',
          ease: 'easeOutQuad'
        },
        ref: this.menu // {(c) => { this.menu = c; }}
        ,
        style: isMobile ? {
          height: menuHeight
        } : null,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), navChildren)));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./pages/data.source.js":
/*!******************************!*\
  !*** ./pages/data.source.js ***!
  \******************************/
/*! exports provided: Nav20DataSource, Banner30DataSource, Content80DataSource, Content90DataSource, Content100DataSource, Content110DataSource, Content120DataSource, Footer20DataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav20DataSource", function() { return Nav20DataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Banner30DataSource", function() { return Banner30DataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content80DataSource", function() { return Content80DataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content90DataSource", function() { return Content90DataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content100DataSource", function() { return Content100DataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content110DataSource", function() { return Content110DataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content120DataSource", function() { return Content120DataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer20DataSource", function() { return Footer20DataSource; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Nav20DataSource = {
  isScrollLink: true,
  wrapper: {
    className: 'header2 home-page-wrapper jrhtw9ph4a-editor_css'
  },
  page: {
    className: 'home-page'
  },
  logo: {
    className: 'header2-logo',
    children: 'https://gw.alipayobjects.com/os/s/prod/seeconf/9b458a789d9a000312899b42a7542b9c.svg'
  },
  Menu: {
    className: 'header2-menu',
    children: [{
      name: 'Banner3_0',
      to: 'Banner3_0',
      children: '首页',
      className: 'active menu-item'
    }, {
      name: 'Content8_0',
      to: 'Content8_0',
      children: '特邀嘉宾',
      className: 'menu-item'
    }, {
      name: 'Content9_0',
      to: 'Content9_0',
      children: '会议日程',
      className: 'menu-item'
    }, {
      name: 'Content10_0',
      to: 'Content10_0',
      children: '大会地址',
      className: 'menu-item'
    }, {
      name: 'Content11_0',
      to: 'Content11_0',
      children: '展台展示',
      className: 'menu-item'
    }, {
      name: 'Content12_0',
      to: 'Content12_0',
      children: '特别鸣谢',
      className: 'menu-item'
    }]
  },
  mobileMenu: {
    className: 'header2-mobile-menu'
  }
};
var Banner30DataSource = {
  wrapper: {
    className: 'banner3'
  },
  textWrapper: {
    className: 'banner3-text-wrapper',
    children: [{
      name: 'nameEn',
      className: 'banner3-name-en',
      children: 'Seeking Experience & Engineering Conference'
    }, {
      name: 'slogan',
      className: 'banner3-slogan',
      children: '首届蚂蚁金服体验科技大会',
      texty: true
    }, {
      name: 'name',
      className: 'banner3-name',
      children: '探索极致用户体验与最佳工程实践探索'
    }, {
      name: 'button',
      className: 'banner3-button',
      children: '立即报名'
    }, {
      name: 'time',
      className: 'banner3-time',
      children: '2018.01.06 / 中国·杭州'
    }]
  }
};
var Content80DataSource = {
  wrapper: {
    className: 'home-page-wrapper content8-wrapper'
  },
  page: {
    className: 'home-page content8'
  },
  OverPack: {
    playScale: 0.3
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{
      name: 'image',
      children: 'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
      className: 'title-image'
    }, {
      name: 'title',
      children: '特邀嘉宾',
      className: 'title-h1'
    }]
  },
  block: {
    className: 'content-wrapper',
    children: [{
      name: 'block0',
      md: 6,
      xs: 24,
      className: 'content8-block-wrapper',
      children: {
        className: 'content8-block',
        img: {
          className: 'content8-img',
          children: 'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png'
        },
        title: {
          className: 'content8-title',
          children: 'Jack'
        },
        content: {
          className: 'content8-content',
          children: '公司+职位 信息暂缺'
        }
      }
    }, {
      name: 'block1',
      md: 6,
      xs: 24,
      className: 'content8-block-wrapper',
      children: {
        className: 'content8-block',
        img: {
          className: 'content8-img',
          children: 'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png'
        },
        title: {
          className: 'content8-title',
          children: 'Jack'
        },
        content: {
          className: 'content8-content',
          children: '公司+职位 信息暂缺'
        }
      }
    }, {
      name: 'block2',
      md: 6,
      xs: 24,
      className: 'content8-block-wrapper',
      children: {
        className: 'content8-block',
        img: {
          className: 'content8-img',
          children: 'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png'
        },
        title: {
          className: 'content8-title',
          children: 'Jack'
        },
        content: {
          className: 'content8-content',
          children: '公司+职位 信息暂缺'
        }
      }
    }, {
      name: 'block3',
      md: 6,
      xs: 24,
      className: 'content8-block-wrapper',
      children: {
        className: 'content8-block',
        img: {
          className: 'content8-img',
          children: 'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png'
        },
        title: {
          className: 'content8-title',
          children: 'Jack'
        },
        content: {
          className: 'content8-content',
          children: '公司+职位 信息暂缺'
        }
      }
    }, {
      name: 'block4',
      md: 6,
      xs: 24,
      className: 'content8-block-wrapper',
      children: {
        className: 'content8-block',
        img: {
          className: 'content8-img',
          children: 'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png'
        },
        title: {
          className: 'content8-title',
          children: 'Jack'
        },
        content: {
          className: 'content8-content',
          children: '公司+职位 信息暂缺'
        }
      }
    }, {
      name: 'block5',
      md: 6,
      xs: 24,
      className: 'content8-block-wrapper',
      children: {
        className: 'content8-block',
        img: {
          className: 'content8-img',
          children: 'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png'
        },
        title: {
          className: 'content8-title',
          children: 'Jack'
        },
        content: {
          className: 'content8-content',
          children: '公司+职位 信息暂缺'
        }
      }
    }, {
      name: 'block6',
      md: 6,
      xs: 24,
      className: 'content8-block-wrapper',
      children: {
        className: 'content8-block',
        img: {
          className: 'content8-img',
          children: 'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png'
        },
        title: {
          className: 'content8-title',
          children: 'Jack'
        },
        content: {
          className: 'content8-content',
          children: '公司+职位 信息暂缺'
        }
      }
    }, {
      name: 'block7',
      md: 6,
      xs: 24,
      className: 'content8-block-wrapper',
      children: {
        className: 'content8-block',
        img: {
          className: 'content8-img',
          children: 'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png'
        },
        title: {
          className: 'content8-title',
          children: 'Jack'
        },
        content: {
          className: 'content8-content',
          children: '公司+职位 信息暂缺'
        }
      }
    }]
  }
};
var Content90DataSource = {
  wrapper: {
    className: 'home-page-wrapper content9-wrapper'
  },
  page: {
    className: 'home-page content9'
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{
      name: 'image',
      children: 'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
      className: 'title-image'
    }, {
      name: 'title',
      children: '会议日程',
      className: 'title-h1'
    }]
  },
  block: {
    className: 'timeline',
    children: [{
      name: 'block0',
      className: 'block-wrapper',
      playScale: 0.3,
      children: {
        imgWrapper: {
          className: 'image-wrapper'
        },
        textWrapper: {
          className: 'text-wrapper'
        },
        img: {
          className: 'block-img',
          children: 'https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png'
        },
        icon: {
          className: 'block-icon',
          children: 'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg'
        },
        name: {
          className: 'block-name',
          children: '姓名'
        },
        post: {
          className: 'block-post',
          children: '公司 职位'
        },
        time: {
          className: 'block-time',
          children: '09:00 - 10:00'
        },
        title: {
          className: 'block-title',
          children: '开幕致辞'
        },
        content: {
          className: 'block-content',
          children: ''
        }
      }
    }, {
      name: 'block1',
      className: 'block-wrapper',
      playScale: 0.3,
      children: {
        imgWrapper: {
          className: 'image-wrapper'
        },
        textWrapper: {
          className: 'text-wrapper'
        },
        img: {
          className: 'block-img',
          children: 'https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png'
        },
        icon: {
          className: 'block-icon',
          children: 'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg'
        },
        name: {
          className: 'block-name',
          children: '姓名'
        },
        post: {
          className: 'block-post',
          children: '公司 职位'
        },
        time: {
          className: 'block-time',
          children: '09:00 - 10:00'
        },
        title: {
          className: 'block-title',
          children: '演示标题 - XYZ'
        },
        content: {
          className: 'block-content',
          children: '经过近 3 年的打磨，在助力中台产品研发效能提升的目标之上，包含设计语言、UI 资产、可视化以及产品体验相关的蚂蚁中台设计体系正在逐步成型。此次分享包含两部分，在介绍蚂蚁设计体系的同时，也会和大家分享我们在设计语言的部分探索。'
        }
      }
    }, {
      name: 'block2',
      className: 'block-wrapper',
      playScale: 0.3,
      children: {
        imgWrapper: {
          className: 'image-wrapper'
        },
        textWrapper: {
          className: 'text-wrapper'
        },
        img: {
          className: 'block-img',
          children: 'https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png'
        },
        icon: {
          className: 'block-icon',
          children: 'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg'
        },
        name: {
          className: 'block-name',
          children: '姓名'
        },
        post: {
          className: 'block-post',
          children: '公司 职位'
        },
        time: {
          className: 'block-time',
          children: '09:00 - 10:00'
        },
        title: {
          className: 'block-title',
          children: '演示标题 - XYZ'
        },
        content: {
          className: 'block-content',
          children: '经过近 3 年的打磨，在助力中台产品研发效能提升的目标之上，包含设计语言、UI 资产、可视化以及产品体验相关的蚂蚁中台设计体系正在逐步成型。此次分享包含两部分，在介绍蚂蚁设计体系的同时，也会和大家分享我们在设计语言的部分探索。'
        }
      }
    }, {
      name: 'block3',
      className: 'block-wrapper',
      playScale: 0.3,
      children: {
        imgWrapper: {
          className: 'image-wrapper'
        },
        textWrapper: {
          className: 'text-wrapper'
        },
        img: {
          className: 'block-img',
          children: 'https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png'
        },
        icon: {
          className: 'block-icon',
          children: 'https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg'
        },
        name: {
          className: 'block-name',
          children: '姓名'
        },
        post: {
          className: 'block-post',
          children: '公司 职位'
        },
        time: {
          className: 'block-time',
          children: '09:00 - 10:00'
        },
        title: {
          className: 'block-title',
          children: '演示标题 - XYZ'
        },
        content: {
          className: 'block-content',
          children: '经过近 3 年的打磨，在助力中台产品研发效能提升的目标之上，包含设计语言、UI 资产、可视化以及产品体验相关的蚂蚁中台设计体系正在逐步成型。此次分享包含两部分，在介绍蚂蚁设计体系的同时，也会和大家分享我们在设计语言的部分探索。'
        }
      }
    }]
  }
};
var Content100DataSource = {
  wrapper: {
    className: 'home-page-wrapper content10-wrapper'
  },
  Content: {
    className: 'icon-wrapper',
    children: {
      icon: {
        className: 'icon',
        children: 'https://gw.alipayobjects.com/zos/rmsportal/zIUVomgdcKEKcnnQdOzw.svg',
        name: '主要图标'
      },
      iconShadow: {
        className: 'icon-shadow',
        children: 'https://gw.alipayobjects.com/zos/rmsportal/WIePwurYppfVvDNASZRN.svg',
        name: '图标影阴'
      },
      url: {
        children: 'https://gaode.com/place/B0FFH3KPBX',
        name: '跳转地址'
      },
      title: {
        children: '大会地址',
        name: '弹框标题'
      },
      content: {
        children: '蚂蚁 Z 空间  浙江省杭州市西湖区西溪路556号',
        name: '弹框内容'
      }
    }
  }
};
var Content110DataSource = {
  OverPack: {
    className: 'home-page-wrapper content11-wrapper',
    playScale: 0.3
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{
      name: 'image',
      children: 'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
      className: 'title-image'
    }, {
      name: 'title',
      children: '丰富的特色展台',
      className: 'title-h1'
    }, {
      name: 'content',
      children: '特色展台包括 Ant Design 、AntV、AntG、Egg 等明星产品，更有产品专家',
      className: 'title-content'
    }, {
      name: 'content2',
      children: '现场问诊，为你答疑解难',
      className: 'title-content'
    }]
  },
  button: {
    className: '',
    children: {
      a: {
        className: 'button',
        href: '#',
        children: '立即报名'
      }
    }
  }
};
var Content120DataSource = {
  wrapper: {
    className: 'home-page-wrapper content12-wrapper'
  },
  page: {
    className: 'home-page content12'
  },
  OverPack: {
    playScale: 0.3,
    className: ''
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{
      name: 'image',
      children: 'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
      className: 'title-image'
    }, {
      name: 'title',
      children: '特别鸣谢',
      className: 'title-h1'
    }]
  },
  block: {
    className: 'img-wrapper',
    children: [{
      name: 'block0',
      className: 'block',
      md: 8,
      xs: 24,
      children: {
        wrapper: {
          className: 'block-content'
        },
        img: {
          children: 'https://gw.alipayobjects.com/zos/rmsportal/TFicUVisNHTOEeMYXuQF.svg'
        }
      }
    }, {
      name: 'block1',
      className: 'block',
      md: 8,
      xs: 24,
      children: {
        wrapper: {
          className: 'block-content'
        },
        img: {
          children: 'https://gw.alipayobjects.com/zos/rmsportal/hkLGkrlCEkGZeMQlnEkD.svg'
        }
      }
    }, {
      name: 'block2',
      className: 'block',
      md: 8,
      xs: 24,
      children: {
        wrapper: {
          className: 'block-content'
        },
        img: {
          children: 'https://gw.alipayobjects.com/zos/rmsportal/bqyPRSZmhvrsfJrBvASi.svg'
        }
      }
    }, {
      name: 'block3',
      className: 'block',
      md: 8,
      xs: 24,
      children: {
        wrapper: {
          className: 'block-content'
        },
        img: {
          children: 'https://gw.alipayobjects.com/zos/rmsportal/UcsyszzOabdCYDkoPPnM.svg'
        }
      }
    }, {
      name: 'block4',
      className: 'block',
      md: 8,
      xs: 24,
      children: {
        wrapper: {
          className: 'block-content'
        },
        img: {
          children: 'https://gw.alipayobjects.com/zos/rmsportal/kRBeaICGexAmVjqBEqgw.svg'
        }
      }
    }, {
      name: 'block5',
      className: 'block',
      md: 8,
      xs: 24,
      children: {
        wrapper: {
          className: 'block-content'
        },
        img: {
          children: 'https://gw.alipayobjects.com/zos/rmsportal/ftBIiyJcCHpHEioRvPsV.svg'
        }
      }
    }]
  }
};
var Footer20DataSource = {
  wrapper: {
    className: 'home-page-wrapper footer2-wrapper'
  },
  OverPack: {
    className: 'home-page footer2',
    playScale: 0.05
  },
  copyright: {
    className: 'copyright',
    children: [{
      name: 'image',
      children: 'https://gw.alipayobjects.com/zos/rmsportal/NuuAwJBxewWglRSoNjET.png',
      className: 'copyright-logo'
    }, {
      name: 'group',
      children: '蚂蚁金服体验科技大会',
      className: 'copyright-group'
    }, {
      name: 'image2',
      children: 'https://gw.alipayobjects.com/zos/rmsportal/fgGmQUfiUfSBfvsQpfOj.svg',
      className: 'copyright-line'
    }, {
      name: 'copyright',
      children: 'Copyright © 蚂蚁金融服务集团',
      className: 'copyright-text'
    }]
  },
  links: {
    className: 'links',
    children: [{
      name: 'weibo',
      href: '#',
      className: 'links-weibo',
      children: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjZweCIgaGVpZ2h0PSIyMXB4IiB2aWV3Qm94PSIwIDAgMjYgMjEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ3LjEgKDQ1NDIyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT53ZWlibzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuNCI+CiAgICAgICAgPGcgaWQ9IumhteiEmiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU2LjAwMDAwMCwgLTIxLjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxnIGlkPSJ3ZWlibyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTYuMDAwMDAwLCAyMS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOS4wOTMyNDIyLDkuNDM5OTgwNzIgQzE5LjUwNzk3MjcsOC4zOTk3OTc1OSAxOS41NTA5NTksNy41MDI1NjYyNyAxOS4xMDExMzg3LDYuODYyNTcyMjkgQzE4LjI1Nzk5MjIsNS42NjIzNTkwNCAxNS45NTA2Njk5LDUuNzI2OTAyNDEgMTMuMzA1NzI4NSw2LjgzMDMxMzI1IEMxMy4zMDU3Mjg1LDYuODI4OTQ2OTkgMTIuNDc1MzAyNyw3LjE5MjQ3NDcgMTIuNjg3NTkzNyw2LjUzNTc1NjYzIEMxMy4wOTQ0MDIzLDUuMjMyNTY3NDcgMTMuMDMzMjg3MSw0LjE0MTI1MDYgMTIuNDAwMTIxMSwzLjUxMDg5NjM5IEMxMC45NjU0MjM4LDIuMDgwMTEzMjUgNy4xNDk3NzE0OCwzLjU2NTA2NjI3IDMuODc3MjUsNi44MjQ1NDQ1OCBDMS40MjcwMjkzLDkuMjY2NDkwMzYgMC4wMDQwODc4OTA2MiwxMS44NTQ2NzcxIDAuMDA0MDg3ODkwNjIsMTQuMDkyNzcxMSBDMC4wMDQwODc4OTA2MiwxOC4zNzM1ODMxIDUuNTEyOTkwMjMsMjAuOTc1OTYzOSAxMC45MDI1NTY2LDIwLjk3NTk2MzkgQzE3Ljk2NzIxODgsMjAuOTc1OTYzOSAyMi42NjY4OTY1LDE2Ljg4NTU0MzQgMjIuNjY2ODk2NSwxMy42MzgxODQzIEMyMi42NjY4OTY1LDExLjY3NjE3NzEgMjEuMDA4NTU4NiwxMC41NjI3OTc2IDE5LjUxODM1NzQsMTAuMTAyMDYyNyBDMTkuMTUyNjA1NSw5Ljk5MzExNTY2IDE4LjkwMTU2ODQsOS45MTgzNzU5IDE5LjA5MzIxNjgsOS40Mzk5ODA3MiBMMTkuMDkzMjQyMiw5LjQzOTk4MDcyIFogTTIuNjI0NzU1ODYsMTUuMTE0MTMwMSBDMi4zNDU1NjA1NSwxMi4zMDA5Mzk4IDUuNjA2NTI5Myw5LjY3NzI1NTQyIDkuOTA2MzMwMDgsOS4yNTM4MTQ0NiBDMTQuMjA3MDk1Nyw4LjgyOTU4OTE2IDE3LjkxOTQzMzYsMTAuNzY3MDI4OSAxOC4xOTg2MDM1LDEzLjU3OTQwOTYgQzE4LjQ3NzIxNDgsMTYuMzkzNzEzMyAxNS4yMTc2MTcyLDE5LjAxODE4MTkgMTAuOTE2ODI2MiwxOS40NDE4MjUzIEM2LjYxNjY2OTkyLDE5Ljg2NDMwNDggMi45MDQzMDY2NCwxNy45Mjc4NTE4IDIuNjI0NzU1ODYsMTUuMTE0MTMwMSBaIE0xMS4zNDY3OTEsMTEuNDE4OTE0NSBDOS4zMDAzMzIwMywxMC44ODgwNjk5IDYuOTg3MjIwNywxMS45MDQ0NDQ2IDYuMDk4MzcxMDksMTMuNzAxNDEyIEM1LjE5MzE0NDUzLDE1LjUzMzkyNzcgNi4wNjg0ODYzMywxNy41NjgxOTUyIDguMTM1NzkxMDIsMTguMjMzMzM4NiBDMTAuMjc3NjkzNCwxOC45MjEzNTQyIDEyLjgwMTcyNDYsMTcuODY2NzQ5NCAxMy42Nzk3ODMyLDE1Ljg4ODk3OTUgQzE0LjU0NTI5ODgsMTMuOTU1MjA4NCAxMy40NjQ0MTk5LDExLjk2NDE4MDcgMTEuMzQ2NzkxLDExLjQxODkxNDUgWiBNOS43ODM4OTY0OCwxNi4wOTg5Nzk1IEM5LjM2Nzk5ODA1LDE2Ljc2MDEgOC40NzcyNDQxNCwxNy4wNDk4MjQxIDcuODA2MDY4MzYsMTYuNzQ0NzE2OSBDNy4xNDQ5NDcyNywxNi40NDQ5OTg4IDYuOTUwMDIzNDQsMTUuNjc2NSA3LjM2NjA5OTYxLDE1LjAzMTY5ODggQzcuNzc2OTcwNywxNC4zODk4MDcyIDguNjM3NjYyMTEsMTQuMTAzMzQ3IDkuMzAzODEwNTUsMTQuMzgxNzEwOCBDOS45NzcyOTY4NywxNC42Njc4MTY5IDEwLjE5MjY2MDIsMTUuNDMwNzQ5NCA5Ljc4Mzg5NjQ4LDE2LjA5ODk3OTUgWiBNMTEuMTU0MTc3NywxNC4zNDYxODggQzExLjAwMzc4OTEsMTQuNjAyODY4NyAxMC42NzExOTczLDE0LjcyNTgzMjUgMTAuNDEwOTE4LDE0LjYxOTAxMDggQzEwLjE1NDQ3MjcsMTQuNTE0MTEyIDEwLjA3NDI2MzcsMTQuMjI3NDQ5NCAxMC4yMTk4MjgxLDEzLjk3NTM3MzUgQzEwLjM2OTgzNTksMTMuNzI0ODQxIDEwLjY4OTUyOTMsMTMuNjAyNjYxNCAxMC45NDQ5ODQ0LDEzLjcwMzMzNDkgQzExLjIwNDcwNTEsMTMuNzk4MjE0NSAxMS4yOTc4Mzc5LDE0LjA4ODM0MzQgMTEuMTU0MjAzMSwxNC4zNDYxODggTDExLjE1NDE3NzcsMTQuMzQ2MTg4IFogTTI0LjIwOTc4MzIsMi4yNjg0MDQ4MiBDMjUuOTE2ODk2NSw0LjE1MTI2OTg4IDI2LjM3Njc0NjEsNi43MTgxMDI0MSAyNS42NDgzMTQ1LDguOTcwNjE4MDcgQzI1LjY0ODEzNjcsOC45NzE3ODE5MyAyNS42NDgxMzY3LDguOTczNjc5NTIgMjUuNjQ4MTM2Nyw4Ljk3NDQ2Mzg2IEMyNS40Nzg4MzIsOS40OTQzNTMwMSAyNC45MTgxNTYyLDkuNzc5NDcyMjkgMjQuMzk2MDIzNCw5LjYxMDk5MTU3IEMyMy44NzE5NjA5LDkuNDQyNDg1NTQgMjMuNTg1ODU5NCw4Ljg4NDc0NTc4IDIzLjc1NTEzODcsOC4zNjI5MDg0MyBMMjMuNzU0OTM1NSw4LjM2MjMyNjUxIEMyNC4yNzM3OTMsNi43NjE3MjE2OSAyMy45NDQ4NTc0LDQuOTM1MzI4OTIgMjIuNzMzMjY3NiwzLjU5Njc2ODY3IEMyMS41MTk3MjI3LDIuMjU4MjA4NDMgMTkuNzMxNjM4NywxLjc0NjM5MDM2IDE4LjA3OTA2NDUsMi4wOTU4NzU5IEMxNy41NDE3MjI3LDIuMjEwNTY2MjcgMTcuMDEzMDM5MSwxLjg2ODM5Mjc3IDE2Ljg5ODkwODIsMS4zMzM1IEMxNi43ODMzODA5LDAuNzk4ODA5NjM5IDE3LjEyNjQwODIsMC4yNzE2MDg0MzQgMTcuNjYzMzY5MSwwLjE1NzUgTDE3LjY2NDEzMDksMC4xNTc1IEMxOS45ODcyOTY5LC0wLjMzNDU1NzgzMSAyMi41MDQwMTU2LDAuMzgzNjE2ODY3IDI0LjIwOTc4MzIsMi4yNjgzNzk1MiBMMjQuMjA5NzgzMiwyLjI2ODQwNDgyIFogTTIxLjU4OTUyMTUsNC42MjQ0NTMwMSBMMjEuNTg5NTIxNSw0LjYyNDI3NTkgQzIyLjQyMTg3Nyw1LjU0MjI3OTUyIDIyLjY0NDE3MTksNi43OTE4ODA3MiAyMi4yODg0NDkyLDcuODg5NyBDMjIuMTQzMjY1Niw4LjMzODEzODU1IDIxLjY2MDg2OTEsOC41ODI5MDI0MSAyMS4yMTA0NjQ4LDguNDM5MzY4NjcgQzIwLjc2MDQ0MTQsOC4yOTM3MzQ5NCAyMC41MTQ0MzE2LDcuODEyNDU1NDIgMjAuNjU5NDEyMSw3LjM2NDgyNjUxIEwyMC42NTg4MjgxLDcuMzY0ODI2NTEgQzIwLjgzMzcxODgsNi44MjgxODc5NSAyMC43MjQyMDksNi4yMTY0NTU0MiAyMC4zMTc5NTksNS43NjcyNTc4MyBDMTkuOTExNTA1OSw1LjMxOTYwMzYxIDE5LjMxMTcwMzEsNS4xNDk3NTY2MyAxOC43NTg1MTc2LDUuMjY2NTQ2OTkgTDE4Ljc1ODUxNzYsNS4yNjU2MTA4NCBDMTguMjk3MTQ0NSw1LjM2NTkwNDgyIDE3Ljg0MjI5NjksNS4wNzA0MTIwNSAxNy43NDMxOTczLDQuNjExMjIwNDggQzE3LjY0MzkxOTksNC4xNDk3MjY1MSAxNy45Mzg3MDUxLDMuNjk1OTI0MSAxOC40MDE0NDkyLDMuNTk3NzMwMTIgQzE5LjUzMzQxNDEsMy4zNTc5NTA2IDIwLjc1OTI5ODgsMy43MDY4NTQyMiAyMS41ODk1MjE1LDQuNjI0NDUzMDEgTDIxLjU4OTUyMTUsNC42MjQ0NTMwMSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+'
    }, {
      name: 'zhihu',
      href: '#',
      className: 'links-zhihu',
      children: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjFweCIgaGVpZ2h0PSIyMXB4IiB2aWV3Qm94PSIwIDAgMjEgMjEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ3LjEgKDQ1NDIyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7nn6XkuY48L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIwLjQiPgogICAgICAgIDxnIGlkPSLpobXohJoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTQuMDAwMDAwLCAtMjEuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9IuefpeS5jiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE0LjAwMDAwMCwgMjEuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNi43Nzg1ODQ2MSwxMS43MjI5IEwxMS4yOTA5Nzg1LDExLjcyMjkgQzExLjI5MDk3ODUsMTAuNjQ0OSAxMC43OTEyODYyLDEwLjAxMzUgMTAuNzkxMjg2MiwxMC4wMTM1IEw2Ljg3NDM4NzcsMTAuMDEzNSBDNi45Njc0MzM4NSw4LjA2MTE5OTk5IDcuMDUwODMwNzcsNS41NTU4OTk5OSA3LjA4MTE1NjkzLDQuNjI0ODk5OTkgTDEwLjgwNjQ0OTIsNC42MjQ4OTk5OSBDMTAuODA2NDQ5Miw0LjYyNDg5OTk5IDEwLjc4NTc3MjMsMy4wMjQgMTAuMzcyMjMzOCwzLjAyNCBMMy44MjI0NzM4NSwzLjAyNCBDMy44MjI0NzM4NSwzLjAyNCA0LjIxNjcxMzg0LDAuOTMwMyA0Ljc0MTkwNzY5LDAuMDA1NjAwMDA2ODQgQzQuNzQxOTA3NjksMC4wMDU2MDAwMDY4NCAyLjc4NjU1OTk5LC0wLjEwMTQ5OTk5MyAyLjExOTM4NDYyLDIuNTQ2NjAwMDEgQzEuNDUyMjA5MjQsNS4xOTQ3MDAwMSAwLjQ1MjEzNTM5MSw2Ljc5NTYgMC4zNDY2ODMwODQsNy4wODgxOTk5OSBDMC4yNDA1NDE1NTIsNy4zODA3OTk5OSAwLjkyMjE5MDc2OSw3LjIyNjc5OTk5IDEuMjEwMjg5MjIsNy4wODgxOTk5OSBDMS40OTgzODc2OCw2Ljk0OTU5OTk5IDIuODAyNDEyMyw2LjQ3MjIgMy4xODE0ODkyNCw0LjYyNDg5OTk5IEw1LjIwNTc2MDAxLDQuNjI0ODk5OTkgQzUuMjMzMzI5MjMsNS43OTYgNS4zMTMyODAwMSw5LjM4NDE5OTk5IDUuMjg4NDY3NywxMC4wMTM1IEwxLjExOTMxMDc2LDEwLjAxMzUgQzAuNTI3OTUwNzYzLDEwLjQ0NDcgMC4zMzE1MTk5OTMsMTEuNzIyOSAwLjMzMTUxOTk5MywxMS43MjI5IEw1LjA5NjE3MjMxLDExLjcyMjkgQzQuODk2OTg0NjMsMTMuMDU5MiA0LjU0ODIzMzg1LDE0Ljc4MTkgNC4wNjAyNTg0NywxNS42OTQ3IEMzLjI4NzYzMDc3LDE3LjE0MyAyLjg3ODIyNzY5LDE4LjQ2NjcgMC4wODk1OTk5OTMzLDIwLjc0NDUgQzAuMDg5NTk5OTkzMywyMC43NDQ1IC0wLjM2NTI5MjMxNCwyMS4wODMzIDEuMDQ0MTg0NjIsMjAuOTYwMSBDMi40NTQzNTA3NywyMC44MzY5IDMuNzg4MDEyMzEsMjAuNDY3MyA0LjcxMjk1OTk5LDE4LjU4OTIgQzUuMjU1MTIxMjcsMTcuNDY5MTYwNiA1LjcxMTU5MTYsMTYuMzA4Mzk4NyA2LjA3ODMyNjE2LDE1LjExNzIgTDYuMDc2OTQ3NjksMTUuMTIyMSBMMTAuMDAzNDk1NCwxOS43MTM0IEMxMC4wMDM0OTU0LDE5LjcxMzQgMTAuNTE5MDQsMTguNDgxNCAxMC4xMzk5NjMxLDE3LjEyNjkgTDcuMjI5MzQxNTMsMTMuODE1OSBMNi4yNDM3NDE1NSwxNC41NTY1IEw2LjI0MzA1MjMsMTQuNTYgQzYuNTE2Njc2OTEsMTMuNTg1NiA2LjcxMzEwNzY4LDEyLjYyMjQgNi43NzQ0NDkyMiwxMS43ODQ1IEw2Ljc3OTI3Mzg1LDExLjcyMjkgTDYuNzc4NTg0NjEsMTEuNzIyOSBaIE0xMi4yMzEwODkyLDIuNjg1MjAwMDEgTDEyLjIzMTA4OTIsMTguNTczOCBMMTMuODc1NTkzOSwxOC41NzM4IEwxNC41NDk2NjE1LDIwLjQ4NjkgTDE3LjQwMDMyLDE4LjU3MzggTDIwLjk5MzI4LDE4LjU3MzggTDIwLjk5MzI4LDIuNjg1MjAwMDEgTDEyLjIzMTA4OTIsMi42ODUyMDAwMSBaIE0xOS4zMDA1MjkyLDE2Ljg2NTEgTDE3LjQzMjcxMzgsMTYuODY1MSBMMTUuMTAzODAzMSwxOC40Mjc1IEwxNC41NTMxMDc3LDE2Ljg2NTEgTDEzLjk3MjA4NjEsMTYuODY1MSBMMTMuOTcyMDg2MSw0LjQ1ODMgTDE5LjI5OTg0LDQuNDU4MyBMMTkuMjk5ODQsMTYuODY1MSBMMTkuMzAwNTI5MiwxNi44NjUxIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4='
    }]
  }
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var enquire_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! enquire-js */ "enquire-js");
/* harmony import */ var enquire_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(enquire_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Nav2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Nav2 */ "./pages/Nav2.jsx");
/* harmony import */ var _Banner3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Banner3 */ "./pages/Banner3.js");
/* harmony import */ var _Content8__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Content8 */ "./pages/Content8.jsx");
/* harmony import */ var _Content9__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Content9 */ "./pages/Content9.jsx");
/* harmony import */ var _Content10__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Content10 */ "./pages/Content10.jsx");
/* harmony import */ var _Content11__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Content11 */ "./pages/Content11.jsx");
/* harmony import */ var _Content12__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Content12 */ "./pages/Content12.jsx");
/* harmony import */ var _Footer2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Footer2 */ "./pages/Footer2.jsx");
/* harmony import */ var _data_source__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./data.source */ "./pages/data.source.js");
/* harmony import */ var _less_antMotionStyle_less__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../less/antMotionStyle.less */ "./less/antMotionStyle.less");
/* harmony import */ var _less_antMotionStyle_less__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_less_antMotionStyle_less__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_17__);





var _jsxFileName = "/Users/wangbing/\u524D\u7AEF/Home/pages/index.js";

/* eslint no-undef: 0 */

/* eslint arrow-parens: 0 */













var isMobile;
Object(enquire_js__WEBPACK_IMPORTED_MODULE_6__["enquireScreen"])(function (b) {
  isMobile = b;
});

var Home =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, _React$Component);

  function Home(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home).call(this, props));
    _this.state = {
      isMobile: isMobile,
      show: true // 如果不是 dva 2.0 请删除

    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // 适配手机屏幕;
      Object(enquire_js__WEBPACK_IMPORTED_MODULE_6__["enquireScreen"])(function (b) {
        _this2.setState({
          isMobile: !!b
        });
      }); // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；

      /* 如果不是 dva 2.0 请删除 start */

      if (location.port) {
        // 样式 build 时间在 200-300ms 之间;
        setTimeout(function () {
          _this2.setState({
            show: true
          });
        }, 500);
      }
      /* 如果不是 dva 2.0 请删除 end */

    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = [react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Nav2__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: "Nav2_0",
        key: "Nav2_0",
        dataSource: _data_source__WEBPACK_IMPORTED_MODULE_15__["Nav20DataSource"],
        isMobile: this.state.isMobile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Banner3__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "Banner3_0",
        key: "Banner3_0",
        dataSource: _data_source__WEBPACK_IMPORTED_MODULE_15__["Banner30DataSource"],
        isMobile: this.state.isMobile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Content8__WEBPACK_IMPORTED_MODULE_9__["default"], {
        id: "Content8_0",
        key: "Content8_0",
        dataSource: _data_source__WEBPACK_IMPORTED_MODULE_15__["Content80DataSource"],
        isMobile: this.state.isMobile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Content9__WEBPACK_IMPORTED_MODULE_10__["default"], {
        id: "Content9_0",
        key: "Content9_0",
        dataSource: _data_source__WEBPACK_IMPORTED_MODULE_15__["Content90DataSource"],
        isMobile: this.state.isMobile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Content10__WEBPACK_IMPORTED_MODULE_11__["default"], {
        id: "Content10_0",
        key: "Content10_0",
        dataSource: _data_source__WEBPACK_IMPORTED_MODULE_15__["Content100DataSource"],
        isMobile: this.state.isMobile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Content11__WEBPACK_IMPORTED_MODULE_12__["default"], {
        id: "Content11_0",
        key: "Content11_0",
        dataSource: _data_source__WEBPACK_IMPORTED_MODULE_15__["Content110DataSource"],
        isMobile: this.state.isMobile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Content12__WEBPACK_IMPORTED_MODULE_13__["default"], {
        id: "Content12_0",
        key: "Content12_0",
        dataSource: _data_source__WEBPACK_IMPORTED_MODULE_15__["Content120DataSource"],
        isMobile: this.state.isMobile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Footer2__WEBPACK_IMPORTED_MODULE_14__["default"], {
        id: "Footer2_0",
        key: "Footer2_0",
        dataSource: _data_source__WEBPACK_IMPORTED_MODULE_15__["Footer20DataSource"],
        isMobile: this.state.isMobile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      })];
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "templates-wrapper",
        ref: function ref(d) {
          _this3.dom = d;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, this.state.show && children);
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/wangbing/前端/Home/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "enquire-js":
/*!*****************************!*\
  !*** external "enquire-js" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("enquire-js");

/***/ }),

/***/ "rc-queue-anim":
/*!********************************!*\
  !*** external "rc-queue-anim" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-queue-anim");

/***/ }),

/***/ "rc-scroll-anim":
/*!*********************************!*\
  !*** external "rc-scroll-anim" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-scroll-anim");

/***/ }),

/***/ "rc-scroll-anim/lib/ScrollOverPack":
/*!****************************************************!*\
  !*** external "rc-scroll-anim/lib/ScrollOverPack" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-scroll-anim/lib/ScrollOverPack");

/***/ }),

/***/ "rc-texty":
/*!***************************!*\
  !*** external "rc-texty" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-texty");

/***/ }),

/***/ "rc-tween-one":
/*!*******************************!*\
  !*** external "rc-tween-one" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-tween-one");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map