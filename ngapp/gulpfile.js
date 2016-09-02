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

var files = require('./gulp/gulp.config.js');

gulp.task('default', function(){
  console.log("HELLO GULP!");
});

gulp.task('serve', function () {
  nodemon({script: files.server, ext: ['js html']})
    .on('restart', function () {
        console.log('restarted!');
    });
});

gulp.task('watch', function () {
  gulp.watch(files.app_files.js, ['lint', 'build-src']);
  gulp.watch(files.app_files.atpl, ['html2js', 'index']);
  gulp.watch(files.app_files.html, ['index']);
  gulp.watch(files.app_files.styles, ['less', 'index']);

  gulp.watch('./src/config/**/*.json', ['config-build']);
});

