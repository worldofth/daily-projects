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
			{test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/}
		]
	}
};

module.exports = config;
