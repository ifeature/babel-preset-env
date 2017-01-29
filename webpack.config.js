'use strict';

const path = require('path');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: './app.js',
    output: {
        filename: '[name].js',
        path: './dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    }
}
