# Lesson 13: Introducing the service worker

### An overview of servie worker
* service worker is just a simple JS file that sits b/w u and the network requests
  * separate from the page, and can't access DOM
* register for service worker:
  ```js
  navigator.serviceWorker.register('/sw.js', {
    scope: '/my-app/'
  }).then(function(reg) {
    console.log('Yay!');
  }).catch(function(err) {
    console.log('Boo!');
  });
  ```
* SW URL --> DEFAULT SCOPE (scope is depends on where you put sw.js file, unless specify when register)
  * /foo/sw.js --> /foo/
  * /foo/bar/sw.js --> /foo/bar/
  * /sw.js --> /
* to make sure browser compatibility, use this script:
  `if (navigator.serviceWorker) { navigator.serviceWorker.register('/sw.js'); }`

### Quiz: scoping quiz
### Adding a service worker to the project
### Quiz: registering a service worker
### The service worker lifecycle
### Quiz: enabling service worker dev tools
### Quiz: service worker dev tools
### Quiz: service worker dev tooks 2
### Service worker dev tools continued
### Hijacking requests
### Quiz: hijacking requests 1 quiz
### Hijacking requests 2
### Quiz: hijacking requests 2 quiz
### Hijacking requests 3
### Quiz: hijacking requests 3 quiz
### Catching and serving assets
### Quiz: install and cache quiz
### Quiz: cache response quiz
### Updating the static cache
### Quiz: update your CSS quiz
### Quiz: update your CSS 2
### Adding UX to the update process
### Quiz: adding UX quiz
### Triggering and update
### Quiz: triggering an update quiz
### Quiz: caching the page skeleton
