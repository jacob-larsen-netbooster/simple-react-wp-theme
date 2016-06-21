var React = require( 'react' ),
		page = require( 'page' ),
		request = require( 'superagent' );

var Content = require( './content/content.jsx' );

var Router = React.createClass({
	componentDidMount: function() {
		var self = this;

		// If Index
		page( '/', function ( ctx ) {
			var data,
					url = "/wp-json/wp/v2/posts";

			request
				.get( url )
				.end( function( err, res ) {
					data = JSON.parse( res.text );
					self.setState({ component: <Content data={ data } bodyClass="index" /> });
			});

		});

		// If Posts   ///%year%/%monthnum%/%postname%/
		page( '/:year/:month/:slug', function ( ctx ) {
			var data,
				slug = ctx.params.slug,
				url = "/wp-json/wp/v2/posts/?filter[name]=" + slug;

			request
				.get( url )
				.end( function( err, res ) {
					data = JSON.parse( res.text );
					self.setState({ component: <Content data={ data } bodyClass="post" /> });
				});
		});

		// If Normal page
		page( '/:slug', function ( ctx ) {
			var data,
				slug = ctx.params.slug,
				url = "/wp-json/wp/v2/pages/?filter[name]=" + slug;

			request
				.get( url )
				.end( function( err, res ) {
					data = JSON.parse( res.text );
					self.setState({ component: <Content data={ data } bodyClass="page" /> });
				});
		});

		/*page( '*', function ( ctx ) {
			if ( ctx.state.pageData ) {
				self.setState({ component: <Content data={ ctx.state.pageData } bodyClass="page" /> });
			} else {
				var admin = 'wp-admin';
				var slug = ctx.pathname;

				if ( slug.indexOf( admin ) > -1 ) {
					document.location.href = ctx.path;
					return;
				}

				if(slug.substr(-1) == '/') {
					slug = slug.substr(0, slug.length - 1);
				}
				var part = slug.substring(slug.lastIndexOf('/') + 1);
				var url = "/wp-json/posts/?type[]=page&filter[name]=" + part;
				request
					.get( url )
					.end( function( err, res ) {
						data = JSON.parse( res.text );
						ctx.state.pageData = data;
						ctx.save();
						self.setState({ component: <Content data={ data } bodyClass="page" /> });
					})
			}
		});*/

		page.start();
	},

	getInitialState: function() {
		return { component: <div /> };
	},

	render: function() {
		return this.state.component;
	}

});

module.exports = Router;