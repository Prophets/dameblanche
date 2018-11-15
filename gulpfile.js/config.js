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
        'production': {},
        'eslint': {},
        'stylelint': {},
        'clean': {}
    }
};
