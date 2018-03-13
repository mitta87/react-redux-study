const path = require("path");

const PATHS = {
    app: path.join(__dirname, "src", "index.js"),
    build: path.join(__dirname, "dist")
};


module.exports = {
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
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader"
                }
            }]
    }
};