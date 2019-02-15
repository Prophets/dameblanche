const config = require('../../lib/configLoader');

if (!config.tasks.stylelint) return;

const gulp = require('gulp');
const stylelint = require('gulp-stylelint');
const path = require('path');
const isProductionBuild = require('../../lib/isProductionBuild');

const stylelintTask = () => {
    const paths = {
        src: path.join(config.root.src, config.tasks.stylelint.src, '/**/*.{' + config.tasks.stylelint.extensions + '}')
    };

    return gulp.src([paths.src])
        .pipe(stylelint({
            failAfterError: isProductionBuild() ? true : false,
            reporters: [{
                formatter: 'string',
                console: true
            }]
        }));
};

module.exports = stylelintTask;
