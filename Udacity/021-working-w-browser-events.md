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
* **Object (obj, arr, fn) equality** `==`: allow type coersion; `===`: prevent type coersion when comparing
* What is 'type coersion'? -> trying to convert the object into the same type
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

* Responding to an event - how to listen for an event and respond when one happens
* Event Data - harness the data that is included with an event
* Stopping an event - preventing an event from triggering multiple responses
* DOM Readiness - events to know when the DOM itself is ready to be interacted with

**Avoid too many events**
**Know when the DOM is ready**
