LEARN ABOUT AJAX, A SET OF TECHNIQUE FOR CREATING ASYNCHRONOUS REQUESTS USING JavaScript

 ~~~~~ 1. Introduction to REQUESTS  ~~~~~
Most websites have to make multiple requests to work fully.
The way JavaScript handles multiple requests is called its event loop.
long messages are broken into smaller messages that are added to the queue when they are ready to be run.
In the case of requesting information from another site, we separate the request (asking another website
  for information) from what we want to do with the response (the information the website returns to us).
  We can do this using a system of technologies called Asynchronous JavaScript and XML, or AJAX.

  function fun() {
    console.log('hi'); //print first
    setTimeout(() => {
      console.log('how are you'); //print last
    }, 2500);
    console.log('hi 2'); //print second
  }
  fun();

Google Developer Console: https:/ /console.developers.google.com/apis/dashboard?project=g-url-shortener-w-codecademy&duration=PT1H

 ~~~~~ 2. HTTP REQUESTS ~~~~~
There are four commonly used types of HTTP requests - GET, POST, PUT, and DELETE

GET requests receive information from other sites by sending a query.
A GET request is like a search. If you navigate to Google and search for something,
you might notice that all of your search terms are added to the URL, like this
https:/ /www.google.com/#q=pizza+near+union+square
This URL is saying "Google, please retrieve a list of pizza near Union Square."
It is not introducing any new information to Google

// GET
const xhr = new XMLHttpRequest(); //create new object
// // handles response
const url = 'http://api-to-call.com/endpoint';
xhr.responseType = 'json';
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.response);
  }
};
xhr.open('GET', url); //opens request
xhr.send(); //sends object


POST requests can change information on another site and will receive information or data in response.
POST requests, on the other hand, introduce new information to another website. Instead of sending this
information in the URL of the request, it is sent as part of the body of the request.

// POST
const xhr = new XMLHttpRequest();
const url = 'http://api-to-call.com/endpoint';
const data = JSON.stringify({
  id: '200'
});
xhr.responseType = 'json';
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.response);
  }
};
xhr.open('POST', url);
xhr.send(data);

 ~~~~~ 3. XHR GET Request I ~~~~~
XMLHttpRequest (XHR) object, a JavaScript object that is used to retrieve data
=> request for data (get resources from a server and bring them back to your web browser)

 ~~~~~ 4. XHR GET Request II ~~~~~
const xhr = new XMLHttpRequest;
const url = 'https://api-to-call.com/endpoint';
xhr.responseType = 'json';
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.response);
  }
}
xhr.open('GET', url);
xhr.send();

 ~~~~~ 5. XHR GET Request III ~~~~~
Use google url shortener API:
// Include data for accessing Google APIs
const apiKey = 'AIzaSyB88VytxSfVDhpKF3bLqf_M5o1GU_Swnec';
const url = 'https://www.googleapis.com/urlshortener/v1/url';
const projection = 'FULL';

// Some page elements
const $inputField = $('#input');
const $expandButton = $('#expand');
const $shortenButton = $('#shorten');
const $responseField = $('#responseField');

// AJAX functions
function expandUrl() {
	const urlToExpand = url + '?key=' + apiKey + '&shortUrl=' + $inputField.val();
  const xhr = new XMLHttpRequest;
  xhr.responseType = 'json';
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      console.log(xhr.response);
      $responseField.append('<p>Your expanded url is: </p><p>' +
                           xhr.response.longUrl + '</p>');
    }
  }
  xhr.open('GET', urlToExpand);
  xhr.send();
}

function shortenUrl() {}

function expand() {
  $responseField.empty();
  expandUrl();
  return false;
}

function shorten() {
  $responseField.empty();
  shortenUrl();
  return false;
}

// Call functions on submit
$expandButton.click(expand);
$shortenButton.click(shorten);

 ~~~~~ 6. XHR POST Request I ~~~~~
POST method brings new data to the server
Recall that in a GET request, the query information (what youre asking the server to return)
is generally sent as part of the URL whereas in a POST request, the information is sent to the
server as part of the body of the request. This information is created and saved in the data constant
and sent to the API as an argument passed to the .send() method.
const data = JSON.stringify({id: '200'});
...
xhr.open('POST', url);
xhr.send(data)

 ~~~~~ 7. XHR POST Request II ~~~~~
 const xhr = new XMLHttpRequest;
 const url = 'https://api-to-call.com/endpoint';
 const data = JSON.stringify({id: '200'});
 xhr.responseType = 'json';
 xhr.onreadystatechange = function() {
   if (xhr.readyState === XMLHttpRequest.DONE) {
     console.log(xhr.response);
   }
 }
 xhr.open("POST", url);
 xhr.send(data);

 ~~~~~ 8. XHR POST Request III ~~~~~
 // Include data for accessing Google APIs
 const apiKey = 'AIzaSyB88VytxSfVDhpKF3bLqf_M5o1GU_Swnec';
 const url = 'https://www.googleapis.com/urlshortener/v1/url';
 const projection = 'FULL';

 // Some page elements
 const $inputField = $('#input');
 const $expandButton = $('#expand');
 const $shortenButton = $('#shorten');
 const $responseField = $('#responseField');

 // AJAX functions
 function expandUrl() {
 	const urlToExpand = url + '?key=' + apiKey + '&shortUrl=' + $inputField.val();
   const xhr = new XMLHttpRequest;
   xhr.responseType = 'json';
   xhr.onreadystatechange = function() {
     if (xhr.readyState === XMLHttpRequest.DONE) {
       console.log(xhr.response);
       $responseField.append('<p>Your expanded url is: </p><p>' +
                            xhr.response.longUrl + '</p>');
     }
   }
   xhr.open('GET', urlToExpand);
   xhr.send();
 }

 function shortenUrl() {
   const urlWithKey = url + '?key=' + apiKey;
   const urlToShorten = $inputField.val();
   const data = JSON.stringify({longUrl: urlToShorten});
   const xhr = new XMLHttpRequest;
   xhr.responseType = 'json';
   xhr.onreadystatechange = function() {
     if (xhr.readyState === XMLHttpRequest.DONE) {
 			$responseField.append('<p>Your shortened url is: </p><p>' + xhr.response.id + '</p>');
     }
   }
   xhr.open('POST', urlWithKey);
   xhr.setRequestHeader('Content-Type', 'application/json');
   xhr.send(data);
 }

 function expand() {
   $responseField.empty();
   expandUrl();
   return false;
 }

 function shorten() {
   $responseField.empty();
   shortenUrl();
   return false;
 }

 // Call functions on submit
 $expandButton.click(expand);
 $shortenButton.click(shorten);

 ~~~~~ 9. $.ajax() GET Request I ~~~~~
jQuery GET
$.ajax
settings
handle response if successful
handle response if error

 ~~~~~ 10. $.ajax() GET Request II ~~~~~
 $.ajax({
   url: 'https://api-to-call.com/endpoint',
   type: 'GET',
   dataType: 'json',
   success(response) {
     console.log(response);
   },
   error(jqXHR, status, errorThrown) {
   console.log(jqXHR);
 	}
 });

 ~~~~~ 11. $.ajax() GET Request III ~~~~~
 // Include data for accessing Google APIs

 const apiKey = 'AIzaSyB88VytxSfVDhpKF3bLqf_M5o1GU_Swnec';
 const url = 'https://www.googleapis.com/urlshortener/v1/url';
 const projection = 'FULL';

 // Some page elements

 const $inputField = $('#input');
 const $expandButton = $('#expand');
 const $shortenButton = $('#shorten');
 const $responseField = $('#responseField');

 // AJAX functions

 function expandUrl() {
 	const urlToExpand = url + '?key=' + apiKey + '&shortUrl=' + $inputField.val();
 	$.ajax({
     url: urlToExpand,
     type: 'GET',
     dataType: 'json',
     success(response) {
       $responseField.append('<p>Your expanded url is: </p><p>' + response.longUrl + '</p>');
     },
     error(jqXHR, status, errorThrown) {
     console.log(jqXHR);

   }
   });
 }

 function shortenUrl() {
   const urlWithKey = url + '?key=' + apiKey;
   const urlToShorten = $inputField.val();
   const data = JSON.stringify({longUrl: urlToShorten});
   const xhr = new XMLHttpRequest;
   xhr.responseType = 'json';
   xhr.onreadystatechange = function() {
     if (xhr.readyState === XMLHttpRequest.DONE) {
 $responseField.append('<p>Your shortened url is: </p><p>' + xhr.response.id + '</p>');
     }
   }
   xhr.open('POST', urlWithKey);
   xhr.setRequestHeader('Content-Type', 'application/json');
   xhr.send(data);
 }

 function expand() {
   $responseField.empty();
   expandUrl();
   return false;
 }

 function shorten() {
   $responseField.empty();
   shortenUrl();
   return false;
 }

 // Call functions on submit

 $expandButton.click(expand);
 $shortenButton.click(shorten);


 ~~~~~ 12. $.ajax() POST Request I ~~~~~
jQuery POST

 ~~~~~ 13. $.ajax() POST Request II ~~~~~
 $.ajax({
   url: 'https://api-to-call.com/endpoint',
   type: 'POST',
   data: JSON.stringify({id: 200}),
   dataType: 'json',
   success(response) {
     console.log(response);
   },
   error(jqXHR, status, errorThrown) {
     console.log(jqXHR);
   }
 });

 ~~~~~ 14. $.ajax() POST Request III ~~~~~
 // Include data for accessing Google APIs

 const apiKey = 'AIzaSyB88VytxSfVDhpKF3bLqf_M5o1GU_Swnec';
 const url = 'https://www.googleapis.com/urlshortener/v1/url';
 const projection = 'FULL';

 // Some page elements

 const $inputField = $('#input');
 const $expandButton = $('#expand');
 const $shortenButton = $('#shorten');
 const $responseField = $('#responseField');

 // AJAX functions

 function expandUrl() {
 	const urlToExpand = url + '?key=' + apiKey + '&shortUrl=' + $inputField.val();
 	$.ajax({
     url: urlToExpand,
     type: 'GET',
     dataType: 'json',
     success(response) {
       $responseField.append('<p>Your expanded url is: </p><p>' + response.longUrl + '</p>');
     },
     error(jqXHR, status, errorThrown) {
     console.log(jqXHR);

   }
   });
 }

 function shortenUrl() {
   const urlWithKey = url + '?key=' + apiKey;
   const urlToShorten = $inputField.val();
   $.ajax({
     url: urlWithKey,
     type: 'POST',
     data: JSON.stringify({longUrl: urlToShorten}),
     dataType: 'json',
     contentType: 'application/json',
     success(response) {
       $responseField.append('<p>Your shortened url is: </p><p>' + response.id + '</p>');
     },
     error(jqXHR, status, errorThrown) {
       console.log(jqXHR);
     }
   })
 }

 function expand() {
   $responseField.empty();
   expandUrl();
   return false;
 }

 function shorten() {
   $responseField.empty();
   shortenUrl();
   return false;
 }

 // Call functions on submit

 $expandButton.click(expand);
 $shortenButton.click(shorten);

 ~~~~~ 15. AJAX request with $.get() ~~~~~
$.get('https://api-to-call.com/endpoint', response => {...}, 'json');
=> second parameter is the success callback function

function expandUrl() {
	const urlToExpand = url + '?key=' + apiKey + '&shortUrl=' + $inputField.val();
	$.get(urlToExpand, response => {
     $responseField.append('<p>Your expanded url is: </p><p>' + response.longUrl + '</p>');
  }, 'json');
}

 ~~~~~ 16. AJAX request with $.post() ~~~~~
$.post('https://api-to-call.com/endpoint', {data}, response => {...}, 'json');
if the API call require contentType, you have to keep it similar to $.ajax syntax:

function shortenUrl() {
  const urlWithKey = url + '?key=' + apiKey;
  const urlToShorten = $inputField.val();
  $.post({
    url: urlWithKey,
    data: JSON.stringify({longUrl: urlToShorten}),
    dataType: 'json',
    contentType: 'application/json',
    success(response) {
      $responseField.append('<p>Your shortened url is: </p><p>' + response.id + '</p>');
    },
    error(jqXHR, status, errorThrown) {
      console.log(jqXHR);
    }
  })
}

 ~~~~~ 17. AJAX request with $.getJSON() ~~~~~
If you know, for example, that you want your data type to be JSON, you can use the
$.getJSON() method in place of the $.get() method

function expandUrl() {
	const urlToExpand = url + '?key=' + apiKey + '&shortUrl=' + $inputField.val();
	$.getJSON(urlToExpand, response => {
     $responseField.append('<p>Your expanded url is: </p><p>' + response.longUrl + '</p>');
  });
}

 ~~~~~ 18. Review Request I ~~~~~
 JavaScript is the language of the web because of its asynchronous capabilities.
 A set of tools that are used together to take advantage of JavaScript s asynchronous capabilities
 is called AJAX, which stands for Asynchronous JavaScript and XML.

There are four HTTP request methods, two of which are GET and POST.

GET requests only request information from other sources.

POST methods can introduce new information to other sources in addition to requesting it.

GET requests can be written using an XMLHttpRequest object and vanilla JavaScript.

POST requests can also be written using an XMLHttpRequest object and vanilla JavaScript.

Writing GET and POST requests with XHR objects and vanilla JavaScript requires constructing
the XHR object using new, setting the responseType, creating a function that will handle
the response object, and opening and sending the request.

Much of the boilerplate used to write GET and POST requests with XHR and vanilla JavaScript
can be reduced by using the $.ajax() method from the jQuery library.

jQuery provides other helper methods that can further reduce boilerplate such as $.get(),
$.post(), and $.getJSON().

Determining how to correctly write the requests and how to properly implement them requires
carefully reading the documentation of the API with which you're working.
