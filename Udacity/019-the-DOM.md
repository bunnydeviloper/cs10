# Lesson 19
## The Document Object Model

HTML can only make static web pages
change, motion, control programmatically
image slider, form validation, rating system, commenting syste

**The DOM**
* tree structure that captures the content, properties of the HTML, and all the relationship between the nodes
* DOM is the full parse representation of the HTML markup

1. HTML is received
// After parsing has occurred, 'tokennization' takes one character at a time and builds up tokens (DOCTYPE, start tag, end tag, commetn, character, end-of-file)
2. HTML tags are converted to tokens
3. Tokens are converted to Nodes
4. Nodes are converted to the DOM
> #### Characters > Tokens > Nodes > DOM

* the DOM can be access using a special obj provided by the browser `document`. This is the global object
* DOM is NOT part of the JS language
* DOM is constructed from the browser

* document.getElementById('id');
* if ID doesn't exist, it will return null
**Beware of S**
* document.getElementsByClassName('class');
* document.getElementsByTagName('h1');

* properties = data; methods = functionality, interface = blueprint
* Interface != User Interface (UI) != Graphical User Interface (GUI)
* In the console, if you select an element, type `$0` will return that element

* Node Interface (capital 'N') is a blueprint that contains information about all of the properties and methods for real nodes (lowercase 'n')
* Element Interface = blueprint for creating elements, it is a descendent of the Node Interface (hence, inheritance)
* Document Interface

> #### Element > Node > EventTarget

* jQuery: make things easy to write code for multiple browsers, since browsers is getting better, jQuery's uses diminished and been replaced by native DOM methods

* document.querySelector('#id');
* document.querySelector('.class'); //note: only return the 1st item
* document.querySelectorAll('.class'); //return all elements as NodeList, not an array (eg: can't use `map` method)
* document.querySelector('h1'); //only return the 1st item
* document.querySelectorAll('h1'); //return all elements as NodeList, not an arrray 
* document.querySelectorAll('.class p'); //select all p elements that are descendents of elements that have the class `class`

```js
// use for loop on NodeList
const allHeaders = document.querySelectorAll('header');

for(let i = 0; i < allHeaders.length; i++){
    console.dir(allHeaders[i]);
}
```

**Modify page content**
**Browser events**
**Performance**
