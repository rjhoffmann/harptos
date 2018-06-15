import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'
import ArrowLeft from '@material-ui/icons/ArrowBack';
import ArrowRight from '@material-ui/icons/ArrowForward';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}

const Bar = ({ year, month, classes }) => (
  <AppBar position="static" color="default">
    <Toolbar className={classes.toolbar}>
      <IconButton>
        <ArrowLeft />
      </IconButton>
      <Typography variant="title" color="inherit">
        {`${year.year}DR - ${year.name}`}
      </Typography>
      <IconButton>
        <ArrowRight />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Bar);
