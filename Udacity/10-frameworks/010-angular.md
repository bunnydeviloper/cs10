# Lesson 10: Angular

### Welcome to Angular
### Angular what? (AngularJS, first version)
### Quiz Repo & Feedback Chrome Extension...
### Quiz: up and running with angular...
* Explore Angular's two ways data binding, directives, scopes => dynamic and interactive app
* github [repo](https://github.com/bunnydeviloper/Angular-Up-and-Running.git)
* add {{ main.name }} into app/views/main.html

### The Angular Ecosystem
* Module component: container that stores different parts of an app
* View: templating system to format html of your app, directive
* Directive are markers on a template that tells the angular's html compiler to attach special behavior to DOM component
* Scope binds the template and the controller together, scope watches for change from the view and update the controller, and when the changes happen in the controller, then the template is updated
* Controller: set up initial state and logic for the view
* service: closely tie with controller, put view-independent logic in a service, sharing data, eg: a service can be used to fetch and stored user's object, one service can be used in multiple controllers (sharing data with other parts of the app)
* Router: managing states, watch the URL and load the correct template and controller

### Quiz: new feature 1 quiz
### Quiz: new feature 2 quiz
### A simple app
* Yeoman: project scaffolding tool

### Installing Yeoman
* install Yeoman, Bower, Angular generator plugin
  * `npm install -g grunt-cli bower yo generator-karma generator-angular`
  * create an app with `yo angular udaciMeals`

### A structured app
### An angular module
* an app can have more than 1 module
* if 1+ module, u need to list out dependency
  * app/scripts/app.js
  ```
  // creating a module
  angular
    .module('udaciMealsApp', [ /* 'dependency1', 'dep2' */ ]);
  // if array is empty, the app doesn't need any other module

  // note: getting a module is very similar, without passing an array in
  angular
    .module('udaciMealsApp');
  ```

### Quiz: create a module quiz
* create a copy of app.js to legoBricks.js, inside legoBricks.js, create new module name 'legoBricks', with no dependency
* modify app.js to include 1 dependency "legoBricks"
* note: make sure to include a new script tag to link to legoBricks.js

### Bootstrap the appp
* to bootstrap the app, add attr ng-app="nameOfModule" into the body tag in index.html
* this 'ng-app' is called directive

### Quiz: bootstrap an app quiz
### Templates and Expressions
### Quiz: expression quiz
  ```
  <h1>Block details</h1>
    <ul>
      <li>{{ brick.color }}</li>
      <li>{{ brick.price }}</li>
    </ul>
    <p>{{ brick.description }}</p>

  // data structure for the brick
  {
    color: 'Green',
    price: '0.03',
    description: 'bla bla bla...'
  }
  ```
### Interview with Scott
* learning as a user, how to use it and build something with it
* learning as a developer, learn how it works, and then break it down, and contribute to it
* focus on module, code encapsulation (not good to put in global scope), component architecture

### Angular controllers
### Quiz: angular controllers quiz
### Scope
### Scope/$scope in controllers
### Quiz: scope quiz
### Take a breather
### The long awaited directives
### Quiz: directives quiz
### Dependency injection skit
### Services
### Quiz: service quiz
### Order manager feature
### A couple of ways to inject in Angular...
### Routing via UI-Router
### Managing Application State
### Nested Views
### Quiz: routing quiz
### Outro
