import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'normalize.css';

import Calendar from './containers/calendar';

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Calendar} />
      <Route path="/:year" component={Calendar} />
    </Switch>
  </Router>
);