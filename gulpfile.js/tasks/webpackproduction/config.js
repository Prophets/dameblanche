module.exports = {
    'src': 'js',
    'dest': 'js',
    'entries': {
        'app': ['./app.js']
    },
    'extensions': ['js', 'json'],
    'babel': {
        'presets': [['es2015', { 'modules': false }]],
        'plugins': []
    },
    'extractSharedJs': false
};
