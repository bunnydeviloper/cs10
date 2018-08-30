# Lesson 9: HTTP/1

### HTTP Intro
### The Netcat Command
* use Netcat to send and receive message over a network connection, communicate directly with server

### HTTP Verbs
### HTTP Verbs 2
### Quiz: HTTP Verbs quiz
* HTTP Verbs:
  * The client verifies the last time logo.png was updated: HEAD
  * The client sends data about a form submission: POST
  * The client requests main.css: GET
  * The client wants to know which verbs the server supports: OPTIONS
  * The client asks the server to send it the landing page for http://google.com: GET

### Common response headers
### Quiz: request headers quiz
* run `nc` command to connect to the server (make sure your server is running too)
  ```
  // send a request from test.com to the server
  GET / HTTP/1.1
  Host: test.com
  X-Udacity-Exercise-Header: bla bla bla...
  Date: Wed, 11 Jan 2018 23:00:00 GMT

  // then you'll get back a response like this
  HTTP/1.1 200 OK
  Date: Thu, 21, Apr 2018 00:23:59 GMT
  Content-length: 6
  Content-type: text/plain; charset=utf-8

  abcdef
  ```
### REST
* REpresentational State Transfer

### Quiz: REST quiz
### Performance basics
### Performance details
### Performance details 2
### Outro
