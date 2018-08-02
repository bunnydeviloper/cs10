# Lesson 22: writing test suites

### Introduction to Jasmine
* Jasmine is a testing library
* to run Jasmine, 'start'(Windows) or 'open' (macOS) SpecRunner.html

### Exploring the SpecRunner
### Quiz: Identifying Suites and Specs
* which are true about the relationship between the code and the page?
  * describe calls are colored black
  * it calls are colored green

### Introducing Suites and Specs (spec is short for specification)
* `describe` and `it` is used for creating outline
  * `it` is use to identify a spec, a spec is a container for a test
  * `describe` is used to identify a suite, which is a group of related specs

### Writing and test
* `expect(actual)` takes in one value called the 'actual', which is what we want to test
* the comparison method is called the 'matcher', eg `.tobe()` (===)
* `expect(add(0.1, 0.2)).tobe(0.3)` is same as `add(0.1, 0.2) === 0.3` // true
* `expect(add(0.1, 0.2)).not.tobe(0.1)` // true (negate a test)

### Quiz: multiple tests per Spec
* ALL tests inside a spec (all `expect`) must be TRUE for the spec to pass

### Getting started with red green refactor
### Writing AddressBookSpec.js

### Quiz: writing our implementation
### Iterating on our implementation
### Quiz: complete our implementation
### Mike's solution
* see folder 022-test/

### Another spec
### Removing redundant code
### Testing asynchronous code
### Writing and asynchronous test
### Quiz: running our first async test
### Correcting our asynchoronous test
### Course conclusion
