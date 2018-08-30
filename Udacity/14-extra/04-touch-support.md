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
### Quiz: interact with single element
### Final project instructions and rubic
### Course outro
