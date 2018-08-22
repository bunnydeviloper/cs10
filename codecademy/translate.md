TRACK(3): TRANSLATE A STRING TO SPANISH

~~~~~ BUILDING THE FOUNDATION ~~~~~
1. Create HTML
2. Get Header
3. Get List
4. Write funct

~~~~~ FUNCTION TOSPANISH() ~~~~~
5. Add funct to window.onload
The first thing we want to do is call our funct toSpanish() within window.onload so that the funct is not executed until the full HTML document has loaded

6. Change content of Elements
change the title directly using the title property of the document object, as in document.title = "string"

7. Looping through Arrays of Elements (<li></li>)
8. Add a new Element
    <html>
      <head>
        <title>English to Spanish</title>
      </head>
      <body>
        <h1 id="contenttitle">Signs of Spring</h1>
        <ul>
          <li>More sun</li>
          <li>Flowers</li>
          <li>More bunnies</li>
        </ul>
        <div id="footer">&copy; 2012</div>
      </body>
      <script type="text/javascript" src="script.js"></script>
    </html>
----------
    var contentTitle = document.getElementById("contenttitle");
    var list = document.getElementsByTagName("li");

    function toSpanish() {
      contentTitle.innerHTML = "Se&ntilde;as de la Primavera";

      document.title = "Ingles a Espanol";

      for (i=0; i<list.length; i++) {
        if (list[i].innerHTML === "More sun") {
          list[i].innerHTML = "M&aacute;s sol";
        }
        else if (list[i].innerHTML === "More bunnies") {
          list[i].innerHTML = "M&aacute;s conejitos";
        }
        else if (list[i].innerHTML === "Flowers") {
          list[i].innerHTML = "Flores";
        }
      }

      // Create a <span> element and assign it to this variable
      var langMarker = document.createElement("span");
      // Set the inner HTML of your new element
      langMarker.innerHTML = " Lengua: Espa&ntilde;ol";
      // Append langMarker to your footer
      document.getElementById("footer").appendChild(langMarker);
    }

    window.onload = function() {
      toSpanish();
    };
