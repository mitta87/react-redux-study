const path = require("path");

const PATHS = {
    app: path.join(__dirname, "src", "app.js"),
    build: path.join(__dirname, "build")
};


module.exports = function() {
   return {
       entry: {
           app: PATHS.app
       },
       output: {
           path: PATHS.build,
           filename: '[name].js'
       },
       devtool: 'inline-source-map',
       resolve: {
           extensions: ['.js']
       }
   }
};