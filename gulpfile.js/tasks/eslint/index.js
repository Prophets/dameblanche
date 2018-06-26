const config = require('../../lib/configLoader');

if (!config.tasks.eslint) return;

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const gulpif = require('gulp-if');
const path = require('path');

const eslintTask = () => {
    const paths = {
        src: path.join(config.root.src, config.tasks.eslint.src, '/**/*.{' + config.tasks.eslint.extensions + '}')
    };

    return gulp.src([paths.src])
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        .pipe(gulpif(global.production, eslint.failAfterError()));
};

gulp.task('eslint', eslintTask);

module.exports = eslintTask;
