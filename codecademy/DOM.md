TRACK 2: INTRO TO THE DOM

~~~~~ THE DOM IS THE BOMB ~~~~~
1. HTML, DOM, API, WTF?
* DOM - document object model
* API - application programming interface
* DOM is an API for interacting with HTML and XML documents

2. The DOM is a tree of Objects
* The best way to think of the Document Object Model is as a tree of nested objects.
* Every part of an HTML document is represented by an object within the DOM.
  * Document >> html >> head/body >> title/h1/p >> script...

3. Mimicking the Markup
* A nested tag is called the child of its enclosing or parent tag
  ```
  var bodyTag = document.body;
  var divTag  = document.body.firstChild;
  var pTag    = document.body.firstChild.firstChild;
  ```

4. All My Children
* Since the children property returns an array, you can use array notation (array[n]) to select a specific child element of the element object it is called on.
  ```
  // Print the first child of the body element
  document.write(document.body.firstChild);
  // Set the value of firstP to the first <p> tag
  var firstP = document.body.children[0];
  // Arrays of arrays - how does this one work?
  var link = document.body.children[1].children[0];
  ```

5. Get, Set, Go
  ```
  // Get the third child of body using the children attribute
  var thirdP = document.body.children[2]
  // Assign a new value to the third p element using the innerHTML property
  thirdP.innerHTML = 'Go';
  ```

6. Traversing up, down, all around
* We can retrieve the parent object of any given DOM element with the property parentNode
  ```
  // Get the paragraph element
  var para = document.body.children[0];
  // Get the parent of para
  var paraParent = para.parentNode;
  ```

~~~~~ WINDOW TO THE WORLD ~~~~~
7. Window is the global scope
The Window object is the global scope of the DOM - every other object in the DOM is contained w/in the window.
  `document.write(window.document); // print on screen: [object HTMLDocument]`

8. An order of Operations
window.onload is an event handler that executes code when a particular event is triggered.
  ```
  <html>
    <head>
      <title>Window.onload</title>
      <script>
         window.onload = function() {
           document.body.children[1].innerHTML = "This is JavaScript-created content."
         };
      </script>
    </head>
    <body>
      <p>This is some static content.</p>
      <p>This is the content we want to change.</p>
    </body>
  </html>
  ```

9. What you see is what you get
  ```
  // Write the screen height to the document
  document.write("<p>Height: " + window.screen.height + "</p>");
  // Write the screen width to the document
  document.write("<p>Width: " + screen.width + "</p>");
  ```

10. Location, location, Location
Location is another object, like Screen, but instead of storing information about the display, it stores information about the location of the current web page file on its web server. This includes information like the URL (Uniform Resource Locator) and the directory of the current page on the host server.
  ```
  // Print out some information to the document
  document.write(
    "<p>Host Site: " + window.location.host +
    "<br/>Current URL: " + location.href +
    "<br/>Relative Path: " + location.pathname + "</p>"
    );
  ```

11. Why is window.onload important?
* If we include JavaScript in our HTML, it will only have access to the DOM objects that have already been evaluated.
* So if we put our JavaScript in the head tag, the script is executed before we actually have a body element
  => wrap the JS in teh window.onload event handler
  ```
  <html>
    <head>
      <title>Why use window.onload?</title>
      <script>
        window.onload = function() {
          // Get the second child element of body and assign it to this variable
          var toReplace = document.body.children[1];
          // Set the content of the element
          toReplace.innerHTML = "A fresh batch of gruyere";
      }
      </script>
    </head>
    <body>
      <h3>Grocery store inventory</h3>
      <p>Old moldy cheese</p>
      <p>Crispy apples</p>
      <p>Tasty, tasty arugula</p>
    </body>
  </html>
  ```

~~~~~ SELECTOR METHODS ~~~~~
12. document.write("Once upon a time")
document.write is not very flexible, fine for ony a single-line console interface

13. getElementsByTagName()
  `var paragraphs = document.getElementsByTagName('p');`

14. getElementsById()
  `document.getElementById("header").innerHTML = "Best Stories Ever";`
=> use method chaining (performing multiple method calls in a single statement, one after the other)

15. getElementsByName()
In the HTML, you''ll notice that two of the li tags have a new name attribute.
The name attribute, unlike the id, is not unique. Multiple elements in a single page can have the same name
```
window.onload = function() {
  // Retrieve the elements with the name attribute of "priority"
  var b = document.getElementsByName("priority");
  // This is a bit more complex, as it uses a regular expression to find and replace HTML content.
  // Don't worry if you can't understand, you'll get there soon enough.
  for (i=0; i<b.length; i++) {
    b[i].innerHTML = b[i].innerHTML.replace(/(.*)/, "<b>$1</b>");
  }
};
```

~~~~~ CREATION AND DESTRUCTION ~~~~~
16. createElement()
`var newStory = document.createElement("li");`

17. appendChild()
* When you use createElement(), you add that element to the DOM, but it is not attached to the visible HTML tree yet.
* In order to make it visible, you have to insert it into the HTML with another document method, appendChild()
  `window.onload = function() { document.getElementById("storylist").appendChild(newStory); };`

18. removeChild()
```
window.onload = function() {
  // Grab the inappropriate story from the list using its id attribute
  var wrongStory = document.getElementById("remove");
  // And now lets quietly get rid of it
  document.getElementById("storylist").removeChild(wrongStory);
}
```
