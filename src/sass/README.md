# Stylesheet Assets (Sass)

## File structure

Our Sass is organized in a number of folders and files. A breakdown of what's what:

- `/app.scss` : This is the main entry file that imports everything.

- `/config` : This folder contains a number of variables files as well as functions and mixins. Important to note is that nothing in this folder will output any actual css.
    - `_functions.scss` : a set of functions to use throughout your Sass.
    - `_paths.scss` : a collection of variables for paths in your Sass
    - `_colors.scss` : a collection of variables for color usage in your Sass.
    - `_breakpoints.scss` : a collection of variables for breakpoints in your Sass.
    - `_typo.scss` : a collection of variables for type in your Sass.
    - `_base.scss` : a collection of variables for base styling in your Sass.
    - `_mixins.scss` : a set of mixins for usage in your Sass.

- `/vendor` : This folder contains all vendor related imports. [Normalize.css](https://github.com/necolas/normalize.css) is `@import`'d by default. Install every dependency from NPM.

- `/base` : This folder contains a number of variables files as well as functions and mixins. Important to note is that nothing in this folder will output any actual css.
    - `_general.scss` : contains all general styling. This is a place for general element selectors.
    - `_typo.scss` : contains some default type styling.

- `/layout` : This folder contains all layout related Sass. A layout only has positioning/visibility styling and no cosmetic styling.

- `/components` : This folder contains all component related Sass. 

- `/utilities` : This folder contains a number of files that have utility classes in them. Most of these utility classes have `!important` in them. Use these classes sparingly!


## Naming conventions

We use [BEM methodology](https://en.bem.info/methodology/).


## Tasks and Files
```
gulpfile.js/tasks/css
```
Your Sass gets run through Autoprefixer, so don't prefix! We use Scss syntax and not the indented Sass syntax. In the `production` task, output is minified with [cssnano](https://github.com/ben-eb/cssnano).

You may also provide additional [`node-sass` options](https://github.com/sass/node-sass#options) to the `sass` property in css task config in `gulpfile.js/config.json`. By default, the `includePaths` option is added, with a path to `node_modules`. [Normalize.css](https://github.com/necolas/normalize.css) is also installed and `@import`'d from node_modules by default.


```
gulpfile.js/tasks/stylelint
```
Your Sass is also linted with [Stylelint](https://github.com/stylelint/stylelint). The linting config of all [stylelint rules](http://stylelint.io/user-guide/rules/) is located in `.stylelint.rc`

By default, the linter will [failAfterError](https://github.com/olegskl/gulp-stylelint#failaftererror) when building for production. This means that the building process will not be completed as long as there are linting errors.
