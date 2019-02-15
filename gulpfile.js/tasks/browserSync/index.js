const browserSync = require('browser-sync');
const webpack = require('webpack');
const webpackMultiConfig = require('../webpack/webpack-multi-config');
const config = require('../../lib/configLoader');
const pathToUrl = require('../../lib/pathToUrl');

const browserSyncTask = (done) => {
    const webpackConfig = webpackMultiConfig('development');
    const compiler = webpack(webpackConfig);
    const proxyConfig = config.tasks.browserSync.proxy || null;

    if (typeof(proxyConfig) === 'string') {
        config.tasks.browserSync.proxy = {
            target: proxyConfig
        };

        delete config.tasks.browserSync.server;
    }

    const server = config.tasks.browserSync.proxy || config.tasks.browserSync.server;

    server.middleware = [
        require('webpack-dev-middleware')(compiler, {
            stats: 'minimal',
            publicPath: pathToUrl('/', webpackConfig.output.publicPath)
        }),
        require('webpack-hot-middleware')(compiler)
    ];

    browserSync.init(config.tasks.browserSync);

    done();
};

module.exports = browserSyncTask;
