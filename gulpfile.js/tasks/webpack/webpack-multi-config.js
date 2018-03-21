const config = require('../../lib/configLoader');

if (!config.tasks.webpack) return;

const path = require('path');
const webpack = require('webpack');
const WebpackManifest = require('./webpackManifest');
const pathToUrl = require('../../lib/pathToUrl');

module.exports = (env) => {
    const jsSrc = path.resolve(config.root.src, config.tasks.webpack.src);
    const jsDest = path.resolve(config.root.dest, config.tasks.webpack.dest);
    const publicPath = pathToUrl(config.tasks.webpack.dest, '/');
    const rev = config.tasks.production.rev && env === 'production';
    const filenamePattern = rev ? '[name]-[chunkhash].js' : '[name].js';
    const webpackConfig = {
        context: jsSrc,
        plugins: [],
        resolve: {
            modules: [
                jsSrc,
                'node_modules'
            ],
            extensions: config.tasks.webpack.extensions.map((extension) => '.' + extension)
        },
        module: {
            rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: config.tasks.webpack.babel
            }]
        },
        mode: 'development',
        output: {
            path: path.normalize(jsDest),
            filename: filenamePattern,
            publicPath: publicPath
        }
    };

    if (env === 'development') {
        webpackConfig.devtool = 'inline-source-map';

        // Create new entries object with webpack-hot-middleware added
        for (let key in config.tasks.webpack.entries) {
            if (Object.prototype.hasOwnProperty.call(config.tasks.webpack.entries, key)) {
                const entry = config.tasks.webpack.entries[key];
                config.tasks.webpack.entries[key] = ['webpack-hot-middleware/client?&reload=true'].concat(entry);
            }
        }

        webpackConfig.plugins.push(
            new webpack.HotModuleReplacementPlugin()
        );
    }

    webpackConfig.entry = config.tasks.webpack.entries;

    if (config.tasks.webpack.extractSharedJs) {
        // Factor out common dependencies into a shared.js
        webpackConfig.plugins.push(
            new webpack.optimize.CommonsChunkPlugin({
                name: 'shared',
                filename: filenamePattern,
                minChunks: 2
            })
        );
    }

    if (env === 'production') {
        webpackConfig.mode = 'production';

        if (rev) {
            webpackConfig.plugins.push(new WebpackManifest(publicPath, config.root.dest));
        }
    }

    return webpackConfig;
};
