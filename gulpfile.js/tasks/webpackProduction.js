const config = require('../config');
if (!config.tasks.js) return;

const
    webpackConfig = require('../lib/webpack-multi-config')('production'),
    gulp = require('gulp'),
    logger = require('../lib/compileLogger'),
    webpack = require('webpack'),
    webpackProductionTask = (callback) => {
        webpack(webpackConfig, (err, stats) => {
            logger(err, stats);
            callback();
        });
    };

gulp.task('webpack:production', webpackProductionTask);
module.exports = webpackProductionTask;
