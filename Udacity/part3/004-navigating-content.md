# Lesson 4
## Navigating Content

### Semantics - Navigating Content
* heading is one of the most important features to built in to webpage for screen reader to use

* to print out all headings in the chrome dev console:
  ```js
  for (var i = 0, headings = $$('h1,h2,h3,h4,h5,h6');
     i < headings.length; i++) {
   console.log(headings[i].textContent.trim() + " " +
               headings[i].tagName,
               headings[i]);
  }
  ```
* sometime, the heading maybe offscreen, to hide visually, but available for screen reader users
* other navigation options: links, form controls, landmarks

### Form controls
* **access key**: shortcut key to quickly jump to a field (eg: search input field)

### Link Text
