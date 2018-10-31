const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');
const config = require('../../lib/configLoader');
const getEnabledTasks = require('../../lib/getEnabledTasks');

const productionTask = (cb) => {
    global.production = true;
    config.root.dest = config.root.productionDest;

    const tasks = getEnabledTasks('production');

    gulpSequence(
        'clean',
        ...tasks.lintTasks,
        ...tasks.assetTasks,
        ...tasks.codeTasks,
        config.tasks.production.rev ? 'rev' : false,
        config.tasks.production.sizeReport ? 'size-report' : false,
        cb
    );
};

gulp.task('production', productionTask);

module.exports = productionTask;
