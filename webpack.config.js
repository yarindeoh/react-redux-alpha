'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    return {
        performance: { hints: false },
        mode: argv.mode,
        entry: path.resolve(__dirname, 'src/index.js'),
        devtool: argv.mode === 'development' ? 'eval-source-map' : 'none',
        resolve: {
            extensions: ['.js', '.jsx'],
            alias: {
                movieList: path.resolve(__dirname, 'src/MovieList'),
                services: path.resolve(__dirname, 'src/services')
            }
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: [
                        {
                            loader: 'babel-loader'
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: path.resolve(__dirname, 'index.html')
            })
        ],
        devServer: {
            compress: true,
            port: 9000
        }
    };
};
