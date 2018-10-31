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
            'entries': {
                'app': ['./app.js']
            }
        },
        'css': {},
        'templates': {},
        'images': {},
        'svgsprite': {},
        'production': {},
        'eslint': {},
        'stylelint': {}
    }
};
