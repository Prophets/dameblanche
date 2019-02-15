const gulp = require('gulp');

module.exports = gulp.series(
    // 1) Add md5 hashes to assets referenced by CSS and JS files
    require('./rev-assets'),
    // 2) Update asset references (images, fonts, etc) with reved filenames in compiled css + js
    require('./rev-update-references'),
    // 3) Rev and compress CSS and JS files (this is done after assets, so that if a referenced asset hash changes, the parent hash will change as well
    require('./rev-css'),
    // 4) Update asset references in HTML
    require('./rev-update-html'),
);
