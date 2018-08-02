# Lesson 21: Rethinking testing

### Course Introduction
* test: programmatically check your application's functionality
* test-driven development

### What is a test?
### Always failing
* A test that cannot be passed, failure is the only option (test airplane wings until it breaks)
* similar to testing to see where something's limitation is

### Quiz: validating on opinion
* testing is JUST validating an opinion
* What expectation was the teacher testing?
  1. Students studied for the the test
  2. Teacher taught material sufficiently -- surprise: this is the answer!
  3. Students attended class each day

### Identifying expectations
### Quiz: Defining expectations
* What expectation apply to this function?
  `function add(a,b) { return a + b; }`
  * Expect: 2 + 3 = 5
  * Expect: error if non-numbers are used (eg: "2" + "3" = "23", string concaternation)
  * Expect: 0.1 + 0.2 = 0.3 (this is actually wrong b/c floating point math 0.3000004...)

### Refactoring add()
* red-green-refactor cycle: check expectation, see which one pass, and refactor w/o breaking things
  ```js
  function add(x, y) {
    var result;
    // refactor code against non-numbers expectation
    if (typeof x && typeof y) !== "number" {
      throw new Error('Params must be a number.');
    }

    result = x + y;
    // refactor code against floating point numbers
    if (parseInt(result) !== result) {
      result = parseFloat(result.toFixed(1));
    }
    return result;
  }
  ```

### Quiz: Writing expectations in code
* testing code example:
  ```js
  expect(add(2,3)).toBe(5);
  expect(add(2, 'test').toThrow();
  expect(add(0.1, 0.2)).toBe(0.3);
  ```

### Lesson Conclusion
