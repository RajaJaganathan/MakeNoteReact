var path = require('path');
var webpack = require('webpack');

module.exports = {
    debug: true,
    devtool: 'cheap-module-eval-source-map',
    noInfo: false,
    entry: './src/index.js',
    output: { path: __dirname, filename: 'bundle.js' },
    contentBase: 'src',
    module: {
        loaders: [{
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel-loader'] },
            { test: /\.css$/, loader: "style-loader!css-loader" }, { test: /\.css$/, loader: "style-loader!css-loader" }, {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            }, {
                test: /\.jpg$/,
                loader: "file-loader"
            }, {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            }
        ]
    }
};