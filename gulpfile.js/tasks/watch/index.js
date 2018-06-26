const config = require('../../lib/configLoader');

const gulp = require('gulp');
const path = require('path');
const watch = require('gulp-watch');
const getEnabledTasks = require('../../lib/getEnabledTasks');

const watchTask = () => {
    const tasks = getEnabledTasks();
    const watchableTasks = [
        ...tasks.assetTasks,
        ...tasks.codeTasks,
        ...tasks.lintTasks
    ];

    watchableTasks.forEach((taskName) => {
        const task = config.tasks[taskName];
        if (task) {
            const glob = path.join(config.root.src, task.src, '**/*.{' + task.extensions.join(',') + '}');
            watch(glob, () => {
                require('../' + taskName)();
            });
        }
    });
};

gulp.task('watch', ['browserSync'], watchTask);

module.exports = watchTask;
