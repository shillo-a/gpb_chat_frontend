const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');

const devConfig = {
    mode: "development",
    devServer: {                      
        historyApiFallback: true
    },
}

module.exports = merge(commonConfig, devConfig)