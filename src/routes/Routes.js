import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Pokemon from '../components/Pokemon';
import About from '../components/About';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/pokemon/:pokeName" component={Pokemon} />
      <Route exact path="/about" component={About} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
