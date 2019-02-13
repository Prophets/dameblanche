module.exports = {
    'root': {
        'src': './src',
        'dest': './public'
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
        'eslint': {},
        'stylelint': {},
        'clean': {},
        'rev': {},
        'sizeReport': {}
    }
};
