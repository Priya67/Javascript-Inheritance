var Animal = require("./animal.js");
var inherit = require("./inherit.js")

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
