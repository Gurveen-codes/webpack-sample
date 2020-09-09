const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: ''
	},
	devtool: 'cheap-module-eval-source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node-modules/'
			},
			{
				test: /\.css$/,
				exclude: '/node-modules/',
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: {
								localIdentName: '[name]__[local]__[hash:base64:5]'
							}
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								ident: 'postcss',
								plugins: () => [ autoprefixer() ]
							}
						}
					}
				]
			},
			{
				test: /\.(gif|jpe?g|png)$/,
				loader: 'url-loader?limit=8000&name=images/[name].[ext]'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/src/index.html',
			filename: 'index.html',
			inject: 'body'
		})
	]
};
