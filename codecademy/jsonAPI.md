TRACK(4): INTRO TO JSON AND API

~~~~ JSON ~~~~~
1. What is JSON?
Javascript Object Notation allows programmers to save and load objects from a file.
```
var person = Object();
person.age = 23;
person.height = 170;
// JSON syntax: {"age":23, "height":170}
```

2. JSON for fun and profit
Use a single quote to enclose the string, since you have to use double quotes inside.
```
var text1 = '{                      \
                "color" : "red",    \
                "number" : 5,       \
                "popularity" : 0.3  \
}';
```

3. OBjects inside objects
 JSON is basically just a clever way of representing objects by writing everything out in a very specific way

4. JSON parse and stringify
convert objects to strings and strings to objects on the fly.
```
var string = JSON.stringify({age:32});
var object = JSON.parse('{"age":32}');
```

5. JSONP Part I
* What makes JSON useful is that it can be passed over the Internet to other computers, people, and scripts.
* JSON with Padding (JSONP) is a way of transmitting JSON objects across a network.
* But if you used JSON value in a javascript file, it would look just like a "block".

6. JSONP Part II
* `<script type="text/javascript"  src="http://example.com/db.js?id=001&jsonp=JsonpFunction"></script>`
* This new HTML code adds the "jsonp" parameter, which provides a funct name.
* What your browser will (almost always!) do when it''s interpreting the HTML is return the JSON object "wrapped" in a funct call.
  * `JsonpFunction({ "id":001, "name":"Alex", "gender":"female" });`

~~~~ THE TWITTER API ~~~~~
7. HTML Nightmares
* Application - a computer program
* Programmer - you! A person who writes programs
* Interface - an organized and well documented way to access resources
* An Application Programmer Interface (API) is usually a set of functions, maybe Javascript functions, that can be used to easily access complex functions

8. First date with the Twitter API
* URL Encoding: "ninja%20turtles"
  * http:/ /search.twitter.com/search.json?q=ninja%20turtles. Go to this link!
  * => var str = '{object return here}';

9. JSONP might make life easier
* If you add "&callback=parseResponse", you may see a difference
```
parseResponse({
    "errors": [{
        "message": "The Twitter REST API v1 is no longer active. Please migrate to API v1.1. https://dev.twitter.com/docs/api/1.1/overview.",
        "code": 64
    }]
});
```
