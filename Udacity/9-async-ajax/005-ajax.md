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

### A full request
### Project Initial Walkthrough
### Setting a request header
### Project Final Walkthrough
### XHR Recap
### XHR Outro
