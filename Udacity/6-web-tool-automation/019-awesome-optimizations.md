# Lesson 19: Awesome Optimizations

### Lesson Intro
* build process: use to optimize things which you can't do by hands
* take raw source code and process it for production

### Development and Production Modes
* development tasks: things you really need, SASS processing, live editing
* production tasks: the production version is always a little different

### Development and Production Modes
* create a 'dist' folder, and then copy index.html over, then generate js/ and css/ into 'dist/'
* set up 'copy-html' and 'copy-img' task, and add a task to watch for changes

### Quiz: Automatically Reload the index.html
* `gulp.watch('./build/index.html').on('change', browserSync.reload);`

### CSS Concatenation
* minification: output sass file as: `pipe(sass({outputStyle: 'compressed'}))`

### JS Concatenation
* benefits:
  1. reduce the amount of http requests needed to load your page in production
    (which is a big deal if you're on a mobile devices with upto 300 miliseconds latency per req.)
  2. it's the most basic variant of dependency management
    * you put all your script in a folder
    * then you simply add a single script block that points to the generated output file
      * including all of them concatenated
    * (instead of having to add script blocks to load them one by one into HTML)
    * although it cannot detect dependency chains and the required load order

### JS Concatenation Hands On
* create a task for 'scripts' and another task for 'script-dist'
* plugin: gulp-concat: combine files

### Minification
* minification: shrink the file size of our javascript
* tool: uglifyJS: does some heavy but safe optimizations to squeeze every last bit out of your raw source code
* javascript minification is a very time-intensive stop, so it shouldn't be running while live-editing

### Setting up and production task
* minification on its own is great, but GZip is even more effective
* GZip compresses the file before it gets in, and out to the browser, and the browser deflates it
  * all of this happens transparently in the background and usually requires a small server configuration change

### Writing future proof JavaScript
* using transpiler to convert ECMAscript 6: introducing Babel JS

### Quiz: Why Transpile
* why is transpiling a good thing?
  * standardization across browsers takes a long time -- YES
  * browsers cant support many ES6 advanced features
  * browsers decided to stay with ES5
* using a transpiler helps you use new features today without ruining the user experience

### Source Maps
* source maps are files that associate line number from the processed file to the original
* this way the browser can lookup the current line number in the sourcemap and open the right source file at the correct line when debugging
* this also helps prevent spaghetti code b/c after all the optimization your code is not readable anymore

### Image Optimization
* 
### We Love Optimization
### Image Compression
### Quiz: How should we compress
### Lesson Outro
