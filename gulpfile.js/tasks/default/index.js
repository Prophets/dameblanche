const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');
const getEnabledTasks = require('../../lib/getEnabledTasks');

const defaultTask = (cb) => {
    const tasks = getEnabledTasks('watch');

    gulpSequence(
        'clean',
        ...tasks.lintTasks,
        ...tasks.assetTasks,
        ...tasks.codeTasks,
        'watch',
        cb
    );
};

gulp.task('default', defaultTask);
module.exports = defaultTask;
