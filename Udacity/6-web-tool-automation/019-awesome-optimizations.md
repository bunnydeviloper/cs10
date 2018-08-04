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

### Quiz: Automatically Reload the ind
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
### Setting up and production task
### Writing future proof JavaScript
### Quiz: Why Transpile
### Source Maps
### Image Optimization
### We Love Optimization
### Image Compression
### Quiz: How should we compress
### Lesson Outro
