const { join } = require('path');
const FriendlyErrorsWebpackPlugin = require( "friendly-errors-webpack-plugin" );
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
	entry: {
		table: ['./src/js/Table/index.js'],
		controller: ['./src/js/Controller/index.js']
 },
	output: {
		path: join(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].js'
	},
	target: 'web',
	devtool: 'source-map',
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache:  true,
				parallel: true,
				sourceMap: true,
			}),
			new OptimizeCSSAssetsPlugin({})
		]
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
					MiniCssExtractPlugin.loader,
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
		new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
	],
};
