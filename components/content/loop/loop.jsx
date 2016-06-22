var React = require( 'react' ),
		page = require( 'page' );

/**
 * Internal dependencies
 */
var Hentry = require( './hentry/hentry.jsx' );

/**
 * Renders list of posts
 */
var Loop = React.createClass({

	render: function() {
		var context = this.props.context,
			showExtra = false,
			next,
			previous;
		if ( this.props.postID !== 0 && this.props.postID === this.props.data[0].id ) {
			showExtra = true;
		}

		var postNodes = this.props.data.map( function ( post ) {
			return (
				// <span>Tester</span>
				<Hentry key={post.id} id={post.id} post_class={post.post_class} link={post.link} title={post.title} date={post.date} content={post.content} featured_image={ post.featured_image } context={ context } showExtra={ showExtra } />
			);
		});

		return (
			<div>
				<div>
					{ postNodes }
				</div>
			</div>
		);
	}
});

module.exports = Loop;