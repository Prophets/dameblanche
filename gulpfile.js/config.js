const
    getArg = require('./lib/getArg'),
    destFolder = getArg('--build') ? './build' : './public',
    requireDir = require('require-dir');

module.exports = {
    'root': {
        'src': './src',
        'dest': destFolder
    },

    'tasks': {
        'browserSync': {},
        'static': {},
        'webpack': {},
        'css': {},
        'templates': {},
        'images': {},
        'svgsprite': {},
        'production': {},
        'eslint': {},
        'stylelint': {}
    }
};
