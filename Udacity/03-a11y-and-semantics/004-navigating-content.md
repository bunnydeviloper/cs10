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
**access key**: shortcut key to quickly jump to a field (eg: search input field)

### Link Text
* link anti-pattern (~ NOT a link)
  * `<span class="link" onclick="dosth()">I'm not a link</span>`
  * `<a onclick="dosth()">I'm not a link either</a>`
  * these are tag that performs an ACTION, but they are not links
* `<a href="#internal">Now I'm a link</a>`
  * this will make the link shows up in the links list
  * works with keyboard
  * can be bookmarked
* example of more link anti-patterns, and how to fix it:
  * `<a href="#" onclick="dosth()">Do something!</a>`
    * this appear to be a link tag, but the role serves more like a button
    * fix: `<button class="link onclick="dosth()">Do something!</button>`
  * `<a href="/"><img src="somePhoto.svg"></a>`
    * this link will be un-usable to assistive technology
    * fix: `<a href="/"><img alt="Udacity" src="UdacityLogo.svg"></a>`

### Landmarks
* `<header>`: page banner or introductory section
* `<nav>` (within header): section that links to other pages or parts w/in the page, like table of content
* `<main>`: represent the main content of a page, typically only 1 main portion
* `<article>` (within main): self-contained section of contents
* `<aside>` (within article): represent contents that related to contents around it
* `<section>`: a generic section of a page (you can include heading inside this 'section'
* `<footer>`: related sources...
