const config = require('../../lib/configLoader');
if (!config.tasks.webpack) return;

const
    path = require('path'),
    pathToUrl = require('../../lib/pathToUrl'),
    webpack = require('webpack'),
    WebpackManifest = require('./webpackManifest');

module.exports = (env) => {
    const
        jsSrc = path.resolve(config.root.src, config.tasks.webpack.src),
        jsDest = path.resolve(config.root.dest, config.tasks.webpack.dest),
        publicPath = pathToUrl(config.tasks.webpack.dest, '/'),
        rev = config.tasks.production.rev && env === 'production',
        filenamePattern = rev ? '[name]-[chunkhash].js' : '[name].js',
        webpackConfig = {
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
            }
        };

    if (env === 'development') {
        webpackConfig.devtool = 'inline-source-map';

        // Create new entries object with webpack-hot-middleware added
        for (let key in config.tasks.webpack.entries) {
            const entry = config.tasks.webpack.entries[key];
            config.tasks.webpack.entries[key] = ['webpack-hot-middleware/client?&reload=true'].concat(entry);
        }

        webpackConfig.plugins.push(
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('development')
                }
            }),
            new webpack.HotModuleReplacementPlugin()
        );
    }

    if (env !== 'test') {
        // Karma doesn't need entry points or output settings
        webpackConfig.entry = config.tasks.webpack.entries;

        webpackConfig.output = {
            path: path.normalize(jsDest),
            filename: filenamePattern,
            publicPath: publicPath
        };

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
    }

    if (env === 'production') {
        if (rev) {
            webpackConfig.plugins.push(new WebpackManifest(publicPath, config.root.dest));
        }
        webpackConfig.plugins.push(
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            }),
            new webpack.optimize.UglifyJsPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        );
    }

    return webpackConfig;
};
