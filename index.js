var map = require('map-stream'),
	gutil = require('gulp-util'),
	getFileSize = require('filesize');

module.exports = function(fileSizeLimit){
	'use strict';

	return map(function(file,callback){
		var filenameShort = file.path.split(/\/|\\/).pop(),
			//Check if file.stat exists (gulp.concat removes it for example)
			filesize = file.stat && file.stat.size ? file.stat.size : Buffer.byteLength(String(file.contents)),
			formattedFilesize = getFileSize(filesize);

		if (typeof fileSizeLimit !== 'undefined' && filesize > fileSizeLimit) {
			var message = gutil.colors.bold.red('WARNING:') + ' ' + gutil.colors.cyan(filenameShort) +
				' exceeded filesize limit of ' + getFileSize(fileSizeLimit) + ': ' + gutil.colors.red(formattedFilesize);
			gutil.log(message);
		} else {
			gutil.log('Size of ' + gutil.colors.cyan(filenameShort) + ': ' + gutil.colors.magenta(formattedFilesize));
		}

		callback(null,file);
	});
};
