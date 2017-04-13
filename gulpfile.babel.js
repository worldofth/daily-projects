import gulp from 'gulp';
import plumber from 'gulp-plumber';
import gutil from 'gulp-util';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';
import browserSyncObj from 'browser-sync';
import sass from 'gulp-sass';
import webpack from 'webpack';
import gulpWebpack from 'gulp-webpack';
import musatche from 'gulp-mustache';
import {Server as karmaServer} from 'karma';
import {resolve as resolvePath} from 'path';
import {parseConfig as karmaParseConfig} from 'karma/lib/config';
import chalk from 'chalk';

import dailyConfig from './daily-config';

const browserSync = browserSyncObj.create(),
	reload = done => (browserSync.reload(), done && done()),
	baseDir = dailyConfig.currentProject;

function map_error(err){
	if(err.fileName){
		gutil.log(chalk.red(err.name)
		+ ': '
		+ chalk.yellow(err.fileName.replace(__dirname, ''))
		+ ': '
		+ 'Line '
		+ chalk.magenta(err.lineNumber)
		+ ' & Column'
		+ chalk.magenta(err.columnNumber || err.column)
		+ ': '
		+ chalk.blue(err.description));
	}else{
		gutil.log(chalk.red(err.name) + ': ' + chalk.yellow(err.message));
	}
}

// ====================
// css - sass
// ====================
function buildSass(){
	return gulp.src(baseDir + '/css/main.scss')
		.pipe(plumber({errorHandler: map_error}))
		.pipe(sourcemaps.init())
		.pipe(sass({
			//outputStyle: 'compressed'
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(baseDir + '/css'))
		.pipe(browserSync.stream({match: '**/*.css'}));
}

function watchSass(){
	gulp.watch(baseDir + '/css/**/*.scss', { awaitWriteFinish: true })
	.on('change',  gulp.series(buildSass))
	.on('change', function(path){
		console.log('File ' + path + ' was changed');
	});
}

exports['build:sass'] = buildSass;
exports['watch:sass'] = watchSass;

// ====================
// js - webpack
// ====================
function buildJS(){
	return gulp.src(baseDir + '/js/src/index.js')
		.pipe(plumber({errorHandler: map_error}))
		.pipe(gulpWebpack(require('./webpack.config.js'), webpack))
		.pipe(gulp.dest(baseDir + '/js/dist/'));
}

function watchJS(){
	gulp.watch(baseDir + '/js/src/**/*.js', { awaitWriteFinish: true }, gulp.series(buildJS, reload))
	.on('change', function(path){
		console.log('File ' + path + ' was changed');
	})
	.on('add', function(path){
		console.log('File ' + path + ' was added');
	});
}

exports['build:js'] = buildJS;
exports['watch:js'] = watchJS;

// ====================
// js - test
// ====================
function runKarma(configFilePath, options, cb){
	configFilePath = resolvePath(configFilePath);

	var config = karmaParseConfig(configFilePath, {});

	Object.keys(options).forEach(key => config[key] = options[key]);

	karmaServer.start(config, exitCode => {
		console.log('Karma has exited with '+ exitCode);
		cb();
		process.exit(exitCode);
	});
}

function testKarmaJS(done){
	runKarma('karma.conf.js', {
		singleRun: true,
		autoWatch: false
	}, done);
}

function watchKarmaTestJS(done){
	runKarma('karma.conf.js', {
		singleRun: false,
		autoWatch: true
	}, done);
}

exports['test'] = testKarmaJS;
exports['watch:test'] = watchKarmaTestJS;

// ====================
// html - mustache
// ====================
function buildHtml(){
	return gulp.src(baseDir + '/html/index.mustache')
		.pipe(plumber({errorHandler: map_error}))
		.pipe(musatche(baseDir + '/html/data.json'))
		.pipe(rename('index.html'))
		.pipe(gulp.dest(baseDir + '/'));
}

function watchHtml(){
	gulp.watch([baseDir + '/html/**/*.mustache', baseDir + '/html/data.json'], { awaitWriteFinish: true }, gulp.series(buildHtml, reload))
	.on('change', function(path){
		console.log('File ' + path + ' was changed');
	})
	.on('add', function(path){
		console.log('File ' + path + ' was added');
	});
}

exports['build:html'] = buildHtml;
exports['watch:html'] = watchHtml;

// ====================
// server
// ====================

function serv(){
	browserSync.init({
		server: {
			baseDir: baseDir + '/'
		}
	});
}

exports['serv'] = serv;

var build = gulp.parallel(buildSass, buildJS, buildHtml);
var watch = gulp.parallel(watchSass, watchJS, watchHtml);

exports['build'] = build;
exports['watch'] = watch;

gulp.task('default', gulp.series(build, gulp.parallel(watch, serv)));
