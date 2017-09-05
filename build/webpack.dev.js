const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
console.log(__dirname)
module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: [path.join(__dirname, "../dist")]
    }
})