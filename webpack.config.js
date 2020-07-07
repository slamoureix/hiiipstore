
const path = require('path');
const argv = require('minimist')(process.argv.slice(2));

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const isProd = argv.mode === 'production';

module.exports = [{
    devtool: isProd ? false : 'inline-source-map',
    optimization: {
        minimizer: isProd ? [new TerserJSPlugin({extractComments: false,}), new OptimizeCSSAssetsPlugin({})] : [],
        splitChunks: {}
    },
    entry: {
        app: [path.resolve('src/js/main.js'),
            path.resolve('src/scss/main.scss')],
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve('dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader?url=false",
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [require('autoprefixer')()],
                        }
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
                exclude: /(icons|images)/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ["@babel/preset-env", {targets: {browsers:["last 2 versions"]}}]
                        ]
                    }
                }
            }
        ]
    },
}];
