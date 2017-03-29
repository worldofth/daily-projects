var gulp = require('gulp'),
	sourcemaps = require('gulp-sourcemaps'),
	rename = require('gulp-rename'),
	browserSync = require('browser-sync').create(),
	reload = function(done){
		browserSync.reload();
		if(done){
			done();
		}
	},
	dailyConfig = require('./daily-config.json'),
	baseDir =  './' + dailyConfig.currentProject;

// ====================
// css - sass
// ====================
var sass = require('gulp-sass');

function buildSass(){
	return gulp.src(baseDir + '/css/main.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
			//outputStyle: 'compressed'
		}).on('error', console.log))
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
var webpack = require('webpack');
var gulpWebpack = require('gulp-webpack');

function buildJS(){
	return gulp.src(baseDir + '/js/src/index.js')
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
// html - mustache
// ====================
var musatche = require('gulp-mustache');

function buildHtml(){
	return gulp.src(baseDir + '/html/index.mustache')
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
