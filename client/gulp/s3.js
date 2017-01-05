var gulp = require('gulp'),
    awspublish = require('gulp-awspublish');

var localConfig = {
  buildSrc: './dist/**/*',
  getAwsConf: function (environment) {
    var conf = require('./aws');
    if (!conf[environment]) {
      throw 'No aws conf for env: ' + environment;
    }
    if (!conf[environment + 'Headers']) {
      throw 'No aws headers for env: ' + environment;
    }
    return { keys: conf[environment], headers: conf[environment + 'Headers'] };
  }
};

gulp.task('s3:production', [], function() {
  var awsConf = localConfig.getAwsConf('production');
  var publisher = awspublish.create(awsConf.keys);

  return gulp.src(localConfig.buildSrc)
    .pipe(awspublish.gzip({ ext: '' }))
    .pipe(publisher.publish(awsConf.headers))
    .pipe(publisher.cache())
    .pipe(publisher.sync())
    .pipe(awspublish.reporter());
});
