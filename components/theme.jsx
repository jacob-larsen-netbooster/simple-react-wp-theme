var React = require( 'react' ),
		ReactDOM = require( 'react-dom' );



var Router = require( './router.jsx' );




class Item extends React.Component {
	render(){
		return <h2>Hello Jacob</h2>;
	}
}



//ReactDOM.render(<Item />, document.getElementById('js-rendere'));
ReactDOM.render(<Router />, document.getElementById('js-rendere'));