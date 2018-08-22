TRACK 1: INTRO TO CLIENT-SIDE JAVASCRIPT

~~~~~ REVIEW OF HTML ~~~~~
1. HTML goes in the HTML tag
2. BODY to show, HEAD to think
```
<html>
  <head>
  <title>A Really Simple Web Page</title>
  </head>
  <body>
    Ready for the web.
  </body>
</html>
```

3. Left to right, top to bottom
Web browsers evaluate HTML from left to right and from top to bottom.

4. Tags have attributes
e.g.: class="placeholder", href="#home"...

~~~~~ THE SCRIPT TAG ~~~~~
5. The script tag is a bridge
One "special" tag in HTML is the script tag, with default language as JavaScript.
```
<script>
    // A little core JS
    var random = Math.floor(Math.random()*10+1); //pick a random number between 1 and 10
    // And now we print out the result
    document.write(random);
</script>
```

6. Core vs. Client-side
* Core JavaScript refers to the essential language components, which doesnt include the features specific to web browsers.
* Client-side JavaScript refers to the special objects and features used in a browser context.
* Within the script tag, you can use both.

7. Now script over here...
script tag can be place anywhere within the HTML document
```
<html>
  <head>
    <title>Birdwatching</title>
    <script>
      // Create an array (core JS)
      var birds = ["eagle", "sparrow", "toucan", "robin"];
    </script>
  </head>
  <body>
    <p>The first bird we saw was a <script> document.write(birds[0]); </script>.</p>
    <p>We also saw a <script> document.write(birds.slice(1).join(", ")); </script>.</p>
    <script>
      // All inline script tags share the same global scope
      // Which means we can do things like this
      birds[2] = "pigeon";
      document.write("<p>Oh, wait, that toucan was actually a " + birds[2] + ".</p>");
    </script>
  </body>
</html>
```

8. Attributes of the script TAG
The script tag takes attributes as well. (type)

9. src="/outside/script.js"
  ```
  <!-- Import a new script using the src attribute -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
  ```

10. Unobtrusive JavaScript
The philosophy is that content and structure (HTML) should be kept separate from the functionality (JavaScript). This just makes for cleaner, more resilient code.
`<script type="text/javascript" src="script.js"></script>`

~~~~~ INLINE SCRIPTING ~~~~~
11. document.write()
```
<script>
  // Let's put some JavaScript in here
  document.write("Hello, World!")
</script>
```

12. A blunt instrument
Writing JavaScript directly within an HTML document (in a script tag, of course) is called inline JavaScript,

13. Mix-and-match

~~~~~ UNOBTRUSIVE SCRIPTING ~~~~~
14. Get Element X.
15. Working with multiple Tags

16. Lets see some ID
A more precise approach is to target specific tags in the HTML using their id attribute.

17. Just the beginning
Here is a small preview of some more complex stuff one can do with client-side JS.
```
<html>
  <head>
    <title>This is way too much.</title>
    <script>
      window.onload = function() {
        document.getElementById("crazy").onclick = function() {
          document.body.style.color="yellow";
          document.body.style.backgroundColor="purple";
          this.style.color="white";
        }

        for (i=0; i<40; i++) {
          var java = document.createElement("span");
          java.innerHTML = "JavaScript";
          document.body.appendChild(java);
        }
      }
    </script>
  </head>
  <body>
    <h2>I''m so confused!</h2>
    <a href="#" id="crazy">This is crazy!</a>
    <p>Get me out of here!</p>
  </body>
  <script type="text/javascript" src="script.js"></script>
</html>
```
