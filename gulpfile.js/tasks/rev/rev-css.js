const gulp = require('gulp');
const path = require('path');
const rev = require('gulp-rev');
const revNapkin = require('gulp-rev-napkin');
const config = require('../../lib/configLoader');

// 4) Rev and compress CSS and JS files (this is done after assets, so that if a
//    referenced asset hash changes, the parent hash will change as well
const revCSSTask = () => {
    return gulp.src(path.join(config.root.dest, '/**/*.css'))
        .pipe(rev())
        .pipe(gulp.dest(config.root.dest))
        .pipe(revNapkin({
            verbose: false
        }))
        .pipe(rev.manifest(path.join(config.root.dest, 'rev-manifest.json'), {
            merge: true
        }))
        .pipe(gulp.dest('.'));
};

module.exports = revCSSTask;
