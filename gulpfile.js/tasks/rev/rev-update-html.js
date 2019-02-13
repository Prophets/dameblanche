const gulp = require('gulp');
const revReplace = require('gulp-rev-replace');
const path = require('path');
const config = require('../../lib/configLoader');

// 5) Update asset references in HTML
const revUpdateHTMLTask = () => {
    const manifest = gulp.src(path.join(config.root.dest, '/rev-manifest.json'));
    const htmlDest = config.tasks.templates ? config.tasks.templates.dest : './';

    return gulp.src(path.join(config.root.dest, htmlDest, '/**/*.html'))
        .pipe(revReplace({
            manifest: manifest
        }))
        .pipe(gulp.dest(path.join(config.root.dest, htmlDest)));
};

module.exports = revUpdateHTMLTask;
