'use strict';

module.exports = function() {
  $.gulp.task('copy:lightbox', function() {
    return $.gulp.src('./source/js/lightbox/**/*.*', { since: $.gulp.lastRun('copy:lightbox') })
      .pipe($.gulp.dest($.config.root + '/assets/js/lightbox'))
  });
};
