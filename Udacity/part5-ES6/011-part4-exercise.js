// ------------------------------------------------------

// lesson: 011-part4.md, sending data in and out of a generator
function* displayResponse() {
  const response = yield;
  console.log(`Your response is "${response}"!`);
}
const iterator = displayResponse();
iterator.next(); // starts running the generator function
iterator.next('Hello Udacity Student'); // send data into the generator (where it last left off)
// logs to the console 'Your response is "Hello Udacity Student"!'
// It "replaced" the yield keyword with the data that you provided.

function* getEmployee() {
  const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];
  const facts = [];
  for (const name of names) {
    // yield *out* each name AND store the returned data into the facts array
    facts.push(yield name);
  }
  return facts;
}

const generatorIterator3 = getEmployee();
// get the first name out of the generator
let name = generatorIterator3.next().value;

// pass data in *and* get the next name
name = generatorIterator3.next(`${name} is cool!`).value;

// pass data in *and* get the next name
name = generatorIterator3.next(`${name} is awesome!`).value;

// pass data in *and* get the next name
name = generatorIterator3.next(`${name} is stupendous!`).value;

// you get the idea
name = generatorIterator3.next(`${name} is rad!`).value;
name = generatorIterator3.next(`${name} is impressive!`).value;
name = generatorIterator3.next(`${name} is stunning!`).value;
name = generatorIterator3.next(`${name} is awe-inspiring!`).value;

// pass the last data in, generator ends and returns the array
const positions = generatorIterator3.next(`${name} is magnificent!`).value;

// displays each name with description on its own line
console.log(positions.join('\n'));

// ------------------------------------------------------
// Quiz:
function* createSundae() {
  const toppings = [];

  toppings.push(yield);
  toppings.push(yield);
  toppings.push(yield);

  return toppings;
}

const it = createSundae();
it.next('hot fudge');
it.next('sprinkles');
it.next('whipped cream');
// it.next();
console.log(it.next()); // {value: ['sprinkles', 'whipped cream', undefined], done: true}
