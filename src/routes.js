import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/app';
import Login from './modules/login'

export default(
  <Route path="/login" component={Login}/>
);