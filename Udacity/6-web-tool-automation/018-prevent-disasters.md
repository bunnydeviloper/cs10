# Lesson 18: how to prevent disasters

### Lesson Intro
### Why rely on tolls to prevent bad things
### Linting
* Linting is a way to automatically check your JS code for errors
* Linting can be done at various stage during your development via editor, build process, or pre-commit hook in version control
  * code style linting (camelCase, brackets...)
  * syntax linting (structural) (JS anti-patterns, unreachable stmt, forgetting to do a strict comparison against null)
* Three popular JavaScript Linters: JSHint, JSCS, ESLint

### Quiz: How does linting help you
* YES - helps uncover code style problems
* YES = helps eliminate dead code or variables
* NO - helps identify slow functions (you can only know this by running the browser)
* NO - identifies incorrect return types

### Setting up ESLint
* Why ESLint? It supports ES6 syntax, can be extended, and has output that's easy to understand
* to make the linter most effective, you have to run it at the earliest possible time
  * eg: earliest time is after you press a key on your keyboard (in your text editor)
  * `npm install -g eslint`

### Setting up ESLint in Gulp
* make sure you initialize a project with `npm --init`
* `eslint --init`: click through the options and select

### Unit testing in gulp
* unit tests are essentially JavaScript functions that pragmatically test an API or aspect of your project

### Unit testing in gulp
### What's next?
### Continuous integration
### Lesson Outro


