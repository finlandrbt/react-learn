//var webpack = require('webpack');
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    entry: __dirname + '/app/index.js',
    output: {
        path: __dirname + '/output',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel'}
        ]
    },
    devServer: {
        contentBase: "./output",
        colors: true,
        historyApiFallback: true,
        inline: true
    }
}
