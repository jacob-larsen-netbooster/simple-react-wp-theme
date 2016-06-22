var React = require( 'react' ),
    request = require( 'superagent' );

var Menu = React.createClass({

  componentDidMount: function() {
    var menuName = this.props.menu;
    var menu,
        menuContent,
        menuId,
        menuItems,
        self = this;
    request
        .get( "/wp-json/wp-api-menus/v2/menu-locations" )
        .end( function( err, res ) {
          menu = JSON.parse( res.text );
          menuId = menu[menuName].ID;
    
          request
              .get( "/wp-json/wp-api-menus/v2/menus/"+menuId )
              .end( function( err, res ) {
                
                menuContent = JSON.parse( res.text );
                menuItems = menuContent.items;
                self.setState({ 
                  items: menuItems
                });
          });

    });
  },

  getInitialState: function() {
    return {
      items: null
    };
  },

  render: function() {
    if (this.state.items) {
      return (
        <div className="menu">
          <ul>
            {
              this.state.items.map((item) => {
                  return <MenuItems item={item} key={item.id} />
              })
            }
          </ul>
        </div>
      );
    }
    // return <div>Loading menu...</div>;
    return <div />
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