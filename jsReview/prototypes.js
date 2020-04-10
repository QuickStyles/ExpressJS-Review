// Constructor & Prototypes

// Constructor is a function used to create objects

function Animal(name, limbs) {
  // `this` represents the new object being created whenever Animal gets invoked
  // before this line: this = {}
  this.name = name
  // after this line: this = {name: "bob"}
  this.limbs = limbs

  // you can assign methods to a object created by a constructor like so:
  // the problem with this way of defining methods is all instances of the Animal Constructor will have their own unique speak function.
  // instead of this we can put the speak function on the prototype of the Animal Constructor
  // this.speak = function(words) {
  //   // this refers to the instance of the object. So it is how you can access properties/methods within other methods
  //   console.log(`${this.name} says: ${words}`)
  // }
}

// all new instances of Animal will look at Animal.prototype and use it's methods
Animal.prototype.speak = function(words) {
  // this refers to the instance of the object. So it is how you can access properties/methods within other methods
  console.log(`${this.name} says: ${words}`)
}

// you can create a new instance of a Constructor by using the `new` keyword
const bob = new Animal('bob', 4)
console.log(bob)
const andy = new Animal('andy', 24)
console.log(andy)

// to check if a object is an instance of a Constructor
console.log(andy instanceof Animal)
console.log({name: 'andy', limbs: 24} instanceof Animal)

andy.speak('eating cereal')