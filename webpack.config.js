const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { webpack } = require('webpack')
const { ProvidePlugin, DefinePlugin } = require('webpack')
const { config } = require('dotenv')
config()
const PORT = (process.env.PORT) + '0' || 3000
module.exports = {
    entry: './front/index.js',
    devServer: {
        port: PORT,
        historyApiFallback: true
    },
    output: {
        path: path.join(__dirname, 'build/static'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules',
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(woff2|ttf)/,
                use: [
                    'url-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './assets/index.html'
        }),
        new DefinePlugin({
            'process.env': JSON.stringify(process.env)
        })
    ]
}