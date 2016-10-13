const
  getArg = require('./lib/getArg'),
  destFolder = getArg('--build') ? "./build" : "./public"

module.exports = {
  "root": {
    "src": "./assets",
    "dest": destFolder
  },

  "tasks": {
    "browserSync": {
      "server": {
        "baseDir": "public"
      }
    },

    "static": {
      "src": "static",
      "dest": "./"
    },

    "js": {
      "src": "js",
      "dest": "js",
      "entries": {
        "app": ["./app.js"]
      },
      "extensions": ["js", "json"],
      "babel": {
        "presets": ["es2015"],
        "plugins": []
      },
      "extractSharedJs": false
    },

    "css": {
      "src": "sass",
      "dest": "css",
      "autoprefixer": {
        "browsers": ["last 3 version"]
      },
      "sass": {
        "includePaths": [
          "./node_modules"
        ]
      },
      "extensions": ["scss", "css"]
    },

    "html": {
      "src": "templates",
      "dest": "./",
      "dataFile": "data/global.json",
      "htmlmin": {
        "collapseWhitespace": true
      },
      "extensions": ["html", "json"],
      "excludeFolders": ["layouts", "shared", "macros", "data"]
    },

    "images": {
      "src": "images",
      "dest": "images",
      "extensions": ["jpg", "png", "svg", "gif"]
    },

    "svgSprite": {
      "src": "symbols",
      "dest": "images",
      "extensions": ["svg"]
    },

    "production" : {
      "rev": true
    }
  }
}
