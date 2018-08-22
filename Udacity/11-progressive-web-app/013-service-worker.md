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

### Quiz: enabling service worker dev tools (chrome canary)
### Quiz: service worker dev tools
### Quiz: service worker dev tooks 2
### Service worker dev tools continued
### Hijacking requests
* tells the browser that we gonna handle the request ourselves
  ```js
  event.respondWith(
    new Response('Hello World', {
        headers: {'foo': 'bar'}
    })
  );

  event.respondWith(
    new Response('<h2 class='head'>H2 Header</h2>', {
      headers: {'Content-Type': 'text/html'}
    })
  );
  ```

### Quiz: hijacking requests 1 quiz
### Hijacking requests 2
### Quiz: hijacking requests 2 quiz
  ```js
  self.addEventListener('fetch', function(event) {
    // only reponse to requests with a url ending in '.jpg'
    if (event.request.url.endsWith('.jpg')) {
      event.respondWith(
        fetch('/imgs/dr-evil.gif')
      );
    }
  });
  ```

### Hijacking requests 3
  ```js
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      fetch(event.request)
        .then(function(response) {
          if (response.status == 404) {
            return new Response('Whoops, not found'); // eg: http://localhost:8888/abcdefg
            // return fetch('/imgs/dr-evil.gif');
          }
          return reponse;
        })
        .catch(function() {
          return new Response('Uh oh, that totally failed!'); // eg: if you turn wifi off
        })
      );
  });
  ```

### Quiz: hijacking requests 3 quiz
### Catching and serving assets
* `caches.open('my-stuff').then(function(cache) { /*do sth*/ });` // to create a new cache
* `cache.put(request, response);` // to add cache items
* `cache.addAll(['/foo', 'bar']);` // if one fails, it all fails, addAll uses fetch under the hood
* `cache.match(request);` // to find something out of the cache
* `caches.match(request);` // try to find a cache in any match, starting with the oldest
* `caches.delete(cachename);` // delete old caches
* `caches.keys();` // get the name of all your caches
* installing service worker:
  ```js
  self.addEventListener('install', function(event) { // 'install' event will set up new cache for the 1st time
    event.waitUntil(
      caches.open('name-of-cache').then(function(cache) {
        return cache.addAll([
          '/',
          'js/main.js',
          'css/style.css',
          'https://...'
        ]);
      })
    );
  });
  ```

### Quiz: install and cache quiz
### Quiz: cache response quiz
  ```js
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          if (response) return response;
          return fetch(event.request);
        })
    );
  });
  ```
* more to do:
  * unobtrusive app updates
  * get the user onto the latest version
  * continually update cache of posts
  * cache photos
  * cache avatars

### Updating the static cache
  ```js
  // it's better to store the name of cache in a variable, and change it as u update the version
  var staticCacheName = 'wittr-static-v2';

  self.addEventListener('install'... // use variable above

  self.addEventListener('activate', function(event) { // 'activate' event will fire when new SW becomes active
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all( // make sure we wait until all process are done
          cacheNames.filter(function(cacheName) { // make sure we get the correct caches to remove
            return cacheName.startsWith('wittr-') && cacheName != staticCacheName;
          }).map(function(cacheName) {
            return cache.delete(cacheName); // remove old caches
          })
        );
      })
    );
  });
  ```

### Quiz: update your CSS quiz
### Quiz: update your CSS 2
### Adding UX to the update process
  ```js
  navigator.serviceWorker.register('/sw.js').then(function(reg) {
    reg.unregister();
    reg.update();
    reg.active;

    if (reg.waiting) { /* there's an update ready! */ }

    if (reg.installing) {
      // there's an update in progress!
      reg.installing.addEventListener('statechange', function() {
        if (this.state == 'installed') {
          // there's an update ready!
        }

        // reg.installing.state can have many state: 'installing', 'installed' (not activated),
        // 'activating', 'activated', 'redundant'
      });
    }

    reg.addEventListener('updatefound', function() {
      // reg.installing has changed
      reg.installing.addEventListener('statechange', function() {
        if (this.state == 'installed') {
          // there's an update ready!
        }
      });
    });
  });

  // check to see if service worker was use, or just regular network requests
  if (!navigator.serviceWorker.controller) {
    // page didn't load using a service worker
  }
  ```

### Quiz: adding UX quiz
### Triggering and update
### Quiz: triggering an update quiz
### Quiz: caching the page skeleton
