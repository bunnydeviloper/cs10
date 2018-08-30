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
* the response to a POST request is usually a redirect to the newly created record (notice 303)
  * create a new whale: `POST animals/whale`

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
* Network architecture:
  * HTTP: transfer protocol
    * TCP: allows us to have multiple, independent streams of data b/w two machines
    * TCP: streams are distinguished by port numbers: 80, 443, 65535...
    * TCP: ensures no packages get lost and that they arrive in the right order
    * TCP: are 3-way handshake, and if you're using HTTPS, an add' TLS handshake has be to execute too
      * IP: (internet protocol) allows us to talk to other machines on the internet
        * Ethernet: enable you to connect to the internet

### Performance details
* TTFB: (time to first byte): waiting period before the first request is done, then you can send 2nd request
* head-of-line blocking
  * browser can open upto 6 parallel connections
  * but more connections is quite costly b/c of TCP handshakes

### Performance details 2
* concept of 'keep-alive':
  * if the client sets the connection 'keep-alive' header, the server will not close the connection after succesfully delivering the response
  * (w/o: the connection drops after a response)
  * allows the client to "re-use" the already-established connection for additional requests
  * you can still send more requests before the last request has been fully transferred
* JS and CSS files are commonly concatenated into bundles (can be obtained in just one request), and images are put together into sprites

### Outro
