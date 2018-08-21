# Lesson 11: Ember

### Welcome to Ember
* a framework that comes with its own build tool
* automatically generate and maintain app file structure
* keep your template and data in sync
* "a framework for creating ambitious web application"

### Required ES6 knowledge
* JS promises (for building async code)
* ES6 modules (modules and imports)
* ES6 syntax (arrow function, destructuring, and template strings)

### Installing Ember-CLI
* `npm install -g ember-cli`
* `ember -v` to see the version
* `ember --help` for more commands (to be more specific, eg: use `ember --help new`)
* === `ember help`

### Using Ember-CLI to generate a new app
* `ember new udaciMeals` to create new project
* `ember serve` to serve the project
* `ember serve --port 9001` === `ember s -p 9001`
* `ember generate component menu` === `ember g component menu`

### Quiz: Ember-CLI shortbuts and aliases quiz
### An Ember App's file structure
### Routes, Routers, and Templates - Oh My!
* ROUTE ---> TEMPLATE
  * / ---> application (home)
  * /menu --> menu (doesn't have to be same name)
  * /item/:item_name ---> item (the ':item_name' part is called dynamic segment)
    * /item/strawberry-pudding
    * /item/chicken-salad

### Generating a route and template
* `ember g route menu`

### Quiz: repos and Feedback Chrome Extension
### Quiz: Route and template quiz
### Viewing a menu item
### Nested Routes
### Quiz: nested routes quiz
### Interview with Allen
### Handlebars
### Quiz: handlebars quiz
### Loading dynamic data
### Updating the item template
### Quiz: dynamic data quiz part 1
### Quiz: dynamic data quiz part 2
### Components Ember-style custom HTML
### Quiz: component quiz
### Order tracking feature
### Consuming a service
### Quiz: using services quiz
### Responding to user actions
### Quiz: actions quiz
### Outro
