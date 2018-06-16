# The Simple Intro to SVG Animation

[Article](https://davidwalsh.name/svg-animation)

* SVG element is a special type of DOM element that mimics the syntax of a standard HTML element.
* SVG provide the ability to create an image *directly* within the DOM, hence can use JS and CSS as well.

**Benefits:**
  1. SVG compresses incredibly well, and have smaller file size than JPEG or PNG.
  2. SVG graphics scale to any resolution w/o the loss of clarity; razor sharp on desktop and mobile.
  3. You can animate individual component of an SVG graphic at run-time (using JS and CSS).

* To animate SVG elements, use SVG manipulation library like Snap.js or JS animation library Velocity.js
**SVG Styling**
```html
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <!-- What's contained inside svg tag is SVG markup instead of HTML markup -->
    <circle cx="100" cy="100" r="20" style="fill: red" />
    <rect x="100" y="100" width="200" height="200" style="fill: blue" />
</svg>
```

* There are three broad categories of SVG-specific styling properties: color, gradient, dimensional, and stroke.
  * **color**: consist of `fill` (= background-color) and `stroke` (= border-color)
  ```js
  // Animate the SVG element to a red fill and a black stroke
  $svgElement.velocity({ fill: "#ff0000", stroke: "#000000" });
  
  // Note that the following WON'T work since these CSS properties are NOT supported by SVG:
  $svgElement.velocity({ backgroundColor: "#ff0000", borderColor: "#000000" });
  ```

  * **gradient**: include `stopColor`, `stopOpacity`, and `offset`. 
    * They are used to define multi-purpose gradients that you structure via SVG markup.

  * **dimentional**: use to describe an SVG element's position and size
  ```
  // Unlike HTML, SVG positioning is NOT defined with top/right/bottom/left, float, or margin properties
  // Rectangles have their x (left) and y (top) values defined relative to their top-left corner
  $("rect").velocity({ x: 100, y: 100 });
  
  // In contrast, circles have their x and y values defined relative to their center (hence, cx and cy properties)
  $("circle").velocity({ cx: 100, cy: 100 });js
  
  // Rectangles have their width and height defined the same way that DOM elements do
  $("rect").velocity({ width: 200, height: 200 });
  
  // Circles have no concept of "width" or "height"; instead, they take a radius attribute (r):
  $("circ").velocity({ r: 100 });
  ```

  * **stroke**: unique SVG styling of CSS `border` (but on steroids :smile:)
    * enhance ability to 1) create custom strokes and 2) animate a stroke's movement

**Position Attributes** vs **CSS Transforms**
  * Browser support: EI does not support CSS transforms on SVG elements
  ```
  // The x and y attributes work everywhere that SVG elements do (IE8+, Android 3+)
  $("rect").velocity({ x: 100, y: 100 });

  // Alternatively, positional transforms (such as *translateX* and *translateY*) work everywhere EXCEPT IE
  $("rect").velocity({ translateX: 100, translateY: 100 });js
  ```
