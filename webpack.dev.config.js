const { join } = require('path');
const FriendlyErrorsWebpackPlugin = require( "friendly-errors-webpack-plugin" );
const webpack = require('webpack')

module.exports = {
	entry: {
		table: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000', './src/js/Table/index.js'],
		controller: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000', './src/js/Controller/index.js']
 },
	output: {
		path: join(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
			},
			{
				test: /\.scss?$/,
				exclude: /(node_modules)/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				loader: 'file-loader',
				options: {
          name: '[name].[ext]',
        },
			},
			{
				test: /\.(jpg|png|gif|svg|pdf|ico)$/,
				use: ['file-loader']
			},
		],
	},
	plugins: [
		new FriendlyErrorsWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
	],
};
