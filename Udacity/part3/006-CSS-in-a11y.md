# Lesson 6
## Style
Incorporate CSS styling into your accessible web design and use accessible color schemes to improve a11y

### Working with focus styles
* use focus pseudo class to change ele when it's focused (instead of using the default focus ring)
  ```css
  :focus {
    outline: 1px dotted #FFF;
  }

  button:hover,
  button:focus {
    background: red;
    color: white;
    text-decoration: underline;
  }

  button:focus {
    outline: 0;
    box-shadow: 0 0 8px 3px rgba(255, 255, 255, 0.8);
    /* use box-shadow instead of outline to get consistent result accross diff browsers */
  }
  ```
* radio button example:
  ```css
  .radio:focus {
    outline: 0;
  }

  .radio:focus::before {
    box-shadow: 0 0 1px 2px #5b9DD9; /* blue tinted box-shadow */
  }
  ```
* if possible, leave the default focus ring behaviour
* if the ring is clashing with your page styles or ugly then you can make custom focus

### Input Modality
* focus behaviour are not consistent accross browsers, so be careful
* focus behaviour also different between mouse and keyboard input

### Styling with ARIA
* when u are building components, it's common to reflect the state of the component using CSS classes:
  ```html
  <div class="toggle" role="button" aria-labelledby="muteLb1" aria-pressed="false"></div>

  <!-- after user clicked to toggle -->
  <div class="toggle pressed" role="button" aria-labelledby="muteLb1" aria-pressed="true"></div>
  ```
  ```css
  .toggle.pressed {}

  /* should remove the pressed class and use aria CSS attribute selector instead */
  .toggle[aria-presssed="true"] {
    // transition to pressed state
  }
  ```

###Responsive design for multi-device
* focus on responsive design is also a huge plus for a11y
1. make sure you're always using meta viewport tag
  `<meta name="viewport" content="width=device-width, initial-scale=1">`
2. designing with a responsive grid (means the content will reflow when the page size changes)
  * use relative units:
    * width: 50% => relative to the containing block
    * font-size; 1.2em => relative to the font-size of the parent
    * font-size: 2rem => relative to the font-size of the root
3. use appropriate touch targets for buttons, links...
  * 48dp minimum touch target size (about the size of somebody's finger touch)
  * 32dp margin around touch target (to make sure you're not touching other ele around it)

### Mobile screen readers (iOS or Android)

### Segue to color and contrast, meeting contrast requirements
* example range of contrast with corresponding contrast ratio:
  * 15.9 : 1 => this is very defined, bold
  * 5.7  : 1
  * 3.5  : 1
  * 1.6  : 1 => this is very light, almost transparent
  * => relationship between the foreground color and background color in terms of luminance
  * NOTE: contrast minimum is 4.5 : 1, other requirements depending on the text, img...
* you can open dev tools, run audit on accessibility, and see where the page need to be fixed
  * to check contrast ratio: click on element, click on a11y properties, and copy the color
  * the dev tool will recommend a minimum value, and an optinal (enhanced) value

### Don't convey info with color alone
* provide multiple ways for user to understand the content of the page
  * eg: for an invalid field, in addition to underline, add a message to alert user

### High contrast mode
* allow user to invert foreground and background color
* change system setting or install some popular chrome extension

### Course outro
**It's important to remember that no matter what your product is,
there's a whole range of user out there, not just the narrow spectrum that we maybe designing for.**
* How can we have the most impact on users with the least amount of effort?
  1. How frequently is this piece of UI used? Is it critical or just handy feature?
  2. How badly does this accessibility issue affect your users? 
    * is it preventing user from using the app? or it's annoying but can be work around.
  3. How expensive is it going to be to fix this issue? time and resource constraint
