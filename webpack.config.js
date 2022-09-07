const path = require('path');

// webpack.config.js
module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: '/dist/',
        filename: 'main.js',
    },
    watch: true,
    devServer: {
        static: {
            directory: path.join(__dirname, ''),
        },
        compress: true,
        port: 9000,
    }
};