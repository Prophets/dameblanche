const changed = require('gulp-changed');
const gulp = require('gulp');
const path = require('path');
const config = require('../../lib/configLoader');
const customNotifier = require('../../lib/customNotifier');

const paths = {
    src: [
        path.join(config.root.src, config.tasks.static.src, '/**/*'),
        path.join('!' + config.root.src, config.tasks.static.src, '/README.md')
    ],
    dest: path.join(config.root.dest, config.tasks.static.dest)
};

const staticTask = () => {
    return gulp.src(paths.src)
        .pipe(changed(paths.dest)) // Ignore unchanged files
        .pipe(gulp.dest(paths.dest))
        .pipe(customNotifier({ title: 'Static files copied' }));
};

gulp.task('static', staticTask);

module.exports = staticTask;
