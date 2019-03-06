const { resolve, join } = require('path');
const FriendlyErrorsWebpackPlugin = require( "friendly-errors-webpack-plugin" );
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	context: join(__dirname, 'src'),
	entry: {
		table: './js/Table/index.js',
		controller: './js/Controller/index.js'
 },
	devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'eval',
	output: {
		path: resolve(__dirname, 'build'),
		filename: '[name].js',
		publicPath: '/'
	},
	resolve: {
		modules: [
			resolve('./src'),
			"node_modules",
		]
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				use: [
					{
						loader: 'babel-loader'
					}
				],
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
				use: ['url-loader']
			},
		],
	},
	plugins: [
		new FriendlyErrorsWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		})
	],
};
