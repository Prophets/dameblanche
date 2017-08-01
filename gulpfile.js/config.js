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
        'webpack': {
            'entries': {
                'app': ['./app.js']
            }
        },
        'css': {},
        'nunjucks': {},
        'images': {},
        'svgsprite': {},
        'production': {},
        'eslint': {},
        'stylelint': {}
    }
};
