// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const CopyPlugin = require('copy-webpack-plugin');

// eslint-disable-next-line no-undef
module.exports = {
    entry: {
        app: './src/popup/app.jsx',
        pomodoroTimer: './src/contentScript/contentScript.jsx',
        background: [
            './src/backgroundScripts/background.js',
        ],
    },
    output: {
        // eslint-disable-next-line no-undef
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/popup/index.html',
            filename: 'index.html',
            excludeChunks: ['background', 'content', 'pomodoroTimer']
        }),
        new CopyPlugin({
            patterns: [
                { from: 'public' },
            ],
        }),
        new HtmlWebpackPlugin({
            template: './src/contentScript/contentScript.html',
            filename: 'contentScript.html',
            excludeChunks: ['background', 'content', 'app']
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ],
                    }
                }
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
        ],
    },
};