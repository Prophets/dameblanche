const
    gulp = require('gulp'),
    gulpSequence = require('gulp-sequence'),
    getEnabledTasks = require('../lib/getEnabledTasks'),
    defaultTask = (cb) => {
        const tasks = getEnabledTasks('watch');
        gulpSequence('clean', tasks.lintTasks, tasks.assetTasks, tasks.codeTasks, 'static', 'watch', cb);
    };

gulp.task('default', defaultTask);
module.exports = defaultTask;
