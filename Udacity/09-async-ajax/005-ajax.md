# Lesson 5: Ajax with XHR

### Course Intro
* GET request: an internet request for data. Sent fron a client to a server
* Response: a server's response to a request. Sent from a server to a client. A response to a GET request will usually include data that the client needs to load the page's content
* callback: you call them when you have a response back

### Client Server Demonstration
* think mailman

### Ajax Definition & Examples
* Asynchronous JavaScript And XML request
* Asynchronous means it's non-blocking, you can do other things while waiting for the response
* AJAX response: Data: XML (`<entry></entry>`), JSON(`{prop: data}`), HTML (`<div></div>`)
* XML stores data, HTML presents it on a browser

### APIs
* API: application programming interface
* we use API to interact with various data sources (get/retrive/access data)

### Create an async request with XHR
### The XHR object
* `const asyncRequestObject = new XMLHttpRequest();`
* XMLHttpRequest(XHR or xhr) can be used to request any file type (e.g. plain text, HTML files, JSON files, image files, etc.) or data from an API

### XHR's .open() method
* the `.open()` takes 2 params, 1st: HTTP method, 2nd: URL to send the request
* `asyncRequestObject.open('GET', 'https://unsplash.com');` // nothing will happen
  * NOTE: the `.open()` method **does not actually send the request**, it set the stage and gives the object the info it will need when the request is actually sent (=> similar to putting cards into envelop, but you don't send yet)
  * passing `false` as the 3rd param makes the XHR request become a *synchronous* one, meaning JS will pause and wait until the request is returned before continuing (blocking)
  * leaving the 3rd param blank sets default 'true'
* `GET` is to retrieve data
* `POST` is to send data
* same-origin policy: for security reasons, you can only make requests for assets and data on the same domain as the site that will end up loading the data
* CORS (cross-origin resource sharing): to overcome same-origin policy, CORS allow developers to access informations from different APIs

### XHR's .send() method
* to actually send the request, we need to use `.send()` method
* `asyncRequestObject.send();`
* to handle successful response of an XHR request, we set the `onload` property on the object to a function that will handle it:
* to handle errors, if something happends to the request and it can't be fulfilled, then we need to use `onerror` property
  ```js
  function handleSuccess() {
    // convert data from JSON to a JavaScript object
    const data = JSON.parse(this.responseText);
    // in the function, the 'this' value is the XHR object
    // this.responseText holds the response from the server
    console.log(data); // eg: the HTML of unspash.com
  }
  function handleError() {
    // in the function, the 'this' value is the XHR object
    console.log('An error occured :((');
  }

  const asyncRequestObject = new XMLHttpRequest();
  asyncRequestObject.open('GET', 'https://unsplash.com');
  asyncRequestObject.onload = handleSuccess;
  // if 'onload' is not set, then the request does *return* but nothing happends
  asyncRequestObject.onerror = handleError;
  // if 'onerror' is not set, you won't know what's going on
  asyncRequestObject.send();
  ```

### A full request
* when making a request from an API that returns JSON, all we need to do is convert that JSON response into a JavaScript Object (use `JSON.parse()`)

### Project Initial Walkthrough
### Setting a request header
### Project Final Walkthrough
* see github repo: course-ajax

### XHR Recap
* to send an async request:
  1. `new XMLHttpRequest()`;
  2. `.open('GET', "<url-goes-here>")` method
  3. set `.onload` and `.onerror` properties
  4. `.send();` method
* to use the response: `.responseText` property

### XHR Outro
