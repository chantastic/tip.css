var gulp      = require('gulp');
var scss      = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');

gulp.task('styles', function () {
  gulp.src('./src/*.scss')
    .pipe(scss({errLogToConsole: true}))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
  gulp.watch('./src/*.scss', ['styles']);
});

gulp.task('build:release', function () {
  gulp.src('./src/*.scss')
    .pipe(scss({errLogToConsole: true}))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['styles', 'watch']);
