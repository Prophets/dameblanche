const config = require('../../lib/configLoader');
if (!config.tasks.webpack) return;

const
    webpackConfig = require('./webpack-multi-config')('production'),
    gulp = require('gulp'),
    logger = require('./compileLogger'),
    webpack = require('webpack'),
    webpackProductionTask = (callback) => {
        webpack(webpackConfig, (err, stats) => {
            logger(err, stats);
            callback();
        });
    };

gulp.task('webpack:production', webpackProductionTask);
module.exports = webpackProductionTask;
