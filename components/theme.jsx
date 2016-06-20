var React = require( 'react' ),
		ReactDOM = require( 'react-dom' );

class Item extends React.Component {
	render(){
		return <h2>Hello Jacob</h2>;
	}
}



ReactDOM.render(<Item />, document.getElementById('js-rendere'));