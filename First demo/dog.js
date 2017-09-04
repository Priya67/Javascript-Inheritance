var Animal = require("./animal.js")
var inherit = require("./inherit.js")
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
