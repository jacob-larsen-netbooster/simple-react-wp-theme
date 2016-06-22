var React = require( 'react' );


class StandardComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {count: 1};
    this.tick = this.tick.bind(this);
  }
  tick() {
    this.setState({count: this.state.count + 1});
  }
  render() {
    return (
      <div onClick={this.tick}>
        Clicks: {this.state.count}
      </div>
    );
  }
}

module.exports = StandardComponent;