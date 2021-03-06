# Lesson 17: Expressive Live Editing

### Lesson Intro
* Cycle: make a change to your code > save > build/rebuild > switch to the browser and reload page > repeat
* Live editing in three different ways:
  * Live on every keystroke in Sublime
  * Live on every save via Gulp
  * and skip the editor to be live in the browser

### Quiz: Advantages of live editing
* Fewer context switches
* Less clicks and keystrokes when changing code
* Quicker preview of changes
* NOTE: does NOT actually result in faster build times

### Different approaches for live editing
* use live editing plugins for text editor
* use chrome dev tool workspaces
* use (BEST) browsersync

### Using Browser-Sync
* `npm install -g browser-sync`
1. Install browser-sync.
2. Create a browser-sync object and initialize the server.
  ```js
  var browserSync = require('browser-sync').create();
  browserSync.init({
    server: "./"
  });
  browserSync.stream();
  ```

3. Run gulp in Terminal, see how browser opens with the page open.
* cd into 017-gulp/ folder and run 'gulp', you should see a webpage open and the following server message:
```
[23:40:40] Using gulpfile ~/Desktop/... (this is the project's path)
[23:40:40] Starting 'default'...
hello world!
[23:40:40] Finished 'default' after 35 ms
[Browsersync] Access URLs:
 -------------------------------------
       Local: http://localhost:3000
    External: http://1***********:3000 //this is IP address
 -------------------------------------
          UI: http://localhost:3001
 UI External: http://1***********:3001
 -------------------------------------
[Browsersync] Serving files from: ./
```

### Lesson Outro
