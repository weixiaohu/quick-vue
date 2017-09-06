const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');
const devPort = require('../config/port').devPort;
const mockPort = require('../config/port').mockPort;

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: [path.join(__dirname, "../dist")],
        port: devPort,
        proxy: {
            "/api": `http://localhost:${mockPort}`
        }
    }
})