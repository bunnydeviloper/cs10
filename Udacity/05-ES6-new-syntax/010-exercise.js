// ----------------------------------------- Class constructor with ES6 new syntax
class Dessert {
  constructor(eat = false, calories = 0, flavor, color = { chocolate: "brown", vanilla: "white", cherry: "pink" }) {
    this.eat = eat;
    this.calories = calories;
    this.flavor = flavor;
    this.color = color;
    this.coneColor = null; // use null, don't use undefined
  } // note: there is NO comma here

  // add a static method, this will add method directly on constructor fn
  // you can call static method with Dessert.hotWeather(79);, no need to call from the intances
  static hotWeather(temperature) {
    if (temperature >= 72) { this.eat = true; }
  }

  // add a regular method:
  buyIceCream(type) {
    if (!this.color[type]) console.log(`Sorry we do not have ${type} flavor.`);
    this.eat = true;
    this.calories = 250;
    this.coneColor = this.color[type];
    this.flavor = type; // must put this after line above
  }
}

// when creating a new intance of JS class, the `new` keyword must be used
const myDessert = new Dessert();
// const herDessert = Dessert(); // ERROR!
console.log('---Constructor with class syntax--- ', myDessert);

// ----------------------------------------- ES5 equivalent

function ES5Dessert (eat, calories, flavor, color) {
  this.eat = false;
  this.calories = (typeof calories === "undefined") ? 0 : calories;
  this.flavor = flavor;
  const defaultColor = { chocolate: "brown", vanilla: "white", cherry: "pink" };
  this.color = defaultColor;
  this.coneColor;
}

ES5Dessert.prototype.buyIceCream = function(type) {
  if (!this.color[type]) console.log(`Sorry we do not have ${type} flavor.`);
  this.eat = true;
  this.calories = 250;
  this.coneColor = this.color[type];
  this.flavor = type;
}

const myES5Dessert = new ES5Dessert();
console.log('---Constructor with ES5 equivalent--- ', myES5Dessert);

// ----------------------------------------- subclass with new ES6 syntax

// IceCream is a subclass of Dessert
class IceCream extends Dessert {
  constructor(color, flavor, eat, calories, promotion = false, toppings = []) { // doesn't matter order inside param
    // super is used as a FUNCTION to connect the subclass with the parent class
    super(eat, calories, flavor, color); // this order must match origin's constructor
    this.toppings = toppings;
    this.promotion = promotion;
  }

  buyIceCream(type) {
    // super is used as an OBJECT to connect the subclass with the parent class
    super.buyIceCream(type);
    if (type === 'cherry') this.promotion = true;
    this.toppings = []; // soft reset toppings
  }

  addTopping(topping) { // addTopping method will ends up in Dessert.prototype
    this.toppings.push(topping);
  }
}

const myIceCream = new IceCream(); // you can pass values into args or not
myIceCream.buyIceCream('cherry');
myIceCream.addTopping('kitkat pieces');
console.log('--- subclass IceCream with ES6 syntax --- ', myIceCream);
myIceCream.buyIceCream('chocolate');
console.log('--- buy another ice cream, ES6 syntax --- ', myIceCream);
myIceCream.buyIceCream('hazelnut'); // no flavor

// ----------------------------------------- ES5 equivalent (subclass)
function ES5IceCream (color, flavor, eat, calories, promotion, toppings = []) {
  ES5Dessert.call(this, eat, calories, flavor, color);
  this.promotion = false;
  this.toppings = toppings;
}

ES5IceCream.prototype = Object.create(Dessert.prototype);
ES5IceCream.prototype.constructor = ES5IceCream;

ES5IceCream.prototype.buyIceCream = function(type) {
  ES5Dessert.prototype.buyIceCream.call(this, type);
  if (type === 'cherry') this.promotion = true;
  this.toppings = [];
}

ES5IceCream.prototype.addTopping = function(topping) {
  //ES5Dessert.prototype.addTopping.call(this, topping);
  this.toppings.push(topping);
}

const myES5IceCream = new ES5IceCream();
myES5IceCream.buyIceCream('vanilla');
myES5IceCream.addTopping('gummy bears');
console.log('---subclass with old syntax--- ', myES5IceCream);
myES5IceCream.buyIceCream('cherry');
myES5IceCream.addTopping('dark coco bits');
myES5IceCream.addTopping('mixed crumble nuts');
console.log('---subclass with old syntax--- ', myES5IceCream);
myIceCream.buyIceCream('hazelnut'); // no flavor
