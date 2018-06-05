import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default ({ year, month }) => (
  <AppBar>
    <Toolbar>
      <Typography variant="title" color="inherit">
        {`${year.year}DR - ${year.name}`}
      </Typography>
    </Toolbar>
  </AppBar>
);
