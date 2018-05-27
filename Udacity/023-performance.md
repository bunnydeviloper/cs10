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
  cons newE = document.createElement('p);
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

* Hiding doesn't change the layout, it just erases that section of the screen (1 repaint)
* When you make the changed section visible again, that's 1 reflow and 1 repaint

**Virtual DOM**: React uses this to increase performance (you don't make changes to the DOM, you make changes to another structure called a virtual DOM and the library calculate the best way to update the screen to match)



How to write efficient and performing code

JS event loop and how it affects the code you write

