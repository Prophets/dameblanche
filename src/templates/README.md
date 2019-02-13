# HTML Assets
If you are using this project with another platform that handles markup, delete this folder and the `templates` config in `gulpfile.js/config.js`, and don't forget to [configure BrowserSync to watch your platform's template files](https://browsersync.io/docs/options/#option-files) for changes!

If you are using Dameblanche as a standalone static site builder, this is where your markup goes. We've provided a few [Nunjucks](https://mozilla.github.io/nunjucks/) folders and files to get you started:

- `data:` contains a `global.json` file where you can put data that will be made accessible to your templates
- `layouts:` A basic Nunjucks layout file
- `macros:` Contains a helpers file with an `icon` macro for use with the `svgsprite` task.
- `index.njk:` Hello world! Uses `layouts/default.njk`.

## Tasks and Files
```
gulpfile.js/tasks/templates
```
Robust templating with [Nunjucks](https://mozilla.github.io/nunjucks/). Nunjucks is nearly identical in syntax to Twig (PHP), and replaces Swig (and Twig-like js templating language), which is no longer maintained.

A global data file is set up at [src/templates/data/global.json](src/html/data/global.json), is read in by the `templates` task, and exposes the properties to your html templates. For example {{title}} is used in the `layouts/default.njk` layout.

## Nunjucks syntax

Check the [helpful tools section](https://github.com/Prophets/dameblanche#nunjucks-syntax-definitions) in the main README on how to install Nunjucks syntax in sublime
