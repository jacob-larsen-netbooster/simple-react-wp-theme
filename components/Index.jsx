var React = require( 'react' ),
    ReactDOM = require( 'react-dom' );

var Router = require( './Router.jsx' );
var Menu = require( './Menu.jsx' );
var StandardComponent = require( './Boiler.jsx' ); // <StandardComponent />

var PageWrapper = React.createClass({
  render() {
    return (
      <div>
        
        <Menu menu={'topMenu'}/>
        <Router />
      </div>
    );
  }
});


// ReactDOM.render(<Menu />, document.getElementById('js-rendere'));
ReactDOM.render(<PageWrapper />, document.getElementById('js-rendere'));