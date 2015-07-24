import React from 'react';
import { AppBar } from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Fluxxor from 'fluxxor';

let FluxMixin = Fluxxor.FluxMixin( React );
let StoreWatchMixin = Fluxxor.StoreWatchMixin;

injectTapEventPlugin();

export default React.createClass({
  mixins: [FluxMixin],

  handleTouchTap(){
  },

  render() {
    return (
      <AppBar title="Naybor" 
        onLeftIconButtonTouchTap={this.handleTouchTap} 
        iconClassNameRight="muidocs-icon-navigation-expand-more" />
    );
  }
  
});
