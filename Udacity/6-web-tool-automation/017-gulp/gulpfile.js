var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

// Since your task might contain asynchronous code you have to signal gulp when your task has finished executing (= "async completion").
// to fix error, gulp automatically passes a callback function to your task as its first argument. Just call that function when you're done
gulp.task('default', ['styles'], function(cb) {
  console.log('hello world!');
  // watch: 1st arg is the files that we are watching for changes
  // 2nd arg can be a call back or an array of sets of tasks
  gulp.watch('sass/**/*.scss', ['styles']);

  browserSync.init({
    server: "./"
  });
  browserSync.stream();

  cb();
});

gulp.task('styles', function(cb) {
  // tell gulp what files we want to work with: look in sass folder (and any sub directories) with files ending in *.scss
  gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError)) // must have error fn
    .pipe(autoprefixer({
      // specify you want to prefix the last two versions of all browsers
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('./css'));
  cb();
});
