# Training Series - Finding Elements in the DOM

* Finding elements from the document with simple API:
  * `document.getElementById( id )`
  * `document.getElementsByTagName( tag )`
  * `document.getElementsByClassName( className )`
  * `document.querySelector( selector )`
  * `document.querySelectorAll( selector )`
* NOTE: ID must be unique (1 id per element), whereas same class can apply to multiple elements
* Also: ID is a global variable, which should normally be avoided in programming

* Exercise: Creating the $ function
* Exercise: Creating text/html/val functions

* Finding elements from an element
  * Elements have the same query methods as document.
  * `element.getElementById( id )`
  * `element.getElementsByTagName( tag )`
  * `element.getElementsByClassName( className )`
  * `element.querySelector( selector )`
  * `element.querySelectorAll( selector )`
* **Chaining**: `document.getElementById('#superheros').querySelectorAll('li a');`

* Creating a find function

