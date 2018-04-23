import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'components/HomePage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={() => <div><h2>About</h2></div>} />
    </Switch>
  );
};

export default Routes;