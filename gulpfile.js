var gulp = require('gulp');
var scss = require('gulp-sass');

gulp.task('styles', function () {
  gulp.src('./src/*.scss')
    .pipe(scss({errLogToConsole: true}))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
  gulp.watch('./src/*.scss', ['styles']);
});

gulp.task('default', ['styles', 'watch']);
