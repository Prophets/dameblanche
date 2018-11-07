const config = require('../../lib/configLoader');

if (!config.tasks.webpack) return;

const gulp = require('gulp');
const webpack = require('webpack');
const webpackConfig = require('./webpack-multi-config');
const logger = require('./webpackProductionBuildLogger');

const webpackProductionTask = (callback) => {
    const webpackConfigProduction = webpackConfig('production');

    webpack(webpackConfigProduction, (err, stats) => {
        logger(err, stats);
        callback();
    });
};

gulp.task('webpack:production', webpackProductionTask);

module.exports = webpackProductionTask;
