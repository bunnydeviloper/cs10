# Lesson 12: security

### Security intro
### Origins
* An origin is made up of three parts:
  * Data Scheme: `https://`
  * Hostname: `www.udacity.com`
  * Port: `:443`
* cross-origin fetch requests: you can make the request, but you just canNOT read the response

### Origins 2
* same-origin policy: browser-enforced, the client will NOT let you send off requests
* eg different resources:
  * you can't inspect a image within a canvas element
  * you can't see content of script tag that includes a cross-origin resource

### Overriding same origin policy
* CORS
* JSONP: JSON with padding, returns a script containing the data
  * script from other origin will execute and share the same environment with your own script
  * JSONP api requires you to includes the function name as query parameter
* example:
  ```js
  // your personal site: mycourses.com
  // make a fetch request to udacity.com to see all your enrolled courses
  fetch("https://api.udacity.com/courses?status=enrolled")
  // then, the return data will be ["course1", "course2", ...]
  // however, this will fail b/c CORS policy, your host is different from udacity host

  // to solve this, we use JSONP (this the api supports JSONP)
  <script src="https://api.udacity.com/courses?status=enrolled&callback=f">
  // Cross-origin script access allowed!
  // the server will return all data, wrapped in a function call
  // f(["course1", "course2", ...])
  // note: you need to create the call back function 'f'
  ```

### CORS
* CORS headers allow cross-origin requests
  ```
  // REQUEST: use preflight requests
  OPTIONS /
  Referer: mycourses.com

  // RESPONSE: only headers are sent
  200 OK
  Access-Control-Allow-Origin: mycourses.com

  // REQUEST: with CORS header
  GET /courses?status=enrolled
  Host: api.udacity.com
  Referer: mycourses.com

  // RESPONSE: with CORS header
  HTTP/1.1 200 OK
  Date: Mon, 20 May 2017 00:12:32 GMT
  Access-Control-Allow-Origin: mycourses.com
  Connection: Keep-Alive
  Content-Type: application/xml
  ```
* CORS has been adopted by the API providers as a way to share resources

### Quiz: preflight request with CORS
* most GET request is not preflight

### Quiz: preflight request with CORS 2
```js
fetch('http://www.example.com", {
  method: "POST",
  mode: "cors",
  headers: { "X-FOrwarded-For": "www.google.com"} // this line causes request to be preflighted
});
```

### Quiz: preflight request with CORS 3
```js
fetch('http://www.example.com", {
  method: "PUT", // this line causes request to be preflighted
  mode: "cors",
  headers: { "Accept": "text/html"}
});
```
### Security Exploit - CSRF
* requests that looks like they came from a form will not be preflighted
* CSRF - cross-site request forgery
* CSRF token

### Quiz: CSRF
### security Exploit - XSS
### Quiz: XSS
### Security outro
### Course outro
