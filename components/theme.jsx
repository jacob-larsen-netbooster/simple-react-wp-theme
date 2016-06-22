var React = require( 'react' ),
    ReactDOM = require( 'react-dom' );



var Router = require( './router.jsx' );
var Menu = require( './menu.jsx' );

var PageWrapper = React.createClass({
  render: function() {
    return (
      <div>
        <Menu />
        <Router />
      </div>
    );
  }
});




// ReactDOM.render(<Menu />, document.getElementById('js-rendere'));
ReactDOM.render(<PageWrapper />, document.getElementById('js-rendere'));