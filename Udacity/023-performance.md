# Lesson 23
## Performance

**Add page content efficiently**
* How to measure the speed of your code? `performance.now()`: return a timestamp in ms
* Epoch time = Unix time = POSIX time
* totalTime = beginTime - endTime:
```js
const beginTime = performance.now();
for (let i=1; i<=100; i++) {
  for (let j=1; j<=100; j++) {
    console.log('i and j are ', i, j);
  }
}
const endTime = performance.now();
console.log(`This code took (${endTime} - ${beginTime}) milliseconds`); 
```

**Document fragment**: represents a minmal document object that has no parent (~creating lightweight DOM tree)
* The Browser is constantly working to match the screen with the DOM
* Everytime we add a new element, the browser has to run through a `reflow` calculation and then `reprint` the screen
* Document fragment isn't a part of the active DOM tree, changes made to the fragment doens't affect the document, cause `reflow`, or incur any performance impact
```js
// creating a <div> to hold all the <p> elements was unneccessary
const fragment = document.createDocumentFragment(); // instead of using <div>
for (let i=0; i<200; i++) {
  cons newE = document.createElement('p');
  newE.innerText = 'This is paragraph number ' + i;
  fragment.appendChild(newE);
}
document.body.appendChild(fragment); //reflow and repaint here, once!, doesn't slow down performance
```

**Reflow and Repaint**
* `reflow`: process of the browser laying out the page, fairly expensive (slow) b/c requires lots of computational tasks
  * process of calculating dimensions and position of page elements
  * Adding a single CSS class could trigger `reflow`
* `repaint`: hapens after `reflow` as the browser draws the new layout (pixels) to the screen, fairly quick
* Hiding an element doesn't change the layout, it just erases that section of the screen (1 repaint)
* When you make the changed section visible again, that's 1 reflow and 1 repaint
* Recommended process: hide/change all/show

**Virtual DOM**: React uses this to increase performance (you don't make changes to the DOM, you make changes to another structure called a virtual DOM and the library calculate the best way to update the screen to match)

**The call stack**: basically a list of the functions that are running
* when a fn is invoke, it is added to the list, then after all code inside of fn has been run, it is removed from the list
* an *indicator* is a *frame* in the stack
* in a call stack, function doesn't have to complete before another fn is added to the call stack
* **Single threading**: the processing of one command at a time
* JavaScript is single-threaded != multithreaded
  * call stack (from top): dolphins > camels > penguins > rhinos
  ```js
  function dolphins () {
    // stop here
    return 'llamas';
  }
  function rhinos () {
    var y = 'no';
    return penguins();
  }
  function penguins () { return camels(); }
  function camels () { return dolphins(); }

  rhinos()
  ```
* **Synchronous**: existing or occuring at the same time
* **The JavaScript Event Loop**: pick up the next event, run its handler, and repeat
* JavaScript's concurrency model uses two rules:
  * If some JavaScript is running, let it run until it is finished ("run-to-completion").
  * If no JavaScript is running, run any pending event handlers.
* There are three parts to think about around the event loop:
  * the Call Stack
  * Web APIs/the browser
  * an Event Queue 
* when an event happens and code already running, the event listener will be saved into the browser
* after Call Stack finished (idle time), the listener fn is move from the browser to the Event Queue, which will create a new entry on the Stack
```js
console.log('Hello!');
document.addEventListener('click',
  function doSth() { //this function will be handed over to the browser and then move to Event Queue, and then finally Call Stack
    console.log('something was clicked');
});
console.log('How are you?');
```

**Key things to remember**
1. current synchronous code runs to completion
2. events are processed when the browser isn't busy.
3. Asynchronous code (such as loading an image) runs outside of this loop and sends an event when it is done.

**setTimeout**
* `setTimeout( function sayHi() { console.log('Hi!'); }, 3000);` //execute after 3 seconds
* setTimeout() is an API provided by the browser
  1. The call to setTimeout() gives the sayHi() function over to the browser which it starts a timer.
  2. After the timer is finished, the sayHi() function moves to the Queue.
  3. If the Call Stack is empty, then the sayHi() function is moved to the Call Stack and executed.
* Even if you write setTimeout() with a delay of 0, it still go through the whole process



