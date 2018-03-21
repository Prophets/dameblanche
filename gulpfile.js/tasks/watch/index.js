const gulp = require('gulp');
const path = require('path');
const watch = require('gulp-watch');
const config = require('../../lib/configLoader');

const watchTask = () => {
    const watchableTasks = ['images', 'svgsprite', 'nunjucks', 'css', 'eslint', 'stylelint', 'static'];

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
