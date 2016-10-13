var config      = require('../config')
if(!config.tasks.stylelint) return

var gulp        = require('gulp')
var stylelint   = require('gulp-stylelint')
var path        = require('path')

var paths = {
  src: path.join(config.root.src, config.tasks.stylelint.src, '/**/*.{' + config.tasks.stylelint.extensions + '}')
}

var stylelintTask = function() {
  return gulp.src([paths.src])
    .pipe(stylelint({
      failAfterError: global.production ? true : false,
      reporters: [{
        formatter: 'string',
        console: true
      }]
    }))
}

gulp.task('stylelint', stylelintTask)
module.exports = stylelintTask
