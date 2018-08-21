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
* adding a route with a different path:
  ```js
  Router.map(function() {
    this.route('bricks', {path: '/legos'});
  });
  ```

### Quiz: repos and Feedback Chrome Extension
### Quiz: Route and template quiz
### Viewing a menu item
### Nested Routes
* `ember g route item/nutrition`

### Quiz: nested routes quiz
### Interview with Allen
### Handlebars
* Ember templates are powered by the Handlebars templating language (Handlebars can be use as standalone outside of Ember)
* A Handlebars template is a block of HTML that has Handlebars expressions that look like {{ brick_color }}.
* Example
  ```html
  <div id="brick-container"></div>
  <script id="brick-template" type="text/x-handlebars-template">
      <div class="brick">
          <h1>{{name}}</h1>
          <div class="desc">
              {{description}}
          </div>
      </div>
  </script>
  ```
  * The following JavaScript will get the template, compile it, call the template with data, and update brick-container element with the resulting HTML:
    ```js
    // get template from HTML
    var brickContainer = document.querySelector( '#brick-container' );
    var brickTemplate = document.querySelector( '#brick-template' );

    // compile source template into a template function
    var template = Handlebars.compile( brickTemplate.innerHTML );

    // the app's data
    var context = {name: 'Red Brick', description: 'A colored brick that can be used to...'};

    // build the HTML template with the supplied data
    var html = template(context);

    // fill the page with content
    brickContainer.innerHTML = html;
    ```
* Handlebars is a rich templating language, featuring:
  * conditionals
  * block expressions
  * iterating over a list

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
