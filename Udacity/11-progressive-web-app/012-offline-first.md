# Lesson 12: The Benefits of Offline First

### Intro
### The Problem
* 'Lie-Fi': the state in which your connection is bad and you're staying in a dessert of network waiting...
* Travel path: signal tower, ISP, proxy, cable around the world, server, and then back

### The benefits of offline first
### Quiz: What can slow us down
* What can either slow down or prevent users receiving data from your website? -> ALL
  * poor signal
  * a misconfigured proxy
  * fault in the mobile network
  * busy network
  * server being DDOSed
  * bug in server code
  * Wifi captive protal
  * the moon's gravitational pull

### Quiz: what does online first look like
* in which of the following conditions with our ap work well? (if we pick online first)
  => good connectivity and offline
  => poor connection or lie-fi is the worst situation, you're just waiting...

### Quiz: what are ways to be offline first
* Which of these are offline first techniques?
  * deliver the page's header and content from a cache on the device, then attempt to fetch updated content from the network
  * deliver the page's header from a cache, then attempt to fetch the content from the network
  => you don't attempt to fetch the page from the network first

### Introducing the demo app
### Quiz: installing the demo app
### Quiz: running the demo app
### Exploring the demo apps code
* websocket: persistent connection that lets the server continuingly stream new apost as they arrive
  * which provide a live update

### Quiz: changing connection types
### Quiz: testing 'Lie Fi' mode
### Introducing service worker
