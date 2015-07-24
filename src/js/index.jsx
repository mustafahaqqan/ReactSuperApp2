import React from 'react';
import Router from 'react-router';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';
import App from './components/App.jsx';
import Main from './components/Main.jsx';
import UserStore from './stores/UserStore';
import Actions from './Actions';
import Fluxxor from 'fluxxor';

var routes = (
  <Route handler={App} >
    <DefaultRoute name="main" handler={Main} />
  </Route>
);

var Stores = {
  UserStore: new UserStore()
}

var flux = new Fluxxor.Flux( Stores, Actions );

Router.run(routes, Router.HashLocation, function (Handler) {
  React.render(
	<Handler flux={flux} />, 
  	document.getElementById('main')
  );
});
