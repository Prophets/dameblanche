const config = require('../../lib/configLoader');
if (!config.tasks.images) return;

const
    browserSync = require('browser-sync'),
    changed = require('gulp-changed'),
    gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    customNotifier = require('../../lib/customNotifier'),
    path = require('path'),
    paths = {
        src: path.join(config.root.src, config.tasks.images.src, '/**/*.{' + config.tasks.images.extensions + '}'),
        dest: path.join(config.root.dest, config.tasks.images.dest)
    },
    imagesTask = () => {
        return gulp.src([paths.src, '*!README.md'])
            .pipe(changed(paths.dest)) // Ignore unchanged files
            .pipe(imagemin()) // Optimize
            .pipe(gulp.dest(paths.dest))
            .pipe(customNotifier({ title: 'Images minified' }))
            .pipe(browserSync.stream());
    };

gulp.task('images', imagesTask);
module.exports = imagesTask;
