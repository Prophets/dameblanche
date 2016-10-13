var config      = require('../config')
if(!config.tasks.js) return

var gulp        = require('gulp')
var eslint      = require('gulp-eslint')
var gulpif      = require('gulp-if')
var path        = require('path')

var paths = {
  src: path.join(config.root.src, config.tasks.js.src, '/**/*.{' + config.tasks.js.extensions + '}'),
}

var eslintTask = function() {
  return gulp.src([paths.src])
    .pipe(eslint())
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format())
    .pipe(gulpif(global.production, eslint.failAfterError()))
}

gulp.task('eslint', eslintTask)
module.exports = eslintTask
