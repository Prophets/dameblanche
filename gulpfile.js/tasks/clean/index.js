const gulp = require('gulp');
const del = require('del');
const config = require('../../lib/configLoader');

const cleanTask = (cb) => {
    const dirty = config.tasks.clean && config.tasks.clean.patterns ? config.tasks.clean.patterns : config.root.dest;

    del(dirty).then(() => {
        cb();
    });
};

gulp.task('clean', cleanTask);

module.exports = cleanTask;
