const getArg = require('./lib/getArg');
const destFolder = getArg('--build') ? './build' : './public';

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
