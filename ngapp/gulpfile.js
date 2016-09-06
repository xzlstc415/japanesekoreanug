var gulp = require('gulp');
var del = require('del');
var less = require('gulp-less');
var inject = require('gulp-inject');
var runSequence = require('run-sequence');
var rename = require('gulp-rename');
var nodemon = require('gulp-nodemon');
var concat = require('gulp-concat');
var html2js = require('gulp-ng-html2js');
var ngmin = require('gulp-ng-annotate');
var _ = require('lodash');
var uglify = require('gulp-uglify');
var pkg = require('./package.json');
var jshint = require('gulp-jshint');
var bowerFiles = require('main-bower-files');
var angularFilesort = require('gulp-angular-filesort');
var es = require('event-stream');

var files = require('./gulp/gulp.config.js');

gulp.task('default', function(callback) {
  runSequence('index', 'watch', 'serve', callback);
});

gulp.task('serve', function() {
  nodemon({script: files.server})
    .on('restart', function() {
        console.log('restarted!');
    });
});

gulp.task('index', function() {
  gulp.src(files.app_files.index)
    .pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower'}))
    .pipe(inject(
      gulp.src(files.app_files.assets, {read: false}), {name: 'assets'}
    ))
    .pipe(inject(es.merge(
      gulp.src(files.app_files.css, {read: false}),
      gulp.src(files.app_files.js)
        .pipe(angularFilesort())
    )))
    .pipe(gulp.dest('./'));
});

gulp.task('lint', function() {
  return gulp.src(files.app_files.js)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
  gulp.watch(files.app_files.js, ['lint', 'index']);
  gulp.watch(files.app_files.css, ['index']);
});
