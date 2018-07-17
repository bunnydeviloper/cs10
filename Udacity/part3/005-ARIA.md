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
