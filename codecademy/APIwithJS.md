~~~~~ WHAT IS HTTP? ~~~~~
1. You''ve already been introduced
The HTTP stands for HyperText Transfer Protocol, transfering web pages to your browser

```
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/", false);
xhr.send();

console.log(xhr.status); // should be 200 OK
console.log(xhr.statusText);
```

2. The Client/Server Relationship
But where do those web pages come from? They come from other computers on the Internet called servers.

3. No REST for the Wicked
* In fact, this client/server relationship is a prerequisite of a set of principles called REST (or Representational State Transfer)
* Whenever you navigate through a site by clicking links, you're making a state transition, which brings you to the next page (representing the next state of the application).
* By following this simple model of clicking from page to page, you''re starting to follow REST principles.
* When something follows REST principles, we say that thing is RESTful.

4. A RESTful API
* An API, or application programming interface, is kind of like a coding contract: it specifies the ways a program can interact with an application.
* For example, if you want to write a program that reads and analyzes data from Twitter, you''d need to use the Twitter API, which would specify the process for authentication, important URLs, classes, methods, and so on.
  * For an API or web service to be RESTful, it must do the following:
    1) Separate the client from the server
    2) Not hold state between requests
    3) Use HTTP and HTTP methods

Check out the code in the editor. This is an example of the kind of information we can get from an API! (JSON)
  ```
  {
    "myBlog": {
      "pageViews": "4720",
      "subscribers": "1711",
      "numberOfPosts": "37",
      "mostRecentPost": "2013-01-04",
    }
  }
  ```

~~~~~ THE REQUEST ~~~~~
5. Making a Request

6. The four verbs
* GET: retrieves information from the specified source (you just saw this one!)
* POST: sends new information to the specified source.
* PUT: updates existing information of the specified source.
* DELETE: removes existing information from the specified source.

7. Anatomy of a request
An HTTP request is made up of three parts:
  1) The request line, which tells the server what kind of request is being sent (GET, POST, etc.) and what resource it''s looking for
  2) The header, which sends the server additional information (such as which client is making the request)
  3) The body, which can be empty (as in a GET request) or contain data (if you''re POSTing or PUTing information).
Example:
  ```
  POST /codecademy/learn-http HTTP/1.1 //request line
  Host: www.codecademy.com //header
  Content-Type: text/html; charset=UTF-8 //header
  Name=Eric&Age=26 //data
  ```

8. Endpoints
* Endpoints are API-defined locations where particular data are stored
* For instance, if you''re using the API for a video hosting service, there might be endpoints for the most popular videos, the most recent videos, or videos belonging to a certain genre or category.

9. Authentication & API keys
* Many APIs require an API key. Just as a real-world key allows you to access something, an API key grants you access to a particular API.
  `var apiKey = "FtHwuH8w1RDjQpOr0y0gF3AWm8sRsRzncK3hHh9";`
* Moreover, an API key identifies you to the API, which helps the API provider keep track of how their service is used and prevent unauthorized or malicious activity.
* Some APIs require authentication using a protocol called OAuth (eg: permission to link app to your account)

~~~~~ THE RESPONSE ~~~~~
10. HTTP Status Codes
  * 1 xx: You won't see these a lot. The server is saying, "Got it! I'm working on your request."
  * 2xx: These mean "okay!""The server sends these when it''s successfully responding to your request.
  * 3 xx: These mean "I can do what you want, but I have to do something else first." (redirect address)
  * 4 xx: These mean you probably made a mistake. The most famous is "404," meaning "file not found":
  * 5 xx: These mean the server goofed up and can''t successfully respond to your request.

11. Anatomy of a Response
The HTTP response structure mirrors that of the HTTP request. It contains:
  1) A response line, which includes the three-digit HTTP status code;
  2) A header, which includes further information about the server and its response;
  3) The body, which contains the text of the response.
Example:
  ```
  HTTP/1.1 200 OK //response line
  Content-Type: text/xml; charset=UTF-8 //header
  <?xml version="1.0" encoding="utf-8"?> //body
  <string xmlns="https://www.codecademy.com/">Accepted</string> //body
  ```

12. Parsing XML
* XML (which stands for Extensible Markup Language) is very similar to HTML—it uses tags between angle brackets.
* The difference is that XML allows you to use tags that you make up, rather than tags that the W3C decided on.
  ```
  <pet>
    <name>Jeffrey</name>
    <species>Giraffe</species>
  </pet>
  ```
* Example:
  ```
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://www.codecademy.com/files/samples/javascript_learn_apis.xml", false);

  xhr.setRequestHeader('Content-Type', 'text/xml');
  xhr.send();

  xmlDocument = xhr.responseXML;
  console.log(xmlDocument.childNodes['0'].textContent);
  ```

13. Parsing JSON
* JSON (which stands for Java Script Object Notation) is an alternative to XML
  ```
  {
    "pets": {
      "name": "Jeffrey",
      "species": "Giraffe"
    }
  }
  ```
* Example:
  ```
  var demo = '{"pets": { "name": "Jeffrey", "species": "Giraffe"}}';
  var json = JSON.parse(demo);
  console.log(json);
  ```

15. XML or JSON?
* The only way you'll know what type of data an API will send you is to read that API's documentation!

~~~~~ REVIEW ~~~~~
15. REST Constraints & Requirements
16. Requests
17. Authentication & API Keys
 What's an API key?  An alphanumeric string used to identify you to an API

18. XML & JSON
19. You did it!
