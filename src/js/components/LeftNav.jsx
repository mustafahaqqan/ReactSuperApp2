import React from 'react';
import {LeftNav, MenuItem} from 'material-ui';
import Fluxxor from 'fluxxor';

let FluxMixin = Fluxxor.FluxMixin( React );
let StoreWatchMixin = Fluxxor.StoreWatchMixin;

var menuItems = [
  { route: 'get-started', text: 'Get Started' },
  { route: 'customization', text: 'Customization' },
  { route: 'components', text: 'Components' },
  { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
  { 
     type: MenuItem.Types.LINK, 
     payload: 'https://github.com/callemall/material-ui', 
     text: 'GitHub' 
  },
  { 
     text: 'Disabled', 
     disabled: true 
  },
  { 
     type: MenuItem.Types.LINK, 
     payload: 'https://www.google.com', 
     text: 'Disabled Link', 
     disabled: true 
  },
];

export default React.createClass({
  mixins: [FluxMixin],

  getStyles: function() {
    var styles = {
      root: {
        top: '65px'
        // position: 'static',
        // width: '100%'
      }
    };
    return styles;
  },

  componentDidMount(){
    this.onEventListener();
  },

  onEventListener(){
   
  },

  render() {
    let styles = this.getStyles();
    return (
      <LeftNav ref="leftNav" style={styles.root} docked={false} menuItems={menuItems} />
    );
  }
});
