var gulp      = require('gulp');
var scss      = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var rename    = require('gulp-rename');

gulp.task('styles', function () {
  gulp.src('./src/*.scss')
    .pipe(scss({errLogToConsole: true}))
    .pipe(gulp.dest('./'));
});

gulp.task('styles:min', function () {
  gulp.src('./src/*.scss')
    .pipe(scss({errLogToConsole: true}))
    .pipe(minifyCSS())
    .pipe(rename(function (path) {path.extname = ".min.css"}))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
  gulp.watch('./src/*.scss', ['styles', 'styles:min']);
});

gulp.task('default', [
  'styles',
  'styles:min',
  'watch'
]);
