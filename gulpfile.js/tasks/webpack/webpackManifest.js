const path = require('path');
const fs = require('fs');

module.exports = function(publicPath, dest, filename = 'rev-manifest.json') {
    return function() {
        this.hooks.done.tap('revManifest', (statistics) => {
            const stats = statistics.toJson();
            const chunks = stats.assetsByChunkName;
            const manifest = {};

            for (let key in chunks) {
                if (Object.prototype.hasOwnProperty.call(chunks, key)) {
                    const originalFilename = key + '.js';
                    manifest[path.join(publicPath, originalFilename)] = path.join(publicPath, chunks[key]);
                }
            }

            fs.writeFileSync(
                path.join(process.cwd(), dest, filename),
                JSON.stringify(manifest)
            );
        });
    };
};
