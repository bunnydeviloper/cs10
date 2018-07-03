# Lesson 3
## Semantics Basics

### Assistive Technology
* 'Assistive Technology' is an unbrella term for a broad range of devices, software, tools
  * screen reader, braille display, magnification...
  * voice control, switch access, sip and puff, eye tracking...
* Programmatically expressed semantics

### Affordances
* give us an idea of what it does and how it works
* GUI: buttons, scroll bars, key, checkbox...
* need to design to give user as little guidance as possible, and suit user's needs

### Role, Name/label, Value
* Role: what type of element it is
  * 'round trip, selected, radio button' // name, state, role
    * ```html
      <label>
        <input type="radio" checked name="tType" value="0">
        Round Trip
      </label>
      ```
  * 'full name, edit text' // name, role
  * 'search, button' // name, role
  * 'no preference, preferred seat type, collapsed, combo box' // value, name, state, role
* **Label**:
  * Visual label: radio button with `<label>` "round trip"
    * NOTE: if you don't put it in `<label>` tag, you will only have *visual* label
    * this will not be available for a11y, and it's not clickable/check-able
    * ```html
      <!-- Two ways to add label to an element: 1st way -->
      <label>
        <input type="checkbox" checked name="jletter">
        Receive promotional offers?
      </label>

      <!-- Two ways to add label to an element: 2nd way -->
      <input type="checkbox" checked name="jletter" id="letter">
      <label for="letter">Receive promotional offers?</label>
      ```
  * Text alternative (not visible): image of wombat with alt "wombat"

### The Accessibility tree
* an API describing the page's structure, similar to DOM API
  * but with less information and fewer nodes b/c a lot of that is for visual presentation
  * imagine an HTML page from the 90s, little to no CSS or styling
* considering A11y tree when writing HTML will help making your sites more accessible

### Semantics in Native HTML
* if it's a button, make it a button, don't make it a div

