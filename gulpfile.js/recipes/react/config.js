module.exports = {
    'root': {
        'src': './src',
        'dest': './public'
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
        'eslint': {},
        'stylelint': {},
        'clean': {},
        'rev': {},
        'sizeReport': {}
    }
};
