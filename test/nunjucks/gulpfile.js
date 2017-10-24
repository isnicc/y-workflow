const gulp = require('gulp');
const runSequence = require('run-sequence');

require('../../lib/clean.js')({
  src: './dest',
});

require('../../lib/nunjucks.js')({
  src: './src/**/*.html',
  dest: './dest',
  watch: true,
  urify:  {
    root: './dest',
    absBase: './dest/static',
  },
});

gulp.task('default', ['clean'], () => {
  runSequence(['nunjucks:watch']);
});
