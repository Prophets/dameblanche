const gulp = require('gulp');
const path = require('path');
const rev = require('gulp-rev');
const revNapkin = require('gulp-rev-napkin');
const config = require('../../lib/configLoader');

// 1) Add md5 hashes to assets referenced by CSS and JS files
const revAssetsTask = () => {
    // Ignore files that may reference assets. We'll rev them next.
    const ignoreThese = '!' + path.join(config.root.dest, '/**/*+(css|js|json|html|ico|php|txt)');

    return gulp.src([path.join(config.root.dest, '/**/*'), ignoreThese])
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

module.exports = revAssetsTask;
