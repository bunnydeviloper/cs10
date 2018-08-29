/*eslint-env node */

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var eslint = require('gulp-eslint');
var jasmine = require('gulp-jasmine-phantom');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
// babel JS is a transpiler for ECMAscript 6
var babel = require('gulp-babel');

// include source map in your file
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['copy-html', 'copy-images', 'styles', 'lint', 'scripts'], function(done) {
	gulp.watch('sass/**/*.scss', gulp.series('styles'));
	gulp.watch('js/**/*.js', gulp.series('lint'));
	gulp.watch('/index.html', gulp.series('copy-html'));
  // make index.html automatically reload
	gulp.watch('./dist/index.html').on('change', browserSync.reload);

	browserSync.init({
		server: './dist'
	});
  done();
});

// finally, include this for production-ready version in your 'dist' folder
// to run the task: type 'gulp scripts-dist'
// gulp will run in the background without opening the browser
gulp.task('dist', [
	'copy-html',
	'copy-images',
	'styles',
	'lint',
	'scripts-dist'
]);

gulp.task('scripts', function() {
	gulp.src('js/**/*.js')
    .pipe(babel())
    // the gulp-concat plugin takes the files in the stream and combines them into a single file (arg)
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('scripts-dist', function() {
	gulp.src('js/**/*.js')
    .pipe(babel())
    .pipe(sourcemaps.init())
		.pipe(concat('all.js'))
		.pipe(uglify())
    .pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('copy-html', function() {
	gulp.src('./index.html')
		.pipe(gulp.dest('./dist'));
});

gulp.task('copy-images', function() {
	gulp.src('img/*')
		.pipe(gulp.dest('dist/img'));
});

gulp.task('styles', function() {
	gulp.src('sass/**/*.scss')
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
    // change the new destination to dist/css
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.stream());
});

gulp.task('lint', function () {
	return gulp.src(['js/**/*.js'])
		// eslint() attaches the lint output to the eslint property
		// of the file object so it can be used by other modules.
		.pipe(eslint())
		// eslint.format() outputs the lint results to the console.
		// Alternatively use eslint.formatEach() (see Docs).
		.pipe(eslint.format())
		// To have the process exit with an error code (1) on
		// lint error, return the stream and pipe to failOnError last.
		.pipe(eslint.failOnError());
});

gulp.task('tests', function () {
	gulp.src('tests/spec/extraSpec.js')
		.pipe(jasmine({
			integration: true,
			vendor: 'js/**/*.js'
		}));
});
