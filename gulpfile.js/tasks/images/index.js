const config = require('../../lib/configLoader');

if (!config.tasks.images) return;

const browserSync = require('browser-sync');
const changed = require('gulp-changed');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const path = require('path');
const customNotifier = require('../../lib/customNotifier');

const imagesTask = () => {
    const paths = {
        src: path.join(config.root.src, config.tasks.images.src, '/**/*.{' + config.tasks.images.extensions + '}'),
        dest: path.join(config.root.dest, config.tasks.images.dest)
    };

    return gulp.src([paths.src, '*!README.md'])
        .pipe(changed(paths.dest)) // Ignore unchanged files
        .pipe(imagemin()) // Optimize
        .pipe(gulp.dest(paths.dest))
        .pipe(customNotifier({ title: 'Images minified' }))
        .pipe(browserSync.stream());
};

module.exports = imagesTask;
