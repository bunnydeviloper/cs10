# Lesson 20
## Creating Content with JavaScript

* `.innerHTML`: this is a property, represent markup of the element's content
  * get an element's (and all of its descendants) HTML content
  * set an element's HTML content (rendered)
  * `.innerHTML` return a DOMString (retun the HTML content inside the tags)
  * != `.outerHTML`

* `.textContent`
  * set the text content of an element and all its descendants (plain text)
  * return the raw text content of an element and all its descendants
  
* `.innerText`
  * return the text as it would be seen visually (after applied CSS)

* `.createElement()`: a method on the `document` object
  * `document.createElement('p')`
  * this method DOESN't add the element to the DOM, hence we need to use `.appendChild()`

* `.appendChild()`
  ```js
  const newSpan = document.createElement('span');
  const mainHeading = document.querySelector('h1');
  mainHeading.appendChild(newSpan); //add <span> as the LAST child element of h1
  ```
  * note: `.appendChild()` must be call on existing element, can't call on `document` object
  * `document.appendChild(newSpan)` will cause ERROR
  * note: if you call `.appendChild(newSpan)` on two elements, only the latter one will apply
  * `.appendChild()` method will move an element from its current position to the new position

* `.createTextNode()`: note: using `.textContent` is better
  ```js
  const p = document.createElement('p')
  // const ptext = document.createTextNode('This is a newly created p!');
  // p.appendChild(ptext);
  // same as...
  p.textContent('This is a newly created p!');
  document.body.appendChild(p);
  ```

* `.insertAdjacentHTML(location, HTMLtext)`
  * **location**
    ```html
    <!-- beforebegin: inserts HTML text as previous sibling -->
    <p>
      <!-- afterbegin: inserts HTML text as the first child -->
      Existing text/HTML content
      <!-- beforeend: inserts HTML text as the last child -->
    <p>
    <!-- afterend: inserts HTML text as following sibling -->
    ```
    
  ```js
  const mainH1 = document.querySelector('#mainH1');
  const addText = '<h2>Coding is fun!</h2>';
  mainH1.insertAdjacentHTML('afterend', addText);
  ```

