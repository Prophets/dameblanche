const
    path = require('path'),
    fs = require('fs');

module.exports = function(publicPath, dest, filename = 'rev-manifest.json') {
    return function() {
        this.plugin('done', (statistics) => {
            const
                stats = statistics.toJson(),
                chunks = stats.assetsByChunkName,
                manifest = {};

            for (let key in chunks) {
                const originalFilename = key + '.js';
                manifest[path.join(publicPath, originalFilename)] = path.join(publicPath, chunks[key]);
            }

            fs.writeFileSync(
                path.join(process.cwd(), dest, filename),
                JSON.stringify(manifest)
            );
        });
    };
};
