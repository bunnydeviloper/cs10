# Lesson 4: Touch support

### Lesson 4 intro
### It can't be that bad, right?
### Touch pseudo states
### Too much touch
### Quiz: build a better UI
### Interview with Luke W part 8
### Quiz Quick practice with event listeners
```js
// Check if pointer events are supported.
if (window.PointerEventSupport) {
  // Add Pointer Event Listener
  swipeFrontElement.addEventListener(pointerDownName, this.handleGestureStart, true);
} else {
  // Add Touch Listener
  swipeFrontElement.addEventListener('touchstart', this.handleGestureStart, true);
  // Add Mouse Listener
  swipeFrontElement.addEventListener('mousedown', this.handleGestureStart, true);
}
```

### Touch events
* Each touch event includes three lists of touches.
  * touches: a list of all fingers currently on the screen.
  * targetTouches: a list of fingers on the current DOM element.
  * changedTouches: a list of fingers involved in the current event
* These lists consist of objects that contain touch information:
  * identifier: a number that uniquely identifies the current finger in the touch session.
  * target: the DOM element that was the target of the action.
  * client/page/screen coordinates: where on the screen the action happened.
  * radius coordinates and rotationAngle: describe the ellipse that approximates finger shape.

### Quiz: interact with single element
### Final project instructions and rubic
### Course outro
