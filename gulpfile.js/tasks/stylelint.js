var config      = require('../config')
if(!config.tasks.css) return

var gulp        = require('gulp')
var stylelint   = require('gulp-stylelint')
var path        = require('path')

var paths = {
  src: path.join(config.root.src, config.tasks.css.src, '/**/*.{' + config.tasks.css.extensions + '}'),
}

var stylelintTask = function() {
  return gulp.src([paths.src, , '*!README.md'])
    .pipe(stylelint({
      failAfterError: global.production,
      reporters: [
        {
          formatter: 'string',
          console: true
        }
      ]
    }))
}

gulp.task('stylelint', stylelintTask)
module.exports = stylelintTask
