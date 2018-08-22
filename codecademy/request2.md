LEARN HOW TO USE NEW FEATURES AVAILABLE IN ES6 AND ES7 TO WRITE AJAX REQUEST

 ~~~~~ 1. Introduction to requests with ES6 ~~~~~
A Promise is an object that acts as a placeholder for data that has been requested but not yet received.
Eventually, a Promise will resolve to the value requested or to a reason why the request failed.

If the requested information or any error except a network error is received, the Promise is fulfilled
and calls a func to handle the response.
If there is a network error, the Promise is rejected and will call a func to handle the error.

 ~~~~~ 2. fetch() GET request I ~~~~~
fetch()
send request
convert response object to JSON
handle errors
handle success

 ~~~~~ 3. fetch() GET request II ~~~~~
 We chain a .then() method to the closing parentheses of the fetch() func.
 This is where the asynchronicity of JavaScript comes in - the fetch() func makes the request
 and returns the response, and we dont call the func that will handle the response until it has been received.

 .then() takes two callback functions as parameters, the first of which handles success
 and the second of which handles failure.

At the end of the first .then() method, we chain another.then() method that takes a single callback func
as an argument. This callback funct''s parameter is jsonResponse and this func will handle the jsonResponse
object. This is an object that contains the information we requested from the API and we can use that information
on our website.

 ~~~~~ 4. fetch() GET request III ~~~~~
 fetch('https://api-to-call.com/endpoint').then(
 	response => {
 		if (response.ok) {
       return response.json();
     }
     throw new Error('Request failed!');
   },
   networkError => {
     console.log(networkError.message);
   }
 ).then(jsonResponse => jsonResponse);

 ~~~~~ 5. fetch() GET request IV ~~~~~
 // Include data for accessing Google APIs
 const apiKey = 'AIzaSyB88VytxSfVDhpKF3bLqf_M5o1GU_Swnec';
 const url = 'https://www.googleapis.com/urlshortener/v1/url';

 // Some page elements

 const $inputField = $('#input');
 const $expandButton = $('#expand');
 const $shortenButton = $('#shorten');
 const $responseField = $('#responseField');

 // AJAX functions

 function expandUrl() {
 	const urlToExpand = url + '?shortUrl=' + $inputField.val() + '&key=' + apiKey;
 	fetch(urlToExpand).then(
   	response => {
       if (response.ok) {
         return response.json();
       }
       throw new Error('Request failed!');
     },
   	networkError => {
       console.log(networkError.message);
     })
 };


 function shortenUrl() {

 };

 function expand() {
   $responseField.empty();
   expandUrl();
   return false;
 };

 function shorten() {
   $responseField.empty();
   shortenUrl();
   return false;
 };

 $expandButton.click(expand);
 $shortenButton.click(shorten);

 ~~~~~ 6. fetch() GET request V ~~~~~
 The first callback funct that we passed to .then() returns a Promise. However, we want to be able to access
  the information returned with the Promise. This is why we''re going to chain an additional .then() method

 function expandUrl() {
 	const urlToExpand = url + '?shortUrl=' + $inputField.val() + '&key=' + apiKey;
 	fetch(urlToExpand).then(
   	response => {
       if (response.ok) {
         return response.json();
       }
       throw new Error('Request failed!');
     },
   	networkError => {
       console.log(networkError.message);
     }).then(
   	jsonResponse => {
 		$responseField.append('<p> Your expanded URL is </p><p> ' + jsonResponse.longUrl + '</p>');
 		return jsonResponse;    }
   )
 };

 ~~~~~ 7. fetch() POST request I ~~~~~
fetch() POST
send request
convert response object to JSON
handle errors
handle success

 ~~~~~ 8. fetch() POST request II ~~~~~
 fetch('https://api-to-call.com/endpoint', {
   method: 'POST',
   body: JSON.stringify({id: '200'}),
 }).then(
 	response => {
     if (response.ok) {
       return response.json();
     }
     throw new Error('Request failed!');
   },
   networkError => {
     console.log(networkError.message);
   }
 ).then(
 	jsonResponse => jsonResponse
 )

 ~~~~~ 9. fetch() POST request III ~~~~~
//create the request
 function shortenUrl() {
 const urlWithKey = url + '?key=' + apiKey;
 const urlToShorten = $inputField.val();
   fetch(urlWithKey, {
     method: 'POST',
     headers: {'Content-type':'application/json'},
     body: JSON.stringify({longUrl: urlToShorten}),
   })
 };

 ~~~~~ 10. fetch() POST request IV ~~~~~
 //create the request AND handle the response
 The request returns a Promise which will either resolve to an object containing the information
 we need or to an error. If the Promise resolves to the information we requested, we convert that to
 JSON and a callback funct is called to return the response to us as an object. If not, an error
 funct is called which will log the error to the console so that we can see what went wrong.

 function shortenUrl() {
 const urlWithKey = url + '?key=' + apiKey;
 const urlToShorten = $inputField.val();
   fetch(urlWithKey, {
     method: 'POST',
     headers: {'Content-type':'application/json'},
     body: JSON.stringify({longUrl: urlToShorten}),
   }).then(
   response => {
     if (response.ok) {
 			return response.json();
     }
     throw new Error('Request failed!');
   },
   networkError => {
     console.log(networkError.message);
    })
 };

 ~~~~~ 11. fetch() POST request V ~~~~~
you received the Promise, which resolved into an object. Now, let''s make the information from that
object available to us, add it to our webpage, and handle errors.

function shortenUrl() {
  const urlWithKey = url + '?key=' + apiKey;
  const urlToShorten = $inputField.val();
  fetch(urlWithKey, {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({longUrl: urlToShorten})
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => console.log(networkError.message)).then(
    jsonResponse => {
    $responseField.append('<p> Your shortened URL is </p><p>' + jsonResponse.id + '</p>');
    return jsonResponse;
  });
};

 ~~~~~ 12. async GET request I ~~~~~
The same requests that you''ve been writing by requesting the information with fetch() and chaining .then()
to take advantage of the asynchronous properties of JavaScript can be condensed using two new function k
eywords introduced in ES7: async and await.

Because async / await is ES7, and therefore not yet supported by all browsers, it''s essential to ensure
your code is transpiled, or converted, to an earlier version of JavaScript if you''re using them. A useful
tool for transpilation is Babel.

On the first line, we use the async keyword to create the getData() funct. The async keyword creates
a funct that will return a Promise.

We use a try/catch statement to separate the code that will handle success from the code that will handle errors.
Inside the try code block, we use the fetch() funct to send a request to the URL provided. As before, the
fetch() funct creates a request object and returns a Promise that will ultimately resolve to a response object.

We use the await keyword to tell the program to continue moving through the message queue while the Promise
resolves. When this happens, the object is saved to a variable called response.

The conditional statement that checks the ok property of the response object is the same as in the previous
two cases. We await the resolution of calling the .json() method on the response object and save the new JSON
object to a variable called jsonResponse. We then return jsonResponse.

Finally, in the block of the catch (error) statement, we log the error to the console

 ~~~~~ 13. async GET request II ~~~~~
 async function getData() {
   try {
     let response = await fetch('https://api-to-call.com/endpoint');
     if (response.ok) {
       let jsonResponse = await response.json();
       return jsonResponse;
     }
     throw new Error('Request failed!');
   } catch (error) {
     console.log(error);
   }
 }

 ~~~~~ 14. async GET request III ~~~~~
 // Include data for accessing Google APIs
 const apiKey = 'AIzaSyB88VytxSfVDhpKF3bLqf_M5o1GU_Swnec';
 const url = 'https://www.googleapis.com/urlshortener/v1/url';

 // Some page elements
 const $inputField = $('#input');
 const $expandButton = $('#expand');
 const $shortenButton = $('#shorten');
 const $responseField = $('#responseField');

 // AJAX functions
 async function expandUrl() {
   const urlToExpand = url + '?shortUrl=' + $inputField.val() + '&key=' + apiKey;
   try {
     let response = await fetch(urlToExpand);
     if (response.ok) {
       let jsonResponse = await response.json();
 			$responseField.append('<p> Your expanded URL is </p><p>' + jsonResponse.longUrl+ '</p>');
 			return jsonResponse;    }
   } catch (error) {
     console.log(error);
   }
 }

 // Clear page and call AJAX functions
 function expand() {
   $responseField.empty();
   expandUrl();
   return false;
 };

 function shorten() {
   $responseField.empty();
   shortenUrl();
   return false;
 };

 $expandButton.click(expand);
 $shortenButton.click(shorten);

 ~~~~~ 15. async POST request I ~~~~~
similar to a GET request, see example below

 ~~~~~ 16. async POST request II ~~~~~
 async function getData() {
   try {
     let response = await fetch('https://api-to-call.com/endpoint', {
       method: 'POST',
       body: JSON.stringify({id: 200}),
     });
     if (response.ok) {
         let jsonResponse = await response.json();
         return jsonResponse;
     }
     throw new Error('Request failed!');
   } catch (error) {
     console.log(error);
   }
 }

 ~~~~~ 17. async POST request III ~~~~~
 // Include data for accessing Google APIs
 const apiKey = 'AIzaSyB88VytxSfVDhpKF3bLqf_M5o1GU_Swnec';
 const url = 'https://www.googleapis.com/urlshortener/v1/url';

 // Some page elements
 const $inputField = $('#input');
 const $expandButton = $('#expand');
 const $shortenButton = $('#shorten');
 const $responseField = $('#responseField');

 // AJAX functions
 async function expandUrl() {
   const urlToExpand = url + '?shortUrl=' + $inputField.val() + '&key=' + apiKey;
   try {
     let response = await fetch(urlToExpand);
     if (response.ok) {
       let jsonResponse = await response.json();
 			$responseField.append('<p> Your expanded URL is </p><p>' + jsonResponse.longUrl+ '</p>');
 			return jsonResponse;    }
   } catch (error) {
     console.log(error);
   }
 }

 async function shortenUrl() {
   const urlToShorten = $inputField.val();
   const urlWithKey = url + '?key=' + apiKey;
 	try {
     let response = await fetch(urlWithKey, {
       method: 'POST',
       body: JSON.stringify({longUrl: urlToShorten}),
       headers: {'Content-type':'application/json'},
     });
     if (response.ok) {
       let jsonResponse = await response.json();
 			$responseField.append('<p> Your shortened URL is </p><p>' + jsonResponse.id + '</p>');
 			return jsonResponse;    }
   } catch (error) {
     console.log(error);
   }
 }

 // Clear page and call AJAX functions
 function expand() {
   $responseField.empty();
   expandUrl();
   return false;
 };

 function shorten() {
   $responseField.empty();
   shortenUrl();
   return false;
 };

 $expandButton.click(expand);
 $shortenButton.click(shorten);

 ~~~~~ 18. Review Requests II ~~~~~
 GET and POST requests can be created a variety of ways.

We can asynchronously request data from APIs using AJAX. fetch() and async/await are new technologies 
developed in ES6 and ES7 respectively.

Promises are a new type of JavaScript object that represent data that will eventually be returned from a request.

fetch() is a web API that can be used to create requests. fetch() will return Promises.

We can chain .then() methods to handle Promises returned by fetch.

The .json() method converts a returned Promise to a JSON object.

async is a keyword that is used to create functions that will return Promises.

await is a keyword that is used to tell a program to continue moving through the message queue while a
Promise resolves.

await can only be used within functions declared with async
