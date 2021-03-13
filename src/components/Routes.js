import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Animal from './Animal';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/animal" component={Animal} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
