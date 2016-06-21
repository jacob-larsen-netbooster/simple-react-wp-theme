var React = require( 'react' ),
    request = require( 'superagent' );

var Menu = React.createClass({

  componentWillMount: function() {
    var self = this;
    var data,
        url = "/wp-json/wp-api-menus/v2/menus/2";
    
    request
        .get( url )
        .end( function( err, res ) {
          data = JSON.parse( res.text );
          menuItems = data.items;

          self.setState({ 
            items: menuItems
          });
    });
  },

  getInitialState: function() {
    return {
      items: [{}]
    };
  },

  render: function() {
    thelist = this.state.items;

    return (
      <div className="menu">
        <ul>
          {thelist.map((item) => {
            // console.log(item);
            return <MenuItems item={item} key={item.id} />
          })}
        </ul>
      </div>
    );
  }
});


var MenuItems = React.createClass({
  render: function() {
    return (
      <a href={this.props.item.url} data-type={this.props.item.object}>
        <li>
          {this.props.item.title}
        </li>
      </a>
    );
  }
});


module.exports = Menu;