const config = require('./configLoader');
if (!config.tasks.webpackproduction) return;

const
    path = require('path'),
    pathToUrl = require('./pathToUrl'),
    webpack = require('webpack'),
    WebpackManifest = require('./webpackManifest');

module.exports = (env) => {
    const
        jsSrc = path.resolve(config.root.src, config.tasks.webpackproduction.src),
        jsDest = path.resolve(config.root.dest, config.tasks.webpackproduction.dest),
        publicPath = pathToUrl(config.tasks.webpackproduction.dest, '/'),
        rev = config.tasks.production.rev && env === 'production',
        filenamePattern = rev ? '[name]-[hash].js' : '[name].js',
        webpackConfig = {
            context: jsSrc,
            plugins: [],
            resolve: {
                modules: [
                    jsSrc,
                    'node_modules'
                ],
                extensions: config.tasks.webpackproduction.extensions.map((extension) => '.' + extension)
            },
            module: {
                rules: [{
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: config.tasks.webpackproduction.babel
                }]
            }
        };

    if (env === 'development') {
        webpackConfig.devtool = 'inline-source-map';

        // Create new entries object with webpack-hot-middleware added
        for (let key in config.tasks.webpackproduction.entries) {
            const entry = config.tasks.webpackproduction.entries[key];
            config.tasks.webpackproduction.entries[key] = ['webpack-hot-middleware/client?&reload=true'].concat(entry);
        }

        webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    if (env !== 'test') {
        // Karma doesn't need entry points or output settings
        webpackConfig.entry = config.tasks.webpackproduction.entries;

        webpackConfig.output = {
            path: path.normalize(jsDest),
            filename: filenamePattern,
            publicPath: publicPath
        };

        if (config.tasks.webpackproduction.extractSharedJs) {
            // Factor out common dependencies into a shared.js
            webpackConfig.plugins.push(
                new webpack.optimize.CommonsChunkPlugin({
                    name: 'shared',
                    filename: filenamePattern
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
