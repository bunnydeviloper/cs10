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

### More ways to label
  * aria-label:
    * `<button aria-label="menu" class="hamburger"></button>`
    * `<button aria-label="close">Close this window</button>`
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
  * aria-posinset
  * aria-setsize (tell assistive technology how many items are w/in an 'option' or 'listitem' ele)

### Hidden in plain sight
* Anything which is explicitly hidden will also not be included in the A11y Tree
  * `<button style="visibility: hidden;">`
  * `<div style="display: none;"></div>`
  * `<span hidden>`
* However, an element that is not visually renderred, but not explicitly hidden, is still included in A11y tree
  * ```css
    .screenreader {
      position: absolute;
      left: -10000px;
      width: 1px;
      height: 1px;
      overflow: hidden;
    }
    ```
* You can use aria-label, aria-labelledby, and aria-describedby to reference hidden element
* use aria-hidden="true": this will remove ele and all descendant ele from A11y tree
* Quiz, hide and show things from assistive techonology:
  ```html
  <!-- this ele has a label 'Semantics, the aria-hidden MUST has value "true" to make it 'No Label' -->
  <div role="treeitem" aria-hidden>Semantics</div>

  <!-- this ele has a label 'Styling' -->
  <span role="checkbox" aria-labelledby="label">
    <span hidden id="label">Styling</span>
  </span>

  <!-- this ele has 'No Label' -->
  <button hidden>Sign Up</button>

  <!-- this ele has label 'menu', outer span gets inner's span label -->
  <span role="button">
    <span class="icon icon-menu" role="img" aria-label="menu"></span>
  </span>
  ```

### Introducing ARIA live
* aria-live: make a live region, three possible values: 'off' (default), 'polite', 'assertive'
  * ```html
    <!-- aria-live="polite" will speak once any in progress utterance has finished -->
    <div aria-live="polite" class="chat-history">
      <div class="chat-bubble left">
        <div class="offscreen">Cathy says</div>
        Sure!
      </div>
    </div>

    <!-- aria-live="assertive" will interupt whatever it's doing and alert the user immediately -->
    <div class="alertbar" aria-live="assertive">Could not connect!</div>
    ```
* include aria-live attributes in initial page load and try different types of changes

### Atomic relevant busy
* when the live region changes:
  * aria-atomic: indicate whether the entire region should be considerred as a whole
    ```html
    <!-- whenever any of day/month/year changes, the live region will be read out -->
    <span aria-labelledby="birthdayLb1" aria-live="polite" aria-atomic="true">
      <input type="number" id="day" value="10">
      <input type="number" id="month" value="7">
      <input type="number" id="year" value="2017">
    </span>
    ```
  * aria-relevant: indicate what type of changes should be presented to the user
  * aria-busy: notify assistive tech that it should temporarily ignore changes to this element
