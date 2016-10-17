const
    gulp = require('gulp'),
    del = require('del'),
    config = require('../config'),
    cleanTask = (cb) => {
        del([config.root.dest]).then(() => {
            cb();
        });
    };

gulp.task('clean', cleanTask);
module.exports = cleanTask;
