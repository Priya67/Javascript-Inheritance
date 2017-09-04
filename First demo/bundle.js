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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var Dog = __webpack_require__(1);
var Cat = __webpack_require__(3);

window.Dog = Dog;
window.Cat = Cat;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Animal = __webpack_require__(2)
var inherit = __webpack_require__(4)
// Here we're not invoking the animal constructor

// function Dog(name) {
//   this.name = name;
// }


//Here the this will be the context in which this function is running
// We are using call so this will be the calling object and will set
//name of animal to this name and this will invoke the animal constructor

function Dog(name) {
    Animal.call(this, name);
}

Dog.prototype.woof = function () {
  console.log("woof, I am "+ this.name);
};

inherit(Animal, Dog);
Dog.prototype.woof = function () {
  console.log("woof, I am " + this.name);
};

module.exports = Dog;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function () {
  console.log("mmm. food...");
};


module.exports = Animal;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var Animal = __webpack_require__(2);
var inherit = __webpack_require__(4)

var Cat = function(name) {
  // this.name = name;
  Animal.call(this,name);
};

inherit(Animal, Cat);

// var Surrogate = function(){};
//
// Surrogate.prototype = Animal.prototype;
// Cat.prototype = new Surrogate();
// Cat.prototype.constructor = Cat;

Cat.prototype.meow = function(){
  console.log("meow, I am " + this.name);
};

module.exports = Cat;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var inherit = function(parent, child) {

  var Surrogate = function() {};
  Surrogate.prototype = parent.prototype;

  child.prototype = new Surrogate();
  child.prototype.constructor = child;
};

module.exports = inherit;


/***/ })
/******/ ]);