module.exports = {
    'root': {
        'src': './resources/assets',
        'dest': './public'
    },

    'tasks': {
        'browserSync': {
            'proxy': process.env.APP_URL,
            'files': [
                './resources/views/**/*.blade.php'
            ]
        },
        'static': {},
        'webpack': {
            'entries': {
                'app': ['./app.js']
            }
        },
        'css': {},
        'images': {},
        'svgsprite': {},
        'eslint': {},
        'stylelint': {},
        'clean': {
            'patterns': [
                './public/css',
                './public/images',
                './public/js',
                './public/rev-manifest.json'
            ]
        },
        'rev': {},
        'sizeReport': {}
    }
};
