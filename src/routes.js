import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/app';
import Login from './modules/login'
import DashBoard from './modules/dashboard'

export default(
  <Route path="/" component={App}>
    <IndexRoute component={DashBoard}/>
    <Route path="login" component={Login}/>
    <Route path="dashboard" component={DashBoard}/>
  </Route>
);