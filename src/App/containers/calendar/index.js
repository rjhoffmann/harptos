import React from 'react';
import _find from 'lodash/find';

import { MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { rally } from '../../styles/theme';

import calendar from '../../data/calendar';
import years from '../../data/years';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      year: _find(years, { year: 1493 }),
      months: calendar.months,
    };
  }

  render() {
    const { year, name: yearName } = this.state.year;

    return (
      <MuiThemeProvider theme={rally}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              {`${year}DR - ${yearName}`}
            </Typography>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    )
  }
};

export default Calendar;
