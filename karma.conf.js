var webpackConfig = require('./webpack.config'),
	dailyConfig = require('./daily-config.json'),
	baseDir =  './' + dailyConfig.currentProject,
	fileGlob = baseDir + '/js/src/**/*.test.js';

module.exports = config => {
	config.set({
		basePath: '',
		frameworks: ['mocha', 'chai'],
		files: [fileGlob],
		reporters: ['progress'],
		preprocessors: {
			[fileGlob]: ['webpack']
		},
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: false,
		browsers: ['Chrome'],
		singleRun: true,
		concurrency: Infinity
	});
};
