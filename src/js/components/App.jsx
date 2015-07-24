import React, {PropTypes} from 'react';
import {AppCanvas, RaisedButton, Styles} from 'material-ui';
import AppBar from './AppBar.jsx';
import LeftNav from './LeftNav.jsx';
import Router from 'react-router';
import Fluxxor from 'fluxxor';

var FluxMixin = Fluxxor.FluxMixin( React );
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var RouteHandler = Router.RouteHandler;

const ThemeManager = new Styles.ThemeManager();

export default React.createClass({
  mixins: [FluxMixin],

  propTypes: {
    tasks: PropTypes.array.isRequired,
    onAddTask: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      tasks: []
    }
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render() {
    return (
      <div>
        <AppBar />
        <LeftNav />
        <RouteHandler />
      </div>
    );
  }
});
