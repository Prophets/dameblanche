#!/bin/bash

# install js dependencies for react recipe
npm install react react-dom
npm install --save-dev @babel/plugin-transform-react-jsx

# replace some files
cp -fi gulpfile.js/recipes/react/.babelrc .babelrc
cp -fi gulpfile.js/recipes/react/config.js gulpfile.js/config.js
cp -rfi gulpfile.js/recipes/react/src/* src/
rm -rfi src/js/modules
