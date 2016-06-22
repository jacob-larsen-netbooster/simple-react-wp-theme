var gulp = require( 'gulp' ),
		browserify = require( 'browserify' ),
		reactify = require( 'reactify' ),
		babelify = require( 'babelify' ),
		source = require( 'vinyl-source-stream' );


gulp.task( 'react', function() {
	return gulp.src( 'components/Index.jsx' )
		.on('error', ErrorHandler)
		.pipe( react() )
		.pipe( gulp.dest( 'js' ) );
});



var bundler = browserify( './components/Index.jsx' );
 bundler.transform( reactify )
				.transform(babelify, {presets: ["es2015", "react"]});

gulp.task( 'js', bundle );
// bundler.on( 'update', bundle );

function bundle() {
	return bundler.bundle()
		.on('error', ErrorHandler)
		.pipe( source( 'theme.js' ) )
			// .pipe( buffer() )
			// .pipe( sourcemaps.init( { loadMaps: true } ) )
			// .pipe( sourcemaps.write( './' ) )
		.pipe( gulp.dest( './' ) );
}


function ErrorHandler (error) {
  console.log(error.toString())
  this.emit('end')
}

// Watcher
gulp.task( 'watch', function() {
	//gulp.watch('components/**/*.scss', ['styles']);
	gulp.watch('components/**/*.jsx', ['js']);
});