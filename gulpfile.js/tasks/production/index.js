const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');
const config = require('../../lib/configLoader');
const getEnabledTasks = require('../../lib/getEnabledTasks');

const productionTask = (cb) => {
    global.production = true;

    const tasks = getEnabledTasks('production');
    gulpSequence('clean', tasks.lintTasks, tasks.assetTasks, tasks.codeTasks, 'static', config.tasks.production.rev ? 'rev' : false, 'size-report', cb);
};

gulp.task('production', productionTask);

module.exports = productionTask;
