const
    config = require('../config'),
    gulp = require('gulp'),
    path = require('path'),
    watch = require('gulp-watch'),
    watchTask = function() {
        const watchableTasks = ['images', 'svgSprite', 'html', 'css', 'eslint', 'stylelint'];

        watchableTasks.forEach(function(taskName) {
            const task = config.tasks[taskName];
            if (task) {
                const glob = path.join(config.root.src, task.src, '**/*.{' + task.extensions.join(',') + '}');
                watch(glob, function() {
                    require('./' + taskName)();
                });
            }
        });
    };

gulp.task('watch', ['browserSync'], watchTask);
module.exports = watchTask;
