# Lesson 16: Powerful Builds

### Lesson Intro
* the most simple build tool is just a shell, or bash script (with .sh extension)
  * these tools are just a series of terminal commands or functions, and can be execute from the command line

### Overview of build tools
* should be fast in execution as there's need for speed when iterating on a website or app
* should also be supported by a healthy vibrant plugin community
* should be modular & extensible & enable user to customize
* should be feature rich, solve a few common problems out of the box for it to be useful

### Quiz: core qualities of a great builder
### Getting started with Gulp
### Instal Gulp
* https://github.com/gulpjs/gulp/blob/master/docs/getting-started/1-quick-start.md
* `node --version`
* `npm --version`
* `npx --version`
* `npm install --global gulp-cli`
* make a folder and cd into it, `npm init`
* `npm install --save-dev gulp@next`
* `gulp --version`

### Hello Gulp
* every build project starts with aulp file, this file sits in the root dir of your project and defines all the tasks that you should execute when running Gulp
* see 016-gulp/

### Grunt tasks VS Gulp Streams
* Gulp converts your input file into an in memory stream so the I/O is only done initially, and at the very end of all task, hence makes it super fast

### Making CSS suck less (use SASS)
### Using Gulp
* `npm install gulp-sass`

### Using Gulp 2
### Quiz: now it's your turn
### Using Gulp
### Quiz: watching SCSS Files for changes
### Lesson Outro
