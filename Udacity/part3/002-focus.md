# Lesson 2
## Focus

* Focus refers to the control on the computer screen:
  * eg: receives input from the keyboard and from the clipboard when you paste
* Not all elements are focusable (text, image...)
* in general, there's no need to focus if user can't **interact** with or provide some **input**

### Tab Order (tab, shift tab, arrow keys)
* Tab order corresponds with DOM order
  * (styling or visual changes, eg float:right, will not change DOM order)
* Navigation order should be logical and intuitive
* Exercise!

### Tab Index
* To be used when you have navigation bar offscreen/to the side, or have a pop up modal window
* `<div tabindex="0">Focus Me!</div>`
* tabindex="-1" means the element will NOT be in the natural tab order
  * this can be programmatically focused with focus() method
  * useful for off screen content which appears on screen in response to a user event (modal yes/no)
  * when the content is display: `document.querySelector('#modal').focus()`
* tabindex="0" means this element will be in the natural tab order
  * Eg: have a setting button with drop down menu:
  * `<div id="dropdown" tabindex="0">Settings</div>`
  * this element will now get focused, and future keyboard events get directed to it
* tabindex="5" will jump element to the front of the tab order regardless where it is in the DOM
  * if there are multiple elements with a tabindex > 0, the order will start lowest --> greatest
  * using tabindex > 0 is discourage and considered *Anti-pattern!*
    * b/c it's confusing for screen reader who navigate the DOM in a linear fashion
    * And you will also have a jumbled tab order
**NOTE**: only add focus behavior to interactive controls (buttons, tabs, dropdowns, input)

### Managing Focus: keeping user's interactive context in sync with visual representation of site
  * eg: click on nav bar/links/table of content, and the page scroll down to that specific section
  * then: when user wants to click on any links WITHIN that section, they have to tab tab tab again...
  * solution: once user clicked on section, give link tabindex="-1", & change focus to section w/ JS
  * Exercise!

### Skip Links
  * `<a href="#maincontent" class="skip-link">Skip to main content</a>`
  * put this tag before `<nav>` tag
  * connect id to the main content: `main id="maincontent">...</main>`
    * optional: for older browser, you can add tabindex="-1" to `main` element as well
  * skip-link css:
    * ``` css
      .skip-link {
        position: absolute;
        top: -40px; /* make it appear off screen initially */
        left: 0;
        background: #BF1722;
        color: white;
        padding: 8px;
        z-index: 100;
      }

      /* use focus pseudo class to move skip-link element back on screen */
      .skip-link:focus {
        top: 0;
      }
      ```

### Focus ring

### Focus in complex components
* eg: have a select tag, and once user clicked on it, it shows a dropdown menu
  * user can use up/down keys to navigate through the options
  * ARIA Authoring Best Practices guide (ARIA Design Patterns Docs)
### Keyboard Design Patterns:
* Roving focus (roving tabindex)
* Exercise!
