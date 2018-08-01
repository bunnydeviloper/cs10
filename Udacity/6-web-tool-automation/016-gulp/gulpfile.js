var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function() {
	console.log('hello world!');
});

gulp.task('styles', function() {
  // tell gulp what files we want to work with: look in sass folder (and any sub directories) with files ending in *.scss
	gulp.src('sass/**/*.scss')
		.pipe(sass().on('error', sass.logError)) // must have error fn
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('./css'));
});
