const config = require('../../lib/configLoader');

const gulp = require('gulp');
const sizereport = require('gulp-sizereport');

const sizeReportTask = () => {
    return gulp.src([config.root.dest + '/**/*', '*!rev-manifest.json'])
        .pipe(sizereport({
            gzip: true
        }));
};

module.exports = sizeReportTask;
