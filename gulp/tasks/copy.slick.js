'use strict';

module.exports = function() {
  $.gulp.task('copy:slick', function() {
    return $.gulp.src('./source/js/slick/**/*.*', { since: $.gulp.lastRun('copy:slick') })
      .pipe($.gulp.dest($.config.root + '/assets/js/slick'))
  });
};
