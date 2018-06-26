const config = require('../../lib/configLoader');

if (!config.tasks.stylelint) return;

const gulp = require('gulp');
const stylelint = require('gulp-stylelint');
const path = require('path');

const stylelintTask = () => {
    const paths = {
        src: path.join(config.root.src, config.tasks.stylelint.src, '/**/*.{' + config.tasks.stylelint.extensions + '}')
    };

    return gulp.src([paths.src])
        .pipe(stylelint({
            failAfterError: global.production ? true : false,
            reporters: [{
                formatter: 'string',
                console: true
            }]
        }));
};

gulp.task('stylelint', stylelintTask);

module.exports = stylelintTask;
