var React = require( 'react' ),
    request = require( 'superagent' );

// var getTopMenuId 





var Menu = React.createClass({
  getInitialState: function() {
    return {
      menuId: 0,
      items: [{}]
    };
  },

  componentWillMount: function() {

    var menuName = this.props.menu;

    var data,
        menuId,
        test,
        self = this;
    request
        .get( "/wp-json/wp-api-menus/v2/menu-locations" )
        .end( function( err, res ) {
          data = JSON.parse( res.text );
          menuId = data[menuName].ID;

          self.setState({ 
            menuId: menuId
          });

    });
  },

 
  componentDidMount: function() {

    var self = this,
        topMenuId = 3,
        data,
        menuItems;

        console.log(self);
        console.log(self.state);
    
    request
        .get( "/wp-json/wp-api-menus/v2/menus/"+topMenuId )
        .end( function( err, res ) {
          data = JSON.parse( res.text );
          menuItems = data.items;

          self.setState({ 
            items: menuItems
          });
    });


  },

  render: function() {
    var thelist = this.state.items;

    return (
      <div className="menu">
        <ul>
          {
            thelist.map((item) => {
                return <MenuItems item={item} key={item.id} />
            })
          }
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