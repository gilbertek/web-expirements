/**
 * Gulp Task to compile and build frontend client code
 * @type object Gulp
 * @todo: npm install gulp gulp-sass gulp-autoprefixer gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-clean gulp-notify gulp-livereload gulp-cache gulp-size --save-dev
 */

var gulp    = require('gulp'),
	jshint  = require('gulp-jshint'),
	clean   = require('gulp-clean'),
	sass    = require('gulp-sass'),
	prefixr = require('gulp-autoprefixer'),
	uglify  = require('gulp-uglify'),
	concat  = require('gulp-concat'),
	reload  = require('gulp-livereload'),
	cache   = require('gulp-cache'),
	imgmin  = require('gulp-imagemin'),
	util    = require('gulp-util'),
	notify  = require('gulp-notify'),
	size    = require('gulp-size'),

	// Debugging required
	filelog = require('gulp-filelog'),
	debug   = require('gulp-debug'),

	// Required for phpunit task
	exec    = require('child_process').exec,
	sys     = require('sys');