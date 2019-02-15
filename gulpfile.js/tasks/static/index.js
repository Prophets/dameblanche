const config = require('../../lib/configLoader');

if (!config.tasks.static) return;

const changed = require('gulp-changed');
const gulp = require('gulp');
const path = require('path');
const customNotifier = require('../../lib/customNotifier');

const staticTask = () => {
    const paths = {
        src: [
            path.join(config.root.src, config.tasks.static.src, '/**/*'),
            path.join('!' + config.root.src, config.tasks.static.src, '/README.md')
        ],
        dest: path.join(config.root.dest, config.tasks.static.dest)
    };

    return gulp.src(paths.src)
        .pipe(changed(paths.dest)) // Ignore unchanged files
        .pipe(gulp.dest(paths.dest))
        .pipe(customNotifier({ title: 'Static files copied' }));
};

module.exports = staticTask;
