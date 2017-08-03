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
            'babel': {
                'presets': [['es2015', { 'modules': false }]],
                'plugins': [
                    'transform-react-jsx'
                ]
            },
            'entries': {
                'app': ['./app.js']
            }
        },
        'css': {},
        'images': {},
        'svgsprite': {},
        'production': {},
        'eslint': {},
        'stylelint': {}
    }
};
