# gulp-check-filesize
> check-filesize plugin for [gulp](https://github.com/wearefractal/gulp)

This plugin logs the size of a given file. If you set a filesize limit, it logs a warning if the limit is exceeded.

## Usage

First, install `gulp-check-filesize` as a development dependency:

```shell
npm install --save-dev gulp-check-filesize
```

Then, add it to your `gulpfile.js`:

```javascript
var checkFilesize = require("gulp-check-filesize");

gulp.src("css/**/*.css")
	.pipe(checkFilesize()
	.pipe(gulp.dest("./dist"));
```

This produce a log that will look something like this:

```bash
$ gulp css
[19:30:55] Using gulpfile /var/www/project/gulpfile.js
[19:30:57] Starting 'css'...
[19:30:57] Size of main.css : 16.4 kB
[19:30:57] Finished 'css' after 502 ms

```

### Setting filesize limit

You can specify a maximum filesize (in Byte). If the filesize is exceeded, the plugin will log a warning:

```javascript
var checkFilesize = require("gulp-check-filesize");

gulp.src("css/**/*.css")
    .pipe(checkFilesize(16384) // 16384 === 16kb
    .pipe(gulp.dest("./dist"));
```

```bash
$ gulp css
[19:30:55] Using gulpfile /var/www/project/gulpfile.js
[19:30:57] Starting 'css'...
[19:30:57] WARNING: cloudBackup.css exceeded filesize limit of 16 kB: 16.4 kB
[19:30:57] Finished 'css' after 502 ms
```

## API

### checkFilesize(filesizeLimit)

#### filesizeLimit [optional]
Type: `Number`  
Default: undefined

Your filesize limit in Bytes

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
