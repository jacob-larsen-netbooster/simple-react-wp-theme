var React = require( 'react' );

var Loop = require( './loop/loop.jsx' );

/**
 * Handles getting of posts from the server
 */
var Content = React.createClass({
	render: function() {
		var singlePostID;
		// Check if we're just viewing one post, if so, pass the ID down

		// console.log(this.props.data);

		if ( this.props.data.length === 1 ) {
			singlePostID = this.props.data[0].ID;
		} else {
			singlePostID = 0;
		}
		return (
			
			// <span>Tester</span>
			<Loop data={ this.props.data } context={ this.props.bodyClass } postID={ singlePostID } />
		);
	}
});

module.exports = Content;