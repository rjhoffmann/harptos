import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core/styles';

import 'normalize.css';

import { rally } from './styles/theme';

import Calendar from './containers/calendar';

export default () => (
  <MuiThemeProvider theme={rally}>
    <Router>
      <Switch>
        <Route path="/" exact component={Calendar} />
        <Route path="/:year" component={Calendar} />
      </Switch>
    </Router>
  </MuiThemeProvider>
);