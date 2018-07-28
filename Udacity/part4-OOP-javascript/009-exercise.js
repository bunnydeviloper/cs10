function Animal (name) {
  this.name = name;
}
Animal.prototype.walk = function () {
  console.log(`${this.name} walks!`);
}
function Cat (name) {
  Animal.call(this, name); // we don't want to create a whole new obj, just need the initialization
  this.lives = 9;
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.meow = function () {
  console.log('Meow!');
}
const kitty = new Cat('Kitty');
kitty.meow(); // Meow!
kitty.walk(); // Kitty walks!
console.log(kitty.name); // Kitty
