var {resolve} = require('path');
var dailyConfig = require('./daily-config.json');

var basePath = dailyConfig.currentProject;

var config = {
	entry: resolve(__dirname, basePath) + '/js/src/index.js',
	output: {
		filename: 'bundle.js',
		path: resolve(__dirname, basePath, 'js', 'dist'),
		pathinfo: true
	},
	devtool: 'eval',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['es2015', {'modules': false}]
						]
					}
				}
			}
		]
	}
};

module.exports = config;
