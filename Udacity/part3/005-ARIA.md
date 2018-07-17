# Lesson 5
## ARIA

### Intro to Semantics: WAI-ARIA
* Web Accessibility Initiative - Accessible Rich Internet Applications
* bridge area where there's a11y issues that can't be managed with native HTML
* works by letting u specify attr on ele, which modify the way that ele is translated to a11y tree
* eg:
  ```html
  <!-- native checkbox -->
  <label>
    <input type="checkbox">
    Receive promotional offers
  </label>

  <!-- custom checkbox with added ARIA semantic -->
  <div class="checkbox checked" role="checkbox" aria-check="true">
  Receive promotional offers
  </div>

  <!-- native button -->
  <button class="toggle" checked>Enable</button>

  <!-- custom button with added ARIA semantic -->
  <button role="switch" aria-checked="true" class="toggle">Enable</button>

  ```
  * adding the role and aria attr causes the node in the a11y tree to have the desired role & state
  * w/o changing anything else about that node's appearance or behavior
* ARIA allows you to do some tree surgery
  * DOM + ARIA = (new) A11yTree
  * note: will not make the element focusable
  * note: will not add keyboard event listeners
* ARIA also allows you to establish relationship b/w the nodes which was not possible with HTML

**Roleplaying**: make sure keep role and tabindex on the same element
  `<div tabindex="0" class="checkbox" checked role-"checkbox" aria-checked="true">First choice</div>`

* More ways to label:
  * aria-label:
    * `button aria-label="menu" class="hamburger"></button>`
    * `button aria-label="close">Close this window</button>`
    * this overwrites any native labeling such as `<label>` or the original text content
  * aria-labelledby: use id referrence for label, only affect A11yTree
    ```html
    <span id="rg-label">Drink options</span>
    <div role="radiogroup" aria-labelledby="rg-label">...</div>

    <!-- similar to using a <label> element, but does not restricted to just 'input' element -->
    <input type="radio" id="rb01">
    <label for="rb01">Coffee</label>

    <!-- aria-labelledby can concat multiple labels (same order) and use on 'hidden' ele -->
    <div id="men-lb1" hidden>Men's T-shirts</div>
    <button id="men-btn" aria-labelledby="men-lb1 men-btn">Shop Now</button>
    ```
    * note: aria-labelledby will always overwrite aria-label or native label or content
      ```html
      <span role="checkbox" aria-checked="false" aria-labelledby="label" aria-label="Not checked"></span>
      <span id="label>Wallaby</span>
      <!-- this will have the label 'Wallaby' -->
      ```
    * note: `<div role="button">Click this</div>` will have a label 'Click this'
      * b/c once we declared role, it will show up in the A11yTree

  * aria-describedby
  * aria-owns: redefined child-parent relationship in A11y tree
  * aria-activedescendant
  * aria-posinset and aria-setsize
