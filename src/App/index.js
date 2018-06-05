import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Calendar from './containers/calendar';

export default () => (
  <Router>
    <Switch>
      <Route path="/:year?/:month?" component={Calendar} />
    </Switch>
  </Router>
);