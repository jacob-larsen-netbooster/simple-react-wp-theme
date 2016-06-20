var gulp = require( 'gulp' ),
		browserify = require( 'browserify' ),
		reactify = require( 'reactify' ),
		source = require( 'vinyl-source-stream' );


gulp.task( 'react', function() {
	return gulp.src( 'components/theme.jsx' )
		.pipe( react() )
		.pipe( gulp.dest( 'js' ) );
});

var bundler = browserify( './components/theme.jsx' );
bundler.transform( reactify );

gulp.task( 'js', bundle );
// bundler.on( 'update', bundle );

function bundle() {
	return bundler.bundle()
		// .on( 'error', gutil.log.bind( gutil, 'Browserify Error' ) )
		.pipe( source( 'theme.js' ) )
			// .pipe( buffer() )
			// .pipe( sourcemaps.init( { loadMaps: true } ) )
			// .pipe( sourcemaps.write( './' ) )
		.pipe( gulp.dest( './' ) );
}




// Watcher
gulp.task( 'watch', function() {
	//gulp.watch('components/**/*.scss', ['styles']);
	gulp.watch('components/**/*.jsx', ['js']);
});