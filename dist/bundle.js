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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _research_linearAlgebra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./research/linearAlgebra */ \"./research/linearAlgebra.js\");\n/* harmony import */ var _research_linearAlgebra__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_research_linearAlgebra__WEBPACK_IMPORTED_MODULE_0__);\n// import Particles from './research/particles';\n// import Pools, { update as updatePools, updateCurrentStop } from './Pools/Pools';\n// import Textures, { update as updateTextures } from './Pools/Textures';\n// document.body.style.backgroundColor = '#000';\n// const Anim = { //animation settings\n// \t'duration': 4000,\n// \t'interval' : 10,\n// \t'stepUnit' : 1.0,\n// \t'currUnit' : 0.0\n// };\n// let raf;\n// let state = {\n// \tplaying: false\n// };\n// const animate = () => {\n// \tlet steps = Anim.duration / Anim.interval; // 300\n// \tlet step_u = Anim.stepUnit/steps; // 1.0/300\n// \tupdatePools({au: Anim.currUnit});\n// \tif (Anim.currUnit >= 1.0){\n// \t\tAnim.currUnit = 0;\n// \t\tupdateCurrentStop();\n// \t}\n// \tAnim.currUnit += step_u;\n// \traf = requestAnimationFrame(animate);\n// }\n// const startAnimation = () => {\n// \tanimate();\n// }\n// const stopAnimation = () => {\n// \tcancelAnimationFrame(raf);\n// }\n// document.body.addEventListener('click', () => {\n// \tif (!state.playing) {\n// \t\tstartAnimation();\n// \t} else {\n// \t\tstopAnimation();\n// \t}\n// \tstate.playing = !state.playing;\n// });\n// Textures();\n// Pools({ au: Anim.currUnit});\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./research/linearAlgebra.js":
/*!***********************************!*\
  !*** ./research/linearAlgebra.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./research/linearAlgebra.js?");

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./index.js */\"./index.js\");\n\n\n//# sourceURL=webpack:///multi_./index.js?");

/***/ })

/******/ });