if (global.production) return;

const
    browserSync = require('browser-sync'),
    gulp = require('gulp'),
    webpack = require('webpack'),
    webpackMultiConfig = require('../lib/webpack-multi-config'),
    config = require('../config'),
    pathToUrl = require('../lib/pathToUrl'),

    browserSyncTask = () => {
        const
            webpackConfig = webpackMultiConfig('development'),
            compiler = webpack(webpackConfig),
            proxyConfig = config.tasks.browserSync.proxy || null;

        if (typeof(proxyConfig) === 'string') {
            config.tasks.browserSync.proxy = {
                target: proxyConfig
            };
        }

        const server = config.tasks.browserSync.proxy || config.tasks.browserSync.server;

        server.middleware = [
            require('webpack-dev-middleware')(compiler, {
                stats: 'errors-only',
                publicPath: pathToUrl('/', webpackConfig.output.publicPath)
            }),
            require('webpack-hot-middleware')(compiler)
        ];

        browserSync.init(config.tasks.browserSync);
    };

gulp.task('browserSync', browserSyncTask);
module.exports = browserSyncTask;
