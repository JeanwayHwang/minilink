const path = require('path');

const rootPath = path.resolve(__dirname, '');
module.exports = {
    entry: path.resolve(rootPath, '', 'index.js'),
    output: {
        filename: 'minilink.min.js',
        path: path.resolve(rootPath, 'dist'),
        library: 'minilink',
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    }
};
