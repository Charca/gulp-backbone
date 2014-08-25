var gulp = require('gulp');
var browserify = require('gulp-browserify');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');

gulp.task('browserify', function() {
  gulp.src('src/js/main.js')
    .pipe(browserify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.*', ['build']);
});

gulp.task('default', ['watch']);

gulp.task('build', ['browserify', 'copy']);
