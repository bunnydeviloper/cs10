# Lesson 13: Introducing the service worker

### An overview of servie worker
* service worker is just a simple JS file that sits b/w u and the network requests
  * separate from the page, and can't access DOM
* register for service worker:
  ```js
  navigator.serviceWorker.register('/sw.js', {
    scope: '/my-app/'
    // note: this scope will control: '/foo/', '/foo/bar/index.html', '/foo/bar'
    // note2: this scope will NOTE control: '/', '/sw.js', '/foo', '/foo.html'
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
* if a page was loaded before SW exist, any additional requests will bypass SW
* each time you hit refresh, the browser creates a new window client, and now SW will take control of the new page
  => hence it takes 2 refreshes to see any console.log
* if a page loads via SW, it will check for any updates in the background, and changes will become 'waiting SW'
  => but it doesn't take control, it waits
  * once the page is closed, not navigate to a page that doesn't control by SW
  => future page will take over with the new SW
  * same browser update as chrome (update in the back, notify you, but doesn't actually update until you restart)
* strongly recommend to keep the cache time on your SW short, less than 24hr, ideally 0

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
