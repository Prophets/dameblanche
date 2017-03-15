const
    config = require('../config'),
    gulp = require('gulp'),
    path = require('path'),
    watch = require('gulp-watch'),
    watchTask = () => {
        const watchableTasks = ['images', 'svgSprite', 'templates', 'css', 'eslint', 'stylelint', 'static'];

        watchableTasks.forEach((taskName) => {
            const task = config.tasks[taskName];
            if (task) {
                const glob = path.join(config.root.src, task.src, '**/*.{' + task.extensions.join(',') + '}');
                watch(glob, () => {
                    require('./' + taskName)();
                });
            }
        });
    };

gulp.task('watch', ['browserSync'], watchTask);
module.exports = watchTask;
