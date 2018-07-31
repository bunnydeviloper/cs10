/*
 * Programming Quiz: Building Classes and Subclasses (2-3)
 * Directions:
 * Create a Bicycle subclass that extends the Vehicle class.
 * The Bicycle subclass should override Vehicle's constructor function
 * by changing the default values for wheels from 4 to 2
 * and horn from 'beep beep' to 'honk honk'.
 */


class Vehicle {
  constructor(color = 'blue', wheels = 4, horn = 'beep beep') {
    this.color = color;
    this.wheels = wheels;
    this.horn = horn;
  }

  honkHorn() {
    console.log(this.horn);
  }
}

class Bicycle extends Vehicle {
  constructor(color, wheels = 2, horn = "honk honk") {
    super(color); // unchanging variable
    this.wheels = wheels; // variable with a new default value
    this.horn = horn; // variable with a new default value
  }
}
/* tests
*/
const myVehicle = new Vehicle();
myVehicle.honkHorn(); // beep beep
const myBike = new Bicycle();
myBike.honkHorn(); // honk honk

