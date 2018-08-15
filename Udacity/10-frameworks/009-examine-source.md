# Lesson 9: Examine a framework's source

### A Framework's base features
### What is a template?
* template give you a starting point, with default structure and content, then you add more colors to it

### Backbone Project Setup
* github repo: backbone and backbone-server
* to run the server, cd into backbone-server/binaries, then type:
  * `./server_darwin_amd64 -www=../../backbone`
  * open http://localhost:8000

### Underscore templates
* id for script tag
* delimiters: sequence of 1+ characters, used to form a boundary
  * usually used to separate html from JS
* to see content of something in the console:
  * `var result = _.template($('#menuItem-template').html(), {variable: 'menuItem'})
  * `result.source`

### Constructor Function
* Example 1:
  ```js
  // creating a function using Function literals (or object literals, or array literals)
  var adder1 = function(num1, num2) {
    return num1 + num2;
  };

  // same as creating constructor function like this (or object constructor, or array constructor):
  // constructor may not be readable, harder to work with, and slower
  // but it can dynamically create a function at runtime
  var adder2 = new Function('num1', 'num2', 'return num1 + num2');
  // the last argument is the body of the function, all args before that is parameters
  ```
* Example 2:
  ```js
  function make(adjective) {
    return new Function('noun', 'return noun[0].toUpperCase() + noun.slice(1) + " is " + adjective + "!");
  }
  var isFun = make('fun');
  isFun('biking'); // 'Biking is fun!'
  isFun('swimming'); // 'Swimmng is fun!'
  ```

### Quiz: Constructor function Quiz
### Walk-thru the 'template' function
### Filling the template with data
### Interview with Scott
* all frameworks are mostly trying to accomplish the same thing

### Template 'variables' and JS's 'with'
  ```html
  // index.html
  <script type="text/template" id="menuItem-template">
      <td><a href="#item/<%= id %>"><%= name %></a></td>
      <td><%= rating %></td>
      <td><%= calories %></td>
      <td>
          <button class="select-item">Select Item</button>
      </td>
  </script>

  // index.html
  <script type="text/template" id="menuItem-template">
      <td><a href="#item/<%= menuItem.id %>"><%= menuItem.name %></a></td>
      <td><%= menuItem.rating %></td>
      <td><%= menuItem.calories %></td>
      <td>
          <button class="select-item">Select Item</button>
      </td>
  </script>

  // app.js
  template: _.template($('#menuItem-template').html(), {variable: 'menuItem'}),
  render: function(id) {
      this.$el.html(this.template(this.model.attributes));
      return this;
  },
  ```

### Quiz: Template Bug Quiz
### Quiz: Build your own templating function quiz
* check template.js

### adEventListener
```js
document.addEventListener( 'keydown', function ( eventObject ) {
    if (eventObject.keyCode == 27) {
        // the escape key was pressed
    }
});

// create the custom `partyTime` event
var myCustomEvent= new CustomEvent( 'partyTime', {timeToParty: true, partyYear: 1999} );

// listen to the `document` for the `partyTime` event
document.addEventListener('partyTime', function(evt) {
    if (evt.partyYear) {
        console.log( "Partying like it's " + evt.partyYear + "!");
    }

    document.body.style.backgroundImage = 'linear-gradient(90deg, orange, blue)';
});

// trigger the custom event
document.dispatchEvent( myCustomEvent );
```

### Setting up Backbone Events
### Walk-thru backbone's 'Events.on'
### Quiz: Adding events quiz

### Walk-thru Backbone's 'Events.trigger'
### Quiz: Events quiz
### Quiz: build your own event system quiz
### A router and the Backbone.history object
### Quiz: routing quiz
### hashchange & pushState
### stepping thru Backbone.history.start()
### Quiz: Backbone's fragment count quiz
### Quiz: lesson highlight summary quiz
### Outro
