# Lesson 11: HTTP/2

### HTTP/2 Intro
* HTTP/2 enable backward compatibility

### HTTP/1 problem: head of line blocking
### HTTP/1 problem: uncompressed headers
### HTTP/1 problem: security
### HTTP/2 improvements
* solve HOL blocking by multiplexing: combine multiple signals into a new signal
  * one single connection instead of 6
  * streams and frames
  * multiplex: a system or signal involving simultaneous transmission fo several messages along a single channel of communication
* solve header compression

### quiz: HTTP/1 vs HTTP/2 quiz
### Working with HTTP/2
### Quiz: development techniques for HTTP2/ quiz
* which of these should be done when developing for HTTP/2?
  * Y - minify javascript
  * Y - minify CSS
  * Y - minify markup
  * Y - use a CDN
  * N - concatenate javascript, concatenate css, sprite image: no b/c it makes caching inefficient
  * N - shard your assets: no b/c it makes http/2 header compressor less efficient

### OUtro
