/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = (env, arg) => {
    const isDevelopment = arg.mode !== 'production';
    return {
        entry  : './src/index.js',
        output : {
            path     : path.resolve(__dirname, 'build'),
            filename : 'bundle.js',
        },
        mode    : arg.mode,
        // devtool : 'cheap-source-map',
        resolve : { extensions: ['.js', '.jsx'] },
        module  : {
            rules: [
                {
                    test    : /\.(js|jsx)$/,
                    exclude : /node_modules/,
                    use     : [
                        'babel-loader',
                        {
                            loader  : require.resolve('babel-loader'),
                            options : { plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean) },
                        },
                    ],
                },
                {
                    test : /\.less$/,
                    use  : [{ loader: 'style-loader' }, { loader: 'css-loader' }, {
                        loader  : 'less-loader',
                        options : { lessOptions: { javascriptEnabled: true } },
                    }],
                },
                {
                    test    : /\.(png|gif|jpg|svg)$/,
                    include : path.join(__dirname, 'static'),
                    loader  : 'file-loader',
                    options : { name: '/static/img/[name].[ext]' },
                },
                {
                    test    : /\.(eot|svg|ttf|woff|woff2)$/,
                    include : path.join(__dirname, 'static'),
                    loader  : 'file-loader',
                    options : { name: '/static/fonts/[name].[ext]' },
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({ template: './public/index.html' }),
            new CopyPlugin([{ from: 'static/img', to: 'static/img/[name].[ext]' }]),
            new CopyPlugin([{ from: 'static/fonts', to: 'static/fonts/[name].[ext]' }]),
            isDevelopment && new ReactRefreshWebpackPlugin(),
        ].filter(Boolean),
        devServer: {
            contentBase : path.resolve(__dirname, 'public'),
            port        : 9000,
            hot         : true,
            overlay     : { errors: true },
        },
    };
};
