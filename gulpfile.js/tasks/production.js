const
    config = require('../config'),
    gulp = require('gulp'),
    gulpSequence = require('gulp-sequence'),
    getEnabledTasks = require('../lib/getEnabledTasks'),
    productionTask = function(cb) {
        global.production = true;

        const tasks = getEnabledTasks('production');
        gulpSequence('clean', tasks.lintTasks, tasks.assetTasks, tasks.codeTasks, config.tasks.production.rev ? 'rev' : false, 'size-report', 'static', cb);
    };

gulp.task('production', productionTask);
module.exports = productionTask;
