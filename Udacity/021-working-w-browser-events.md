# Lesson 21
## Working with Browser Events

* Events = announcement; when sth happens to the browser, it makes an 'announcement'
* Event Listener: we use JS to listen for these 'announcement' and response to it
* `monitorEvents(document);` // start displaying all events on the document object
  * type of events: `click`, `dblclick`, `scroll`, `resize`, `keypress`, `keyup`, `animationend`...
* `unmonitorEvents(document);` // turn off the displaying of all events on the document object.

**Response to an event**: EventTarget > Node > Element
* The Element Interface inherits from the Node Interface
* The Node Interface inherits from the `EventTarget` Interface, `EventTarget` has the following methods:
  * `.addEventListener()`
  * `.removeEventListener()`
  * `.dispatchEvent()`
* <event-target>.addEventListener(<event-to-listen-for>, <function-to-run-when-an-event-happens>);
* same as: <target: any element in the DOM>.addEventListener(<type>, <listener>); 
  ```js
  const head = document.querySelector('h1');
  head.addEventListener('click', function doSth() {
    head.style.backgroundcolor = 'red';
    console.log('you clicked the heading, background color changed to red');
  });
  ```

**Remove an event listener**
* What is 'type coersion'? -> trying to convert the object into the same type
* **Object (obj, arr, fn) equality** `==`: allow type coersion; `===`: prevent type coersion when comparing
* <event-target>.removeEventListener(<event-to-listen-for>, <function-to-remove>);
* note: the listener (fn) has to be exactly (===) the same as coming from addEventListener
  ```js
  // continue from above code
  // head.removeEventListener('click', function doSth() { // same content }); //this line will NOT work
  function doSth() { console.log('hellooooo'); };
  head.addEventListener('click', doSth);
  head.removeEventListener('click', doSth); //this will remove the event listener
  ```
* note: you can look at all event listeners on Chrome Dev Tools

**Event phases**
* Event Lifecycle: there are 3 phases:
  1. capturing (parent intercept event before reach children)
  2. at target
  3. bubbling (child bubble toward parent)
* By default, when `.addEventListener` is called with only 2 args, it will execute during the bubbling phase (methods defaults)
* If add a third arg `true`, then it will invoke the event listener during the capturing phase
  * `head.addEventListener('click', doSth, true);` //if 3rd arg is `fasle`, it switches back to default bubbling phase
* TEST:
  ```js
  document.addEventListener('click', function() { console.log('Sophia'); }); //execute 2nd
  document.body.addEventListener('click', function() { console.log('Hello'); }); //execute 1st
  // Hello
  // Sophia
  ```
**The event object**: put 'e' parameter into the listener fn
* event object helps us prevent the default behavior
  * default behavior in form is sending data to the location in `action` attr on `submit`, but what if you need to validate data first?
  * default behavior in anchor tag is go to the `href` link on 'click', but what if you want to confirm if user really want to go there?
* use `.preventDefault()`:
  ```js
  const links = document.querySelector('a');
  const thirdLink = links[2];
  thirdLink.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("Look, ma! We didn't navigate to a new page!");
  })
  ```

**Avoid too many events**
```js
const myCustomDiv = document.createElement('div');
for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;
    newElement.addEventListener('click', function respondToTheClick(evt) {
        console.log('A paragraph was clicked.');
    });
    myCustomDiv.appendChild(newElement);
}
document.body.appendChild(myCustomDiv);
// 200 event listeners are created, with each one has the same function
```
  **Refactor with event delegation**
  ```js
  const myCustomDiv = document.createElement('div');
  function responseToTheClick(e) {
    console.log('A paragraph was clicked.' + e.target.textContent);
  };
  for (let i=1; i<=200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;
    myCustomDiv.appendChild(newElement);
  }
  document.body.appendChild(myCustomDiv);
  myCustomDiv.addEventListener('click', responseToTheClick); // 1 event listener on the div element
  ```

**Event Delegation**: refer to the process of using event bubbling to handle events at a higher level in the DOM rather than using the original element
* Event delegation allows you to avoid adding event listeners to specific nodes and add to one parent instead
* That event listener analyzes bubbled events to find a match on child elements.
* What happen when you click on a paragraph element?
  1, the event goes through the capturing phase
  2. it reaches the target
  3. it switches to the bubbling phase and starts going up the DOM tree
  4. when it hits the <div> element, it runs the listener function
  5. inside the listener function, `event.target` is the element that was clicked
* Example:
  ```js
  <article id='content'>
    <p>Hello this is <span>first</span> paragraph!<p>
    <p>Hello this is second paragraph!<p>
  </article>
  document.querySelector('#content').addEventListener('click', function(e) {
    // verify if target is the corrent element
    if (e.target.nodeName === 'SPAN') { // .nodeName property will return a CAPITAL string
      console.log('A span element was clicked with text ' + e.target.textContent);
    }
  });
  ```

**The DOM is built incrementally**
* inline versus external JS file, CSS file
* Inline file will get execute faster b/c the browser doesn't have to make another network request to fetch the JS file
* Placement of the Javascript file matters!!! (must put script tag after body tag)
* Alternative solution: use **browser event** (event target should be `document` object)
  * document.addEventListener('DOMContentLoaded', function() { console.log('The DOM is ready!'); });
  ```js
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <link rel="stylesheet" href="/css/styles.css" />
    <script>
      document.addEventListener('DOMContentLoaded', function () {
          document.querySelector('footer').style.backgroundColor = 'purple';
      });
    </script>
  ```
* Sometime, `load` event will be used instead (e.g. document.onload(...)).
* `load` fires later than `DOMContentLoaded` -- load waits until all of the images, stylesheets, etc. have been loaded
