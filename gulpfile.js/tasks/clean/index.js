const gulp = require('gulp');
const del = require('del');
const config = require('../../lib/configLoader');

const cleanTask = (cb) => {
    del([config.root.dest]).then(() => {
        cb();
    });
};

gulp.task('clean', cleanTask);

module.exports = cleanTask;
