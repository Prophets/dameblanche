# Let's disagree to agree

The code in this project is to be used as the base for "every" project.

The purpose of this project is that we reach a singular workflow for our FE projects.

```bash
git clone https://git.prophets.be/playground/lets-disagree-to-agree.git MyApp && cd MyApp
rm -rf .git && git init && git add -A && git commit -m "initial commit"
yarn
yarn start
```

Features | Tools Used
------ | -----
**CSS** | [Sass](http://sass-lang.com/) ([Libsass](http://sass-lang.com/libsass) via [node-sass](https://github.com/sass/node-sass)), [Autoprefixer](https://github.com/postcss/autoprefixer), Source Maps
**JavaScript** | [Babel](http://babeljs.io/), [Webpack](http://webpack.github.io/)
**HTML** | [Nunjucks](https://mozilla.github.io/nunjucks/), [gulp-data](https://github.com/colynb/gulp-data)
**Images** | Compression with [imagemin](https://www.npmjs.com/package/gulp-imagemin)
**Symbols** | Auto-generated [SVG Sprites](https://github.com/w0rm/gulp-svgstore)
**Live Updating** | [BrowserSync](http://www.browsersync.io/), [Webpack Dev Middleware](https://github.com/webpack/webpack-dev-middleware), [Webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware)
**Production Builds** | JS and CSS are [uglified](https://github.com/terinjokes/gulp-uglify) and [minified](http://cssnano.co/), [filename md5 hashing (reving)](https://github.com/sindresorhus/gulp-rev), [file size reporting](https://github.com/jaysalvat/gulp-sizereport)

## Usage
Make sure Node is installed. We recommend using [NVM](https://github.com/creationix/nvm) to manage versions. 

This has been tested on Node `6.7.0`, and should work on newer versions as well. [File an issue](https://git.prophets.be/playground/lets-disagree-to-agree/issues) if it doesn't!

### Install Dependencies
```bash
yarn
```

### Run development tasks:
```bash
yarn run start
```
Alias: `yarn start`

This is where the magic happens. The perfect front-end workflow. This runs the default gulp task, which starts compiling, watching, and live updating all our files as we change them. BrowserSync will start a server on port 3000, or do whatever you've configured it to do. You'll be able to see live changes in all connected browsers. Don't forget about the additional BrowserSync tools available on port 3001!

Why run this as an npm script? NPM scripts add ./node_modules/bin to the path when run, using the packages version installed with this project, rather than a globally installed ones. Never `npm install -g` and get into mis-matched version issues again. These scripts are defined in the `scripts` property of `package.json`.

To run any other existing task, simply add the task name after the `yarn run start` command. Example:

`yarn run start eslint`

### Build production files:
```bash
yarn run build
```

This will compile revisioned and compressed files to `./build`. 

## Configuration
Directory and top level settings are convienently exposed in `gulpfile.js/config.json`. Use this file to update paths to match the directory structure of your project, and to adjust task options.

All task configuration objects have `src` and `dest` directories specfied. These are relative to `root.src` and `root.dest` respectively. Each configuration also has an extensions array. This is used for file watching, and file deleting/replacing.

**If there is a feature you do not wish to use on your project, simply delete the configuration, and the task will be skipped.**

Not all configuration is exposed here. For advanced task configuration, you can always edit the tasks themselves in `gulpfile.js/tasks`.


## Asset Details
A `README.md` with details about each asset type are available in their respective folders in the `src` directory:

- [JavaScript](src/js)
- [Stylesheets](src/sass)
- [HTML](src/templates)
- [Images](src/images)
- [SVG Sprite](src/symbols)
- [Static Files (favicons, app icons, etc.)](src/static)

This will compile revisioned and compressed files to `./build`. 

## Helpful tools

### Sublime packages

#### Editor Config
> [EditorConfig](http://editorconfig.org) helps developers maintain consistent coding styles between different editors

[Install the sublime package](https://github.com/sindresorhus/editorconfig-sublime#install) so Sublime Text uses the settings in .editorconfig

#### Sublime Linter

To have ESLint and Stylelint warning- and error output in Sublime Text, use the awesome [Sublime Linter](http://sublimelinter.readthedocs.io/en/latest/index.html)
- [Install the SublimeLinter framework](http://sublimelinter.readthedocs.io/en/latest/installation.html#installing-via-pc)
- [Install the SublimeLinter-eslint](https://github.com/roadhump/SublimeLinter-eslint#plugin-installation)
- [Install the SublimeLinter-stylelint](https://github.com/kungfusheep/SublimeLinter-contrib-stylelint#plugin-installation)

#### Nunjucks syntax definitions

[Nunjucks syntax for Sublime Text](https://packagecontrol.io/packages/Nunjucks%20Syntax) will make sure you have the right syntax highlighting

**There's a small issue though**: [the package doesn't place the `.tmlanguage` in the correct folder](https://github.com/mogga/sublime-nunjucks/issues/6)
The fix is simple enough though: 
- ```cd ~/Library/Application\ Support/Sublime\ Text\ 3/Packages```
- ```mkdir "Nunjucks Syntax" && cd Nunjucks\ Syntax/```
- paste [this file](https://raw.githubusercontent.com/mogga/sublime-nunjucks/master/Nunjucks.tmLanguage) there
- open a .njk file (for example: src/templates/index.njk), and choose "open all with current extension as" > "Nunjucks" from the syntax menu in the bottom right corner of Sublime Text
