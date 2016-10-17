const config = require('../config');
if (!config.tasks.eslint) return;

const
    gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    gulpif = require('gulp-if'),
    path = require('path'),

    paths = {
        src: path.join(config.root.src, config.tasks.eslint.src, '/**/*.{' + config.tasks.eslint.extensions + '}')
    },

    eslintTask = () => {
        return gulp.src([paths.src])
            .pipe(eslint())
            // eslint.format() outputs the lint results to the console.
            // Alternatively use eslint.formatEach() (see Docs).
            .pipe(eslint.format())
            .pipe(gulpif(global.production, eslint.failAfterError()));
    };

gulp.task('eslint', eslintTask);
module.exports = eslintTask;
